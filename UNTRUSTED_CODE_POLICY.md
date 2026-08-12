# Untrusted Code and External Content Policy

Community code, repositories, links, screenshots, archives, and metadata are untrusted until reviewed. Maestro Forge does not automatically execute arbitrary community project or challenge-solution code in core CI at launch.

## Repository boundary

Student applications and challenge solutions remain in contributor-owned repositories by default. Forge stores reviewed metadata, exact repository and commit references, screenshots, documentation, verification records, and approved educational content. Only explicitly reviewed source belongs in the core repository.

Never run code directly from an open pull request or linked repository merely because it appears in the Maestro Forge community.

## Default-block and escalate

Reject or escalate unexplained binaries, installers, opaque or password-protected archives, nested archives, obfuscated payloads, suspicious symlinks, path traversal, Git submodules without approval, huge vendored dependency trees, executable-permission changes without justification, cryptominers, credential theft, reverse shells, persistence, phishing kits, spyware, destructive behavior, or intentionally hidden network activity.

Extension rules are only one signal and never constitute complete malware detection.

## External links and screenshots

Do not automatically download, iframe, execute, or inherit claims from submitted URLs. Review URLs before featuring them and use safe link behavior. Review screenshots for secrets, email addresses, private repository names, tabs, local paths, IP addresses, student information, and other sensitive content.

## Trust changes

Catalog entries may be Untrusted, Metadata Reviewed, Scanned, Human Reviewed, Verified, Quarantined, Revoked, or Archived. A new project commit never automatically inherits the trust or verification of an older reviewed commit.

Review and scanning reduce risk; they do not guarantee that software is vulnerability-free or malware-free.
