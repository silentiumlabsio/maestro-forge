# First PR Sandbox

Practice fork → branch → edit → commit → pull request → review → merge using Markdown only. Allow about 20–40 minutes; no terminal, package installation, scripts or credentials are needed. A GitHub account and browser are enough.

## Choose your practice route

**Private rehearsal in your own fork:** open a PR from your practice branch into your fork's main branch. You can inspect and merge your own practice PR. This does not create a contribution or verification in Forge. A second person is needed for an independent review.

**Community contribution:** open a focused documentation PR to this repository. A maintainer decides whether and when to merge it. A merge is never guaranteed; do not create duplicate filler contributions.

## Browser walkthrough

1. Open [the Forge repository](https://github.com/silentiumlabsio/maestro-forge) and choose **Fork**. Keep the repository name. Public commits may expose your Git author email; check your GitHub email privacy settings before committing.
2. In **your fork**, select the branch menu, type a new branch name such as `practice/docs-card`, and create it from main. Confirm the branch selector shows your practice branch.
3. Open [the exercise](exercises/clear-instructions.md). Read the task and copy [the practice card](templates/practice-card.md) into a new Markdown file under `first-pr-sandbox/practice/`, named with your public GitHub handle or another non-identifying unique name. Replace the prompts with original, public-safe text. Do not edit another learner's file.
4. Use GitHub's pencil or **Add file** editor. Preview the Markdown. Compare your work with [the checklist](CHECKLIST.md). Make only this small change.
5. Choose **Commit changes**, describe the edit (for example, “Clarify a documentation practice step”), and commit to your practice branch. A commit records the change; it is not a PR.
6. Choose **Compare & pull request**. Check the base carefully: your fork's main for rehearsal, or `silentiumlabsio/maestro-forge:main` for a genuine contribution. The head is your fork and practice branch. Paste [the PR text template](templates/pull-request.md). Inspect **Files changed** before submitting.
7. Use [the review guide](REVIEW.md). A reviewer comments on clarity, accuracy and scope without running anything. For rehearsal you may self-check, but you cannot approve your own PR as an independent reviewer.
8. Address feedback by editing the same branch and adding a new commit. The PR updates automatically. Do not open another PR for the correction.
9. Once required checks and review are satisfied, an authorized person merges. For rehearsal that is you; upstream it is a maintainer. Delete only your merged practice branch if desired, then sync your fork.

## Safe scope

Only original Markdown practice cards belong here. No executable code, scripts, HTML, remote embeds, archives, hidden payloads, personal details or restricted course content. Screenshots are unnecessary. The exercise is complete when you can explain the branch comparison, review feedback and merge result—not when a badge is awarded.

Stuck? See [troubleshooting](TROUBLESHOOTING.md) and the [Git guide](../resources/github-learning-center.md). Read [Contributing](../CONTRIBUTING.md) before an upstream PR.

## Practice review decisions

The website sandbox includes synthetic exercises for responding to feedback, updating the same PR branch, selecting your fork as the base, and combining documentation edits without conflict markers. These local checks do not change GitHub. Use the walkthrough above for real practice and request review of each new snapshot.
