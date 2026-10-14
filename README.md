# Htet Aung Shane — Portfolio

Next.js (App Router, JavaScript) static portfolio site.

## Edit content
All text lives in `data/profile.js` — experience, skills, services, contact links.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Build & deploy
```bash
npm run build      # static site in ./out
```
Deploy `out/` to Vercel, Netlify, GitHub Pages, or any Nginx server.

## Docker
Multi-stage build: Node builds the static site, Nginx serves it (~77 MB image, no Node at runtime).
```bash
docker build -t michaelhtet-portfolio .
docker run -d -p 8030:80 michaelhtet-portfolio
```
