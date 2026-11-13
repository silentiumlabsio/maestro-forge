"""Read-only content checks. Never import or execute challenge/student code."""
from pathlib import Path
from urllib.parse import unquote, urlsplit
from html.parser import HTMLParser
import ast
import json
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
ERRORS = []


def require(ok, message):
    if not ok:
        ERRORS.append(message)


def local_target(source, link):
    url = urlsplit(link)
    if url.scheme or link.startswith(("#", "//")):
        return
    path = unquote(url.path)
    if not path:
        return
    target = (source.parent / path).resolve()
    require(target.is_relative_to(ROOT), f"{source.relative_to(ROOT)}: link escapes repository: {link}")
    require(target.exists(), f"{source.relative_to(ROOT)}: missing link target: {link}")
    if target.is_dir():
        require((target / "README.md").exists() or (target / "index.html").exists(),
                f"{source.relative_to(ROOT)}: directory has no landing document: {link}")


def main():
    for path in ROOT.rglob("*.json"):
        if ".git" not in path.parts:
            try:
                json.loads(path.read_text(encoding="utf-8"))
            except (ValueError, OSError) as exc:
                ERRORS.append(f"{path.relative_to(ROOT)}: {exc}")
    challenges = json.loads((ROOT / "docs/data/challenges.json").read_text())
    for item in challenges:
        cid = item["id"]
        folder = (ROOT / item["path"].removeprefix("blob/main/")).parent
        for field in ("startPath", "starterPath", "validationPath"):
            target = ROOT / item.get(field, "").removeprefix("blob/main/")
            require(target.is_file() and target.is_relative_to(folder), f"{cid}: missing local {field}")
        fixture = folder / "examples/input.json"
        require(fixture.is_file(), f"{cid}: missing synthetic example")
        if fixture.is_file():
            require(json.loads(fixture.read_text()) == item.get("example"), f"{cid}: site/fixture mismatch")
        for field in ("expected", "edgeCases", "firstStep", "runtime", "starterContract"):
            require(bool(item.get(field)), f"{cid}: missing {field}")
        if item.get("kit"):
            require((ROOT / item["kit"].removeprefix("blob/main/")).is_file(), f"{cid}: missing kit")
        for source in folder.rglob("*.py"):
            ast.parse(source.read_text(), filename=str(source))
    for source in ROOT.rglob("*.md"):
        if ".git" in source.parts:
            continue
        text = re.sub(r"```.*?```", "", source.read_text(encoding="utf-8"), flags=re.S)
        for match in re.finditer(r"!?\[[^\]]*\]\(([^\s)]+)(?:\s+[^)]*)?\)", text):
            local_target(source, match.group(1))
    for name in ("resources", "ecosystem", "learning-paths"):
        records = json.loads((ROOT / f"docs/data/{name}.json").read_text())
        ids = [r["id"] for r in records]
        require(len(ids) == len(set(ids)), f"{name}: duplicate IDs")
        for record in records:
            if "href" in record:
                local_target(ROOT / "docs/index.html", record["href"])
            if "path" in record:
                require((ROOT / record["path"].removeprefix("blob/main/")).is_file(), f"{name}: missing path")
            if "issue" in record:
                require((ROOT / ".github/ISSUE_TEMPLATE" / record["issue"]).is_file(), f"{name}: missing issue form")
    sandbox = ROOT / "first-pr-sandbox"
    require(all(p.suffix == ".md" and not p.is_symlink() for p in sandbox.rglob("*") if p.is_file()),
            "sandbox must contain only ordinary Markdown files")
    if ERRORS:
        print("\n".join(ERRORS))
        return 1
    print("Experience OK: JSON, 24 start packages, fixtures, starter syntax, kits, guide links and Markdown-only sandbox")
    return 0


if __name__ == "__main__":
    sys.exit(main())
