import Image from "next/image";
import Link from "next/link";

export function BrandMark() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/brand-logo-new.jpg"
        alt="into X / 印途 X"
        width={96}
        height={58}
        className="h-auto w-[4.5rem] mix-blend-multiply opacity-[0.94]"
      />
      <div className="space-y-0.5">
        <p className="text-[16px] font-medium tracking-[-0.03em] text-[color:var(--ink)]">
          印途 X
        </p>
        <p className="text-[11px] tracking-[0.03em] text-[color:var(--ink-soft)]">
          把旅途记忆，整理成可保存的纪念物
        </p>
      </div>
    </Link>
  );
}
