import "./globals.css";
import { profile } from "@/data/profile";

export const metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: `${profile.name} is a Senior Software Engineer in ${profile.location} specialising in Odoo ERP, Python (FastAPI), APIs and Linux/AWS infrastructure.`,
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: profile.role,
    type: "website",
  },
};

export const viewport = {
  themeColor: "#1e1e1e",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
