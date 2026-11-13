# A08 threat model worksheet

## Decision
Default: do not execute submissions. State whether this should ever change and why.

## Assets and actors
List secrets, host resources, contributor data, reviewers and abuse actors.

## Trust boundaries
Trace upload → metadata triage → review → reject/quarantine/archive. Identify who authorizes each transition.

## Hypothetical isolation
Compare disposable hosts, no secrets, denied network, quotas, timeouts and cleanup. Explain residual risks and why a container alone is insufficient.

## Tabletop evidence
For each scenario in VALIDATION.md record decision, control, remaining risk and owner. Never execute payloads.

## Open questions
Cost, abuse response, auditability, consent, failure recovery and a decision to decline execution.
