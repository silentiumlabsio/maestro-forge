# Public Launch Checklist

## Automated checks completed locally

- [x] Catalog contains 24 challenges: 8 Beginner, 8 Intermediate, 8 Advanced
- [x] Learning-path challenge IDs resolve to the catalog
- [x] Structured JSON parses and trust vocabulary is complete
- [x] Local site assets and links resolve
- [x] Public text contains no internal handoff files or implementation-tool references
- [x] Static security triage reports no configured flags
- [x] Python and JavaScript starter-kit tests pass
- [x] Responsive route QA passes at desktop, Chromebook, tablet, and mobile widths
- [x] Challenge search, filters, reset, global search, keyboard shortcut, mobile menu, skip link, and route state work
- [x] Raw fictional visual references are excluded
- [x] Social asset contains truthful copy and is optimized for web delivery
- [x] No custom analytics, authentication, live activity, community counts, or fake project/profile records are presented

## Maintainer review before first push

- [ ] Read and approve all public policies and challenge briefs
- [ ] Inspect the full repository diff or file tree
- [ ] Run `scripts/validate_public_repo.py`, `scripts/security_scan_tree.py .`, and starter-kit tests in the intended release environment
- [ ] Run a dedicated secret scanner over files and git history after initializing/importing history
- [ ] Confirm all external links and GitHub issue actions use the actual repository owner/name after publication
- [x] Resolve CODEOWNERS to the authenticated Silentium Labs account
- [ ] Confirm the project name and Silentium Labs attribution are authorized for public use

## GitHub owner settings

- [ ] Configure `/docs` GitHub Pages deployment
- [ ] Activate a `main` ruleset requiring pull requests, code-owner review, conversation resolution, and required checks
- [ ] Block force pushes, branch deletion, and community bypass
- [ ] Enable available CodeQL, secret scanning/push protection, dependency graph, Dependabot, and private vulnerability reporting controls
- [ ] Review Actions permissions and fork workflow approval behavior
- [ ] Create contribution, challenge, security, review, resource, accessibility, and quarantine labels
- [ ] Confirm the privileged metadata gate has no checkout or contributor-content execution

## Launch decision

- [ ] Confirm the real Pages URL and repository About links
- [ ] Confirm no feature, profile, project, score, activity, verification, security statistic, or endorsement claim exceeds the repository evidence
- [ ] Record the exact launch commit and release notes
- [ ] Create checksums/SBOM where appropriate for any packaged release artifact
