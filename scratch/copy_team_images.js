// scratch/copy_team_images.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOWNLOADS_DIR = 'C:\\Users\\Admin\\Downloads';
const PROJECT_ROOT = path.resolve(__dirname, '..');
const TARGET_DIR = path.join(PROJECT_ROOT, 'public', 'teams');

// Accent normalization helper
function normalizeText(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/|\?/g, ''); // strip codepage replacement characters
}

const teamRules = [
  { id: 'MD-1', match: (name) => name.includes('hung') && name.includes('kh') },
  { id: 'MD-2', match: (name) => name.includes('hung') && name.includes('phong') },
  { id: 'MD-3', match: (name) => name.includes('duong') && name.includes('t') },
  { id: 'MD-4', match: (name) => name.includes('minh') && name.includes('ti') },
  { id: 'MD-5', match: (name) => name.includes('phu') && name.includes('hi') },
  { id: 'XD-1', match: (name) => name.includes('minh') && name.includes('h') && !name.includes('ti') && !name.includes('tri') },
  { id: 'XD-2', match: (name) => name.includes('minh') && name.includes('tri') },
  { id: 'XD-3', match: (name) => name.includes('tr') && name.includes('long') },
  { id: 'XD-4', match: (name) => name.includes('thanh') && name.includes('ho') },
  { id: 'XD-5', match: (name) => name.includes('chi') && name.includes('qu') }
];

function run() {
  console.log('🚀 Starting Team Image Importer...');
  
  if (!fs.existsSync(DOWNLOADS_DIR)) {
    console.error(`❌ Downloads directory not found at: ${DOWNLOADS_DIR}`);
    return;
  }

  // Create public/teams folder if not exists
  if (!fs.existsSync(TARGET_DIR)) {
    fs.mkdirSync(TARGET_DIR, { recursive: true });
    console.log(`📁 Created target directory: ${TARGET_DIR}`);
  }

  // Read downloads
  const files = fs.readdirSync(DOWNLOADS_DIR);
  const images = files.filter(f => f.match(/\.(png|jpg|jpeg)$/i));

  console.log(`🔍 Found ${images.length} image files in Downloads.`);

  let matchedCount = 0;

  images.forEach(filename => {
    const norm = normalizeText(filename);
    
    // Find matching rule
    const matchedRule = teamRules.find(rule => rule.match(norm));
    if (matchedRule) {
      const ext = path.extname(filename).toLowerCase();
      const newName = `${matchedRule.id}${ext}`;
      const srcPath = path.join(DOWNLOADS_DIR, filename);
      const destPath = path.join(TARGET_DIR, newName);

      try {
        fs.copyFileSync(srcPath, destPath);
        console.log(`✅ Matched & Copied: "${filename}" ➡️ "${newName}"`);
        matchedCount++;
      } catch (err) {
        console.error(`❌ Failed to copy "${filename}":`, err.message);
      }
    }
  });

  console.log(`🎉 Finished! Successfully imported ${matchedCount}/10 team photos to ${TARGET_DIR}.`);
}

run();
