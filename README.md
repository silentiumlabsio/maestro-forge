<p align="center">
  <img src="docs/assets/brand/forge-mark.svg" width="92" alt="Maestro Forge mark">
</p>

# Maestro Forge

**Start building:** [24 challenge packages](challenges/README.md) · [First PR walkthrough](first-pr-sandbox/README.md) · [Starter kits](starter-kits/README.md) · [How to submit](handbook/SUBMITTING.md) · [Video demo path](handbook/DEMO.md)

**Learn. Build. Contribute. Securely.**

Maestro Forge is an independent open-source community ecosystem for Maestro students, **created and maintained by Silentium Labs**.

> Maestro Forge is not an official Maestro product or repository. No sponsorship, partnership, endorsement, certification, or official affiliation is implied.

## What you can do in the Forge

- **Build:** complete 24 official launch challenges, use dependency-light starter kits, join community projects, or practice a first pull request.
- **Learn:** follow five challenge-linked paths; use original guides, cheat sheets, code patterns, the Git/GitHub Learning Center, and the Secure Coding Cookbook.
- **Experiment:** publish provider-neutral Prompt Lab entries, reproducible AI experiments, and blameless Failure Lab writeups.
- **Collaborate:** propose projects and ideas, opt in to Find a Builder, request reviews, recruit roles, or submit a community request.
- **Share:** submit reviewed project metadata to Built in the Forge, plus architecture, build journals, original notes, and documentation.
- **Grow:** assemble an evidence-based Forge Passport, skill graph, achievement record, and portable Markdown/JSON portfolio.
- **Protect:** contribute through zero-trust review, provenance, privacy, quarantine, revocation, and incident-response controls.

Explore the [Maestro Forge community platform](https://silentiumlabsio.github.io/maestro-forge/). The GitHub Pages hub is built from the structured data in [`docs/data`](docs/data) and publishes from `/docs`.

Launch state and later phases are documented in [`ROADMAP.md`](ROADMAP.md). The repository does not present later-phase architecture as shipped functionality.

## Official launch challenges

The catalog contains **24 Silentium Labs-authored and curated briefs**:

| Track | Count | Designed for | Start |
|---|---:|---|---|
| Beginner | 8 | Fundamentals, clear requirements, small attack surfaces | [`challenges/beginner`](challenges/beginner) |
| Intermediate | 8 | Persistence, APIs, richer state, testing | [`challenges/intermediate`](challenges/intermediate) |
| Advanced | 8 | Architecture, AI reliability, security, privacy, evaluation | [`challenges/advanced`](challenges/advanced) |

Multiple builders may solve the same challenge. Community challenge proposals move through **Proposal → Review → Beta → Community Challenge**; they do not become official Silentium Labs challenges automatically.

To claim a challenge, open the **Claim a challenge** issue form, build in your own repository or fork, and submit exact-commit evidence for review.

## Fair skill recognition

AI assistance is allowed. Maestro Forge does not use AI-generated-code detectors for scoring or accusations and does not score which AI a builder used.

| Review area | Points |
|---|---:|
| Build Review | 70 |
| Explain | 10 |
| Debug | 10 |
| Adapt | 10 |

A working build may be **Build Reviewed**. It is not automatically **Skill Verified**. Top skill recognition requires the builder to explain, debug, and adapt their own exact submission.

Paid AI subscriptions, expensive APIs or models, special hardware, GPUs, completion speed, followers, stars, likes, raw commit count, and GitHub account age do not determine skill ranking. Read [`SKILL_VERIFICATION.md`](SKILL_VERIFICATION.md), [`AI_ASSISTANCE_POLICY.md`](AI_ASSISTANCE_POLICY.md), and [`RESOURCE_FAIRNESS.md`](RESOURCE_FAIRNESS.md).

## Security architecture

Every community contribution and external link is untrusted until reviewed.

- Student applications stay in contributor-owned repositories by default.
- Challenge solutions stay in contributor forks or repositories.
- Forge stores curated metadata, links, screenshots, documentation, evidence, approved educational content, and platform code.
- Launch CI does not automatically execute arbitrary community project or solution code.
- No self-hosted Silentium Labs or maintainer machine runs unknown community code.
- The privileged pull-request metadata gate never checks out or executes contributor-controlled content.
- No repository secrets are exposed to untrusted pull requests.
- Verification binds to the exact challenge version, rubric version, repository URL, commit SHA, reviewer, date, and score breakdown.
- Projects can move through Untrusted, Metadata Reviewed, Scanned, Human Reviewed, Verified, Quarantined, Revoked, and Archived states.

Review and scanning reduce risk; they never guarantee that content is free of vulnerabilities or malicious behavior. Read [`SECURITY.md`](SECURITY.md), [`UNTRUSTED_CODE_POLICY.md`](UNTRUSTED_CODE_POLICY.md), and [`docs/SECURITY_MODEL.md`](docs/SECURITY_MODEL.md).

## Contribute

Code is only one path. Documentation, design, accessibility, testing, translation of original Forge material, project planning, reviews, prompts, experiments, architecture, original notes, and community help are first-class contributions.

1. Read [`CONTRIBUTING.md`](CONTRIBUTING.md) and the relevant submission standard.
2. Claim or open an issue when practical.
3. Work in a fork and keep one focused goal per pull request.
4. Declare dependencies, network access, file behavior, subprocesses, credentials, data collection, and external links.
5. Wait for required checks and human review. Open pull requests remain untrusted.

New contributors can practice in the non-executable [`first-pr-sandbox`](first-pr-sandbox). Major platform changes use numbered [`RFCs`](rfcs).

## Static-first repository map

```text
maestro-forge/
├── .github/                  Issue forms, ownership, and metadata-only workflows
├── challenges/              24 versioned launch briefs
├── docs/                    GitHub Pages platform and structured catalogs
├── schemas/                 Project, builder, and verification schemas
├── learning-paths/          Five challenge-linked journeys
├── resources/               Original, public-safe learning material
├── prompt-lab/ experiments/ failure-lab/
├── incubator/ builders/ showcase/ trials/
├── first-pr-sandbox/        Non-executable onboarding area
├── starter-kits/            Dependency-light Python, JS, and web foundations
├── templates/               Planning, review, and contribution templates
└── scripts/                 Static validation and security triage only
```

## Privacy and academic integrity

Use GitHub handles by default. Legal names, personal email, phone numbers, addresses, birth dates, student IDs, grades, and precise locations are not required. Screenshots must be reviewed for private or sensitive information.

Maestro Forge is not an answer bank. Do not submit restricted Maestro course material, exams, answer keys, copied textbook pages, pirated content, or prohibited graded solutions. Use original or synthetic material. Read [`PRIVACY.md`](PRIVACY.md) and [`ACADEMIC_INTEGRITY.md`](ACADEMIC_INTEGRITY.md).

## Vulnerability reporting

Do not open a public issue for a vulnerability that may put users or contributors at risk. Follow [`SECURITY.md`](SECURITY.md) and use GitHub private vulnerability reporting after the owner enables it.

## Attribution and license

**Created and maintained by Silentium Labs.** Community contributors retain visible authorship credit for accepted work under the [MIT License](LICENSE).
