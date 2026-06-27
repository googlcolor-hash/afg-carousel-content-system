# Grok downloader extension analysis

Task: analyze `E:\!   SOFT\!                                       2026\grok-imagine-downloader-main\grok-imagine-downloader-main` and use it to improve the Lev Nikolaevich Grok video gallery/download flow.

Result:
- The extension finds videos from the rendered Grok page DOM, mainly `video#sd-video[src*=".mp4"]`, `video[src*="generated_video.mp4"]`, and `video[src*="share-videos"]`.
- It downloads through `chrome.downloads.download`; it does not use a separate hidden media API.
- The practical Codex path is to form `https://imagine-public.x.ai/imagine-public/share-videos/{id}.mp4` and download it with `curl.exe` using a browser User-Agent and Grok Referer.
- `Invoke-WebRequest` returned 403, while `curl.exe` succeeded for available public share videos.

Downloaded successfully:
- `e767af5c-c3b8-4c8e-9ccd-537080012a06.mp4`
- `4746a30e-b81f-450e-b991-faffd6c6b5cd.mp4`
- `5d024048-149b-4441-8abb-cfad18d9512c.mp4`
- `189e340b-a719-42d0-bcc1-46d49a2c9a8f.mp4`

Not downloaded:
- `4306e0ed-3bcf-4e22-ace6-caafec45bd1e`: public share URL returned 404.
- `286ebc43-8ace-4a21-9659-9f5b481efe85`: public share URL returned 404.

Changed files:
- `C:\Users\User\Documents\carusel\outputs\lev-nikolaevich-storyboards\lev-grok-video-flow-gallery.html`

Verification:
- Headless Playwright opened `http://127.0.0.1:8787/lev-grok-video-flow-gallery.html`.
- The four downloaded local videos reported `960x960 ready`, duration `29.041667`, and no media errors.
- Screenshot saved to `C:\Users\User\Documents\carusel\outputs\lev-nikolaevich-storyboards\grok-runs\gallery-verify.png`.
