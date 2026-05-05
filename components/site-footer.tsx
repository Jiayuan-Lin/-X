import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/", label: "首页" },
  { href: "/about", label: "品牌方案" },
  { href: "/create", label: "进入制作" },
  { href: "/memory-book", label: "记忆手帐" },
];

export function SiteFooter() {
  return (
    <footer className="-mx-6 mt-20 overflow-hidden border-t border-[rgba(220,205,191,0.66)] bg-[rgba(255,253,249,0.94)] md:-mx-8 md:mt-28">
      <div className="relative min-h-[18rem]">
        <Image
          src="/footer-cover-base.jpg"
          alt="印途 X 页脚背景插图"
          fill
          className="object-cover opacity-[0.74] contrast-150 brightness-[0.9] saturate-75"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,253,249,0.96)_0%,rgba(255,253,249,0.72)_42%,rgba(255,253,249,0.88)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_24%,rgba(255,255,255,0.24),transparent_18%),radial-gradient(circle_at_82%_20%,rgba(208,178,121,0.1),transparent_18%)]" />

        <div className="relative mx-auto flex min-h-[18rem] max-w-7xl flex-col justify-end px-6 py-8 md:px-8 md:py-10">
          <div className="grid gap-6 rounded-t-[28px] border border-b-0 border-[rgba(220,205,191,0.72)] bg-[rgba(255,253,249,0.34)] p-6 backdrop-blur-[1px] md:grid-cols-[1.1fr_0.9fr] md:p-8">
            <div className="space-y-4">
              <span className="section-kicker">页脚信息</span>
              <h2 className="section-title max-w-xl">
                让每段旅途都留下一件
                <br className="hidden md:block" />
                可以被重新回望的纪念物
              </h2>
              <p className="max-w-xl text-[13px] leading-8 text-[color:var(--ink-soft)]">
                印途 X 把地点、情绪与片段整理成更温和的纪念形式，
                也把这些结果继续收进你的旅行记忆档案里。
              </p>
            </div>

            <div className="grid gap-3 md:justify-items-end">
              <div className="flex flex-wrap gap-2">
                {footerLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full border border-[rgba(115,147,164,0.14)] bg-[rgba(255,255,255,0.86)] px-4 py-2 text-[12px] font-medium text-[color:var(--ink)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="rounded-[20px] bg-[rgba(255,255,255,0.78)] px-4 py-4">
                <Image
                  src="/brand-logo-new.jpg"
                  alt="into X / 印途 X"
                  width={170}
                  height={102}
                  className="h-auto w-[7.5rem] mix-blend-multiply opacity-[0.92]"
                />
                <p className="mt-2 text-[12px] leading-7 text-[color:var(--ink-soft)]">
                  旅行纪念品牌体验网站
                  <br />
                  从记忆到纪念物
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
