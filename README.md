# Resume

Layer-based static website structure for a resume and hobbies portfolio.

## Folder Layout

- `public/`: deployable pages and static assets
- `public/index.html`: primary resume page
- `public/hobbies/index.html`: hobbies subpage
- `public/assets/images/`: all image assets
- `public/assets/icons/`: favicon and icons
- `public/assets/docs/`: downloadable docs (PDF/DOCX) if added later
- `src/styles/`: editable CSS files
- `src/scripts/`: editable JavaScript files
- `docs/`: project notes and organization guidance

## Naming Conventions

- Use lowercase kebab-case for filenames (example: `inter-soccer-champ.jpg`)
- Avoid spaces in file names and URLs
- Keep one canonical copy of each asset under `public/assets`

## Where To Add New Files

- New page: add HTML in `public/` (or nested route folder)
- New image: place in `public/assets/images/`
- New downloadable file: place in `public/assets/docs/`
- New global style: add in `src/styles/` and link from page HTML
- New site script: add in `src/scripts/` and include in page HTML
