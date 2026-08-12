# Maestro Forge Skill Verification Framework

## Purpose

Maestro Forge must reward demonstrated engineering skill, not access to a stronger AI model, a better prompt, or copied code.

AI assistance is allowed. AI detection is not used as a scoring mechanism. The system instead separates **Build Quality** from **Verified Skill**.

## Core principle

A polished artifact proves that a build exists. It does not, by itself, prove the submitter understands or can maintain it.

Leaderboard-eligible challenge completions therefore use two stages:

1. **Build Review** — evaluate the submitted artifact.
2. **Skill Verification** — require the contributor to reason about, debug, and adapt their own submission.

## Score model

Total verified score: **100 points**.

### Build Review — 70 points

- Correctness and acceptance criteria: 25
- Testing and edge cases: 10
- Security and safe behavior: 10
- Code quality and maintainability: 10
- Documentation and reproducibility: 10
- Git/contribution hygiene: 5

### Skill Verification — 30 points

- Explain implementation decisions: 10
- Debug or diagnose a targeted failure: 10
- Adapt the solution to a new requirement: 10

A submission that has not completed Skill Verification is displayed as **Build Reviewed**, not as a fully **Skill Verified** score.

## Verification round

After Build Review, a maintainer creates a verification checkpoint tied to the exact submitted commit.

The checkpoint must include at least three of the following:

1. Explain a specific function, component, data flow, or design choice from the student's own code.
2. Identify what would break if a named line, condition, dependency, or configuration changed.
3. Fix a deliberately failing test or reproducible bug selected by the reviewer.
4. Implement a small requirement change without rewriting the entire project.
5. Explain one security risk in the current solution and how it is mitigated.
6. Add an edge case selected after submission.
7. Compare two implementation choices and justify the one used.

The reviewer should ask questions that are specific to the submitted implementation rather than generic textbook questions.

## Individualized variants

Where practical, official challenges should support small per-submission variants, such as:

- different input constraints;
- different data shapes;
- a newly required edge case;
- a changed API response shape;
- a new accessibility requirement;
- a different storage constraint;
- a new failure mode.

Variants reduce the value of copying a finished solution verbatim.

## AI policy

AI assistance is allowed for learning, debugging, brainstorming, and implementation. It is not penalized.

Contributors are responsible for every line they submit. They must be able to explain and safely modify their solution.

Do not use unreliable AI-generated-code detectors to determine scores or accuse contributors of cheating.

## Leaderboard eligibility

A completion may appear in the general showcase after normal review.

A numeric skill score, skill-ranked leaderboard position, or `Skill Verified` badge requires completion of the verification round.

This prevents a polished but unexplained submission from outranking a student who demonstrably understands their work.

## Team submissions

Team projects receive a project Build Review score. Individual Skill Verification is performed separately for each member who wants an individual verified score or badge.

## Reviewer integrity

- Use a published rubric.
- Do not award points based on reputation, follower count, school status, or AI tool choice.
- Record the reason for deductions.
- Allow one appeal/re-review for a scoring error.
- Avoid trick questions unrelated to the challenge objectives.
