# Post Clarity EPK - Image Assets

## Folder Structure

### `/band`
Professional band photos and portraits
- Group photos
- Member portraits
- Studio shots

### `/live`
Live performance and venue photos
- Concert photos
- Stage shots
- Crowd engagement
- Venue highlights

### `/press`
High-resolution press photos for media
- Press kit quality images
- Promotional materials
- Event posters

### `/logos`
Post Clarity logos and branding
- Official logo files
- Logo variations (light/dark backgrounds)
- Social media profile images

## Image Guidelines

**Recommended Formats:**
- JPEG for photos (.jpg)
- PNG for logos and graphics with transparency (.png)
- WebP for optimized web delivery (.webp)

**Recommended Sizes:**
- Hero images: 1920x1080px (16:9)
- Gallery images: 1200x800px
- Thumbnails: 600x400px
- Logos: 512x512px (square), SVG preferred

**Optimization:**
- Keep file sizes reasonable (< 500KB for photos)
- Use image compression tools before uploading
- Consider creating multiple sizes for responsive images

## Usage in Angular

Images in this folder can be referenced in templates:
```html
<img src="assets/images/band/group-photo.jpg" alt="Post Clarity band">
<img src="assets/images/logos/post-clarity-logo.png" alt="Post Clarity logo">
```

Or in SCSS:
```scss
.hero {
  background-image: url('/assets/images/live/stage-performance.jpg');
}
```
