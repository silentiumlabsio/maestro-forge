# GitHub Owner Setup

Repository settings are not activated by source files. Complete and verify these steps after the repository has an actual owner and before announcing launch.

## 1. Owner identity

Launch ownership is assigned to `@silentiumlabsio` in `.github/CODEOWNERS`. If a dedicated Silentium Labs maintainer team is introduced later, update and review all protected-path ownership entries.

## 2. Publish GitHub Pages

In **Settings → Pages**, select **Deploy from a branch**, branch `main`, folder `/docs`, then save. Record the real Pages URL in the repository About panel after the first deployment. The site derives repository links from the `*.github.io/<repository>/` URL and does not contain a placeholder owner or domain.

## 3. Protect `main`

In **Settings → Rules → Rulesets**, create an active branch ruleset targeting the default branch:

- require a pull request before merging;
- require at least one approving review;
- require review from Code Owners;
- dismiss stale approvals when new commits are pushed;
- require approval of the most recent reviewable push where the maintainer workflow supports it;
- require all conversations to be resolved;
- require the `policy` and `validate` status checks after each has run at least once;
- block force pushes and branch deletion;
- do not give community roles bypass permission.

For changes to workflows, ownership, security policy, release configuration, or security scripts, use two trusted approvals when the maintainer team can support it.

## 4. Configure security features

In **Settings → Code security**, enable the dependency graph, Dependabot alerts, Dependabot security updates, private vulnerability reporting, and secret scanning/push protection wherever they are available for the repository and account plan. Enable CodeQL default setup only for languages GitHub detects and supports in the core repository. Do not claim a control is active until its settings page confirms it.

## 5. Restrict Actions

In **Settings → Actions → General**:

- keep the default workflow token read-only;
- permit only actions required by the reviewed workflow files;
- require approval for fork pull-request workflows from outside collaborators;
- never attach repository secrets to untrusted pull-request jobs;
- use GitHub-hosted runners only for launch automation.

The `pull_request_target` metadata gate must continue to avoid checkout, download, rendering, or execution of contributor-controlled content.

## 6. Create labels

Create: `beginner`, `intermediate`, `advanced`, `good-first-build`, `challenge-claim`, `challenge-proposal`, `project-submission`, `security-review`, `documentation`, `accessibility`, `design`, `translation`, `review-request`, `builder-profile`, `idea`, `incubator`, `resource`, `dependencies`, `quarantined`, and relevant language/category labels.

## 7. Community surfaces

Use Issues for structured intake and pull requests for repository changes. Enable Discussions only if maintainers can moderate it and use it for open-ended help, ideas, and build journals without duplicating issue intake. Do not present Discussions as active before enabling it.

## 8. Release integrity

For official releases, record the exact source commit, release notes, and checksums. Generate an SBOM when the core repository gains packaged dependencies. Use signed tags or attestations when the maintainer release process is ready and document what is actually verified.
