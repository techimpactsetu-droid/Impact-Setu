import sys
from PIL import Image

def crop_transparent(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    bbox = img.getbbox()
    if bbox:
        print(f"Original size: {img.size}, cropped to: {bbox}")
        img = img.crop(bbox)
        img.save(output_path, "PNG")
    else:
        print("No bounding box found (image is empty).")

if __name__ == "__main__":
    crop_transparent(sys.argv[1], sys.argv[2])
