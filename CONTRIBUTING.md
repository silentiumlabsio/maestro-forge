# Contributing to Maestro Forge

Maestro Forge is designed to make a first open-source contribution approachable without lowering the security bar.

## Ways to contribute

- Complete a challenge.
- Improve a challenge.
- Add tests or documentation.
- Fix an issue.
- Propose a new challenge.
- Submit a student project.
- Improve accessibility or UX.

## Contribution flow

1. Open or claim an issue when practical.
2. Fork the repository and work from your fork.
3. Keep changes focused on one goal.
4. Never commit credentials, private data, API keys, tokens, or `.env` contents.
5. Document all dependencies and network access.
6. Do not include precompiled binaries unless a maintainer explicitly requested them.
7. Do not modify protected infrastructure files in a community PR.
8. Open a pull request using the repository template.
9. Wait for automated and human review before treating the submission as trusted.

## Protected community boundaries

Community pull requests must not modify these paths unless a maintainer explicitly asks for the change:

- `.github/workflows/**`
- `.github/CODEOWNERS`
- `SECURITY.md`
- `docs/SECURITY_MODEL.md`
- `scripts/security_*`
- release/signing configuration

## Executable and binary policy

Source-first contributions are required. The project does not accept unexplained `.exe`, `.dll`, `.msi`, `.scr`, `.apk`, `.ipa`, `.dmg`, `.pkg`, `.deb`, `.rpm`, `.jar`, `.class`, `.so`, `.dylib`, `.ps1`, `.bat`, `.cmd`, or password-protected archives from community submissions by default.

If a challenge genuinely requires a distributable artifact, maintainers should build it from reviewed source in a trusted release process.

## Dependency policy

- Prefer standard-library or well-established dependencies.
- Pin or lock dependencies where the ecosystem supports it.
- Explain why every new dependency is needed.
- Do not vendor large third-party dependency trees into the repo.
- Dependency additions can be rejected even when functionally correct.

## Security checklist

Every executable contribution must answer:

- Does it access the network?
- Does it read or write files?
- Does it execute subprocesses or system commands?
- Does it require credentials or API keys?
- Does it collect analytics or telemetry?
- Does it open a listening port?
- Which third-party packages does it use?

Undocumented behavior is grounds for rejection.

## Review status

Open pull requests are **not verified software**. Students should only run code from merged, reviewed repository content unless they understand the risks of evaluating untrusted source themselves.
