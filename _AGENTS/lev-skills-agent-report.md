# Lev Skills Agent Report

## Task

Create reusable Codex skills from the Lev Nikolaevich Grok/Seedance storyboard and prompt workflow, and save them both in the normal Codex skills folder and as a separate export on drive E.

## Created Skills

1. `lev-grok-stage-video`
   - Path: `C:\Users\User\.codex\skills\lev-grok-stage-video\SKILL.md`
   - Export: `E:\LEV_Codex_Skills_Export\lev-grok-stage-video\SKILL.md`
   - Captures: static camera lock, overhead spotlight, natural actor movement, four-part speech split, avoid over-controlling feet.

2. `lev-video-continuity-bridge`
   - Path: `C:\Users\User\.codex\skills\lev-video-continuity-bridge\SKILL.md`
   - Export: `E:\LEV_Codex_Skills_Export\lev-video-continuity-bridge\SKILL.md`
   - Captures: Grok 30-second limit, last-frame bridge workflow, continuity checklist, new-series prompt template.
   - Script: `scripts\check_video_tools.ps1`

3. `lev-storyboard-prompt-auditor`
   - Path: `C:\Users\User\.codex\skills\lev-storyboard-prompt-auditor\SKILL.md`
   - Export: `E:\LEV_Codex_Skills_Export\lev-storyboard-prompt-auditor\SKILL.md`
   - Captures: audit checklist for camera, character, light, movement, speech timing, Grok/Seedance constraints.

## Verification

- Frontmatter manually checked for all three skills: `name` and `description` present.
- Skill names are lowercase hyphen-case.
- `check_video_tools.ps1` runs and reports current environment:
  - `ffmpeg`: not found in PATH
  - `ffprobe`: not found in PATH
  - bundled Python exists
  - PIL/numpy available

## Current Grok Outputs

The latest split attempt generated separate 10-second clips:

- Clip 1: `https://grok.com/imagine/post/e767af5c-c3b8-4c8e-9ccd-537080012a06`
- Clip 2: `https://grok.com/imagine/post/4746a30e-b81f-450e-b991-faffd6c6b5cd`
- Clip 3: `https://grok.com/imagine/post/5d024048-149b-4441-8abb-cfad18d9512c`

Grok reported video limit exhausted until `19:14`.

## Risks / Next Steps

- Direct MP4 fetch from `imagine-public.x.ai` was blocked by Cloudflare outside the browser.
- Browser page-assets detected video URLs but bundling failed due to page fetch/CORS.
- A viewport screenshot and cropped bridge frame were saved as fallback:
  - `C:\Users\User\Documents\carusel\outputs\lev-nikolaevich-storyboards\grok-runs\grok-clip3-current-viewport-5d024048.png`
  - `C:\Users\User\Documents\carusel\outputs\lev-nikolaevich-storyboards\grok-runs\grok-clip3-bridge-frame-crop.png`
- Best bridge workflow remains: user clicks `Скачать`, then extract the true final frame from the MP4 once `ffmpeg` is available or provided.
