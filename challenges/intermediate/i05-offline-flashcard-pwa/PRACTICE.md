# I05 — Guided practice

Be comfortable with small functions, synthetic fixtures and repeatable tests. Complete a related beginner build first.

Tools: A current browser; Node.js 22+ for pure-function tests. Keep your implementation in your own repository. The starter is intentionally unfinished.

## First milestone

Build local CRUD first; add a manifest and scoped service worker after storage works. Use localhost or HTTPS for service-worker testing.

## Compare behavior

Use [the synthetic input](examples/input.json) in your implementation. Expected behavior:

After the first local load, reload offline and edit the card; the edit survives another reload.

Record the exact command or manual steps, actual output and any difference. Formatting can differ if the brief permits it. This expected behavior is a teaching reference, not a full solution.

| Case | Prediction before running | Actual result and evidence |
|---|---|---|
| Supplied synthetic example | Write the expected behavior above in your own words | Not run |
| Boundary case | Choose one: Test first visit offline, unavailable storage, invalid import, delete/export, keyboard navigation and upgrading cache versions. Network inspection must show only app-owned cache entries. | Not run |
| Repeat the same input | Explain which outcomes must remain stable | Not run |
| Recovery after failure | Explain how the next valid operation should behave | Not run |

For a design-only submission, replace execution with a structured walkthrough against the stated threat model, and label it as analysis rather than a measured result.

## Progressive hints

Try the milestone before opening a hint. The website reveals these one at a time.

<details><summary>Hint 1: question</summary>

Can a card be edited, reopened offline and recovered?

</details>

<details><summary>Hint 2: approach</summary>

Build local CRUD first; add a manifest and scoped service worker after storage works. Use localhost or HTTPS for service-worker testing.

</details>

<details><summary>Hint 3: next experiment</summary>

Test storage independently before adding a service worker; include update and deletion cases.

</details>

## Common mistake

Caching the shell does not guarantee that user edits survive offline.

## Turn observations into tests

Keep expected behavior separate from the implementation. Use the [validation guide](VALIDATION.md) for domain checks. Test the supplied example, one invalid input and recovery after that failure. Use a temporary directory for files, a fake clock for time and a mock provider for network services. Do not put real secrets or private course material in fixtures. A passing example alone does not establish correctness.

## Ask for useful feedback

Explain one decision, provide one actual check, and ask one specific question. List what remains untested. Use [submission guidance](../../../handbook/SUBMITTING.md) and declare AI assistance. No self-check awards verification.
