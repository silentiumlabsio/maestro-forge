# A08 — Sandbox Design Challenge

Design and prototype a safe evaluation architecture for untrusted student code without executing submissions on maintainer infrastructure.

[Full brief](challenge.md) · [Validation checklist](VALIDATION.md) · [All challenges](../../README.md)

## Start here

1. Read the brief's acceptance criteria and security requirements. This package is scaffolding, not a completed solution.
2. Create your own solution repository. Copy this folder and the local design template; keep your executable solution outside Forge.
3. Open [the starter](starter/THREAT_MODEL.md) and [synthetic example](examples/input.json). Copy the local threat-model template. Compare metadata-only review with a hypothetical disposable evaluator; justify whether execution should exist at all.
4. Implement one criterion at a time. Use [VALIDATION.md](VALIDATION.md) to collect evidence, including failing and boundary cases.
5. Follow the [submission guide](../../../handbook/SUBMITTING.md); never submit restricted course material or credentials.

## Tools and first milestone

A Markdown editor; no runtime or container required. No paid API is required for the base exercise.

Write a decision record and non-executing lifecycle diagram; code is optional.

Expected behavior: The default decision is non-execution. A tabletop walk-through records reject/quarantine decisions and unanswered operational risks.

Complete the design document and review the text-only scenarios. No execution infrastructure is part of this exercise.

## Ready for review

Include setup instructions, checks and observed results, design tradeoffs, all declared data/network/file behavior, AI assistance disclosure, and an exact 40-character solution commit SHA. An issue claim is optional coordination, not exclusive ownership or verification.

## Guided practice

Use [progressive hints and practice cases](PRACTICE.md) to compare predictions with actual observations without copying a solution.
