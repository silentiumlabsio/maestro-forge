# A08 — Sandbox Design Challenge

**Difficulty:** Advanced
**Version:** 1.0.0
**Category:** Security
**Created by:** Silentium Labs
**Status:** Open

## Start package

Open [README.md](README.md) for tools, a first milestone and submission steps; [VALIDATION.md](VALIDATION.md) contains synthetic examples and boundary checks.

## Mission

Design and prototype a safe evaluation architecture for untrusted student code without executing submissions on maintainer infrastructure.

## Skills

- Threat Modeling
- Containers
- Security Architecture

## Suggested languages

- Documentation
- Optional Python

## Acceptance criteria

- [ ] Threat model
- [ ] Isolation boundaries
- [ ] Proposed execution lifecycle
- [ ] Abuse and resource-exhaustion controls
- [ ] Decision on whether execution should be offered at all

## Security requirements

- [ ] Do not deploy public untrusted-code execution as part of the challenge
- [ ] Prototype must default to non-execution
- [ ] No self-hosted runner requirement

## Deliverables

- Source code.
- README with setup and usage.
- Short explanation of design decisions.
- Tests where appropriate for the difficulty.
- Completed pull-request security declaration.

## Stretch goals

Add one meaningful improvement beyond the acceptance criteria. Explain why it improves the project rather than adding complexity for its own sake.

## Claim this challenge

Open a **Claim a challenge** issue and reference `A08`. Multiple students may solve the same challenge; different approaches are welcome.

## Review standard

A working result is not enough by itself. Reviewers also consider readability, safety, documentation, input handling, and whether the solution matches its declared behavior.

## Skill verification hooks

- **Explain:** Walk through one reviewer-selected function, component, data flow, or security decision from the submitted implementation.
- **Debug:** Diagnose and fix one reviewer-selected failing behavior or edge case in the exact submitted commit.
- **Adapt:** Implement one small, challenge-relevant requirement change without replacing the whole solution.

Verification uses rubric version 1.0.0 and must bind to the exact repository URL and 40-character commit SHA.

## Changelog

- 1.0.0 — Official launch version.
