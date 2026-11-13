# A06 — Learning Telemetry Dashboard

Design privacy-conscious local telemetry for study sessions and visualize trends.

[Full brief](challenge.md) · [Validation checklist](VALIDATION.md) · [All challenges](../../README.md)

## Start here

1. Read the brief's acceptance criteria and security requirements. This package is scaffolding, not a completed solution.
2. Create your own solution repository. Copy this folder and the [python kit](../../../starter-kits/python/README.md) if helpful; keep your executable solution outside Forge.
3. Open [the starter](starter/main.py) and [synthetic example](examples/input.json). Define a minimal versioned event schema and retention policy. Aggregate local synthetic events before building charts.
4. Implement one criterion at a time. Use [VALIDATION.md](VALIDATION.md) to collect evidence, including failing and boundary cases.
5. Follow the [submission guide](../../../handbook/SUBMITTING.md); never submit restricted course material or credentials.

## Tools and first milestone

Python 3.12+ and its standard library. No paid API is required for the base exercise.

Return local duration summaries without note content or identity fields.

Expected behavior: The synthetic daily total is 30 minutes. Export contains only the documented fields; deletion removes stored events and derived data.

The starter function intentionally raises `NotImplementedError`. Import it into your own standard-library tests; use `python -m unittest discover -s tests` after creating your tests.

## Ready for review

Include setup instructions, checks and observed results, design tradeoffs, all declared data/network/file behavior, AI assistance disclosure, and an exact 40-character solution commit SHA. An issue claim is optional coordination, not exclusive ownership or verification.
