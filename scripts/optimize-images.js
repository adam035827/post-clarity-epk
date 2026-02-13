const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../src/assets/images/band');
const outputDir = path.join(__dirname, '../src/assets/images/band');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get all image files
const files = fs.readdirSync(inputDir).filter(file => {
  const ext = path.extname(file).toLowerCase();
  return ['.jpg', '.jpeg', '.png', '.webp', '.heif', '.heic'].includes(ext);
});

let processed = 0;

files.forEach(file => {
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, file);

  // Skip if it's already optimized
  if (file.includes('optimized')) {
    return;
  }

  sharp(inputPath)
    .resize(800, 600, {
      fit: 'inside',
      withoutEnlargement: true
    })
    .jpeg({ quality: 80, progressive: true })
    .toFile(outputPath + '.optimized.jpg', (err, info) => {
      if (err) {
        console.error(`Error processing ${file}:`, err);
      } else {
        const originalSize = fs.statSync(inputPath).size;
        const newSize = info.size;
        const reduction = ((1 - newSize / originalSize) * 100).toFixed(2);
        console.log(`✓ ${file}`);
        console.log(`  Original: ${(originalSize / 1024).toFixed(2)}KB → Optimized: ${(newSize / 1024).toFixed(2)}KB (${reduction}% reduction)`);
        processed++;
      }
    });
});

console.log(`\nOptimizing ${files.length} images...`);
