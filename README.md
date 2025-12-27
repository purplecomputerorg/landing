# Purple Computer Landing Page

Landing page for [PurpleComputer.org](https://purplecomputer.org): a calm creativity computer for kids ages 3-8.

## Tech Stack

- Next.js 14
- TypeScript
- TailwindCSS
- Font Awesome icons

## Development

Requirements: Node.js 18+

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```

For production deployment:

```bash
vercel --prod
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deployments on push.

### Custom Domain (Namecheap)

1. In Vercel: Go to your project Settings > Domains > Add your domain
2. In Namecheap: Go to Domain List > Manage > Advanced DNS
3. Add these records:
   - Type: `A`, Host: `@`, Value: `216.198.79.1`
   - Type: `CNAME`, Host: `www`, Value: `cname.vercel-dns.com`
4. Wait for DNS propagation (can take up to 48 hours, usually faster)

**Alternative: Use Vercel DNS.** Instead of adding individual records, you can transfer DNS management to Vercel entirely. In Namecheap, go to Domain List > Manage > Domain, and set Custom DNS to:
- `ns1.vercel-dns.com`
- `ns2.vercel-dns.com`

This gives Vercel full control of your DNS. Use the A/CNAME approach above if you want to keep managing other DNS records in Namecheap.

## Project Structure

```
src/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── VideoSection.tsx
│   ├── ProblemSolution.tsx
│   ├── HowItWorks.tsx
│   ├── Features.tsx
│   ├── LittleThings.tsx
│   ├── Sustainability.tsx
│   ├── Story.tsx
│   ├── PreorderCTA.tsx
│   ├── Footer.tsx
│   ├── Section.tsx
│   ├── PaintStroke.tsx
│   └── ScreenshotModal.tsx
├── pages/
│   ├── index.tsx
│   ├── _app.tsx
│   └── _document.tsx
└── styles/
    └── globals.css
public/
├── logo.svg
├── favicon.ico
└── *_screenshot*.png
```

## Links

- [purplecomputer.org](https://purplecomputer.org)
- [github.com/purplecomputerorg](https://github.com/purplecomputerorg)

## License

MIT
