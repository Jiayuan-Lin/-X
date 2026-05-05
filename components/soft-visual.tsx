import Image from "next/image";

type SoftVisualProps = {
  variant: "hero" | "brand" | "create" | "result" | "memory";
  title: string;
  note?: string;
  imageSrc?: string;
  imageAlt?: string;
};

const visualStyles = {
  hero: {
    glow: "bg-[radial-gradient(circle_at_18%_18%,rgba(208,178,121,0.2),transparent_24%),radial-gradient(circle_at_82%_22%,rgba(115,147,164,0.16),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,239,231,0.9))]",
    card: "bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(244,239,231,0.92))]",
  },
  brand: {
    glow: "bg-[radial-gradient(circle_at_20%_24%,rgba(185,129,104,0.14),transparent_26%),radial-gradient(circle_at_78%_20%,rgba(167,180,165,0.18),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,244,238,0.94))]",
    card: "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,244,238,0.94))]",
  },
  create: {
    glow: "bg-[radial-gradient(circle_at_24%_18%,rgba(220,205,191,0.24),transparent_26%),radial-gradient(circle_at_78%_22%,rgba(115,147,164,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,239,231,0.9))]",
    card: "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,239,231,0.94))]",
  },
  result: {
    glow: "bg-[radial-gradient(circle_at_24%_20%,rgba(208,178,121,0.16),transparent_26%),radial-gradient(circle_at_78%_24%,rgba(185,129,104,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,244,238,0.92))]",
    card: "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,244,238,0.94))]",
  },
  memory: {
    glow: "bg-[radial-gradient(circle_at_22%_16%,rgba(115,147,164,0.12),transparent_24%),radial-gradient(circle_at_80%_26%,rgba(208,178,121,0.18),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,239,231,0.9))]",
    card: "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,239,231,0.92))]",
  },
} as const;

export function SoftVisual({ variant, title, note, imageSrc, imageAlt }: SoftVisualProps) {
  const style = visualStyles[variant];

  return (
    <div className={`illustration-card ${style.glow}`}>
      <div className="absolute inset-0 editorial-grid opacity-20" />
      <div className="relative p-6 md:p-8">
        <div className="mb-5 flex items-center justify-between">
          <span className="soft-label">视觉场景</span>
          <span className="panel-label">印途 X</span>
        </div>

        <div className={`relative overflow-hidden rounded-[26px] border border-[color:var(--line)] ${style.card} p-5 md:p-6`}>
          <div className="absolute inset-x-8 top-10 h-20 rounded-full bg-[rgba(255,255,255,0.6)] blur-2xl" />
          <div className="relative h-[18rem] md:h-[22rem]">
            {imageSrc ? (
              <div className="absolute inset-0 overflow-hidden rounded-[22px] border border-[rgba(220,205,191,0.68)] bg-[rgba(255,255,255,0.74)] shadow-[0_18px_40px_rgba(74,68,61,0.08)]">
                <Image
                  src={imageSrc}
                  alt={imageAlt || title}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                />
              </div>
            ) : (
              <>
                <div className="absolute left-[8%] top-[16%] h-16 w-24 rounded-[22px] border border-[rgba(115,147,164,0.2)] bg-[rgba(255,255,255,0.8)]" />
                <div className="absolute right-[10%] top-[18%] h-20 w-28 rounded-[24px] border border-[rgba(220,205,191,0.8)] bg-[rgba(255,255,255,0.72)]" />
                <div className="absolute bottom-[16%] left-[12%] h-20 w-20 rounded-[28px] border border-[rgba(185,129,104,0.18)] bg-[rgba(255,255,255,0.84)] shadow-[0_16px_32px_rgba(74,68,61,0.05)]" />
                <div className="absolute bottom-[18%] right-[14%] h-16 w-24 rounded-[20px] border border-[rgba(115,147,164,0.16)] bg-[rgba(255,255,255,0.8)]" />
                <div className="absolute left-[26%] top-[28%] h-28 w-44 rounded-[999px] border-[2px] border-[rgba(115,147,164,0.7)]" />
                <div className="absolute right-[22%] top-[28%] h-28 w-44 rounded-[999px] border-[2px] border-[rgba(208,178,121,0.8)]" />
                <div className="absolute left-[36%] top-[50%] h-1 w-16 -rotate-[15deg] rounded-full bg-[rgba(185,129,104,0.66)]" />
                <div className="absolute right-[34%] top-[50%] h-1 w-16 rotate-[15deg] rounded-full bg-[rgba(115,147,164,0.72)]" />
                <div className="absolute bottom-[6%] left-[18%] right-[18%] h-6 rounded-full bg-[rgba(220,205,191,0.38)] blur-[2px]" />
              </>
            )}
          </div>
        </div>

        <div className="mt-5 space-y-2">
          <p className="text-[0.98rem] font-medium tracking-[-0.02em] text-[color:var(--ink)]">
            {title}
          </p>
          {note ? (
            <p className="text-[12px] leading-7 text-[color:var(--ink-soft)]">
              {note}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
