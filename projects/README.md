# Community Project Metadata

Student application source stays in contributor-owned repositories by default. This directory is reserved for small, reviewed metadata records that conform to [`schemas/project.schema.json`](../schemas/project.schema.json).

Every published project must include an exact repository URL and 40-character commit SHA, a declared security profile, current trust state, and review evidence. A newer commit never inherits an older verification. Quarantined or revoked entries are removed from normal discovery while their audit record is preserved.

No community project is featured at launch; submit through the **Submit a student project** issue form.


## Submission checklist

Follow [Build, document and submit](../handbook/SUBMITTING.md). Include the exact commit, setup, synthetic demo input, validation results, license, dependency list, behavior declaration and known limits.

Open [the project form](https://github.com/silentiumlabsio/maestro-forge/issues/new?template=project-submission.yml). A maintainer triages the link, inspects source and evidence within the declared review scope, and decides whether to accept a metadata-only record. Source code stays in your repository. Submission is not approval, verification or a promise of immediate review.

Published metadata must retain provenance. When requesting an update, identify old and new commits and any changed behavior. Quarantine/revocation decisions follow the trust model; do not silently replace a reviewed SHA.
