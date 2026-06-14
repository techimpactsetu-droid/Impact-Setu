from rembg import remove
from PIL import Image
import io
import sys

def process(input_path, output_logo, output_favicon):
    print(f"Loading {input_path}...")
    with open(input_path, 'rb') as f:
        input_data = f.read()

    print("Removing background...")
    output_data = remove(input_data)
    
    img = Image.open(io.BytesIO(output_data)).convert("RGBA")
    
    # Save the full transparent logo
    img.save(output_logo, "PNG")
    print(f"Saved full transparent logo to {output_logo}")
    
    # Now extract just the bridge for the favicon
    bbox = img.getbbox()
    if bbox:
        img_cropped = img.crop(bbox)
        
        width, height = img_cropped.size
        pixels = img_cropped.load()
        
        row_has_content = [False] * height
        for y in range(height):
            for x in range(width):
                if pixels[x, y][3] > 10:  # Threshold alpha
                    row_has_content[y] = True
                    break
                    
        # Find the gap (sequence of False after True)
        bridge_bottom = height
        in_content = False
        for y in range(height):
            if row_has_content[y]:
                if not in_content:
                    in_content = True
            else:
                if in_content:
                    # Found a gap! We assume this is the gap between the bridge and text.
                    # Verify the gap is reasonably sized to avoid false positives inside the bridge drawing
                    gap_size = 0
                    for y2 in range(y, height):
                        if not row_has_content[y2]: gap_size += 1
                        else: break
                    
                    if gap_size > height * 0.02: # Gap should be at least 2% of height
                        bridge_bottom = y
                        break
        
        if bridge_bottom < height:
            bridge_img = img_cropped.crop((0, 0, width, bridge_bottom))
            # Also crop left/right bounds of just the bridge
            bbox_bridge = bridge_img.getbbox()
            if bbox_bridge:
                bridge_img = bridge_img.crop(bbox_bridge)
                
            bw, bh = bridge_img.size
            size = max(bw, bh)
            new_img = Image.new("RGBA", (size, size), (0,0,0,0))
            new_img.paste(bridge_img, ((size - bw) // 2, (size - bh) // 2))
            
            icon = new_img.resize((512, 512), Image.Resampling.LANCZOS)
            icon.save(output_favicon, "PNG")
            print(f"Saved favicon to {output_favicon}")
        else:
            print("Could not separate bridge from text. Will use full image for favicon.")
            bw, bh = img_cropped.size
            size = max(bw, bh)
            new_img = Image.new("RGBA", (size, size), (0,0,0,0))
            new_img.paste(img_cropped, ((size - bw) // 2, (size - bh) // 2))
            icon = new_img.resize((512, 512), Image.Resampling.LANCZOS)
            icon.save(output_favicon, "PNG")
            
    else:
        print("Image is entirely transparent")

if __name__ == "__main__":
    process(sys.argv[1], sys.argv[2], sys.argv[3])
