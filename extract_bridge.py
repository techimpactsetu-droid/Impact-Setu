import sys
from PIL import Image

def extract_bridge(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    data = img.load()
    width, height = img.size
    
    gap_y = None
    in_bridge = True
    
    # Start scanning down from y=20 to skip the very top edge of the bridge
    for y in range(20, height):
        row_empty = True
        # Check if the row has any non-transparent pixels
        for x in range(width):
            _, _, _, a = data[x, y]
            if a > 10:  # slightly forgiving alpha threshold
                row_empty = False
                break
        
        if in_bridge and row_empty:
            in_bridge = False
            gap_y = y
        elif not in_bridge and not row_empty:
            if gap_y is not None:
                # We found the gap and hit the text below it
                break
                
    if gap_y is None:
        # Fallback: crop the top 60% if no gap is found
        gap_y = int(height * 0.6)
        
    print(f"Cropping bridge at y={gap_y}")
    bridge_img = img.crop((0, 0, width, gap_y))
    bridge_bbox = bridge_img.getbbox()
    if bridge_bbox:
        bridge_img = bridge_img.crop(bridge_bbox)
    bridge_img.save(output_path, "PNG")
    print(f"Successfully extracted bridge to {output_path}")

if __name__ == "__main__":
    extract_bridge(sys.argv[1], sys.argv[2])
