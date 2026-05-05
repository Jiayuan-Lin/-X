"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/about", label: "品牌方案" },
  { href: "/create", label: "进入制作" },
  { href: "/result", label: "解锁结果" },
  { href: "/print-customization", label: "3D 定制" },
  { href: "/memory-book", label: "记忆手帐" },
];

export function MobileClipboardNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-[70] flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(220,205,191,0.9)] bg-[rgba(255,255,255,0.96)] shadow-[0_14px_30px_rgba(74,68,61,0.12)]"
        aria-label="打开夹板目录"
      >
        <span className="flex flex-col gap-[4px]">
          <span className="h-[2px] w-5 rounded-full bg-[color:var(--ink)]" />
          <span className="h-[2px] w-5 rounded-full bg-[color:var(--ink)]" />
          <span className="h-[2px] w-5 rounded-full bg-[color:var(--ink)]" />
        </span>
      </button>

      <div
        className={`fixed inset-0 z-[80] bg-[rgba(53,50,48,0.16)] px-4 py-6 transition duration-300 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className={`mx-auto flex h-full max-w-[26rem] flex-col transition duration-300 ${
            open ? "translate-y-0" : "translate-y-4"
          }`}
        >
          <div className="relative flex-1 overflow-hidden rounded-t-[28px] border-[4px] border-b-0 border-[color:var(--ink)] bg-[rgba(255,253,249,0.98)] px-7 pb-6 pt-12 shadow-[0_22px_60px_rgba(74,68,61,0.16)]">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-5 top-4 text-[12px] text-[color:var(--ink-soft)]"
            >
              关闭
            </button>

            <div className="absolute left-1/2 top-0 h-8 w-14 -translate-x-1/2 -translate-y-1/2 rounded-b-[10px] rounded-t-[12px] border-[3px] border-[color:var(--ink)] bg-[rgba(255,253,249,1)]" />
            <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-[170%] rounded-full border-[3px] border-[color:var(--ink)] bg-[rgba(255,253,249,1)]" />

            <div className="space-y-2">
              {navItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-4 py-5"
                  >
                    <span className="text-[16px] text-[#e38d93]">✦</span>
                    <span className="text-[1.45rem] font-medium tracking-[-0.03em] text-[color:var(--ink)]">
                      {item.label}
                    </span>
                  </Link>
                  <div className="h-[3px] bg-[rgba(53,50,48,0.12)]" />
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[26px] bg-[linear-gradient(180deg,#fff7dd,#f5ecff)] px-5 py-5">
              <Image
                src="/brand-logo-new.jpg"
                alt="into X / 印途 X"
                width={220}
                height={132}
                className="h-auto w-[9rem] mix-blend-multiply opacity-[0.94]"
              />
              <p className="mt-3 text-[1rem] font-medium leading-7 tracking-[-0.03em] text-[color:var(--ink)]">
                从记忆开始，打开一件纪念物
              </p>
            </div>

            <p className="mt-5 text-[12px] leading-7 text-[color:var(--ink-soft)]">
              这里是移动端固定目录入口。无论浏览到哪一页，都可以从这里快速回到品牌介绍、品牌方案或制作体验。
            </p>
          </div>
          <div className="h-5 rounded-b-[20px] bg-[rgba(244,239,231,0.9)]" />
        </div>
      </div>
    </>
  );
}
