# Organization Notes

This project follows a layer-based static web layout.

- `public/` contains everything the browser should load directly.
- `src/` contains editable source styles and scripts.
- Asset files live in `public/assets/` and use lowercase kebab-case names.

When adding content, prefer extending existing folders rather than creating new root-level files.
