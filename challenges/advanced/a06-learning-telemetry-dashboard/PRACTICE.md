# A06 — Guided practice

Be able to explain architecture, trust boundaries and failure modes, with evidence from smaller builds.

Tools: Python 3.12+ and its standard library. Keep your implementation in your own repository. The starter is intentionally unfinished.

## First milestone

Define a minimal versioned event schema and retention policy. Aggregate local synthetic events before building charts.

## Compare behavior

Use [the synthetic input](examples/input.json) in your implementation. Expected behavior:

The synthetic daily total is 30 minutes. Export contains only the documented fields; deletion removes stored events and derived data.

Record the exact command or manual steps, actual output and any difference. Formatting can differ if the brief permits it. This expected behavior is a teaching reference, not a full solution.

| Case | Prediction before running | Actual result and evidence |
|---|---|---|
| Supplied synthetic example | Write the expected behavior above in your own words | Not run |
| Boundary case | Choose one: Test duplicate-event policy, negative durations, timezone boundary, empty store, retention cutoff, export and deletion. Verify no third-party requests. | Not run |
| Repeat the same input | Explain which outcomes must remain stable | Not run |
| Recovery after failure | Explain how the next valid operation should behave | Not run |

For a design-only submission, replace execution with a structured walkthrough against the stated threat model, and label it as analysis rather than a measured result.

## Progressive hints

Try the milestone before opening a hint. The website reveals these one at a time.

<details><summary>Hint 1: question</summary>

Which fields are necessary for the displayed aggregate?

</details>

<details><summary>Hint 2: approach</summary>

Define a minimal versioned event schema and retention policy. Aggregate local synthetic events before building charts.

</details>

<details><summary>Hint 3: next experiment</summary>

Aggregate synthetic durations using a minimal schema and document deletion and retention.

</details>

## Common mistake

Useful-looking telemetry can still expose note content or identities.

## Turn observations into tests

Keep expected behavior separate from the implementation. Use the [validation guide](VALIDATION.md) for domain checks. Test the supplied example, one invalid input and recovery after that failure. Use a temporary directory for files, a fake clock for time and a mock provider for network services. Do not put real secrets or private course material in fixtures. A passing example alone does not establish correctness.

## Ask for useful feedback

Explain one decision, provide one actual check, and ask one specific question. List what remains untested. Use [submission guidance](../../../handbook/SUBMITTING.md) and declare AI assistance. No self-check awards verification.
