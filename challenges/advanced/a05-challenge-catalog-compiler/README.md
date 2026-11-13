# A05 — Challenge Catalog Compiler

Build a schema-driven compiler that validates challenge manifests and generates indexes/pages.

[Full brief](challenge.md) · [Validation checklist](VALIDATION.md) · [All challenges](../../README.md)

## Start here

1. Read the brief's acceptance criteria and security requirements. This package is scaffolding, not a completed solution.
2. Create your own solution repository. Copy this folder and the [python kit](../../../starter-kits/python/README.md) if helpful; keep your executable solution outside Forge.
3. Open [the starter](starter/main.py) and [synthetic example](examples/input.json). Write a schema and invalid fixtures first. Sort by stable IDs; use a text serializer without evaluating templates.
4. Implement one criterion at a time. Use [VALIDATION.md](VALIDATION.md) to collect evidence, including failing and boundary cases.
5. Follow the [submission guide](../../../handbook/SUBMITTING.md); never submit restricted course material or credentials.

## Tools and first milestone

Python 3.12+ and its standard library. No paid API is required for the base exercise.

Validate a manifest before deterministic catalog rendering; collect file-scoped errors.

Expected behavior: A valid manifest can render escaped text; two copies of DEMO-1 produce a duplicate-ID error and nonzero validation status.

The starter function intentionally raises `NotImplementedError`. Import it into your own standard-library tests; use `python -m unittest discover -s tests` after creating your tests.

## Ready for review

Include setup instructions, checks and observed results, design tradeoffs, all declared data/network/file behavior, AI assistance disclosure, and an exact 40-character solution commit SHA. An issue claim is optional coordination, not exclusive ownership or verification.
