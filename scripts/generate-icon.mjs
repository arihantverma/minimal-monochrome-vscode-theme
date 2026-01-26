#!/usr/bin/env node

/**
 * Generates a 128x128 artistic icon for the Minimal Monochrome theme
 * Uses Rough.js for hand-drawn aesthetic
 * Design: Split light/dark representation with hand-drawn elements
 */

import rough from 'roughjs';
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const CONFIG = {
  output: join(__dirname, '..', 'assets', 'icon.svg'),
  size: 128,
  cornerRadius: 16,
  colors: {
    dark: '#1A1A1A',
    light: '#FCFCFC',
    gray: '#B4B4B4',
    darkGray: '#7B7B7B',
    lightGray: '#D0D0D0',
  },
};

/**
 * Converts Rough.js path operations to SVG path data string
 */
function opsToPathData(ops) {
  return ops
    .map((op) => {
      switch (op.op) {
        case 'move':
          return `M${op.data[0].toFixed(2)} ${op.data[1].toFixed(2)}`;
        case 'lineTo':
          return `L${op.data[0].toFixed(2)} ${op.data[1].toFixed(2)}`;
        case 'bcurveTo':
          return `C${op.data[0].toFixed(2)} ${op.data[1].toFixed(2)} ${op.data[2].toFixed(2)} ${op.data[3].toFixed(2)} ${op.data[4].toFixed(2)} ${op.data[5].toFixed(2)}`;
        default:
          return '';
      }
    })
    .join(' ');
}

/**
 * Converts a Rough.js drawable to SVG path elements
 */
function drawableToSvgPaths(drawable, customStroke = null, customFill = null) {
  const { stroke, strokeWidth, fill, fillWeight } = drawable.options;

  return drawable.sets
    .map((set) => {
      const d = opsToPathData(set.ops);

      if (set.type === 'path') {
        return `  <path d="${d}" stroke="${customStroke || stroke}" stroke-width="${strokeWidth}" fill="none"/>`;
      }

      if (set.type === 'fillSketch' || set.type === 'fillPath') {
        return `  <path d="${d}" stroke="${customFill || fill}" stroke-width="${fillWeight}" fill="none"/>`;
      }

      return '';
    })
    .filter(Boolean)
    .join('\n');
}

/**
 * Generates the SVG content with artistic light/dark split design
 */
function generateSvg() {
  const generator = rough.generator();
  const { size, colors } = CONFIG;

  const paths = [];

  // Create overlapping rough rectangles representing light and dark
  // Dark rectangle (back, slightly offset)
  const darkRect = generator.rectangle(20, 20, 70, 70, {
    stroke: colors.gray,
    strokeWidth: 2,
    fill: colors.dark,
    fillStyle: 'solid',
    roughness: 0.8,
  });

  // Light rectangle (front, overlapping)
  const lightRect = generator.rectangle(38, 38, 70, 70, {
    stroke: colors.darkGray,
    strokeWidth: 2,
    fill: colors.light,
    fillStyle: 'solid',
    roughness: 0.8,
  });

  // Add some hand-drawn "text" lines on the light rectangle to represent code
  const line1 = generator.line(46, 52, 82, 52, {
    stroke: colors.darkGray,
    strokeWidth: 1.5,
    roughness: 0.5,
  });

  const line2 = generator.line(46, 62, 72, 62, {
    stroke: colors.lightGray,
    strokeWidth: 1.5,
    roughness: 0.5,
  });

  const line3 = generator.line(46, 72, 92, 72, {
    stroke: colors.darkGray,
    strokeWidth: 1.5,
    roughness: 0.5,
  });

  const line4 = generator.line(46, 82, 66, 82, {
    stroke: colors.lightGray,
    strokeWidth: 1.5,
    roughness: 0.5,
  });

  const line5 = generator.line(46, 92, 78, 92, {
    stroke: colors.darkGray,
    strokeWidth: 1.5,
    roughness: 0.5,
  });

  // Add some lines on the dark rectangle too (peeking from behind)
  const darkLine1 = generator.line(28, 34, 58, 34, {
    stroke: colors.gray,
    strokeWidth: 1.5,
    roughness: 0.5,
  });

  const darkLine2 = generator.line(28, 44, 48, 44, {
    stroke: colors.darkGray,
    strokeWidth: 1.5,
    roughness: 0.5,
  });

  const darkLine3 = generator.line(28, 54, 34, 54, {
    stroke: colors.gray,
    strokeWidth: 1.5,
    roughness: 0.5,
  });

  // Build SVG
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
  <defs>
    <clipPath id="rounded">
      <rect width="${size}" height="${size}" rx="${CONFIG.cornerRadius}"/>
    </clipPath>
  </defs>
  <rect width="${size}" height="${size}" rx="${CONFIG.cornerRadius}" fill="${colors.dark}"/>
  <g clip-path="url(#rounded)">
${drawableToSvgPaths(darkRect)}
${drawableToSvgPaths(darkLine1)}
${drawableToSvgPaths(darkLine2)}
${drawableToSvgPaths(darkLine3)}
${drawableToSvgPaths(lightRect)}
${drawableToSvgPaths(line1)}
${drawableToSvgPaths(line2)}
${drawableToSvgPaths(line3)}
${drawableToSvgPaths(line4)}
${drawableToSvgPaths(line5)}
  </g>
</svg>
`;
}

// Generate and write the SVG
const svg = generateSvg();
writeFileSync(CONFIG.output, svg);

console.log(`Generated: ${CONFIG.output}`);
