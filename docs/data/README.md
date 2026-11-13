# Site data

The site reads these JSON arrays without a backend. Challenge records point to the brief, start guide, incomplete starter and validation guide, and include the synthetic example shown on the detail page. Learning paths refer to stable challenge IDs.

Resources and ecosystem entries link to repository guides, site routes or existing issue forms. Projects, builders, ideas and verification records remain empty until real submissions complete their documented review process. Achievement entries describe rules, not earned awards.

From the repository root, run `python scripts/validate_catalog.py`, `python scripts/validate_public_repo.py` and `python scripts/validate_experience.py`. These read metadata and documentation; they do not execute student solutions. Maintainers should also run the browser QA described in [the maintenance guide](../../handbook/MAINTENANCE.md).
