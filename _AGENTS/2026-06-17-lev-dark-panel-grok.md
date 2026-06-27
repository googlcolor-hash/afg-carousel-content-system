# Lev Nikolaevich dark prompt panel + Grok route lock

Task: create a new copy of the Lev Nikolaevich prompt control panel in a dark-gray design and add a working Grok section for stricter movement by points.

Result:
- Created `outputs/lev-nikolaevich-storyboards/lev-nikolaevich-prompt-control-panel-dark.html`.
- Left the original light panel untouched.
- Added a new `Grok` tab to top navigation, side menu, mobile selector, and desktop floating actions.
- Added Grok-specific route language that treats numbered points as physical floor marks, not abstract map points.
- Added `Reference 3` as a face reference using `references/ref-3-face-source.jpeg`.
- Updated prompt lighting language: main light is a cold overhead spotlight; the right side is only a weak warm reflex, not a side key.
- Added floor visibility lock: no visible route circles, lines, arrows, numbers, or floor markers. Only the natural spotlight circle remains, slightly shifted left because the overhead spotlight is a little left of center.
- Added separate `Grok Продлить` prompts for Grok Extend mode. These intentionally omit `Reference 1/2/3` and avoid `starts at point...` wording because Grok Extend uses the previous last frame as its practical reference.
- Added target-frame reference pack:
  - clean extracted frames for possible generator upload under `outputs/lev-nikolaevich-storyboards/target-frames/`
  - schematic blocking frames showing actor position, horizontal floor spotlight ellipse, and overhead lamp
  - schematic sheet `target-frames/grok-schematic-target-reference-sheet.jpg`
  - corrected floor-blocking frames showing the horizontal spotlight ellipse as it lies on the floor in camera perspective, plus exact foot contact inside the lit area
  - corrected sheet `target-frames/grok-floor-blocking-reference-sheet.jpg`
  - updated `floor-blocking-1-entry.jpg` to follow the movement map: point `1/7` is left of the light ellipse, outside the lit area, as the shared entry/exit position.
  - explicit rule that schematic images are for blocking only; final video should stay realistic and should not copy labels, route lines, arrows, numbers, or drawing style.
- Added copyable blocks:
  - `grok-lock`
  - `grok-test1`
  - `grok-test2`
  - `grok-test3`
  - `grok-extend-lock`
  - `grok-extend1`
  - `grok-extend2`
  - `grok-extend3`
  - `grok-target-frame-rule`
  - `grok-ru-note`
- Updated the Seedance A prompts so `Reference 4` / `@Image4` is the target end-frame for the current clip:
  - A1 target: `target-frames/floor-blocking-3-left.jpg`, ending at movement-map point 3 inside the lit ellipse.
  - A2 target: `target-frames/floor-blocking-5-right.jpg`, ending at movement-map point 5 inside the lit ellipse.
  - A3 target: `target-frames/floor-blocking-7-empty-light.jpg`, ending with the spotlight ellipse empty after the left exit.
- Created `target-frames/floor-blocking-7-empty-light.jpg` for the final empty-light target frame.
- Added `Grok practical` at the top of the Grok tab:
  - `grok-practical-start`: first generation with references, fixed camera, overhead light, left-shifted spotlight ellipse, entry into light, first speech line.
  - `grok-practical-extend1`: continue from exact last frame, no references, move toward left side of the lit ellipse.
  - `grok-practical-extend2`: continue from exact last frame, no references, move toward center/right side.
  - `grok-practical-extend3`: continue from exact last frame, no references, finish and exit left, final empty spotlight ellipse.

Verification:
- Playwright smoke test passed for desktop and mobile.
- Verified `#grok` opens the Grok tab directly.
- Verified in-page hash change to `#prompts7` switches tabs.
- Verified `#seedance` contains `Reference 3 / @Image3`.
- Verified old `low key` wording is removed.
- Verified `#grok` contains `Grok Продлить`, `Continue from the exact last frame`, `No teleporting`, and extend copy buttons.
- Verified `#grok` contains the target-frame section and loads `target-frames/grok-target-frame-reference-sheet.jpg`.
- Verified `#grok` contains the schematic target section and loads `target-frames/grok-schematic-target-reference-sheet.jpg`.
- Verified `#grok` contains the corrected floor-blocking section and loads `target-frames/grok-floor-blocking-reference-sheet.jpg`.
- Verified the dark panel source contains `Reference 4`, `@Image4`, the three Seedance target-frame files, the point 3 / point 5 / empty ellipse end-frame instructions, and the floor-mark ban.
- Verified the rendered DOM via Playwright `setContent`, reading the actual `a1`, `a2`, and `a3` prompt blocks directly to avoid stale `file://` cache.
- Verified the `Grok practical` source and DOM:
  - all four copy buttons target real prompt blocks;
  - the first prompt contains references;
  - the three Extend prompts contain no `Reference 1` reset language;
  - `#grok` opens and shows the practical block.
- Verified mobile navigation uses the selector and hides floating actions to avoid content overlap.
- Screenshots:
  - `outputs/lev-nikolaevich-storyboards/dark-nav-smoke-desktop.png`
  - `outputs/lev-nikolaevich-storyboards/dark-nav-smoke-mobile.png`
  - `outputs/lev-nikolaevich-storyboards/dark-ref3-smoke.png`
  - `outputs/lev-nikolaevich-storyboards/dark-grok-extend-smoke.png`
  - `outputs/lev-nikolaevich-storyboards/video-audit/generated_video_1_contact.jpg`
  - `outputs/lev-nikolaevich-storyboards/video-audit/grok_video_1_contact.jpg`
  - `outputs/lev-nikolaevich-storyboards/dark-grok-target-frames-smoke.png`
  - `outputs/lev-nikolaevich-storyboards/target-frames/grok-target-frame-reference-sheet.jpg`
  - `outputs/lev-nikolaevich-storyboards/dark-grok-schematic-target-smoke.png`
  - `outputs/lev-nikolaevich-storyboards/target-frames/grok-schematic-target-reference-sheet.jpg`
  - `outputs/lev-nikolaevich-storyboards/dark-grok-floor-blocking-smoke.png`
  - `outputs/lev-nikolaevich-storyboards/target-frames/grok-floor-blocking-reference-sheet.jpg`

Known risk:
- Grok may still ignore route constraints in long clips. Recommended test path is shorter clips first: `1/7 -> 2`, then `2 -> 3 -> 4`, then `4 -> 5 -> 6 -> 1/7`. If it still wanders, reduce to one pair of floor marks per prompt.
- For Grok Extend, do not reintroduce references in continuation prompts. Repeating references or `starts at` can cause scene reset, teleporting, and nervous inter-prompt motion.
