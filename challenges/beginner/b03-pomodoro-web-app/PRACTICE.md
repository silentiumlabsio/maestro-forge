# B03 — Guided practice

Be able to edit a text file and read a simple function. Start with the generic kit if the runtime is unfamiliar.

Tools: A current browser; Node.js 22+ for pure-function tests. Keep your implementation in your own repository. The starter is intentionally unfinished.

## First milestone

Draw idle/work/break/paused states on paper. Implement pure transitions before adding browser events.

## Compare behavior

Use [the synthetic input](examples/input.json) in your implementation. Expected behavior:

Start → work; pause freezes remaining time; reset returns to the initial duration.

Record the exact command or manual steps, actual output and any difference. Formatting can differ if the brief permits it. This expected behavior is a teaching reference, not a full solution.

| Case | Prediction before running | Actual result and evidence |
|---|---|---|
| Supplied synthetic example | Write the expected behavior above in your own words | Not run |
| Boundary case | Choose one: Repeated start must not create extra intervals. Test reset while paused, tab backgrounding, keyboard-only operation and screen-reader state announcements. | Not run |
| Repeat the same input | Explain which outcomes must remain stable | Not run |
| Recovery after failure | Explain how the next valid operation should behave | Not run |

For a design-only submission, replace execution with a structured walkthrough against the stated threat model, and label it as analysis rather than a measured result.

## Progressive hints

Try the milestone before opening a hint. The website reveals these one at a time.

<details><summary>Hint 1: question</summary>

What does a tick mean while paused?

</details>

<details><summary>Hint 2: approach</summary>

Draw idle/work/break/paused states on paper. Implement pure transitions before adding browser events.

</details>

<details><summary>Hint 3: next experiment</summary>

Write a transition table for idle, work, break and paused; check reset from each state.

</details>

## Common mistake

Starting another interval on every click can accelerate the timer.

## Turn observations into tests

Keep expected behavior separate from the implementation. Use the [validation guide](VALIDATION.md) for domain checks. Test the supplied example, one invalid input and recovery after that failure. Use a temporary directory for files, a fake clock for time and a mock provider for network services. Do not put real secrets or private course material in fixtures. A passing example alone does not establish correctness.

## Ask for useful feedback

Explain one decision, provide one actual check, and ask one specific question. List what remains untested. Use [submission guidance](../../../handbook/SUBMITTING.md) and declare AI assistance. No self-check awards verification.
