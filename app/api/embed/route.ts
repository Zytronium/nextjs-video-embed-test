import { NextResponse } from "next/server";

const getBase = () => {
  if (process.env.BASE_URL) return process.env.BASE_URL.replace(/\/$/, "");
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
};

export async function GET() {
  const BASE = getBase();
  const videoUrl = `${BASE}/videos/video.mp4`;
  const posterUrl = `${BASE}/videos/poster.jpg`;

  const embedHTML = `<!doctype html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="video.other" />
        <meta property="og:title" content="Stellicast Video" />
        <meta property="og:video" content="${BASE}/api/embed" />
        <meta property="og:video:type" content="text/html" />
        <meta property="og:image" content="${posterUrl}" />
        <style>
          body{margin:0;background:black;display:flex;align-items:center;justify-content:center;height:100vh}
          video{width:100%;max-width:1280px;border-radius:12px;background:black}
        </style>
      </head>
      <body>
        <video src="${videoUrl}" poster="${posterUrl}" autoplay controls playsinline></video>
      </body>
    </html>`;

  return new NextResponse(embedHTML, {
    status: 200,
    headers: {
      "Content-Type": "text/html",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
