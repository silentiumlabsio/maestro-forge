# A02 — Guided practice

Be able to explain architecture, trust boundaries and failure modes, with evidence from smaller builds.

Tools: A current browser; Node.js 22+ for pure-function tests. Keep your implementation in your own repository. The starter is intentionally unfinished.

## First milestone

Define module and storage boundaries first. Use two local fixture snapshots to simulate sync; a hosted service is unnecessary.

## Compare behavior

Use [the synthetic input](examples/input.json) in your implementation. Expected behavior:

Conflicting edits are surfaced for a user decision or retained under a documented deterministic policy; no silent upload occurs.

Record the exact command or manual steps, actual output and any difference. Formatting can differ if the brief permits it. This expected behavior is a teaching reference, not a full solution.

| Case | Prediction before running | Actual result and evidence |
|---|---|---|
| Supplied synthetic example | Write the expected behavior above in your own words | Not run |
| Boundary case | Choose one: Test offline reload of courses/tasks/notes, corrupted import, schema migration, export round-trip and conflicting edits. Demonstrate sync disabled by default. | Not run |
| Repeat the same input | Explain which outcomes must remain stable | Not run |
| Recovery after failure | Explain how the next valid operation should behave | Not run |

For a design-only submission, replace execution with a structured walkthrough against the stated threat model, and label it as analysis rather than a measured result.

## Progressive hints

Try the milestone before opening a hint. The website reveals these one at a time.

<details><summary>Hint 1: question</summary>

What happens when two versions have the same revision but different text?

</details>

<details><summary>Hint 2: approach</summary>

Define module and storage boundaries first. Use two local fixture snapshots to simulate sync; a hosted service is unnecessary.

</details>

<details><summary>Hint 3: next experiment</summary>

Keep both snapshots available until a documented conflict decision is made.

</details>

## Common mistake

Last-write-wins can silently discard an offline edit.

## Turn observations into tests

Keep expected behavior separate from the implementation. Use the [validation guide](VALIDATION.md) for domain checks. Test the supplied example, one invalid input and recovery after that failure. Use a temporary directory for files, a fake clock for time and a mock provider for network services. Do not put real secrets or private course material in fixtures. A passing example alone does not establish correctness.

## Ask for useful feedback

Explain one decision, provide one actual check, and ask one specific question. List what remains untested. Use [submission guidance](../../../handbook/SUBMITTING.md) and declare AI assistance. No self-check awards verification.
