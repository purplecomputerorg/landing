#!/bin/bash

# Generate favicon.ico from the mascot SVG
# Requires: rsvg-convert (from librsvg) and png-to-ico (npm)

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PUBLIC_DIR="$SCRIPT_DIR/../public"
SOURCE_SVG="$PUBLIC_DIR/bot-2-purple.svg"
OUTPUT_ICO="$PUBLIC_DIR/favicon.ico"

cd "$PUBLIC_DIR"

echo "Generating favicon from $SOURCE_SVG..."

# Create PNGs at standard favicon sizes
rsvg-convert -w 16 -h 16 "$SOURCE_SVG" -o favicon-16.png
rsvg-convert -w 32 -h 32 "$SOURCE_SVG" -o favicon-32.png
rsvg-convert -w 48 -h 48 "$SOURCE_SVG" -o favicon-48.png

# Combine into ICO
npx --yes png-to-ico favicon-16.png favicon-32.png favicon-48.png > "$OUTPUT_ICO"

# Clean up temporary PNGs
rm -f favicon-16.png favicon-32.png favicon-48.png

echo "Created $OUTPUT_ICO"
