#!/usr/bin/env node
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convertToWebP(inputPath, outputPath, quality = 85) {
  try {
    console.log(`Converting ${inputPath} to ${outputPath}...`);
    
    await sharp(inputPath)
      .webp({ quality })
      .toFile(outputPath);
    
    const stats = fs.statSync(outputPath);
    console.log(`✓ Conversion complete! File size: ${(stats.size / 1024).toFixed(2)} KB`);
  } catch (error) {
    console.error(`✗ Error converting image: ${error.message}`);
    process.exit(1);
  }
}

const [,, inputPath, outputPath, quality] = process.argv;

if (!inputPath || !outputPath) {
  console.error('Usage: node convert-image.js <input> <output> [quality]');
  process.exit(1);
}

convertToWebP(inputPath, outputPath, quality ? parseInt(quality) : 85);
