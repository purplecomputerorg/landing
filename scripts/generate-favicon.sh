#!/bin/bash

# Generate favicon.ico and apple-touch-icon from the mascot SVG
# Requires: rsvg-convert (from librsvg) and png2icons (npm)

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PUBLIC_DIR="$SCRIPT_DIR/../public"
SOURCE_SVG="$PUBLIC_DIR/favicon.svg"

cd "$PUBLIC_DIR"

echo "Generating favicons from $SOURCE_SVG..."

# Create high-res PNG for ico generation
rsvg-convert -w 512 -h 512 "$SOURCE_SVG" -o icon-512.png

# Generate multi-size ICO from the 512px source (includes 256, 128, 96, 72, 64, 48, 32, 24, 16)
npx --yes png2icons icon-512.png favicon -icop

# Create apple-touch-icon (180x180) for iOS and social sharing (WhatsApp, etc.)
rsvg-convert -w 180 -h 180 "$SOURCE_SVG" -o apple-touch-icon.png

# Create icon for Android/Chrome (192x192)
rsvg-convert -w 192 -h 192 "$SOURCE_SVG" -o icon-192.png

echo "Created:"
echo "  - favicon.ico"
echo "  - apple-touch-icon.png"
echo "  - icon-192.png"
echo "  - icon-512.png"
