"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export function BrandPhotoCover() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    let hasPlayed = false;

    const playOnce = () => {
      if (!audio || hasPlayed) {
        return;
      }

      hasPlayed = true;
      audio.currentTime = 0;
      void audio.play().catch(() => {
        hasPlayed = false;
      });
    };

    void audio.play()
      .then(() => {
        hasPlayed = true;
      })
      .catch(() => {
        // Browsers may block autoplay with sound; fall back to first interaction.
      });

    const handleFirstInteraction = () => {
      playOnce();
      window.removeEventListener("pointerdown", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };

    window.addEventListener("pointerdown", handleFirstInteraction, { once: true });
    window.addEventListener("keydown", handleFirstInteraction, { once: true });
    window.addEventListener("touchstart", handleFirstInteraction, { once: true });

    return () => {
      audio.pause();
      audio.currentTime = 0;
      window.removeEventListener("pointerdown", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, []);

  return (
    <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-[rgba(220,205,191,0.66)] bg-[rgba(255,253,249,0.94)]">
      <audio ref={audioRef} src="/cover-background-audio.mp3" preload="auto" />
      <div className="relative min-h-[30rem] md:min-h-[36rem]">
        <video
          src="/brand-cover-video.mov"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.58] contrast-105 brightness-[1.04] saturate-60"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="印途 X 品牌封面动态背景"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,253,249,0.88)_0%,rgba(255,253,249,0.66)_32%,rgba(255,253,249,0.18)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.22),transparent_20%),radial-gradient(circle_at_82%_18%,rgba(208,178,121,0.1),transparent_20%)]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(255,253,249,0),rgba(255,253,249,0.68)_65%,rgba(255,253,249,0.96))]" />
        <div className="absolute left-6 top-6 md:left-10 md:top-8">
          <p
            className="rotate-[-2deg] text-[0.96rem] leading-none tracking-[0.08em] text-[rgba(53,50,48,0.58)] md:text-[1.58rem]"
            style={{
              fontFamily:
                '"Bradley Hand", "Segoe Print", "Comic Sans MS", "Marker Felt", cursive',
            }}
          >
            Hi, dear travel collector ~
          </p>
        </div>
        <div className="relative mx-auto grid min-h-[30rem] max-w-7xl items-end px-6 py-10 md:min-h-[36rem] md:px-8 md:py-12">
          <div className="max-w-3xl space-y-5 rounded-[28px] bg-[rgba(255,253,249,0.34)] p-6 shadow-[0_14px_32px_rgba(74,68,61,0.03)] backdrop-blur-[1px] md:p-8">
            <h1 className="page-title max-w-2xl">
              印途 X
              <br className="hidden md:block" />
              记录旅途中独属于你
              <br className="hidden md:block" />
              的小确幸时刻
            </h1>
            <p className="max-w-2xl text-[13px] leading-8 text-[color:var(--ink-soft)] md:text-[14px]">
              在这里，旅行的回忆将被有形化，印刻成无与伦比的 3D 打印纪念品。
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/create" className="action-button">
                开始体验
                <span>→</span>
              </Link>
              <Link href="/about" className="ghost-button">
                品牌方案
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
