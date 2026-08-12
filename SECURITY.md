# Security Policy

Security is part of the product design of Maestro Forge.

## Reporting a vulnerability

Do **not** open a public issue for a vulnerability that could put contributors or users at risk. Use GitHub private vulnerability reporting when enabled, or contact the repository maintainers through the private security contact published by Silentium Labs.

Do not include live credentials, student private data, or weaponized proof-of-concept material in a public report.

## Untrusted contribution policy

All community pull requests are untrusted until reviewed and merged.

Maintainers must not:

- execute unknown contributor binaries;
- run community PR code on a self-hosted runner;
- expose repository or organization secrets to PR code;
- execute PR-head code from a privileged `pull_request_target` workflow;
- approve opaque, obfuscated, or unexplained payloads;
- merge changes to security-critical files without explicit code-owner review.

## Defense in depth

The intended GitHub configuration requires:

- protected default branch / ruleset;
- pull requests before merge;
- code-owner review for sensitive paths;
- required status checks;
- secret scanning and push protection where available;
- CodeQL/code scanning where supported;
- dependency review for dependency-changing pull requests;
- no force pushes or branch deletion on the default branch;
- GitHub-hosted runners only for repository automation unless a future threat model explicitly approves something else.

## Malware and suspicious submissions

Maintainers may close or quarantine a submission if it contains:

- unexplained binaries;
- obfuscated scripts;
- encoded payload blobs without a documented educational reason;
- credential theft behavior;
- persistence or startup modification behavior;
- downloader/dropper behavior;
- unauthorized data collection or exfiltration;
- destructive file operations unrelated to the challenge;
- hidden network callbacks;
- dependency confusion or typosquatting indicators.

A closed submission may be preserved privately as evidence if abuse is suspected.

## No security guarantee

Review and automated scanning reduce risk but cannot guarantee that software is free of vulnerabilities or malicious behavior. Users should still inspect and understand code before running it in sensitive environments.
