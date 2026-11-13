# Release checklist

Record the commit, date, reviewer and evidence for each step. Leave unperformed checks unchecked.

- [ ] Read the diff; preserve independent-project disclaimers, academic integrity and contributor-owned solutions.
- [ ] Run catalog, public repository and experience validators plus static triage as described in [maintenance](MAINTENANCE.md).
- [ ] Run generic kit tests. Do not execute student solutions or expect unfinished challenge tests to pass.
- [ ] Run browser QA in Chromium, Firefox and WebKit where available. Record versions and failures. WebKit automation is not Safari testing on Apple hardware.
- [ ] Follow the [accessibility and student session protocol](STUDENT_TESTING.md); record actual results separately from automated checks.
- [ ] Review empty states and planned labels; no invented builders, submissions or metrics.
- [ ] Review workflow permissions and owner-controlled changes. Do not bypass the metadata-only PR gate.
- [ ] Integrate through the approved owner process and observe required checks on the exact revision.
- [ ] Confirm Pages published that revision; test links, recommendations, a challenge, backup/restore, readiness export and sandbox on the deployed URL.
- [ ] Rehearse one real documentation-only PR in a maintainer-controlled fork. Do not submit fake student activity upstream.
- [ ] Check external reference destinations, issue templates and private security reporting separately.
- [ ] Record known limitations and a rollback decision. Revert a faulty revision through reviewed commits; do not delete student data or rewrite shared history.

No checklist item is evidence until someone records the observation. Use the [QA report](QA_REPORT.md) as a starting point, not a release certificate.
