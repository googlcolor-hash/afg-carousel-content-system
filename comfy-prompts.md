# AFG ComfyUI Prompt Pack

Production-ready prompts for the 21 carousel visuals. Generate clean images only; all Russian text should be added later by the HTML renderer.

## Global Settings

- Target: `1080x1350` final export, vertical `4:5`.
- ComfyUI canvas: `1088x1344` for FLUX, or `1024x1280` for SDXL; crop/pad to `1080x1350` after generation.
- Style: premium editorial wellness, quiet studio, refined tactile materials, sage / ivory / graphite / warm terracotta accents.
- Composition rule: keep one large calm subject, clear negative space in the upper or side third, no readable text in the image.
- Seed strategy: keep one fixed style seed per carousel, then add `+11` per slide to avoid repetition.
  - Carousel 01 seed base: `41001`
  - Carousel 02 seed base: `42001`
  - Carousel 03 seed base: `43001`
- Good starting point: `CFG 4.5-6`, `steps 28-36`, sampler `dpmpp_2m` / `euler`, denoise `1.0`.

## Global Negative Prompt

text, letters, typography, logo, watermark, signature, UI, app screen, QR code, poster text, readable labels, medical clinic, hospital, doctor, surgery, disease imagery, x-ray, stock photo smile, gym intensity, erotic, nude, lingerie, exposed skin emphasis, distorted anatomy, extra limbs, bad hands, bad feet, malformed fingers, uncanny face, low resolution, blurry, noisy, oversharpened, plastic skin, AI artifacts, cluttered background, duplicate subject

## Carousel 01 - How The Session Works

### 01 / вход

Positive prompt: vertical 4:5 premium editorial wellness photograph, quiet private movement studio entrance at morning, one calm adult figure entering from the side in soft silhouette, warm sage and ivory interior, tactile plaster wall, pale wood floor, cinematic natural light, large empty upper-left negative space for headline overlay, refined magazine composition, serene and trustworthy, no visible signage, no readable text

Negative prompt: use Global Negative Prompt

Seed: `41001`

### 02 / настройка

Positive prompt: vertical 4:5 premium editorial close-up, grounded bare feet on warm matte studio floor, subtle breath posture suggested by relaxed ankle and soft fabric hem, low camera angle, shallow depth of field, quiet sage shadow, ivory light, tactile calm nervous-system mood, large clean negative space above, elegant wellness campaign, no face, no text

Negative prompt: use Global Negative Prompt

Seed: `41012`

### 03 / фундамент

Positive prompt: vertical 4:5 conceptual editorial still life, elegant bone-like architectural sculpture on a clean plinth beside a minimal studio wall, object feels like foundation and structure, soft directional light, graphite contour shadow, sage ivory stone palette, museum-quality wellness atelier, upper third left empty for Russian headline overlay, non-clinical, not scary, no text

Negative prompt: use Global Negative Prompt

Seed: `41023`

### 04 / нагрузка

Positive prompt: vertical 4:5 macro editorial photograph, close detail of a calm hand pressing gently into a padded vertical support, subtle axis of light running through wrist and forearm, controlled soft load without strain, tactile neutral fabric, graphite line shadow, premium wellness studio atmosphere, clean negative space on right side, no device branding, no text

Negative prompt: use Global Negative Prompt

Seed: `41034`

### 05 / ритм

Positive prompt: vertical 4:5 premium editorial still life, small analog timer without readable numbers, folded ivory towel, minimal wooden studio bench, one precise beam of warm light, calm short-session rhythm, muted green wall, refined composition with wide blank space above, premium movement practice mood, no gym props overload, no text

Negative prompt: use Global Negative Prompt

Seed: `41045`

### 06 / после

Positive prompt: vertical 4:5 premium wellness portrait, one adult standing calmly after session, relaxed upright posture, grounded feet, soft backlight through translucent curtain, quiet confidence, natural clothing in ivory and muted sage, high-end editorial studio photography, open empty space on left for overlay, no exaggerated transformation, no text

Negative prompt: use Global Negative Prompt

Seed: `41056`

### 07 / приглашение

Positive prompt: vertical 4:5 editorial invitation image, softly lit studio doorway with warm light spilling from inside, no person visible, tactile natural materials, quiet threshold composition, sage ivory palette with one warm terracotta accent, refined wellness brand atmosphere, strong negative space in upper center for CTA overlay, no signage, no readable text

Negative prompt: use Global Negative Prompt

Seed: `41067`

## Carousel 02 - What The Session Gives

### 01 / система

Positive prompt: vertical 4:5 premium abstract wellness image, translucent calm body contour implied only by soft light and fabric layers, gentle vertical axis, breathing rhythm shown as subtle repeated light bands, airy sage green and ivory palette, minimal studio environment, large clean negative space for headline overlay, not anatomical, no medical promise, no text

Negative prompt: use Global Negative Prompt

Seed: `42001`

### 02 / движение

Positive prompt: vertical 4:5 movement editorial photograph, calm adult in loose neutral clothing making a tiny precise shift of weight, subtle thin light trails around shoulders and pelvis, posture becoming organized, warm studio floor, tactile walls, premium wellness look, empty upper-right space for headline, no fitness intensity, no text

Negative prompt: use Global Negative Prompt

Seed: `42012`

### 03 / ось

Positive prompt: vertical 4:5 conceptual wellness image, elegant vertical light line through a quiet studio space, five small matte stone markers aligned from floor to head height suggesting feet pelvis spine shoulders head, no literal anatomy, refined sage palette, precise calm composition, blank side margin for text overlay, no textbook diagram, no text

Negative prompt: use Global Negative Prompt

Seed: `42023`

### 04 / дыхание

Positive prompt: vertical 4:5 breath and rhythm editorial photograph, soft ivory fabric curtain moving gently in warm studio light, seated adult partly out of focus in the background, calm nervous system settling mood, light falling in even pulses, premium wellness aesthetic, clean negative space at top, no meditation cliche, no text

Negative prompt: use Global Negative Prompt

Seed: `42034`

### 05 / ресурс

Positive prompt: vertical 4:5 tactile wellness still life, soft natural fabric, ceramic cup without logo, warm sun patch on matte studio floor, pause and resource without pressure, muted sage and ivory palette, elegant depth, large negative space for Russian copy overlay, quiet movement studio details, no medical equipment, no text

Negative prompt: use Global Negative Prompt

Seed: `42045`

### 06 / регулярность

Positive prompt: vertical 4:5 premium sequence image, seven subtle floor marks made of small flat stones crossing a quiet studio corridor, rhythmic morning light repeating across the floor, sense of regular practice over time, high-end editorial wellness style, clean blank wall for headline overlay, no calendar, no before-after trope, no text

Negative prompt: use Global Negative Prompt

Seed: `42056`

### 07 / до и после

Positive prompt: vertical 4:5 subjective before-after concept, same calm adult suggested by one silhouette divided only by light state, left side dim tense shadow, right side warm grounded glow, tasteful split through lighting not graphics, quiet studio, refined wellness campaign, clear negative space for CTA overlay, no medical transformation, no text

Negative prompt: use Global Negative Prompt

Seed: `42067`

## Carousel 03 - Proof Layer

### 01 / источники

Positive prompt: vertical 4:5 premium proof atelier still life, strict editorial research table with blank papers, unreadable source notes, thin graphite lines, small bone-like material sample, muted ivory base, deep green shadows, warm terracotta pencil accent, negative space at top for headline overlay, no official logos, no readable text

Negative prompt: use Global Negative Prompt

Seed: `43001`

### 02 / кость

Positive prompt: vertical 4:5 macro conceptual image, bone as living structure shown through elegant porous mineral sculpture texture, lit like a museum object, warm scientific atelier mood, soft paper shadow nearby, refined non-clinical composition, large empty side margin for text overlay, no disease imagery, no x-ray, no text

Negative prompt: use Global Negative Prompt

Seed: `43012`

### 03 / контекст

Positive prompt: vertical 4:5 research desk composition, abstract osteogenic load context, blank papers with unreadable chart-like blocks, tactile mechanical detail with no branding, ivory paper, deep green shadows, terracotta marker, thin axis lines, premium editorial proof mood, large negative space for Russian headline, no partnership implication, no readable text

Negative prompt: use Global Negative Prompt

Seed: `43023`

### 04 / карта

Positive prompt: vertical 4:5 cartographic proof image, abstract world map impression on thick ivory paper, thin connecting lines and small brass pins, no country flags, no readable labels, wellness studio expansion context, deep green and ivory palette, high-end editorial desk light, open blank area for text overlay, no endorsement claim

Negative prompt: use Global Negative Prompt

Seed: `43034`

### 05 / longevity

Positive prompt: vertical 4:5 active longevity editorial still life, refined wellness research table with age-positive movement cues, folded fabric strap, blank paper notes, small sculptural balance object, soft warm light, calm sophistication, ivory sage graphite palette, clean negative space for headline overlay, no elderly stereotype, no medical claims, no text

Negative prompt: use Global Negative Prompt

Seed: `43045`

### 06 / космос

Positive prompt: vertical 4:5 cinematic science context image, deep green-black background blended with tactile ivory research paper, abstract bone-density diagram made of thin unreadable lines, subtle orbit arcs and dust-like light, restrained proof atelier mood, large clean text-safe area, no NASA logo, no medical proof claim, no readable text

Negative prompt: use Global Negative Prompt

Seed: `43056`

### 07 / история

Positive prompt: vertical 4:5 premium personal story portrait, calm adult in soft studio light, authentic grounded expression, testimonial card nearby turned away so it is blank and unreadable, warm respectful atmosphere, ivory and sage palette, open negative space for CTA overlay, no guarantee of result, no stock-photo smile, no text

Negative prompt: use Global Negative Prompt

Seed: `43067`
