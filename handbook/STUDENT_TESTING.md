# Accessibility and student usability sessions

## Prepare

Recruit consenting volunteers; do not invent participants or results. Explain that the product is being tested, not their ability. Use synthetic material and their own practice fork. Do not collect grades, passwords, private course content or identifying recordings. Obtain consent before recording and agree on deletion. Anonymous notes are usually enough.

## First-session tasks

1. From Home, choose a suitable starting challenge and explain why it fits.
2. Find the tools, starter and first milestone; try a hint after an independent attempt.
3. Record a synthetic observation, navigate away and return, then export a backup.
4. Complete the PR rehearsal and resolve the text conflict. Explain which actions did not affect GitHub.
5. Prepare a review draft and identify a missing item. Explain whether this grants verification.

Allow about 20–30 minutes, but stop whenever the volunteer wishes. Ask them to think aloud without coaching initially. Record where help was required and whether the next action was clear. Use [the session template](../templates/USABILITY_SESSION.md); leave outcomes blank until observed. Never publish identifiable participant records here.

## Accessibility checks requiring a person

- Keyboard only: reach navigation and search, close the dialog with Escape, choose a recommendation, reveal hints, edit fields and finish the sandbox. Check visible focus, meaningful order and no trap.
- Screen reader: use NVDA with Firefox or Chrome on Windows, or VoiceOver with Safari on Apple hardware. Check headings, labels, legends, status announcements and route focus. DOM assertions alone do not establish conformance.
- Zoom to 200% and 400% in the actual browser. Check reflow, readable text, visible inputs and that sticky navigation does not hide focused controls.
- On a real touch device, check menu targets, radio/checkbox labels, textarea editing and downloads. Viewport emulation does not replace hardware testing.
- Enable reduced motion and high contrast/forced colors; inspect focus, errors and selected states. Measure contrast before claiming WCAG compliance.

## Triage findings

A blocked task, lost work or misleading security/verification claim is release-blocking. Confusing wording and unnecessary steps need a reproducible issue and priority. Log route, browser/version, assistive technology if relevant, steps, expected and actual result. Avoid personal data in screenshots. Use [the bug form](https://github.com/silentiumlabsio/maestro-forge/issues/new?template=bug.yml); security issues follow [private reporting](../SECURITY.md).

Retest corrected tasks with a new session where possible. Keep pass/fail/not-tested results and do not infer student success from automated tests.
