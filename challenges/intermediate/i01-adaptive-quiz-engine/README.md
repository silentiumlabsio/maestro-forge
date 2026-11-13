# I01 — Adaptive Quiz Engine

Build a quiz engine that changes question order or repetition based on previous answers.

[Full brief](challenge.md) · [Validation checklist](VALIDATION.md) · [All challenges](../../README.md)

## Start here

1. Read the brief's acceptance criteria and security requirements. This package is scaffolding, not a completed solution.
2. Create your own solution repository. Copy this folder and the [python kit](../../../starter-kits/python/README.md) if helpful; keep your executable solution outside Forge.
3. Open [the starter](starter/main.py) and [synthetic example](examples/input.json). Define priority rules, test selection in memory, then add validated JSON persistence.
4. Implement one criterion at a time. Use [VALIDATION.md](VALIDATION.md) to collect evidence, including failing and boundary cases.
5. Follow the [submission guide](../../../handbook/SUBMITTING.md); never submit restricted course material or credentials.

## Tools and first milestone

Python 3.12+ and its standard library. No paid API is required for the base exercise.

Choose a valid question ID with a documented priority and deterministic tie breaker.

Expected behavior: q1 is selected before q2 under a missed-first rule; saving and reloading history preserves that decision.

The starter function intentionally raises `NotImplementedError`. Import it into your own standard-library tests; use `python -m unittest discover -s tests` after creating your tests.

## Ready for review

Include setup instructions, checks and observed results, design tradeoffs, all declared data/network/file behavior, AI assistance disclosure, and an exact 40-character solution commit SHA. An issue claim is optional coordination, not exclusive ownership or verification.
