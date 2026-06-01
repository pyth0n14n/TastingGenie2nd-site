# AGENTS.md

## Project overview

- This repository hosts a static GitHub Pages site for the Japanese sake tasting note Android app.
- The site is used for app introduction, closed testing information, privacy policy, and related public documentation.
- The app is privacy-oriented: current app data is stored locally, Android Auto Backup is disabled, and the current version does not send user-entered sake/review data to cloud servers.

## Tech stack

- Static HTML
- CSS
- Minimal JavaScript only when needed
- GitHub Pages
- GitHub Actions
- Node.js tooling for lint/format checks

## Design direction

- Calm, refined, Japanese-inspired visual style
- Suitable for a Japanese sake app
- Avoid loud advertising tone
- Avoid encouraging excessive drinking
- Prefer clear, readable, accessible pages
- Use shared CSS variables for theme colors when possible
- Do not hard-code repeated site-wide elements if a shared mechanism already exists

## Repository rules

- Keep changes small and focused.
- Do not rewrite unrelated files.
- Do not introduce frameworks unless explicitly requested.
- Do not add server-side components.
- Do not add tracking, analytics, external form submission, or third-party scripts without explicit approval.
- Do not commit generated build artifacts unless required for GitHub Pages operation.
- Do not store secrets or credentials.

## Validation commands

Before completing a task, run:

- `npm ci`
- `npm run check`

If only documentation changed and npm checks are irrelevant, state that clearly in the PR notes.

## GitHub Actions

- `static-check.yml` validates formatting, HTML, and CSS on PRs.
- `pages.yml` deploys the static site to GitHub Pages from main.
- The repository setting for Pages should use GitHub Actions as the source.

## Privacy policy constraints

- Do not weaken or contradict the privacy policy.
- The current version should state that user-entered data is not sent to external servers.
- If wording is changed, keep it conservative and accurate.

## Pull request notes

Each PR should summarize:

- What changed
- Why it changed
- How it was validated
- Any remaining manual GitHub setting required
