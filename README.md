# AFG Carousel Content System

Static GitHub Pages package for the AFG content system.

## Pages

- Live Pages root: `https://googlcolor-hash.github.io/afg-carousel-content-system/`
- Live handoff: `https://googlcolor-hash.github.io/afg-carousel-content-system/production-handoff.html`
- Main page: `index.html`
- Finished carousel example: `carousel-example.html`
- Production handoff: `production-handoff.html`
- Visual prompts: `visual-prompts.md`
- Legacy carousel 01 renderer: `carousel-export.html`
- Production renderer for all 3 carousels: `carousel-production.html`
- Exported PNG slides:
  - `exports/afg-carousel-01/`
  - `exports/afg-carousel-02/`
  - `exports/afg-carousel-03/`

## Local Preview

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:4173/index.html
http://127.0.0.1:4173/carousel-example.html
http://127.0.0.1:4173/carousel-production.html
http://127.0.0.1:4173/production-handoff.html
```

## Publish Notes

Recommended GitHub Pages settings:

- Source: deploy from branch
- Branch: `3130`
- Folder: `/root`
