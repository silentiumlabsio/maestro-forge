# Student experience QA — 2026-10-22

## Scope and result

Local QA covered the 24 challenge packages, five learning paths, repository-relative content links, catalog data, generic starter kits, interactive workspaces and documentation-only PR rehearsal. Checks passed for the current local revision. This is not a claim of perfect behavior, a penetration test, or confirmation that the revision is deployed.

## Defects corrected

- Skip to content now focuses the current page instead of navigating home.
- Empty challenge searches have a working reset, and phone navigation exposes global search.
- Menu labels reset after navigation; route changes move focus to the main content.
- Failed catalog loading offers retry and a direct repository catalog link.
- All 24 acceptance checklists match their briefs exactly; the validator now enforces this.
- Self-reported progress ignores invalid saved values and worksheets avoid empty checklist counters.
- Failed clears preserve drafts and warnings. Conflicting tabs cannot silently overwrite newer saved notes, including after internal navigation.
- Unsaved workspace drafts survive internal navigation, are included in notes backups, and trigger a warning before leaving the page.
- Backup restoration validates records and renders notes as text. Malformed backups keep existing data intact.
- Sandbox branch names and commit messages save while typing. Inconsistent saved stages are rejected, and storage conflicts are reported.
- Evidence exports include the synthetic example even when it has not been edited.

## Checks performed

- Chromium: 136 route/detail checks at desktop, Chromebook, tablet and phone viewport sizes, with console errors and layout overflow checks.
- Browser interactions: search, filters, reset, keyboard shortcut, skip link, mobile menu/search, exact challenge navigation, and unknown challenge recovery.
- Workspace interactions: save/reload, input structure checks, evidence and backup downloads, valid and invalid restore, safe text rendering, conflicting tabs, failed clear, and unsaved draft navigation.
- Sandbox: complete fork-to-merge rehearsal, invalid branch, wrong target, snapshot review, draft reload and practice export.
- Recovery: unreadable browser storage, inconsistent saved sandbox stage, failed catalog request and retry.
- Catalog and public repository validation: passed, including all 24 packages, eight per track, guide links, fixture agreement, starter syntax and Markdown-only sandbox.
- Generic Python and JavaScript starter kit tests: four passed per kit.
- Static triage: no configured flags. Git whitespace checks: passed.

Challenge starters remain deliberately unfinished. Input structure checks do not execute solutions or award verified skills. The sandbox is a local simulation with a separate walkthrough for a real PR in the learner's fork.

## Release checks still required

The local commits have not been published because available GitHub integration writes were rejected and the local Git client lacks usable credentials. After owner integration, confirm the Pages deployment and main metadata workflow, then repeat the demo and a real documentation-only PR rehearsal in a fork. Keep the existing owner review and metadata-only privileged PR gate intact.

Firefox, Safari, physical touch devices, assistive-technology sessions and real student usability sessions were not tested in this pass. External link availability and GitHub repository settings need live release verification. Browser-local storage is not a synchronized account or a durable backup; students should export work regularly.

Community submissions, builder verification, measured outcomes and future roadmap services still require real participation and implementation. No fabricated community records or solution execution service were added.

See [maintenance](MAINTENANCE.md) for repeatable checks and [the demo path](DEMO.md) for the walkthrough.
