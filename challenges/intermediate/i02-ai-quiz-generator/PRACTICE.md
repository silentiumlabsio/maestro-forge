# I02 — Guided practice

Be comfortable with small functions, synthetic fixtures and repeatable tests. Complete a related beginner build first.

Tools: Python 3.12+ and its standard library. Keep your implementation in your own repository. The starter is intentionally unfinished.

## First milestone

Start with a deterministic mock provider. Make network use an explicit opt-in with a data disclosure and bounded requests.

## Compare behavior

Use [the synthetic input](examples/input.json) in your implementation. Expected behavior:

Offline mode returns reproducible structured questions supported by the supplied text; malformed output is rejected.

Record the exact command or manual steps, actual output and any difference. Formatting can differ if the brief permits it. This expected behavior is a teaching reference, not a full solution.

| Case | Prediction before running | Actual result and evidence |
|---|---|---|
| Supplied synthetic example | Write the expected behavior above in your own words | Not run |
| Boundary case | Choose one: Test invalid JSON, missing answer, invented facts, empty source and document instructions masquerading as commands. Record mock tests separately from any provider run. | Not run |
| Repeat the same input | Explain which outcomes must remain stable | Not run |
| Recovery after failure | Explain how the next valid operation should behave | Not run |

For a design-only submission, replace execution with a structured walkthrough against the stated threat model, and label it as analysis rather than a measured result.

## Progressive hints

Try the milestone before opening a hint. The website reveals these one at a time.

<details><summary>Hint 1: question</summary>

Does each generated answer point to its permitted source?

</details>

<details><summary>Hint 2: approach</summary>

Start with a deterministic mock provider. Make network use an explicit opt-in with a data disclosure and bounded requests.

</details>

<details><summary>Hint 3: next experiment</summary>

Test a mock provider with missing fields and unsupported claims before any network integration.

</details>

## Common mistake

Valid JSON can still contain unsupported or unsafe generated content.

## Turn observations into tests

Keep expected behavior separate from the implementation. Use the [validation guide](VALIDATION.md) for domain checks. Test the supplied example, one invalid input and recovery after that failure. Use a temporary directory for files, a fake clock for time and a mock provider for network services. Do not put real secrets or private course material in fixtures. A passing example alone does not establish correctness.

## Ask for useful feedback

Explain one decision, provide one actual check, and ask one specific question. List what remains untested. Use [submission guidance](../../../handbook/SUBMITTING.md) and declare AI assistance. No self-check awards verification.
