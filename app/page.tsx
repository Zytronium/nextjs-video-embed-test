// app/page.tsx
"use client";
import { useRef, useState } from "react";

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
  );
}
