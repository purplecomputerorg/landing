#!/bin/bash
cd "$(dirname "$0")"

.venv/bin/python3 << 'EOF'
from PIL import Image
import os

# Crop coordinates for 3142 x 2068 images
TOP = 160
LEFT = 136
RIGHT = 136
BOTTOM = 180

# Calculate crop box
# Original: 3142 x 2068
WIDTH = 3142 - LEFT - RIGHT
HEIGHT = 2068 - TOP - BOTTOM

print(f"Cropping to {WIDTH}x{HEIGHT} starting at ({LEFT}, {TOP})")

images = ['ask_screenshot.png', 'play_screenshot.png', 'write_screenshot.png']
public_dir = 'public'

for img_name in images:
    input_path = os.path.join(public_dir, img_name)
    output_path = os.path.join(public_dir, img_name.replace('.png', '_cropped.png'))

    if os.path.exists(input_path):
        img = Image.open(input_path)
        # Crop box is (left, top, right, bottom)
        cropped = img.crop((LEFT, TOP, LEFT + WIDTH, TOP + HEIGHT))
        cropped.save(output_path)
        print(f"  {img_name} -> {os.path.basename(output_path)} ({cropped.width}x{cropped.height})")
    else:
        print(f"  Warning: {img_name} not found")

print("Done!")
EOF
