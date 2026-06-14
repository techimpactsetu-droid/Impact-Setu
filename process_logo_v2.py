import sys
from PIL import Image

def process(input_path, output_path):
    print(f"Loading {input_path} for smart alpha extraction...")
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()
    
    new_data = []
    # The background is cream (~247, 239, 228) -> Luminance ~240
    # Text is dark brown -> Luminance ~60-120
    for item in data:
        r, g, b, a = item
        # Standard luminance formula
        lum = (r * 0.299 + g * 0.587 + b * 0.114)
        
        # If it's very bright (cream/white), it should be transparent
        if lum > 235:
            new_data.append((r, g, b, 0))
        else:
            # For anti-aliasing edges (halos from jpeg compression)
            # Map luminance from 160 (fully opaque) to 235 (fully transparent)
            if lum < 160:
                alpha = 255
            else:
                alpha = int(255 * (235 - lum) / (235 - 160))
            new_data.append((r, g, b, alpha))
            
    img.putdata(new_data)
    
    # We will crop the top and bottom empty space
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save(output_path, "PNG")
    print(f"Saved cleanly extracted logo to {output_path}")

if __name__ == "__main__":
    process(sys.argv[1], sys.argv[2])
