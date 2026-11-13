# Student experience audit

Audit date: 2026-10-22. Scope: repository content, static site, catalog/navigation, starters, documentation, metadata validators and workflow source. This is a project readiness review, not a comprehensive security certification or audit of external student repositories.

## Findings addressed

| Area | Initial gap | Result |
|---|---|---|
| 24 challenges | Brief-only folders | Each has a start guide, incomplete domain starter or design worksheet, synthetic fixture and concrete failure checks; B04 also includes optional learner contract tests. |
| Catalog | Track lists lacked a complete start flow | Linked root/track tables and individual site detail routes with direct starter and validation links. |
| Kits | Detached from challenge flow; JavaScript direct execution failed on Windows paths | Copy/adapt/verify guidance, per-challenge kit links and corrected file-URL comparison. |
| First PR Sandbox | Two-sentence placeholder | Browser walkthrough, fork rehearsal route, Markdown exercise, templates, review, troubleshooting and merge instructions. |
| Learning areas | Short descriptions without usable exercises | Five guided paths, three engineering patterns, prompt exercise, experiment/failure worksheets, testing guide and expanded planning/submission material. |
| Community areas | Contribution intent without detailed next steps | Scoped proposal, opt-in, review and publication guidance; existing empty project/builder/verification arrays preserved. |
| Pages links | Repository guides used paths outside the published docs tree | Guide/policy/template links resolve to GitHub; search and path sequences open specific challenge details. |
| Truthful presentation | Decorative path progress could suggest earned progress | Removed progress bars; planned exports and unrun experiments are labeled explicitly. |
| Validation | Brief metadata checked, but start-package drift and guide links were not | Read-only package/fixture/guide/sandbox validation integrated into the existing main metadata validator. |

## Validation performed

- Catalog: 24 challenges, eight per track; five learning paths use known IDs.
- Public metadata and publication-hygiene validator passed.
- Experience checks passed: JSON parsing, package links, fixture/site agreement, Python starter syntax, kit links, Markdown links and Markdown-only sandbox.
- Generic Python and JavaScript kits: four automated tests each passed; the JavaScript CLI printed the expected normalized text on Windows.
- Browser QA: 136 responsive route/detail checks across desktop, Chromebook, tablet and mobile, plus filtering, reset, global search, exact challenge navigation, unknown-ID recovery and menu/semantic checks. Desktop/mobile detail screenshots were visually inspected.
- Static tree triage found no configured flags. No student solutions were executed. Optional B04 learner tests intentionally target an unfinished starter and are not a passing implementation claim.
- Git whitespace check passed. JSON and issue-form data are reviewed as text, not executable content.

## Security and operations retained

The independent Silentium Labs disclaimer, academic integrity policy, contributor-owned solution boundary, exact-commit verification, CODEOWNERS and no-secrets/no-contributor-execution architecture remain intact. The privileged PR gate still performs only changed-file metadata inspection, with no checkout. No workflow permissions were expanded.

The existing gate blocks changes under `scripts/validate_`, including this upgrade's new validation work. Owner/code-owner integration review is required; this work does not add a bypass or weaken that policy. Main validation must be observed again after integration.

A read of repository rulesets returned no rulesets at audit time. This does not establish whether legacy branch protection exists. GitHub settings such as required reviews/checks, private vulnerability reporting, push protection and Pages deployment must be verified by the owner through the supported settings interface. No settings were changed or silently claimed active.

## Intentionally future work

Real submitted projects, opted-in builders, measured experiments and verification records require real participants and review. Automated Passport exports/skill graphs, recurring community projects, larger Trials operations and any untrusted-code execution platform remain planned or framework-only as described in the roadmap. No fake records, credentials, telemetry, custom login system or execution service were added.

Use [the demo path](DEMO.md) after the reviewed revision is merged and confirmed on Pages. See [maintenance](MAINTENANCE.md) for repeatable checks and [the roadmap](../ROADMAP.md) for scope boundaries.

See [the follow-up QA report](QA_REPORT.md) for interactive recovery fixes and remaining release checks.

## Integration status — 2026-11-13

The student-facing update is published for review in PR #5. The two protected validator changes have been separated for maintainer review and are not part of that release. Earlier validation results describe the complete candidate; they do not imply the extra validator is installed on main. Existing workflow and branch protections remain unchanged.
