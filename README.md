# AFG Carousel Content System

Static GitHub Pages package for the AFG content system.

## Pages

- Live Pages root: `https://googlcolor-hash.github.io/afg-carousel-content-system/`
- Live handoff: `https://googlcolor-hash.github.io/afg-carousel-content-system/production-handoff.html`
- Site map: `site-map.html`
- Main page: `index.html`
- Finished carousel example: `carousel-example.html`
- Production handoff: `production-handoff.html`
- Visual prompts page: `visual-prompts.html`
- Visual prompts: `visual-prompts.md`
- ComfyUI prompts page: `comfy-prompts.html`
- ComfyUI prompts: `comfy-prompts.md`
- ImageGen visual recipe: `visual-generation-recipe.md`
- Filled exports gallery: `exports-gallery.html`
- Legacy carousel 01 renderer: `carousel-export.html`
- Production renderer for all 3 carousels: `carousel-production.html`
- Exported carousel slides:
  - `exports/afg-carousel-01/`
  - `exports/afg-carousel-02/`
  - `exports/afg-carousel-03/`
  - site previews use `.jpg` for faster GitHub Pages loading
  - `.png` master exports are kept locally as archive/source files

## Site Route

Recommended reading order:

1. `site-map.html` - route and shortcuts.
2. `index.html#concept` - core concept and communication strategy.
3. `index.html#videos` - short video scripts.
4. `index.html#carousels` - carousel outlines.
5. `visual-prompts.html` - prompts for visual generation.
6. `comfy-prompts.html` - ComfyUI-ready production prompts and negative prompt.
7. `exports-gallery.html` - filled JPG carousel gallery.
8. `production-handoff.html` - status, QA notes, and next production steps.

## Local Preview

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:4173/index.html
http://127.0.0.1:4173/site-map.html
http://127.0.0.1:4173/carousel-example.html
http://127.0.0.1:4173/carousel-production.html
http://127.0.0.1:4173/production-handoff.html
http://127.0.0.1:4173/visual-prompts.html
http://127.0.0.1:4173/comfy-prompts.html
http://127.0.0.1:4173/exports-gallery.html
```

## Publish Notes

Recommended GitHub Pages settings:

- Source: deploy from branch
- Branch: `3130`
- Folder: `/root`

