# Copilot Instructions for EMC Angular Project

## Project Overview
- This is an Angular application generated with Angular CLI v21.0.1.
- The main app code is in `src/app/`, organized by feature: `login/`, `registration/`, and `shared/`.
- Angular Material modules are consolidated in `src/app/shared/material-module.ts`.
- Theming is managed via `src/custom-theme.scss`.

## Key Workflows
- **Start dev server:** `ng serve` (see also `npm start`)
- **Build:** `ng build` (outputs to `dist/`)
- **Unit tests:** `ng test` (uses Vitest)
- **Scaffold component:** `ng generate component <name>`

## Project Structure & Patterns
- **Components:** Each feature (e.g., login, registration) has its own folder with `.ts`, `.html`, and `.css` files.
- **Routing:** App routes are defined in `src/app/app.routes.ts`.
- **Configuration:** App-wide config is in `src/app/app.config.ts`.
- **Material Modules:** Import Angular Material components only via `shared/material-module.ts`.
- **Styling:** Use `custom-theme.scss` for global theming; prefer component-level `.css` for local styles.

## Conventions
- Use Angular CLI for all scaffolding and build/test commands.
- Keep feature logic isolated in its respective folder.
- Shared modules/utilities go in `src/app/shared/`.
- Do not import Angular Material modules directly in feature modules—use the shared module.

## Integration & Dependencies
- Angular Material is used for UI components.
- No backend/API integration is present by default; add services in `src/app/shared/` if needed.

## Examples
- To add a new feature, create a folder in `src/app/`, scaffold with Angular CLI, and update `app.routes.ts`.
- To add a Material component, import it in `shared/material-module.ts` and use in your feature.

## References
- See [README.md](../../README.md) for more CLI commands and details.
- Key files: `src/app/app.ts`, `src/app/app.routes.ts`, `src/app/shared/material-module.ts`, `src/custom-theme.scss`.
