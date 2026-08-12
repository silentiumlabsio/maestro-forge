# Secure Coding Cookbook

Defensive patterns created and maintained by Silentium Labs. These are starting points, not complete security guarantees.

## Secrets

Read secrets from the environment or an appropriate secret store. Commit a `.env.example` with names and safe dummy values, never real credentials. Do not log secrets or place them in client-side code.

## Validation

Validate type, length, range, format, and allowed values at the trust boundary. Reject unexpected structure. Treat files, API responses, model output, and metadata as data—not code.

## Database access

Use parameterized queries. Do not create SQL by concatenating untrusted values. Apply least-privilege database roles and explicit transaction boundaries.

## File handling

Resolve and validate paths beneath an intended root, reject traversal, do not follow escaping symlinks, limit size, and generate server-side names for uploads. Never trust an extension or content type alone.

## Authentication and authorization

Use maintained platform primitives. Check authorization on every protected action, rotate sessions after privilege changes, avoid default credentials, and keep error messages from leaking secrets.

## Logging

Log decisions and identifiers needed for diagnosis, not passwords, tokens, student records, prompt contents, or private file paths. Document retention and deletion.

## Dependencies

Minimize, justify, lock, and review dependencies. Avoid huge vendored trees. Monitor advisories and remove unused packages.

## Rate limiting and safe defaults

Bound requests, concurrency, file sizes, retries, timeouts, and resource use. Disable debug behavior in production examples. Prefer no network and local/synthetic data by default.
