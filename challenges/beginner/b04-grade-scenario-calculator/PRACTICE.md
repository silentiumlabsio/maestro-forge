# B04 — Guided practice

Be able to edit a text file and read a simple function. Start with the generic kit if the runtime is unfamiliar.

Tools: A current browser; Node.js 22+ for pure-function tests. Keep your implementation in your own repository. The starter is intentionally unfinished.

## First milestone

Use synthetic category names and percentages. Keep parsing, calculation and form rendering separate.

## Compare behavior

Use [the synthetic input](examples/input.json) in your implementation. Expected behavior:

The weighted result is 86%; changing the project score to 100 produces 92%.

Record the exact command or manual steps, actual output and any difference. Formatting can differ if the brief permits it. This expected behavior is a teaching reference, not a full solution.

| Case | Prediction before running | Actual result and evidence |
|---|---|---|
| Supplied synthetic example | Write the expected behavior above in your own words | Not run |
| Boundary case | Choose one: Reject weights totaling 90 or 110, negative weights, scores outside 0–100, empty input, NaN and infinity. Explain rounding. | Not run |
| Repeat the same input | Explain which outcomes must remain stable | Not run |
| Recovery after failure | Explain how the next valid operation should behave | Not run |

For a design-only submission, replace execution with a structured walkthrough against the stated threat model, and label it as analysis rather than a measured result.

## Progressive hints

Try the milestone before opening a hint. The website reveals these one at a time.

<details><summary>Hint 1: question</summary>

Do your accepted weights sum to the documented total?

</details>

<details><summary>Hint 2: approach</summary>

Use synthetic category names and percentages. Keep parsing, calculation and form rendering separate.

</details>

<details><summary>Hint 3: next experiment</summary>

Hand-calculate the synthetic fixture: 40% of 80 plus 60% of 90 is 86.

</details>

## Common mistake

A weighted average is wrong if percentages are treated as fractions twice.

## Turn observations into tests

Keep expected behavior separate from the implementation. Use the [validation guide](VALIDATION.md) for domain checks. Test the supplied example, one invalid input and recovery after that failure. Use a temporary directory for files, a fake clock for time and a mock provider for network services. Do not put real secrets or private course material in fixtures. A passing example alone does not establish correctness.

## Ask for useful feedback

Explain one decision, provide one actual check, and ask one specific question. List what remains untested. Use [submission guidance](../../../handbook/SUBMITTING.md) and declare AI assistance. No self-check awards verification.
