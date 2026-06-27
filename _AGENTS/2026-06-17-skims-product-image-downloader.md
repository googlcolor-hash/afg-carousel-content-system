# SKIMS product image downloader

Task: create an automation to download all images for the SKIMS Body Scoop Low Back Thong Bodysuit in Clay from the provided product page.

Approach:
- Use the server-rendered SKIMS product HTML instead of a full browser when possible.
- Extract Shopify/Imgix product image URLs.
- Normalize Imgix image URLs back to Shopify CDN originals.
- Filter by product/color token `BD-THG-11443W-CLY` to avoid related products, icons, and other colorways.

Changed files:
- `tools/download-skims-product-images.mjs`

Output:
- `outputs/skims-bodysuit-clay/`

Risks:
- If SKIMS changes filename conventions or removes server-rendered gallery image URLs, the script may need a Playwright fallback.
- Images are public product assets, but usage rights still belong to SKIMS.
