# B07 — Secret-Safe Config Demo

**Difficulty:** Beginner
**Version:** 1.0.0
**Category:** Security
**Created by:** Silentium Labs
**Status:** Open

## Start package

Open [README.md](README.md) for tools, a first milestone and submission steps; [VALIDATION.md](VALIDATION.md) contains synthetic examples and boundary checks.

## Mission

Build a tiny app that reads configuration from environment variables without hardcoded secrets.

## Skills

- Environment Variables
- Security
- Documentation

## Suggested languages

- Python
- JavaScript

## Acceptance criteria

- [ ] Uses an environment variable for a fake API key
- [ ] Includes `.env.example` without a real secret
- [ ] Fails safely when config is missing
- [ ] Documents why secrets should not be committed

## Security requirements

- [ ] Never include a real credential
- [ ] Do not print the secret to logs

## Deliverables

- Source code.
- README with setup and usage.
- Short explanation of design decisions.
- Tests where appropriate for the difficulty.
- Completed pull-request security declaration.

## Stretch goals

Add one meaningful improvement beyond the acceptance criteria. Explain why it improves the project rather than adding complexity for its own sake.

## Claim this challenge

Open a **Claim a challenge** issue and reference `B07`. Multiple students may solve the same challenge; different approaches are welcome.

## Review standard

A working result is not enough by itself. Reviewers also consider readability, safety, documentation, input handling, and whether the solution matches its declared behavior.

## Skill verification hooks

- **Explain:** Walk through one reviewer-selected function, component, data flow, or security decision from the submitted implementation.
- **Debug:** Diagnose and fix one reviewer-selected failing behavior or edge case in the exact submitted commit.
- **Adapt:** Implement one small, challenge-relevant requirement change without replacing the whole solution.

Verification uses rubric version 1.0.0 and must bind to the exact repository URL and 40-character commit SHA.

## Changelog

- 1.0.0 — Official launch version.
