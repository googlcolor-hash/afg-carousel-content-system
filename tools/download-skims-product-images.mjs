#!/usr/bin/env node

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const DEFAULT_URL =
  "https://skims.com/en-nl/products/skims-body-scoop-low-back-thong-bodysuit-clay";
const DEFAULT_OUT = "outputs/skims-bodysuit-clay";
const DEFAULT_PRODUCT_CODE = "BD-THG-11443W";
const DEFAULT_COLOR_CODE = "CLY";

function parseArgs(argv) {
  const args = {
    url: DEFAULT_URL,
    outDir: DEFAULT_OUT,
    productCode: DEFAULT_PRODUCT_CODE,
    colorCode: DEFAULT_COLOR_CODE,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    const next = argv[i + 1];
    if (arg === "--url" && next) {
      args.url = next;
      i += 1;
    } else if (arg === "--out" && next) {
      args.outDir = next;
      i += 1;
    } else if (arg === "--product-code" && next) {
      args.productCode = next;
      i += 1;
    } else if (arg === "--color-code" && next) {
      args.colorCode = next;
      i += 1;
    } else if (arg === "--help" || arg === "-h") {
      printHelp();
      process.exit(0);
    } else {
      throw new Error(`Unknown or incomplete argument: ${arg}`);
    }
  }

  return args;
}

function printHelp() {
  console.log(`Download SKIMS product images from a product page.

Usage:
  node tools/download-skims-product-images.mjs
  node tools/download-skims-product-images.mjs --url <product-url> --out <dir>

Options:
  --url <url>             Product page URL. Defaults to the clay bodysuit page.
  --out <dir>             Output directory. Defaults to ${DEFAULT_OUT}
  --product-code <code>   Product code filter. Defaults to ${DEFAULT_PRODUCT_CODE}
  --color-code <code>     Color code filter. Defaults to ${DEFAULT_COLOR_CODE}
`);
}

function decodeHtml(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'");
}

function canonicalImageUrl(rawUrl) {
  const cleaned = decodeHtml(rawUrl).replace(/\\+$/g, "");
  const absolute = cleaned.startsWith("//") ? `https:${cleaned}` : cleaned;
  const parsed = new URL(absolute);

  if (parsed.hostname === "skims.imgix.net" && parsed.pathname.startsWith("/s/files/")) {
    parsed.hostname = "cdn.shopify.com";
  }

  const version = parsed.searchParams.get("v");
  parsed.search = "";
  if (version) {
    parsed.searchParams.set("v", version);
  }

  return parsed.toString();
}

function extractProductImages(html, productCode, colorCode) {
  const imageUrlPattern =
    /(?:https?:)?\/\/(?:cdn\.shopify\.com|skims\.imgix\.net)\/[^"'<>\\\s]+?\.(?:jpe?g|png|webp|avif)(?:\?[^"'<>\\\s]*)?/gi;
  const productNeedle = `${productCode}-${colorCode}`.toUpperCase();
  const seen = new Set();
  const images = [];

  for (const match of html.matchAll(imageUrlPattern)) {
    const url = canonicalImageUrl(match[0]);
    const parsed = new URL(url);
    const imageKey = decodeURIComponent(parsed.pathname).toUpperCase();

    if (!imageKey.includes(productNeedle)) {
      continue;
    }

    const dedupeKey = `${parsed.origin}${parsed.pathname}`;
    if (seen.has(dedupeKey)) {
      continue;
    }

    seen.add(dedupeKey);
    images.push(url);
  }

  return images;
}

function outputFileName(index, imageUrl) {
  const parsed = new URL(imageUrl);
  const ext = path.extname(parsed.pathname) || ".jpg";
  const baseName = path.basename(parsed.pathname, ext);
  const safeName = baseName.replace(/[^a-z0-9._-]+/gi, "-");
  return `${String(index + 1).padStart(2, "0")}-${safeName}${ext}`;
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/126 Safari/537.36",
      accept: "text/html,application/xhtml+xml",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch page: ${response.status} ${response.statusText}`);
  }

  return response.text();
}

async function downloadBinary(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/126 Safari/537.36",
      accept: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
      referer: "https://skims.com/",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to download image: ${response.status} ${response.statusText} ${url}`);
  }

  return Buffer.from(await response.arrayBuffer());
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const html = await fetchText(args.url);
  const imageUrls = extractProductImages(html, args.productCode, args.colorCode);

  if (imageUrls.length === 0) {
    throw new Error(
      `No product images found for ${args.productCode}-${args.colorCode} at ${args.url}`,
    );
  }

  await mkdir(args.outDir, { recursive: true });

  const images = [];
  for (const [index, url] of imageUrls.entries()) {
    const fileName = outputFileName(index, url);
    const filePath = path.join(args.outDir, fileName);
    const data = await downloadBinary(url);
    await writeFile(filePath, data);
    images.push({
      index: index + 1,
      file: fileName,
      bytes: data.length,
      url,
    });
    console.log(`saved ${filePath}`);
  }

  const manifest = {
    sourceUrl: args.url,
    downloadedAt: new Date().toISOString(),
    filters: {
      productCode: args.productCode,
      colorCode: args.colorCode,
    },
    imageCount: images.length,
    images,
  };

  await writeFile(
    path.join(args.outDir, "manifest.json"),
    `${JSON.stringify(manifest, null, 2)}\n`,
  );

  console.log(`done: ${images.length} images -> ${args.outDir}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
