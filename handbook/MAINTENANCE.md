# Maintaining the learning experience

Run these read-only checks from the repository root with Python 3.12+:

```text
python scripts/validate_catalog.py
python scripts/validate_public_repo.py
python scripts/validate_experience.py
python scripts/security_scan_tree.py .
```

The static triage helper reports suspicious patterns for human inspection. Findings are not proof of malware, and a clean result is not a security guarantee. Keep generated caches outside the repository or ignored.

Test the reviewed generic kits from their own directories with `python -m unittest -v` and `node --test forge.test.mjs`. Challenge starters are deliberately incomplete; their validation guides describe what students must implement and check in their own repositories.

For browser QA use a maintainer environment with Playwright and a browser, then run `node scripts/qa-site.mjs`. Set `FORGE_BROWSER_PATH` to your browser executable when necessary. QA starts a temporary localhost server, reads static site files and opens a headless browser. It does not run community projects or require provider keys. Inspect desktop and mobile views as well as automated assertions.

When updating a challenge, keep its brief, start package, fixture and site metadata aligned; use a new brief version when requirements change. When updating resources, include them in the resource catalog so search can find them. Validate all repository-relative links before publishing.

The privileged PR gate remains metadata-only with no checkout or contributor-code execution. It blocks maintainer-controlled paths, including validator scripts, even in a maintainer-authored PR. Changes to those paths require explicit owner review and the repository's approved maintainer integration process; do not weaken the gate just to obtain a green check. Main metadata validation runs only after content reaches main. Hosting, rulesets and security settings must be inspected separately; documentation is not proof they are enabled.
