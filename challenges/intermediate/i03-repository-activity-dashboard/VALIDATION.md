# I03 validation

These are test specifications, not claims that an implementation passed. Run checks in your own solution repository; record the exact commit and actual outcome.

## Small example

Use [input.json](examples/input.json) as synthetic data. Fixture mode displays 3 stars and 1 open issue, labeled as synthetic demo data; live mode labels fetch time.

## Boundary and failure checks

Test 404, 403/429, offline, stale cache and hostile display text. Never embed tokens in client code or fetch arbitrary user-supplied URLs.

## Evidence matrix

| Check | Expected | Observed | Evidence |
|---|---|---|---|
| Every acceptance criterion in [the brief](challenge.md) | Criterion satisfied | Not run | Add test name or manual steps |
| Small example above | Stated behavior | Not run | Add output |
| Each boundary case above | Safe documented handling | Not run | Add result per case |
| Declared data behavior | No undeclared access | Not run | Inspection / network panel |

## Review prompts

- Explain: Validate a public repository API response into display-only fields.
- Debug: choose one boundary case above, reproduce it, and fix the cause.
- Adapt: change one input constraint, update its validation and show the changed result.

These checks supplement the brief and versioned rubric; they do not replace human review or prove security.
