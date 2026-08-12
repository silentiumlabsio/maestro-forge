# Forge Cheat Sheets

## Focused Git workflow

```text
fork → clone your fork → branch → edit → validate → commit → push → pull request → review → merge
```

- Sync before starting.
- Never commit `.env`, credentials, private data, build output, or dependency folders.
- Read every command before running it; avoid piping remote downloads into a shell.
- Keep commits understandable and one pull request focused on one goal.

## Pull-request security declaration

Document network access, file reads/writes, subprocesses, credentials, data collection, new dependencies, and external links. “None” is a valid answer; an omitted answer is not.

## Debug loop

Reproduce → minimize → observe → form one hypothesis → test it → fix the cause → add a regression check → document what changed.

## Markdown safety

Use original text, meaningful headings, descriptive link labels, alt text for informative images, and code fences with a language. Do not paste restricted course material or include secrets in screenshots.
