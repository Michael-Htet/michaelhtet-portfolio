/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — deploy the `out/` folder anywhere (Vercel, Netlify, GitHub Pages, Nginx).
  output: "export",
  images: { unoptimized: true },
  // Hosts allowed to open the dev server (otherwise Next.js blocks its JS and the page can't hydrate).
  allowedDevOrigins: ["michael.pro", "192.168.64.2"],
};

export default nextConfig;
