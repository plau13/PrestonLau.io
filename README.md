# prestonlau.io

Personal portfolio for Preston Lau, built with Next.js, deployed to Cloudflare.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & deploy

```bash
npm run build    # outputs to out/
npm run deploy   # build + wrangler deploy
```

Or manually:

```bash
npx wrangler deploy
```

## Content

- **Featured projects:** `content/featured/*/index.md`
- **Experience:** `content/jobs/*/index.md`
- **Lessons:** `content/lessons/*.md`

## Stack

- Next.js 14 (static export)
- styled-components
- gray-matter + remark
- Cloudflare Workers (static assets via wrangler)
