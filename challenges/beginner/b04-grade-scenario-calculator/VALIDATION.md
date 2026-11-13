# B04 validation

These are test specifications, not claims that an implementation passed. Run checks in your own solution repository; record the exact commit and actual outcome.

## Small example

Use [input.json](examples/input.json) as synthetic data. The weighted result is 86%; changing the project score to 100 produces 92%.

## Boundary and failure checks

The optional [contract tests](starter/core.test.mjs) encode the 86/92 examples and several invalid inputs. Run them only in your solution workspace after inspecting the source. The unimplemented starter intentionally fails them.

Reject weights totaling 90 or 110, negative weights, scores outside 0–100, empty input, NaN and infinity. Explain rounding.

## Evidence matrix

| Check | Expected | Observed | Evidence |
|---|---|---|---|
| Every acceptance criterion in [the brief](challenge.md) | Criterion satisfied | Not run | Add test name or manual steps |
| Small example above | Stated behavior | Not run | Add output |
| Each boundary case above | Safe documented handling | Not run | Add result per case |
| Declared data behavior | No undeclared access | Not run | Inspection / network panel |

## Review prompts

- Explain: Return a weighted percentage only after validating weights and scores.
- Debug: choose one boundary case above, reproduce it, and fix the cause.
- Adapt: change one input constraint, update its validation and show the changed result.

These checks supplement the brief and versioned rubric; they do not replace human review or prove security.
