"""Validate public Maestro Forge metadata and launch claims without executing community code."""
from __future__ import annotations

from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
import json
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "docs" / "data"
ERRORS: list[str] = []


def load(name: str):
    try:
        return json.loads((DATA / name).read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as exc:
        ERRORS.append(f"{name}: {exc}")
        return []


def require(condition: bool, message: str):
    if not condition:
        ERRORS.append(message)


def validate_challenges():
    challenges = load("challenges.json")
    required = {"id", "version", "difficulty", "category", "title", "summary", "skills", "languages", "status", "author", "path"}
    seen = set()
    for index, item in enumerate(challenges):
        require(required <= item.keys(), f"challenges[{index}]: missing {sorted(required - item.keys())}")
        challenge_id = item.get("id", "")
        require(challenge_id not in seen, f"duplicate challenge ID: {challenge_id}")
        seen.add(challenge_id)
        require(item.get("author") == "Silentium Labs", f"{challenge_id}: official launch author must be Silentium Labs")
        require(bool(re.fullmatch(r"[0-9]+\.[0-9]+\.[0-9]+", item.get("version", ""))), f"{challenge_id}: invalid semantic version")
        target = ROOT / item.get("path", "").removeprefix("blob/main/")
        require(target.is_file(), f"{challenge_id}: missing brief {target.relative_to(ROOT) if target.is_relative_to(ROOT) else target}")
        if target.is_file():
            brief = target.read_text(encoding="utf-8")
            require(f"**Version:** {item.get('version')}" in brief, f"{challenge_id}: catalog/brief version mismatch")
            require("## Skill verification hooks" in brief, f"{challenge_id}: missing skill verification hooks")
            require("## Changelog" in brief, f"{challenge_id}: missing changelog")
    counts = Counter(item.get("difficulty") for item in challenges)
    require(len(challenges) == 24, f"catalog must contain 24 launch challenges, found {len(challenges)}")
    require(counts == Counter({"Beginner": 8, "Intermediate": 8, "Advanced": 8}), f"difficulty counts invalid: {dict(counts)}")
    return challenges


def validate_paths(challenges):
    ids = {item["id"] for item in challenges}
    paths = load("learning-paths.json")
    require(len(paths) == 5, f"expected 5 launch learning paths, found {len(paths)}")
    for path in paths:
        unknown = set(path.get("challengeIds", [])) - ids
        require(not unknown, f"{path.get('id')}: unknown challenge IDs {sorted(unknown)}")


def validate_trust_and_verifications():
    expected = {"Untrusted", "Metadata Reviewed", "Scanned", "Human Reviewed", "Verified", "Quarantined", "Revoked", "Archived"}
    states = {item.get("label") for item in load("trust-states.json")}
    require(states == expected, f"trust states mismatch: missing {sorted(expected - states)}, extra {sorted(states - expected)}")
    for record in load("verifications.json"):
        required = {"challengeVersion", "rubricVersion", "repositoryUrl", "commitSha", "reviewer", "reviewDate", "buildReview", "skillVerification"}
        require(required <= record.keys(), f"verification {record.get('id')}: missing required provenance fields")
        require(bool(re.fullmatch(r"[0-9a-f]{40}", record.get("commitSha", ""))), f"verification {record.get('id')}: invalid commit SHA")


class LinkParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
    def handle_starttag(self, tag, attrs):
        for key, value in attrs:
            if tag in {"a", "link", "script", "img", "use"} and key in {"href", "src"} and value:
                self.links.append((tag, key, value))


def validate_local_links():
    index = ROOT / "docs" / "index.html"
    parser = LinkParser()
    parser.feed(index.read_text(encoding="utf-8"))
    for _tag, _key, link in parser.links:
        if link.startswith(("#", "http://", "https://", "data:")) or link in {"website"}:
            continue
        target = (index.parent / link.split("#", 1)[0]).resolve()
        require(target.exists(), f"broken docs/index.html asset or link: {link}")


def validate_public_hygiene():
    forbidden_names = {"README_FIRST.txt", "PASTE_THIS_TO_CODEX.txt", "FINAL_CODEX_HANDOFF_V3.md", "MASTER_CODEX_HANDOFF.md"}
    forbidden_terms = ["YOUR_GITHUB_OWNER", "maestro-forge.dev", "@SILENTIUM_LABS_OWNER"]
    public_text = []
    for path in ROOT.rglob("*"):
        if any(part in {".git"} for part in path.parts) or not path.is_file():
            continue
        require(path.name not in forbidden_names, f"internal handoff file present: {path.relative_to(ROOT)}")
        if path.suffix.lower() in {".md", ".html", ".css", ".js", ".json", ".yml", ".yaml", ".txt"}:
            public_text.append((path, path.read_text(encoding="utf-8", errors="ignore")))
    for term in forbidden_terms:
        matches = [str(path.relative_to(ROOT)) for path, text in public_text if term in text]
        require(not matches, f"placeholder {term!r} found in {matches}")
    require(not any("codex" in text.lower() or "openai" in text.lower() or "chatgpt" in text.lower() for _, text in public_text), "implementation-tool reference found in public text")


def main():
    # Maintainer-controlled validation only; this workflow runs on reviewed main.
    import validate_experience
    require(validate_experience.main() == 0, "student experience validation failed")
    challenges = validate_challenges()
    validate_paths(challenges)
    validate_trust_and_verifications()
    validate_local_links()
    validate_public_hygiene()
    if ERRORS:
        print("\n".join(f"ERROR: {error}" for error in ERRORS))
        return 1
    print("Public validation OK: 24 challenges (8/8/8), 5 paths, trust model, links, and publication hygiene")
    return 0


if __name__ == "__main__":
    sys.exit(main())
