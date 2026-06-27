# Lev video gallery anti-duplicate pass

## Task

Add a safe anti-duplicate layer to the Lev Nikolaevich video gallery so local MP4 review pages can show, catalog, sort, and hide exact repeats.

## Decision

- Exact duplicates are detected by SHA-256, not by file name or file size alone.
- The first sorted file in each duplicate group is treated as the keeper.
- Extra exact copies are shown as grey duplicate cards.
- The UI can hide extra duplicate cards without deleting files.
- Deletion is intentionally not implemented yet; it should be a separate review step with explicit confirmation.

## Verification

- API `/api/state` found 32 local MP4 files.
- It found 2 exact duplicate groups and 3 extra duplicate files.
- Playwright check confirmed:
  - initial gallery: 34 cards, 3 grey duplicate cards;
  - after hiding duplicates: 31 cards, 0 duplicate cards shown.

## Changed files

- `outputs/lev-nikolaevich-storyboards/scripts/lev-video-manager-server.mjs`
- `outputs/lev-nikolaevich-storyboards/lev-grok-video-flow-gallery.html`
