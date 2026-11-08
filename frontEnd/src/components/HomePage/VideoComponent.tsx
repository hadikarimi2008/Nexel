"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

export default function VideoComponent({
  src,
  poster,
  className = "aspect-video",
}: {
  src: string;
  poster?: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.play().catch(() => setPlaying(false));
  }, []);

  function toggle() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) video.play();
    else video.pause();
  }

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-950 w-[90%] mx-auto mt-[20%] md:mt-[7%] ${className}`}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        controlsList="nofullscreen nodownload noremoteplayback"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onContextMenu={(e) => e.preventDefault()}
        className="pointer-events-none h-full w-full object-cover"
      />

      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause video" : "Play video"}
        className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border border-neutral-700 bg-neutral-950/70 text-white"
      >
        {playing ? <Pause size={14} /> : <Play size={14} />}
      </button>
    </div>
  );
}
