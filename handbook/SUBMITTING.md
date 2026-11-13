# Build, document and submit

## Keep your solution yours

Create a separate repository for the challenge implementation. Copy the relevant scaffold and kit; include the license/credit for reused material. Never open a Forge PR containing a full challenge solution, binaries, secrets or restricted coursework. A claim issue is optional and does not reserve a challenge.

## Prepare review evidence

1. Name the challenge ID and brief version.
2. Provide setup and exact local test commands, runtime versions and expected outputs. A reviewer should not need a paid account.
3. Complete each acceptance criterion and validation case. Mark anything untested honestly. Use [the evidence template](../templates/SUBMISSION_EVIDENCE.md).
4. Describe architecture, limitations and AI assistance under [the policy](../AI_ASSISTANCE_POLICY.md).
5. Declare network destinations, file reads/writes, subprocesses, credentials, telemetry, listening ports and every dependency. “None” is a valid explicit answer.
6. Commit your solution and copy its exact 40-character SHA. Remove sensitive information from screenshots, logs and repository history before publishing; rotate exposed credentials.
7. Open [Submit a student project](https://github.com/silentiumlabsio/maestro-forge/issues/new?template=project-submission.yml) for catalog consideration, or [Request a review](https://github.com/silentiumlabsio/maestro-forge/issues/new?template=review-request.yml) for focused help. Include the repository URL and commit.

## What happens next

Maintainers triage metadata and external links as untrusted; review is neither immediate nor guaranteed. Approved metadata may enter the catalog through a focused PR using [the project schema](../schemas/project.schema.json). Do not self-assign Verified status. Build Review and Explain/Debug/Adapt are separate under [the rubric](../SKILL_VERIFICATION.md). Later commits need their own review.

If you change the solution after submission, provide the new SHA and describe the delta. A disagreement belongs in a respectful evidence-based review discussion, not a fabricated score or accusation. Private security issues follow [SECURITY.md](../SECURITY.md).
