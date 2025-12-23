"use client";

import { useRef, useState } from "react";
import Head from "next/head";

const BASE = process.env.NEXT_PUBLIC_BASE_URL || "";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return (
    <>
      <Head>
        <title>Stellicast Video</title>
        <meta property="og:type" content="video.other" />
        <meta property="og:title" content="Stellicast Video" />
        <meta property="og:description" content="Watch this Stellicast video" />
        <meta property="og:video" content={`${BASE}/api/embed`} />
        <meta property="og:video:type" content="text/html" />
        <meta property="og:video:width" content="1280" />
        <meta property="og:video:height" content="720" />
        <meta property="og:image" content={`${BASE}/videos/poster.jpg`} />
        <link
            rel="alternate"
            type="application/json+oembed"
            href={`${BASE}/oembed.json`}
            title="Stellicast Video"
        />
      </Head>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "#0b1020",
        }}
      >
        <div
          style={{
            width: "90%",
            maxWidth: 960,
            borderRadius: 14,
            boxShadow: "0 20px 60px rgba(0,0,0,.6)",
            overflow: "hidden",
            background: "#050814",
          }}
        >
          <video
            ref={videoRef}
            style={{ width: "100%", display: "block", background: "black" }}
            preload="metadata"
            src="/videos/video.mp4"
          />
          <div
            style={{
              display: "flex",
              gap: 12,
              padding: 12,
              background: "#050814",
            }}
          >
            <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
            <button onClick={toggleMute}>{muted ? "Unmute" : "Mute"}</button>
          </div>
        </div>
      </div>
    </>
  );
}
