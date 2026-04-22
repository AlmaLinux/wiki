---
name: apply-prettier-format
description: Format files in this repository using Prettier to match the autofix.ci workflow. Use proactively before committing changes to Markdown, YAML, JSON, JS, or other Prettier-supported files, or when the user mentions formatting, Prettier, prettier --write, autofix.ci, or "Apply Prettier format".
---

# Apply Prettier Format

This repository runs [autofix.ci](https://autofix.ci) on every push and pull request. The workflow at `.github/workflows/prettier.yml` executes `npx prettier --write .` and, if anything changes, pushes a follow-up commit titled **"Apply Prettier format"**. Run Prettier locally before committing so the CI does not have to.

## Config

- Prettier is pinned via `devDependencies` in `package.json` (currently `^3.6.2`).
- Repository-wide settings live in `.prettierrc` (currently `{ "bracketSameLine": true }`).
- There is no `.prettierignore`; Prettier honors `.gitignore` by default.

## When to run

Run Prettier before committing any of the following:

- Markdown (`*.md`) — most changes in `docs/` fall here.
- YAML (`*.yml`, `*.yaml`) — e.g. workflows under `.github/`.
- JSON (`*.json`).
- JavaScript / Vue / CSS / Stylus used by VuePress.

Skip running Prettier for image-only commits or changes to files Prettier does not parse (e.g. `.webp`, `.svg`, shell scripts).

## Workflow

1. Ensure dependencies are installed (only needed once per clone or after `package.json` changes):

   ```bash
   npm ci
   ```

2. Format the file(s) you changed. Prefer scoping to the changed paths over the whole repo so unrelated formatting drift is not pulled into your commit:

   ```bash
   npx prettier --write path/to/changed-file.md
   ```

   For a broader sweep that matches CI exactly, use:

   ```bash
   npx prettier --write .
   ```

3. Verify nothing else changed unexpectedly:

   ```bash
   git status
   git diff
   ```

4. Stage and commit the formatted result together with your other changes. When the commit is purely a Prettier pass (rare, normally only needed to reconcile pre-existing drift), use the same commit subject CI uses:

   ```
   Apply Prettier format
   ```

## Notes

- Do not disable or bypass the autofix.ci workflow.
- If Prettier reformats files you did not touch, that is pre-existing drift — mention it to the user before committing so they can decide whether to include it or commit it separately.
- Check with `npx prettier --check <path>` if you only want to know whether a file needs formatting without modifying it.
