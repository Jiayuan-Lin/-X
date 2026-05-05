"use client";

import { useState } from "react";

type FlowItem = {
  title: string;
  copy: string;
};

const flowItems: FlowItem[] = [
  {
    title: "浇灌记忆",
    copy: "声音，地点，情绪与旅途可视片段",
  },
  {
    title: "定格时刻",
    copy: "存储到个人回忆手账库中",
  },
  {
    title: "3D 打印",
    copy: "印刻实体 3D 打印产品",
  },
];

export function ProductFlowNavigator() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative overflow-hidden rounded-[32px] border border-[rgba(220,205,191,0.58)] bg-[linear-gradient(180deg,rgba(208,209,249,0.14),rgba(255,253,249,0.96),rgba(242,230,241,0.14))] p-5 shadow-[0_22px_60px_rgba(74,68,61,0.05)] md:p-7">
      <span className="absolute right-6 top-5 hidden h-5 w-5 rounded-full bg-[rgba(176,199,251,0.18)] md:block" />

      <div className="relative">
        <div className="pointer-events-none absolute inset-x-4 top-2 bottom-4 hidden md:block">
          <svg
            viewBox="0 0 900 250"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <path
              d="M162 88 C232 22, 304 136, 372 114"
              fill="none"
              stroke="rgba(83, 106, 133, 0.82)"
              strokeWidth="4.2"
              strokeLinecap="round"
            />
            <path
              d="M416 164 C492 222, 570 196, 690 116"
              fill="none"
              stroke="rgba(83, 106, 133, 0.82)"
              strokeWidth="4.2"
              strokeLinecap="round"
            />
            <path
              d="M354 107 L374 114 L360 127"
              fill="none"
              stroke="rgba(83, 106, 133, 0.82)"
              strokeWidth="4.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M670 106 L690 116 L675 132"
              fill="none"
              stroke="rgba(83, 106, 133, 0.82)"
              strokeWidth="4.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div
            className="absolute top-[-0.8rem] transition-all duration-500 ease-out"
            style={{
              left:
                activeIndex === 0
                  ? "8%"
                  : activeIndex === 1
                    ? "42.5%"
                    : "76.5%",
            }}
          >
            <svg
              viewBox="0 0 96 118"
              className="h-[6.8rem] w-auto rotate-[6deg] drop-shadow-[0_8px_12px_rgba(74,68,61,0.06)] motion-safe:animate-[walkerBounce_1.1s_ease-in-out_infinite]"
              aria-hidden="true"
            >
              <circle cx="40" cy="18" r="10" fill="rgba(176,141,104,0.96)" />
              <path
                d="M40 30 L46 58 M45 39 L29 46 M45 39 L60 31 M46 58 L31 83 M46 58 L64 72"
                fill="none"
                stroke="rgba(176,141,104,0.96)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M31 83 L31 98 M64 72 L76 84"
                fill="none"
                stroke="rgba(176,141,104,0.96)"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-8 md:pt-10">
          {flowItems.map((item, index) => {
            const isActive = index <= activeIndex;

            return (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                className="group relative text-left transition duration-300"
              >
                <div className="relative mx-auto flex min-h-[12rem] max-w-[16rem] items-center justify-center px-6 py-8 md:min-h-[13rem]">
                  <svg
                    viewBox="0 0 320 180"
                    className="absolute inset-0 h-full w-full"
                    aria-hidden="true"
                  >
                    <path
                      d="M34 96 C26 58, 73 34, 136 36 C204 22, 286 54, 286 96 C286 139, 236 164, 166 154 C93 164, 38 144, 34 96 Z"
                      fill={isActive ? "rgba(255,247,252,0.96)" : "rgba(244,239,247,0.82)"}
                      stroke={isActive ? "rgba(208,209,249,0.92)" : "rgba(220,205,191,0.82)"}
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M58 78 C88 52, 152 50, 212 62"
                      fill="none"
                      stroke="rgba(255,255,255,0.56)"
                      strokeWidth="9"
                      strokeLinecap="round"
                    />
                  </svg>

                  <div className="relative z-10 flex h-full w-full flex-col items-center justify-center text-center">
                    <span
                      className={`absolute left-1/2 top-[2.1rem] -translate-x-1/2 inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2 text-[11px] font-medium transition ${
                        isActive
                          ? "bg-[rgba(255,255,255,0.88)] text-[color:var(--blue-deep)]"
                          : "bg-[rgba(255,255,255,0.72)] text-[color:var(--ink-soft)]"
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <h3 className="mt-1 font-[family-name:var(--font-display)] text-[1.18rem] font-medium tracking-[-0.02em] text-[color:var(--ink)]">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <p className="mx-auto mt-4 max-w-[11rem] text-center text-[0.86rem] leading-7 text-[color:var(--ink-soft)]">
                  {item.copy}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
