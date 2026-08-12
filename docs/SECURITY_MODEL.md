# Maestro Forge Security Model

## Objective

Allow open community contribution while minimizing the chance that malicious or compromised submissions harm students, maintainers, CI infrastructure, or downstream users.

## Trust zones

### Zone 0 — External / untrusted
Forks, issue links, open pull requests, uploaded artifacts, and external demos.

### Zone 1 — Reviewed source
Pull request source that has passed maintainer review but has not yet been merged.

### Zone 2 — Verified repository
Merged default-branch content that passed required policy and review gates.

### Zone 3 — Maintainer infrastructure
Workflow definitions, code ownership, release keys, security automation, repository settings, and credentials. Community PRs cannot modify this zone.

## Threats considered

- malicious source contribution;
- supply-chain dependency attacks;
- secrets committed by accident;
- CI privilege escalation;
- `pull_request_target` abuse;
- self-hosted runner compromise;
- binary payload substitution;
- obfuscated downloader behavior;
- unsafe project instructions convincing beginners to run unreviewed code;
- social engineering through issues and comments.

## Controls

### Branch and review
- PR required for default branch.
- Required maintainer/code-owner review.
- Required checks must pass.
- No force-push or deletion of default branch.

### CI isolation
- No self-hosted runner for community PRs.
- No secrets made available to untrusted PR execution.
- `pull_request_target` may be used only for metadata operations that do not checkout or execute contributor code.

### Source policy
- Source-first contributions.
- Suspicious binaries blocked.
- Obfuscation requires an explicit, reviewed educational reason.
- Dependencies declared and reviewable.

### User guidance
- Open PRs are labeled untrusted.
- Students are told not to run unmerged submissions by default.
- Verified catalog content points only to merged repository paths or maintainer-reviewed external resources.

## Incident response

1. Disable or revert affected content.
2. Preserve evidence privately.
3. Revoke exposed credentials if any.
4. Audit related commits, workflows, and dependencies.
5. Publish a concise advisory when users may have been exposed.
6. Add a regression control before restoring the feature.
