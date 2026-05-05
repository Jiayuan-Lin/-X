"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type MemoryPoint = {
  id: number;
  city: string;
  name: string;
  date: string;
  x: string;
  y: string;
  imageSrc: string;
  audioSrc?: string;
  souvenirType: string;
  souvenirTitle: string;
  souvenirNote: string;
};

const memoryPoints: MemoryPoint[] = [
  {
    id: 1,
    city: "重庆",
    name: "重庆 · 地道美食街",
    date: "2025.02.07",
    x: "31.2%",
    y: "67.3%",
    imageSrc: "/chongqing-city-cutaway.jpg",
    souvenirType: "城市剪影",
    souvenirTitle: "重庆城市捷运剪影",
    souvenirNote:
      "把山城高低起伏的城市结构、索道、轻轨和火锅烟火感一起压缩进一件立体城市剪影里，让重庆的节奏感被完整保留下来。",
  },
  {
    id: 2,
    city: "深圳",
    name: "深圳 · 蝶光星河展",
    date: "2025.03.18",
    x: "45.8%",
    y: "88.2%",
    imageSrc: "/shenzhen-memory-biosphere.jpg",
    audioSrc: "/shenzhen-memory-audio.mp3",
    souvenirType: "记忆生态球",
    souvenirTitle: "蝶光星河生态球",
    souvenirNote:
      "把彩色蝴蝶、展厅光影和那一刻温柔安静的氛围封存在透明球体里，像一颗能被握住的小小宇宙。",
  },
  {
    id: 3,
    city: "台南垦丁",
    name: "台南垦丁 · 山海风光",
    date: "2024.08.25",
    x: "56.8%",
    y: "93.1%",
    imageSrc: "/kenting-memory-collage.jpg",
    audioSrc: "/kenting-memory-audio.mp3",
    souvenirType: "记忆拼贴板",
    souvenirTitle: "垦丁山海记忆拼贴板",
    souvenirNote:
      "把海岸公路、冲浪板、夜市、食物和海风感一起收进一块旅行拼贴板里，让垦丁的热度和轻松都被层层保存下来。",
  },
];

export function MemoryMapArchive() {
  const [activeId, setActiveId] = useState<number>(2);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const activePoint =
    memoryPoints.find((point) => point.id === activeId) ?? memoryPoints[1];

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (activePoint.audioSrc) {
      audio.src = activePoint.audioSrc;
      audio.currentTime = 0;
      void audio.play().catch(() => {
        // Ignore autoplay failures; playback still works on supported user-triggered clicks.
      });
      return;
    }

    audio.pause();
    audio.currentTime = 0;
  }, [activePoint]);

  return (
    <div className="relative overflow-hidden rounded-[30px] border border-[rgba(192,198,231,0.72)] bg-[linear-gradient(180deg,#eef2fb,#e8eef8_46%,#f4eef8)] p-4 shadow-[0_24px_60px_rgba(94,105,141,0.14)] md:p-6">
      <audio ref={audioRef} preload="auto" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(176,199,251,0.34),transparent_22%),radial-gradient(circle_at_82%_18%,rgba(238,214,236,0.28),transparent_18%),linear-gradient(rgba(255,255,255,0.24),rgba(255,255,255,0))]" />

      <div className="relative rounded-[24px] border border-[rgba(192,198,231,0.74)] bg-[rgba(255,255,255,0.5)] p-4 backdrop-blur md:p-5">
        <div className="mb-4 flex flex-col gap-3 border-b border-[rgba(192,198,231,0.6)] pb-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-medium tracking-[0.18em] text-[color:var(--blue-deep)]">
              MEMORY MAP · 旅行回忆地图
            </p>
            <h3 className="mt-2 text-[1.05rem] font-medium text-[color:var(--ink)]">
              点击地图上的地点，查看该地方生成的纪念品
            </h3>
          </div>
          <p className="text-[12px] text-[color:var(--ink-soft)]">
            重庆 / 深圳 / 台南垦丁
          </p>
        </div>

        <div className="grid gap-5 xl:grid-cols-[1.12fr_0.88fr] xl:items-stretch">
          <div className="relative overflow-hidden rounded-[22px] border border-[rgba(192,198,231,0.72)] bg-[rgba(255,255,255,0.72)] xl:flex xl:min-h-[42rem] xl:items-center xl:justify-center">
            <div className="relative aspect-[1753/1279] w-full xl:mt-8">
              <Image
                src="/memory-handbook-map.jpg"
                alt="旅行回忆地图"
                fill
                className="pointer-events-none object-cover select-none"
                sizes="(min-width: 1280px) 60vw, 100vw"
                priority
              />

              <div className="absolute inset-0">
                {memoryPoints.map((point) => {
                  const active = point.id === activeId;

                  return (
                    <button
                      key={point.id}
                      type="button"
                      onClick={() => setActiveId(point.id)}
                      className="absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full focus:outline-none"
                      style={{ left: point.x, top: point.y }}
                      aria-pressed={active}
                      aria-label={`切换到${point.name}`}
                    >
                      <span className="relative flex h-14 w-14 items-center justify-center">
                        <span
                          className={`absolute h-12 w-12 rounded-full transition ${
                            active
                              ? "bg-[rgba(108,99,255,0.18)] shadow-[0_0_0_10px_rgba(108,99,255,0.08)]"
                              : "bg-[rgba(108,99,255,0.08)]"
                          }`}
                        />
                        <span
                          className={`absolute h-4.5 w-4.5 rounded-full border-[2px] border-white shadow-[0_4px_12px_rgba(94,105,141,0.18)] transition ${
                            active ? "bg-[#6C63FF]" : "bg-[#8a84ff]"
                          }`}
                        />
                        <span
                          className={`absolute whitespace-nowrap rounded-full border px-2.5 py-1 text-[10px] font-medium transition ${
                            point.id === 3
                              ? "left-full top-1/2 ml-2 -translate-y-1/2"
                              : "left-1/2 top-full mt-1 -translate-x-1/2"
                          } ${
                            active
                              ? "border-[rgba(108,99,255,0.22)] bg-white text-[color:var(--blue-deep)]"
                              : "border-[rgba(192,198,231,0.72)] bg-[rgba(255,255,255,0.92)] text-[color:var(--ink-soft)]"
                          }`}
                        >
                          {point.city}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <article className="flex h-full flex-col rounded-[22px] border border-[rgba(192,198,231,0.72)] bg-[rgba(255,255,255,0.84)] p-5 shadow-[0_12px_28px_rgba(94,105,141,0.1)] md:p-6">
            <div className="mb-5 flex flex-wrap gap-2">
              {memoryPoints.map((point) => {
                const active = point.id === activeId;

                return (
                  <button
                    key={point.id}
                    type="button"
                    onClick={() => setActiveId(point.id)}
                    className={`rounded-full border px-3 py-1.5 text-[12px] font-medium transition ${
                      active
                        ? "border-[rgba(108,99,255,0.22)] bg-[rgba(108,99,255,0.1)] text-[color:var(--blue-deep)]"
                        : "border-[rgba(192,198,231,0.72)] bg-white text-[color:var(--ink-soft)]"
                    }`}
                    aria-pressed={active}
                  >
                    {point.city}
                  </button>
                );
              })}
            </div>

            <div className="space-y-2 border-b border-[rgba(192,198,231,0.62)] pb-4">
              <p className="text-[11px] tracking-[0.12em] text-[color:var(--blue-deep)]">
                {activePoint.date}
              </p>
              <h4 className="text-[1.04rem] font-medium text-[color:var(--ink)]">
                {activePoint.name}
              </h4>
            </div>

            <div className="mt-5 rounded-[18px] border border-[rgba(192,198,231,0.7)] bg-[linear-gradient(135deg,rgba(176,199,251,0.16),rgba(255,255,255,0.94),rgba(238,214,236,0.22))] p-4">
              <div className="relative mb-4 overflow-hidden rounded-[16px] border border-[rgba(192,198,231,0.68)] bg-[rgba(255,255,255,0.82)]">
                <div className="relative aspect-[5/4] w-full">
                  <Image
                    src={activePoint.imageSrc}
                    alt={activePoint.souvenirTitle}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 28vw, 100vw"
                  />
                </div>
              </div>
              <p className="text-[10px] font-medium tracking-[0.14em] text-[color:var(--ink-soft)]">
                生成纪念品
              </p>
              <h5 className="mt-3 text-[1rem] font-medium text-[color:var(--ink)]">
                {activePoint.souvenirTitle}
              </h5>
              <p className="mt-2 text-[12px] text-[color:var(--blue-deep)]">
                {activePoint.souvenirType}
              </p>
              <p className="mt-4 text-[13px] leading-8 text-[color:var(--ink-soft)]">
                {activePoint.souvenirNote}
              </p>
            </div>

            <div className="mt-auto flex flex-wrap gap-2 pt-5">
              <span className="rounded-full bg-[rgba(124,149,225,0.12)] px-3 py-1 text-[11px] font-medium text-[color:var(--blue-deep)]">
                点击地图切换地点
              </span>
              <span className="rounded-full bg-[rgba(238,214,236,0.18)] px-3 py-1 text-[11px] font-medium text-[color:var(--ink-soft)]">
                查看不同纪念品方案
              </span>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
