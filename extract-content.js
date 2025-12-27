#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src/components');
const publicDir = path.join(__dirname, 'public');
const outputFile = path.join(__dirname, 'website-content.txt');

// Patterns that indicate code, not content
const skipPatterns = [
  /^(flex|grid|text-|bg-|px-|py-|w-|h-|md:|lg:|sm:|rounded|shadow|border|gap|mb-|mt-|mx-|my-|p-|m-|max-|min-|font-|tracking-|leading-|items-|justify-|overflow|relative|absolute|fixed|z-|opacity|transition|duration|ease|cursor|pointer|block|inline|hidden|visible)/,
  /^#[a-fA-F0-9]{3,8}$/,
  /^\d+(\.\d+)?(rem|px|em|%|vh|vw)?$/,
  /className|onClick|onChange|onSubmit|href=|src=|alt=|aria-|style=|key=|ref=/,
  /useState|useEffect|useRef|useCallback|useMemo|useContext/,
  /^(import|export|const|let|var|function|return|if|else|switch|case|default)\b/,
  /\.(tsx|ts|js|css|svg|png|jpg)$/,
  /noopener|noreferrer|currentColor/,
  /^[a-z]+[A-Z][a-zA-Z]*$/, // camelCase
  /\$\{/, // template literals
  /stopOpacity|strokeWidth|strokeLinecap|strokeGradient/,
  /^(keydown|keyup|click|scroll|resize|mouseover)$/,
  /^(true|false|null|undefined)$/,
  /^\s*[{}()\[\];:,.<>=]+\s*$/,
  /faShield|FontAwesome|Icon/,
  /setModal|onNavigate|void;|}\s*export|const\s+\w+\s*=|:\s*\{/, // code fragments
  /^\);/, // closing JSX
];

function shouldSkip(text) {
  if (!text) return true;
  const t = text.trim();
  if (t.length < 3 || t.length > 400) return true;
  for (const pattern of skipPatterns) {
    if (pattern.test(t)) return true;
  }
  // Must have some letters
  const letters = (t.match(/[a-zA-Z]/g) || []).length;
  if (letters < 3) return true;
  return false;
}

function cleanText(text) {
  return text
    .replace(/\s+/g, ' ')  // normalize whitespace
    .replace(/\{' '\}/g, ' ')  // remove JSX space expressions
    .trim();
}

function extractTextFromTSX(content) {
  const texts = [];

  // 1. Extract text between > and < or > and { (handles JSX expressions)
  const jsxPattern = />\s*\n?\s*([^<>{]+?)\s*[<{]/g;
  let match;
  while ((match = jsxPattern.exec(content)) !== null) {
    const text = cleanText(match[1]);
    if (!shouldSkip(text)) texts.push(text);
  }

  // 2. Extract from arrays: ['text', 'text']
  const arrayPattern = /['"]([^'"]{3,})['"]\s*[,\]]/g;
  while ((match = arrayPattern.exec(content)) !== null) {
    const text = cleanText(match[1]);
    if (!shouldSkip(text)) texts.push(text);
  }

  // 3. Extract from object properties: text: 'value', subtext: "value" (handles apostrophes)
  // Match single-quoted values
  const propPatternSingle = /(?:text|subtext|title|description|label|heading|content|message|name|role):\s*'([^']+)'/gi;
  while ((match = propPatternSingle.exec(content)) !== null) {
    const text = cleanText(match[1]);
    if (!shouldSkip(text)) texts.push(text);
  }
  // Match double-quoted values (can contain apostrophes)
  const propPatternDouble = /(?:text|subtext|title|description|label|heading|content|message|name|role):\s*"([^"]+)"/gi;
  while ((match = propPatternDouble.exec(content)) !== null) {
    const text = cleanText(match[1]);
    if (!shouldSkip(text)) texts.push(text);
  }

  // 4. Multiline JSX text (between > newline and newline <)
  const multilinePattern = />\s*\n\s*([A-Z][^<>{]*?)\s*\n\s*</g;
  while ((match = multilinePattern.exec(content)) !== null) {
    const text = cleanText(match[1]);
    if (!shouldSkip(text) && text.length > 10) texts.push(text);
  }

  return [...new Set(texts)];
}

function extract() {
  let output = '';

  output += '='.repeat(60) + '\n';
  output += 'PURPLE COMPUTER LANDING PAGE - CONTENT FOR CHATGPT\n';
  output += 'Generated: ' + new Date().toISOString().split('T')[0] + '\n';
  output += '='.repeat(60) + '\n\n';

  output += 'WEBSITE TEXT CONTENT BY SECTION\n';
  output += '-'.repeat(40) + '\n\n';

  const componentFiles = fs.readdirSync(componentsDir)
    .filter(f => f.endsWith('.tsx'))
    .sort();

  const seenTexts = new Set();

  for (const file of componentFiles) {
    const filePath = path.join(componentsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const texts = extractTextFromTSX(content);

    const newTexts = texts.filter(t => !seenTexts.has(t));
    if (newTexts.length > 0) {
      const sectionName = file.replace('.tsx', '').replace(/([A-Z])/g, ' $1').trim();
      output += `## ${sectionName}\n`;
      for (const text of newTexts) {
        seenTexts.add(text);
        output += `- ${text}\n`;
      }
      output += '\n';
    }
  }

  // Main page
  const indexPath = path.join(__dirname, 'src/pages/index.tsx');
  if (fs.existsSync(indexPath)) {
    const content = fs.readFileSync(indexPath, 'utf8');
    const texts = extractTextFromTSX(content);
    const newTexts = texts.filter(t => !seenTexts.has(t));
    if (newTexts.length > 0) {
      output += `## Page Metadata\n`;
      for (const text of newTexts) {
        seenTexts.add(text);
        output += `- ${text}\n`;
      }
      output += '\n';
    }
  }

  // Images
  output += '\n' + '='.repeat(60) + '\n';
  output += 'NON-TEXT ELEMENTS\n';
  output += '-'.repeat(40) + '\n\n';

  output += '## Bot/Mascot Characters\n';
  output += '- 5 friendly robot character illustrations (SVG)\n';
  output += '- Purple and light color variants\n';
  output += '- Used as decorative mascots throughout the page\n\n';

  output += '## Logo\n';
  output += '- Purple Computer wordmark with icon\n';
  output += '- SVG format\n\n';

  output += '## Product Screenshots\n';
  output += '- Ask feature: Shows typing interface where kids type words to see emojis\n';
  output += '- Play feature: Shows music/drawing keyboard interface\n';
  output += '- Write feature: Shows distraction-free writing mode with color shifts\n\n';

  output += '='.repeat(60) + '\n';
  output += 'END\n';
  output += '='.repeat(60) + '\n';

  fs.writeFileSync(outputFile, output, 'utf8');
  console.log(`Extracted to: ${outputFile}`);
}

extract();
