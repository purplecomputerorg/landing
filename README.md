# Purple Computer Landing Page

Landing page for [PurpleComputer.org](https://purplecomputer.org): a calm creativity computer for kids ages 3-8.

## Tech Stack

- Next.js 14
- TypeScript
- TailwindCSS
- Font Awesome icons
- Stripe (payments)

## Development

Requirements: Node.js 18+

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stripe Setup

1. Create a Stripe account at [stripe.com](https://stripe.com)

2. Get your test API keys from the [Stripe Dashboard](https://dashboard.stripe.com/test/apikeys)

3. Create a product and price:
   - Go to [Products](https://dashboard.stripe.com/test/products) in test mode
   - Click "Add product"
   - Name: "Purple Computer Pre-order"
   - Price: $50.00 (one-time)
   - Save and copy the Price ID (starts with `price_`)

4. Create `.env.local` from the example:
   ```bash
   cp .env.example .env.local
   ```

5. Fill in your keys:
   ```
   STRIPE_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_PRICE_ID=price_...
   ```

6. Test the checkout flow at [localhost:3000](http://localhost:3000)

Use Stripe's [test card numbers](https://docs.stripe.com/testing) to simulate payments:
- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`

### Going Live

When ready to accept real payments:

1. Complete your [Stripe account activation](https://dashboard.stripe.com/account/onboarding)
2. Create the same product/price in [live mode](https://dashboard.stripe.com/products) (not test mode)
3. Get your live API keys from [dashboard.stripe.com/apikeys](https://dashboard.stripe.com/apikeys)
4. Update your Vercel environment variables with the live keys (see below)

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

### Environment Variables

Add these in Vercel under Project Settings > Environment Variables:

| Variable | Value |
|----------|-------|
| `STRIPE_SECRET_KEY` | `sk_live_...` (or `sk_test_...` for preview) |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | `pk_live_...` (or `pk_test_...` for preview) |
| `STRIPE_PRICE_ID` | `price_...` |

You can set different values for Production vs Preview environments to use live keys in production and test keys for preview deployments.

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
