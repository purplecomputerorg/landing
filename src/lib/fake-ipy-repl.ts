/**
 * Fake IPython-style REPL for Purple Computer Demo
 * Simulates the magical interactive terminal experience
 */

export interface TerminalLine {
  type: 'input' | 'output' | 'system';
  content: string;
  color?: string;
  timestamp: number;
}

export type Mode = 'normal' | 'emoji' | 'color' | 'shapes';

// Emoji mappings for fun interactions
const EMOJI_MAP: Record<string, string> = {
  // Animals
  'cat': '🐱',
  'dog': '🐶',
  'bird': '🐦',
  'fish': '🐠',
  'bear': '🐻',
  'lion': '🦁',
  'tiger': '🐯',
  'cow': '🐮',
  'pig': '🐷',
  'frog': '🐸',
  'monkey': '🐵',
  'chicken': '🐔',
  'penguin': '🐧',
  'dinosaur': '🦕',
  'unicorn': '🦄',

  // Nature
  'tree': '🌳',
  'flower': '🌸',
  'sun': '☀️',
  'moon': '🌙',
  'star': '⭐',
  'cloud': '☁️',
  'rainbow': '🌈',
  'fire': '🔥',
  'water': '💧',

  // Food
  'apple': '🍎',
  'banana': '🍌',
  'pizza': '🍕',
  'cake': '🎂',
  'ice cream': '🍦',
  'cookie': '🍪',

  // Emotions & Faces
  'happy': '😊',
  'love': '❤️',
  'heart': '💜',
  'smile': '😄',
  'laugh': '😂',
  'joy': '😃',
  'cool': '😎',
  'think': '🤔',

  // Objects
  'computer': '💻',
  'phone': '📱',
  'book': '📚',
  'music': '🎵',
  'art': '🎨',
  'rocket': '🚀',
  'car': '🚗',
  'train': '🚂',
  'airplane': '✈️',
  'bike': '🚲',

  // Colors
  'purple': '💜',
  'red': '❤️',
  'blue': '💙',
  'green': '💚',
  'yellow': '💛',
  'orange': '🧡',

  // Purple Computer specific
  'purplecomputer': '💜💻',
  'magic': '✨',
  'sparkle': '✨',
  'robot': '🤖',
};

const COLORS = [
  '#ffd93d', // yellow
  '#6dd5ed', // sky blue
  '#ff6b9d', // pink
  '#a8e6cf', // mint green
  '#ffa07a', // light coral
  '#dda0dd', // plum
  '#87ceeb', // sky blue
  '#f0e68c', // khaki
];

const SHAPES = ['●', '■', '▲', '♦', '★', '♥', '◆', '✦'];

/**
 * Process user input and generate appropriate output
 */
export function processInput(
  input: string,
  mode: Mode = 'normal'
): TerminalLine[] {
  const lines: TerminalLine[] = [];
  const trimmedInput = input.trim().toLowerCase();

  if (!trimmedInput) {
    return lines;
  }

  // Check for mode commands
  if (trimmedInput === 'help') {
    lines.push({
      type: 'output',
      content: '💜 Purple Computer Demo Terminal',
      color: '#ffd93d',
      timestamp: Date.now(),
    });
    lines.push({
      type: 'output',
      content: 'Try typing: cat, dog, sun, rainbow, heart',
      color: '#6dd5ed',
      timestamp: Date.now() + 1,
    });
    lines.push({
      type: 'output',
      content: 'Type any word and see the magic!',
      color: '#ffd93d',
      timestamp: Date.now() + 2,
    });
    return lines;
  }

  if (trimmedInput === 'clear') {
    return [{ type: 'system', content: 'CLEAR', timestamp: Date.now() }];
  }

  // Process based on mode
  switch (mode) {
    case 'emoji':
      return processEmojiMode(input, trimmedInput);
    case 'color':
      return processColorMode(input);
    case 'shapes':
      return processShapesMode(input);
    default:
      return processNormalMode(input, trimmedInput);
  }
}

function processNormalMode(input: string, trimmedInput: string): TerminalLine[] {
  const lines: TerminalLine[] = [];

  // Check for direct emoji mappings
  const emojiMatch = EMOJI_MAP[trimmedInput];
  if (emojiMatch) {
    lines.push({
      type: 'output',
      content: emojiMatch.repeat(3),
      color: getRandomColor(),
      timestamp: Date.now(),
    });
    return lines;
  }

  // Check for words containing emoji mappings
  const words = trimmedInput.split(' ');
  const foundEmojis = words
    .map(word => EMOJI_MAP[word])
    .filter(Boolean);

  if (foundEmojis.length > 0) {
    lines.push({
      type: 'output',
      content: foundEmojis.join(' '),
      color: getRandomColor(),
      timestamp: Date.now(),
    });
    return lines;
  }

  // Echo back with colors for fun
  const colors = getRandomColors(words.length);
  words.forEach((word, idx) => {
    lines.push({
      type: 'output',
      content: word,
      color: colors[idx],
      timestamp: Date.now() + idx,
    });
  });

  return lines;
}

function processEmojiMode(input: string, trimmedInput: string): TerminalLine[] {
  const lines: TerminalLine[] = [];

  // In emoji mode, convert every word to emojis or echo with sparkles
  const words = trimmedInput.split(' ');
  const result = words.map(word => EMOJI_MAP[word] || `✨${word}✨`).join(' ');

  lines.push({
    type: 'output',
    content: result,
    color: '#ffd93d',
    timestamp: Date.now(),
  });

  return lines;
}

function processColorMode(input: string): TerminalLine[] {
  const lines: TerminalLine[] = [];
  const chars = input.split('');

  // Each character gets a different color
  const coloredOutput = chars.map((char, idx) => {
    const color = COLORS[idx % COLORS.length];
    return char;
  }).join('');

  lines.push({
    type: 'output',
    content: coloredOutput,
    color: getRandomColor(),
    timestamp: Date.now(),
  });

  return lines;
}

function processShapesMode(input: string): TerminalLine[] {
  const lines: TerminalLine[] = [];
  const words = input.split(' ');

  // Convert each word to shapes
  const result = words.map(() => {
    const shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
    return shape.repeat(3);
  }).join(' ');

  lines.push({
    type: 'output',
    content: result,
    color: getRandomColor(),
    timestamp: Date.now(),
  });

  return lines;
}

function getRandomColor(): string {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

function getRandomColors(count: number): string[] {
  const colors: string[] = [];
  for (let i = 0; i < count; i++) {
    colors.push(COLORS[i % COLORS.length]);
  }
  return colors;
}

/**
 * Generate a welcome message for the terminal
 */
export function getWelcomeMessage(): TerminalLine[] {
  return [
    {
      type: 'system',
      content: '💜 Welcome to Purple Computer! 💜',
      color: '#ffd93d',
      timestamp: Date.now(),
    },
    {
      type: 'system',
      content: 'Type anything and watch the magic happen...',
      color: '#6dd5ed',
      timestamp: Date.now() + 1,
    },
    {
      type: 'system',
      content: 'Try: cat, dog, rainbow, heart, or anything you like!',
      color: '#ffd93d',
      timestamp: Date.now() + 2,
    },
    {
      type: 'system',
      content: '',
      timestamp: Date.now() + 3,
    },
  ];
}

/**
 * Get mode description
 */
export function getModeDescription(mode: Mode): string {
  const descriptions: Record<Mode, string> = {
    normal: 'Normal Mode - Type words to discover emojis!',
    emoji: 'Emoji Mode - Everything becomes emojis! ✨',
    color: 'Color Mode - Rainbow text! 🌈',
    shapes: 'Shapes Mode - Geometric fun! ●■▲',
  };
  return descriptions[mode];
}
