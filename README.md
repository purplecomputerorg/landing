# Purple Computer Landing Page

The official landing page for [PurpleComputer.org](https://purplecomputer.org) - A joyful, kid-safe creativity computer for young children.

## Overview

This repository contains the complete landing site for Purple Computer, featuring:

- 💜 Beautiful, modern design with warm purple theme
- ✨ Interactive terminal demo showing the Purple Computer experience
- 🎨 Responsive layout optimized for all devices
- 📖 Comprehensive storytelling and feature descriptions
- 🔓 Links to open source repositories and community resources

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) - React framework with server-side rendering
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Fonts**: Inter & Nunito from Google Fonts
- **Deployment Ready**: Optimized for Vercel, Netlify, or any static hosting

## Project Structure

```
landing/
├── public/                    # Static assets
│   ├── logo.svg              # Purple Computer logo
│   └── favicon.txt           # Placeholder for favicon
├── src/
│   ├── components/           # React components
│   │   ├── Hero.tsx         # Hero section with headline
│   │   ├── TerminalDemo.tsx # Interactive terminal demo
│   │   ├── ComputerFrame.tsx # Computer frame decoration
│   │   ├── AboutSection.tsx  # Origin story & what is PC
│   │   ├── FeaturesSection.tsx # Feature highlights
│   │   ├── HowItWorksSection.tsx # Setup guide
│   │   ├── OpenSourceSection.tsx # Community & GitHub
│   │   ├── CTASection.tsx    # Call-to-action
│   │   └── Footer.tsx        # Footer with links
│   ├── lib/
│   │   └── fake-ipy-repl.ts # Terminal simulation logic
│   ├── pages/
│   │   ├── _app.tsx         # Next.js app wrapper
│   │   ├── _document.tsx    # HTML document structure
│   │   └── index.tsx        # Main landing page
│   └── styles/
│       └── globals.css      # Global styles & Tailwind
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended), npm, or yarn

### Installation

1. Clone this repository:
```bash
git clone https://github.com/purplecomputerorg/landing.git
cd landing
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
# or
yarn install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
pnpm build
pnpm start
```

Or for static export:
```bash
pnpm build
# The static site will be in the `out/` directory
```

## Interactive Terminal Demo

The centerpiece of the landing page is the interactive terminal demo, which simulates the Purple Computer experience in your browser.

### How It Works

The terminal demo (`src/components/TerminalDemo.tsx`) is a fully client-side React component that:

1. **Accepts User Input**: Captures keystrokes in a simulated terminal
2. **Processes Through REPL**: Uses `fake-ipy-repl.ts` to map words to emojis and colors
3. **Renders Output**: Displays colorful, playful responses in terminal style
4. **Supports Modes**: Switch between Normal, Emoji, Color, and Shapes modes

### REPL Logic (`src/lib/fake-ipy-repl.ts`)

The REPL (Read-Eval-Print Loop) simulation includes:

- **Emoji Mappings**: 50+ word-to-emoji mappings (cat → 🐱, sun → ☀️, etc.)
- **Mode System**: Different processing modes for varied interactions
- **Color System**: Rainbow color palette for visual delight
- **Shape System**: Geometric patterns for creative play

### Customization

To add new emoji mappings, edit `EMOJI_MAP` in `src/lib/fake-ipy-repl.ts`:

```typescript
const EMOJI_MAP: Record<string, string> = {
  'yourword': '🎉',
  // ... add more
};
```

## Design System

### Colors

- **Primary Purple**: `#5c2d91` - Main brand color
- **Purple Dark**: `#3d1d5f` - Darker shade for contrast
- **Purple Light**: `#7a4db8` - Lighter shade for accents
- **Yellow Accent**: `#ffd93d` - Warm highlight color
- **Sky Blue**: `#6dd5ed` - Secondary accent

### Typography

- **Display Font**: Nunito (headings, hero text)
- **Body Font**: Inter (paragraphs, UI text)
- **Terminal Font**: Monaco, Menlo, monospace (terminal demo)

### Animations

- Fade in animations for sections
- Slide up animations for hero
- Bounce animations for decorative elements
- Cursor blink animation in terminal

## Deployment

### Vercel (Recommended)

1. Push this repo to GitHub
2. Import to Vercel
3. Deploy with default Next.js settings

### Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Or use `next export` for static deployment

### Static Hosting

Generate static files:
```bash
# Update next.config.js to add: output: 'export'
pnpm build
```

Deploy the `out/` directory to any static host.

## Contributing

We welcome contributions! Here's how you can help:

1. **Report Issues**: Found a bug? [Open an issue](https://github.com/purplecomputerorg/landing/issues)
2. **Suggest Features**: Have ideas? We'd love to hear them
3. **Submit PRs**: Improvements to copy, design, or code are welcome
4. **Share Feedback**: Tell us what you think

### Development Guidelines

- Keep the design warm, friendly, and parent-accessible
- Maintain non-technical language in copy
- Ensure mobile responsiveness
- Test the interactive terminal thoroughly
- Follow existing code style (TypeScript, functional components)

## Links

- **Main Purple Computer OS**: [github.com/purplecomputerorg/purplecomputer](https://github.com/purplecomputerorg/purplecomputer)
- **GitHub Organization**: [github.com/purplecomputerorg](https://github.com/purplecomputerorg)
- **Landing Page**: [purplecomputer.org](https://purplecomputer.org)

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

Built with love by [Sequence Software](https://sequencesoftware.com) for families everywhere.

The Purple Computer project was inspired by the joy of watching young children explore technology fearlessly.

---

💜 Made with love for curious kids everywhere
