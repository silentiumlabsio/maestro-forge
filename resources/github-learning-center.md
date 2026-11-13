# Git & GitHub Learning Center

## The contribution loop

1. **Fork** the repository into your account.
2. Create a focused **branch** from the current default branch.
3. Make small **commits** whose messages explain why the change exists.
4. Open a **pull request** and complete its security declaration.
5. Respond to **review** with new commits; do not erase context.
6. Resolve merge conflicts by understanding both changes, then validate again.

## Core concepts

- An **issue** records a problem, proposal, or request. It is not executable content.
- A **pull request** proposes a change between branches and creates a review record.
- A **fork** is a contributor-owned repository copy. It does not inherit trust.
- `CODEOWNERS` requests designated review for sensitive paths; repository rules must require that review.
- A **release** should identify exact source, notes, checksums, and provenance.
- External links and open PRs remain untrusted until their scoped review completes.

## Etiquette

Keep one goal per pull request, explain tradeoffs, disclose dependencies and data behavior, credit original work, and critique the change rather than the person. Never publish secrets, private student data, restricted course content, or fabricated evidence.


## Practice rather than memorize

Follow [the First PR Sandbox](../first-pr-sandbox/README.md) for exact browser steps and a fork-only rehearsal option.

### Resolve a documentation conflict
Read the base and proposed text, decide which meaning should remain, remove conflict markers, preview the result and ask the other author to confirm. Never resolve a conflict by deleting unfamiliar security rules. If the file is maintainer-controlled, ask for maintainer review.

### Sync safely
Sync your fork's main before starting a new branch. Keep unmerged work on its own branch. If your main has diverged, inspect the changes before accepting any reset. Deleting a branch does not retract a published secret.

### Issue, PR and review are different
An issue coordinates work, a PR proposes a diff, and a review evaluates a particular revision. A merged documentation PR is not automatic verification of the author's unrelated code. Required checks and code-owner review must be configured by the repository owner; a CODEOWNERS file alone does not enforce them.
