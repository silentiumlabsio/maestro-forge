# B02 — Guided practice

Be able to edit a text file and read a simple function. Start with the generic kit if the runtime is unfamiliar.

Tools: Python 3.12+ and its standard library. Keep your implementation in your own repository. The starter is intentionally unfinished.

## First milestone

Validate the deck first, cycle in a fixed order, then add optional seeded shuffling.

## Compare behavior

Use [the synthetic input](examples/input.json) in your implementation. Expected behavior:

Both cards can be visited; one correct answer in two attempts produces 1/2 for that session.

Record the exact command or manual steps, actual output and any difference. Formatting can differ if the brief permits it. This expected behavior is a teaching reference, not a full solution.

| Case | Prediction before running | Actual result and evidence |
|---|---|---|
| Supplied synthetic example | Write the expected behavior above in your own words | Not run |
| Boundary case | Choose one: Empty deck, invalid JSON, missing answer, duplicate cards, whitespace and a wrong answer must not crash or reuse a previous score. | Not run |
| Repeat the same input | Explain which outcomes must remain stable | Not run |
| Recovery after failure | Explain how the next valid operation should behave | Not run |

For a design-only submission, replace execution with a structured walkthrough against the stated threat model, and label it as analysis rather than a measured result.

## Progressive hints

Try the milestone before opening a hint. The website reveals these one at a time.

<details><summary>Hint 1: question</summary>

Can a malformed card reach scoring?

</details>

<details><summary>Hint 2: approach</summary>

Validate the deck first, cycle in a fixed order, then add optional seeded shuffling.

</details>

<details><summary>Hint 3: next experiment</summary>

Validate every card before asking the first question; isolate per-session scores.

</details>

## Common mistake

Mixing deck validation with quiz input makes invalid-file tests difficult.

## Turn observations into tests

Keep expected behavior separate from the implementation. Use the [validation guide](VALIDATION.md) for domain checks. Test the supplied example, one invalid input and recovery after that failure. Use a temporary directory for files, a fake clock for time and a mock provider for network services. Do not put real secrets or private course material in fixtures. A passing example alone does not establish correctness.

## Ask for useful feedback

Explain one decision, provide one actual check, and ask one specific question. List what remains untested. Use [submission guidance](../../../handbook/SUBMITTING.md) and declare AI assistance. No self-check awards verification.

## Optional local contract tests

In your own reviewed copy, open `starter` and run `python -m unittest -v test_contract.py`. This optional contract returns validated cards without mutating input and raises `ValueError` for missing answers or a non-list input. Adapt the tests if you deliberately choose and document another API. The unfinished starter fails these tests by design. These four checks do not cover all acceptance criteria; add empty-deck, duplicate, score-reset and whitespace cases. Forge CI does not execute learner solutions.
