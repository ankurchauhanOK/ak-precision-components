"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  PlayIcon,
  PauseIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  ArrowsPointingOutIcon,
  ArrowsPointingInIcon,
} from "@heroicons/react/24/solid";

type VideoPlayerProps = {
  src: string;
  className?: string;
};

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function VideoPlayer({ src, className = "" }: VideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, []);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  }, []);

  const toggleFullscreen = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      el.requestFullscreen().catch(() => {});
    }
  }, []);

  const seekFromClientX = useCallback((clientX: number) => {
    const bar = barRef.current;
    const video = videoRef.current;
    if (!bar || !video || !video.duration) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
    video.currentTime = ratio * video.duration;
    setProgress(ratio);
  }, []);

  const onBarPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      draggingRef.current = true;
      barRef.current?.setPointerCapture(e.pointerId);
      seekFromClientX(e.clientX);
    },
    [seekFromClientX],
  );

  const onBarPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (draggingRef.current) seekFromClientX(e.clientX);
    },
    [seekFromClientX],
  );

  const onBarPointerUp = useCallback(() => {
    draggingRef.current = false;
  }, []);

  const onBarKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const video = videoRef.current;
      if (!video) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        video.currentTime = Math.max(0, video.currentTime - 5);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        video.currentTime = Math.min(video.duration, video.currentTime + 5);
      }
    },
    [],
  );

  useEffect(() => {
    const onFullscreenChange = () =>
      setFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = containerRef.current;
      if (!el || !el.contains(document.activeElement)) return;
      if (e.code === "Space") {
        e.preventDefault();
        togglePlay();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [togglePlay]);

  const controlBase = "flex items-center justify-center rounded-lg transition-colors duration-200";
  const controlOnDark = "text-white hover:bg-white/15";
  const controlOnLight = "text-[#315C4A] hover:bg-light-sage/40";
  const controlClass = `${controlBase} ${fullscreen ? controlOnDark : controlOnLight}`;

  return (
    <div
      ref={containerRef}
      className={`w-full rounded-[32px] border shadow-soft ${
        fullscreen
          ? "bg-deep-forest border-transparent"
          : "bg-white border-light-sage"
      } ${className}`}
    >
      <div className="p-3">
        <div className="relative w-full rounded-[32px] bg-deep-forest flex items-center justify-center">
          <div
            className={`relative aspect-[16/9] rounded-[32px] overflow-hidden flex-shrink-0 ${
              fullscreen
                ? "h-[calc(100dvh-160px)] w-auto max-w-full"
                : "w-full"
            }`}
          >
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src={src}
            muted={muted}
            loop
            autoPlay
            playsInline
            preload="auto"
            onClick={togglePlay}
            onTimeUpdate={() => {
              const video = videoRef.current;
              if (video?.duration)
                setProgress(video.currentTime / video.duration);
            }}
            onLoadedMetadata={() => {
              const video = videoRef.current;
              if (video?.duration) setDuration(video.duration);
            }}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          />

          {!playing && (
              <button
                type="button"
                onClick={togglePlay}
                aria-label="Play video"
                className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-transform duration-200 hover:scale-105"
              >
                <PlayIcon className="w-7 h-7 ml-1" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div
        className={`flex items-center gap-2 px-4 h-[60px] ${
          fullscreen ? "bg-transparent" : "rounded-b-[31px]"
        }`}
      >
        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? "Pause video" : "Play video"}
          className={`w-11 h-11 ${controlClass}`}
        >
          {playing ? (
            <PauseIcon className="w-5 h-5" />
          ) : (
            <PlayIcon className="w-5 h-5 ml-0.5" />
          )}
        </button>

        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className={`w-11 h-11 ${controlClass}`}
        >
          {muted ? (
            <SpeakerXMarkIcon className="w-5 h-5" />
          ) : (
            <SpeakerWaveIcon className="w-5 h-5" />
          )}
        </button>

        <div
          ref={barRef}
          role="slider"
          aria-label="Video progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress * 100)}
          tabIndex={0}
          onPointerDown={onBarPointerDown}
          onPointerMove={onBarPointerMove}
          onPointerUp={onBarPointerUp}
          onKeyDown={onBarKeyDown}
          className="group relative flex-1 h-8 flex items-center cursor-pointer"
        >
          <div
            className={`relative h-1 w-full rounded-full overflow-hidden ${
              fullscreen ? "bg-white/20" : "bg-[#D4DDD8]"
            }`}
          >
            <div
              className="absolute inset-y-0 left-0 bg-action-green rounded-full"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
          <div
            className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-action-green shadow opacity-0 group-hover:opacity-100 transition-opacity duration-150"
            style={{ left: `calc(${progress * 100}% - 7px)` }}
          />
        </div>

        <span
          className={`text-xs tabular-nums font-medium ${
            fullscreen ? "text-light-sage" : "text-sage"
          }`}
        >
          {formatTime(progress * duration)}
          <span className="mx-0.5">/</span>
          {formatTime(duration)}
        </span>

        <button
          type="button"
          onClick={toggleFullscreen}
          aria-label={fullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          className={`w-11 h-11 ${controlClass}`}
        >
          {fullscreen ? (
            <ArrowsPointingInIcon className="w-5 h-5" />
          ) : (
            <ArrowsPointingOutIcon className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
}
