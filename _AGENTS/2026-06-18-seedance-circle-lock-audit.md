# Seedance circle-lock audit

Task: audit the failed Seedance V1.5 Pro run where Lev Nikolaevich drifted right and the floor light became endless.

Source video analyzed:

- `C:\Users\User\Downloads\Copy of LEV_Seedance V1.5 Pro_2026-06-18_07-41-21.mp4`

Artifacts:

- `C:\Users\User\Documents\carusel\outputs\lev-nikolaevich-storyboards\seedance-runs\v15pro-20260618-074121-analysis\source.mp4`
- `C:\Users\User\Documents\carusel\outputs\lev-nikolaevich-storyboards\seedance-runs\v15pro-20260618-074121-analysis\contact-sheet.jpg`
- `C:\Users\User\Documents\carusel\outputs\lev-nikolaevich-storyboards\lev-seedance-video-analysis.html`
- `C:\Users\User\Documents\carusel\outputs\lev-nikolaevich-storyboards\seedance-next-prompt-03-circle-lock.txt`

Findings:

- The prompt allowed walking but did not define the spotlight as a hard physical boundary.
- By about 3 seconds the character is already moving too far right.
- The floor light becomes broad stage illumination instead of a small finite ellipse.
- Camera/framing appears to reveal new lit floor, which makes the light feel endless.

Correction:

- Replace travel language with contained movement language.
- Say `small, finite, horizontal elliptical pool of light` repeatedly.
- Say both feet stay fully inside the visible ellipse at all times.
- Explicitly forbid illuminated floor continuing right or left.
- Let him walk and tell the story only as short natural steps, pacing, and weight shifts inside the fixed light.

Agent note:

- Independent subagent audit agreed that the key failure was treating the light as atmosphere rather than a fixed physical limit.
