# Reviewing a student build

Review a specific repository and exact commit. Treat links, files and submissions as untrusted. Begin with metadata and documentation; do not run contributor code in Forge CI or on a privileged machine. Follow [security guidance](../SECURITY.md) and [skill verification](../SKILL_VERIFICATION.md). This rubric does not replace verification requirements.

| Dimension | Evidence to request | Useful feedback |
|---|---|---|
| Behavior | Each acceptance criterion mapped to actual results | Name the missing case and observed difference |
| Reproducibility | Runtime, setup, exact commands, synthetic fixtures | Identify an ambiguous step; do not guess outcomes |
| Failure handling | Invalid input, recovery, boundaries | Ask what happens after the first failure |
| Safety and privacy | Declared data, file, network and dependency boundaries | Separate a documented limit from an implemented control |
| Accessibility | Keyboard journey, labels, focus and error recovery; applicability for CLI/design work | Name the blocked task and a correction |
| Understanding | Explanation of a tradeoff and a small adaptation | Ask the learner to explain their choice |
| Integrity | Sources, AI assistance and honest untested areas | Request attribution without inventing misconduct |

Use one outcome: **needs clarification**, **changes requested**, or **review complete for this scope and commit**. State whether you inspected source, read supplied evidence, or independently reproduced behavior. Never report an unrun check as passed. Review completion alone does not grant a Verified record.

Use [the feedback template](../templates/REVIEW_FEEDBACK.md). Distinguish blocking requirements from optional suggestions. Prefer actionable points over rewriting the solution. After changes, request the new SHA and inspect the delta; earlier evidence may no longer apply. Do not guarantee response times or approval.
