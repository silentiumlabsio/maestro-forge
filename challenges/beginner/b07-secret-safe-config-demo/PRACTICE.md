# B07 — Guided practice

Be able to edit a text file and read a simple function. Start with the generic kit if the runtime is unfamiliar.

Tools: Python 3.12+ and its standard library. Keep your implementation in your own repository. The starter is intentionally unfinished.

## First milestone

Pass a dictionary to the config function for tests; only the entry point reads environment variables.

## Compare behavior

Use [the synthetic input](examples/input.json) in your implementation. Expected behavior:

The dummy key permits startup; no output contains its value. Missing configuration produces a clear redacted error.

Record the exact command or manual steps, actual output and any difference. Formatting can differ if the brief permits it. This expected behavior is a teaching reference, not a full solution.

| Case | Prediction before running | Actual result and evidence |
|---|---|---|
| Supplied synthetic example | Write the expected behavior above in your own words | Not run |
| Boundary case | Choose one: Test missing, empty and whitespace-only values. Capture logs and errors; assert the fake key never appears. No actual API call is needed. | Not run |
| Repeat the same input | Explain which outcomes must remain stable | Not run |
| Recovery after failure | Explain how the next valid operation should behave | Not run |

For a design-only submission, replace execution with a structured walkthrough against the stated threat model, and label it as analysis rather than a measured result.

## Progressive hints

Try the milestone before opening a hint. The website reveals these one at a time.

<details><summary>Hint 1: question</summary>

Where else could a key appear: logs, errors or object representations?

</details>

<details><summary>Hint 2: approach</summary>

Pass a dictionary to the config function for tests; only the entry point reads environment variables.

</details>

<details><summary>Hint 3: next experiment</summary>

Use a fake marker and search captured output for it after success and failure.

</details>

## Common mistake

Redacting the normal display does not protect exception messages.

## Turn observations into tests

Keep expected behavior separate from the implementation. Use the [validation guide](VALIDATION.md) for domain checks. Test the supplied example, one invalid input and recovery after that failure. Use a temporary directory for files, a fake clock for time and a mock provider for network services. Do not put real secrets or private course material in fixtures. A passing example alone does not establish correctness.

## Ask for useful feedback

Explain one decision, provide one actual check, and ask one specific question. List what remains untested. Use [submission guidance](../../../handbook/SUBMITTING.md) and declare AI assistance. No self-check awards verification.
