# I05 validation

These are test specifications, not claims that an implementation passed. Run checks in your own solution repository; record the exact commit and actual outcome.

## Small example

Use [input.json](examples/input.json) as synthetic data. After the first local load, reload offline and edit the card; the edit survives another reload.

## Boundary and failure checks

Test first visit offline, unavailable storage, invalid import, delete/export, keyboard navigation and upgrading cache versions. Network inspection must show only app-owned cache entries.

## Evidence matrix

| Check | Expected | Observed | Evidence |
|---|---|---|---|
| Every acceptance criterion in [the brief](challenge.md) | Criterion satisfied | Not run | Add test name or manual steps |
| Small example above | Stated behavior | Not run | Add output |
| Each boundary case above | Safe documented handling | Not run | Add result per case |
| Declared data behavior | No undeclared access | Not run | Inspection / network panel |

## Review prompts

- Explain: Validate local card data before it reaches storage or the view.
- Debug: choose one boundary case above, reproduce it, and fix the cause.
- Adapt: change one input constraint, update its validation and show the changed result.

These checks supplement the brief and versioned rubric; they do not replace human review or prove security.
