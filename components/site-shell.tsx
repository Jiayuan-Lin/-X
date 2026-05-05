import Link from "next/link";
import { ReactNode } from "react";
import { MobileClipboardNav } from "@/components/mobile-clipboard-nav";
import { SiteFooter } from "@/components/site-footer";

const navItems = [
  { href: "/", label: "brand" },
  { href: "/about", label: "plan" },
  { href: "/create", label: "create" },
  { href: "/result", label: "result" },
  { href: "/print-customization", label: "print" },
  { href: "/memory-book", label: "book" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,rgba(220,205,191,0.28),transparent_55%)]" />
        <div className="absolute left-[8%] top-36 h-24 w-24 rounded-full border border-[rgba(220,205,191,0.5)]" />
        <div className="absolute right-[10%] top-44 h-20 w-28 rounded-full border border-[rgba(115,147,164,0.18)]" />
      </div>

      <header className="relative z-50">
        <div className="pointer-events-none fixed inset-x-0 top-0 z-[65] hidden md:block">
          <div className="pointer-events-auto mx-auto max-w-7xl bg-[color:var(--bg)] px-8 py-4">
            <div className="mb-2 text-center">
              <span
                className="inline-block rotate-[-3deg] text-[1.08rem] tracking-[0.22em] text-[color:var(--ink)]"
                style={{
                  fontFamily:
                    '"Bradley Hand", "Segoe Print", "Comic Sans MS", "Marker Felt", cursive',
                }}
              >
                into X
              </span>
            </div>
            <nav className="flex items-center justify-center gap-10 lg:gap-14">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative pb-3 text-[1.08rem] leading-none text-[color:var(--ink)] transition-opacity hover:opacity-65 ${
                    index % 2 === 0 ? "rotate-[-3deg]" : "rotate-[2deg]"
                  }`}
                  style={{
                    fontFamily:
                      '"Bradley Hand", "Segoe Print", "Comic Sans MS", "Marker Felt", cursive',
                  }}
                >
                  {item.label}
                  <span className="pointer-events-none absolute left-1/2 top-full h-[12px] w-[84%] -translate-x-1/2 -translate-y-[6px] opacity-0 transition duration-200 group-hover:opacity-100">
                    <svg
                      viewBox="0 0 120 16"
                      className="h-full w-full"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 10 C18 13, 34 7, 48 10 S78 13, 92 10 S106 9, 116 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="animate-[pageFade_0.45s_ease-out] relative mx-auto max-w-7xl px-6 py-14 md:px-8 md:pt-36 md:py-24">
        {children}
      </main>

      <SiteFooter />

      <MobileClipboardNav />
    </div>
  );
}
