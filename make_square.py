import sys
from PIL import Image

def make_square(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    
    # Target size is a perfect square based on the longest side
    size = max(width, height)
    
    # Create a new completely transparent square canvas
    square_img = Image.new("RGBA", (size, size), (255, 255, 255, 0))
    
    # Paste the wide bridge directly into the vertical center of the square
    paste_x = (size - width) // 2
    paste_y = (size - height) // 2
    square_img.paste(img, (paste_x, paste_y))
    
    square_img.save(output_path, "PNG")
    print(f"Successfully padded the image to a perfect {size}x{size} square at {output_path}")

if __name__ == "__main__":
    make_square(sys.argv[1], sys.argv[2])
