# Changelog

## [v0.2.0] — 2026-04-20

### Added

- Introduce two-layer layout: dark outer background with film grain noise texture and cream inner card with reveal animation on load
- Add fixed navigation bar with dot-prefixed section links
- Add footer with copyright year
- Add HTML-tag styled section titles with decorative horizontal rule
- Build out hero section with typewriter role animation, profile photo, contact icon links, and resume download button
- Build out about section with expertise summary, GitHub contributions calendar, and tech stack by category
- Add certificates section with card grid fetched from API
- Redesign project cards with image area, plain tag list, and subtle rounded corners
- Constrain section content to centered two-thirds layout with full-width section titles

### Fixed

- Remove duplicate font variable definition in global CSS
- Correct CORS allowed origins in FastAPI to include production domain
- Fix stale ref state in typewriter hook when dependencies change
- Move decorative nav dots outside link accessible names

## [v0.1.5] — 2026-04-18

### Added

- Add Jest test suite with tests for Hero, ProjectCard, and ProjectsGrid components
- Add pytest suite for the FastAPI backend
- Add GitHub Actions CI workflow with separate frontend and backend jobs

## [v0.1.3] — 2026-04-18

### Changed

- Simplify README to title and one-line description

## [v0.1.2] — 2026-04-18

### Changed

- Gitignore AI agent files and internal planning documents
- Remove unused default Next.js assets from the public directory

## [v0.1.1] — 2026-04-18

### Fixed

- Fetch projects client-side to fix "No projects found" on Vercel deployment

## [v0.1.0] — 2026-04-17

### Added

- Add portfolio homepage with hero section: circular profile photo, name, and email/GitHub/LinkedIn contact links
- Add responsive project cards grid with tags, powered by a FastAPI backend
- Deploy on Vercel using Python serverless functions for the API

[v0.2.0]: https://github.com/wiraszka/adam-wiraszka-portfolio/compare/v0.1.5...v0.2.0
[v0.1.5]: https://github.com/wiraszka/adam-wiraszka-portfolio/compare/v0.1.4...v0.1.5
[v0.1.3]: https://github.com/wiraszka/adam-wiraszka-portfolio/compare/v0.1.2...v0.1.3
[v0.1.2]: https://github.com/wiraszka/adam-wiraszka-portfolio/compare/v0.1.1...v0.1.2
[v0.1.1]: https://github.com/wiraszka/adam-wiraszka-portfolio/compare/v0.1.0...v0.1.1
[v0.1.0]: https://github.com/wiraszka/adam-wiraszka-portfolio/releases/tag/v0.1.0
