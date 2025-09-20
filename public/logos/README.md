# EDGEBIC Logo Assets

This folder contains the logo assets for the EDGEBIC application.

## Instructions for Adding Your Logo

### From YouTube Video (https://youtu.be/9PRAd-5nX3k)

1. **Extract the logo from the video:**
   - Take a high-quality screenshot of the frame with the logo
   - Use video editing software or online tools to export the frame
   - Crop the logo to remove any background

2. **Prepare logo files and save them here:**
   - `edgebic-logo.svg` - Vector format (recommended for web use)
   - `edgebic-logo.png` - High resolution PNG with transparent background
   - `edgebic-logo-32x32.png` - Small favicon size
   - `edgebic-logo-64x64.png` - Medium size
   - `edgebic-logo-128x128.png` - Large size
   - `edgebic-logo-256x256.png` - Extra large size

3. **After adding the files:**
   - Go to `components/ui/logo.tsx`
   - Uncomment the `<img>` tag section
   - Comment out the temporary SVG icon
   - Update favicon files in the public folder root

## File Naming Convention

- Use lowercase with hyphens
- Include size in filename for different variants
- Use descriptive names like `edgebic-logo-dark.svg` for theme variants

## Recommended Formats

- **SVG**: Best for scalability and web performance
- **PNG**: For raster images with transparency
- **ICO**: For favicon files

## Next Steps

Once you add the logo files here, the application will automatically use them throughout the interface including:
- Navigation header
- Favicon
- Social media previews (og:image)
- Marketing materials