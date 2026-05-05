import Link from "next/link";

export function HomeCover() {
  return (
    <section className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
      <div className="space-y-6">
        <span className="section-kicker">品牌首页</span>
        <h1 className="page-title max-w-xl">
          印途 X
          <br className="hidden md:block" />
          把旅行记忆整理成
          <br className="hidden md:block" />
          更值得保存的纪念物
        </h1>
        <p className="max-w-xl text-[13px] leading-8 text-[color:var(--ink-soft)] md:text-[14px]">
          这是一个把地点、情绪和旅途片段转成纪念物概念的品牌体验网站。
          你可以从一段旅行描述开始，获得结果预览，并继续进入 3D 定制与记忆归档。
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/create" className="action-button">
            开始体验
            <span>→</span>
          </Link>
          <Link href="/about" className="ghost-button">
            查看品牌方案
          </Link>
        </div>
      </div>

      <div className="illustration-card overflow-hidden">
        <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[22rem] border-b border-[color:var(--line)] bg-[linear-gradient(180deg,#f7f2ea,#fdfbf8)] md:min-h-[27rem] md:border-b-0 md:border-r">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_22%,rgba(115,147,164,0.14),transparent_22%),radial-gradient(circle_at_74%_26%,rgba(208,178,121,0.18),transparent_24%)]" />
            <div className="absolute inset-x-[12%] bottom-[8%] h-10 rounded-full bg-[rgba(220,205,191,0.24)] blur-[6px]" />
            <div className="absolute left-[8%] top-[12%] h-[76%] w-[84%] rounded-[28px] border border-[rgba(255,255,255,0.42)] shadow-[0_18px_48px_rgba(74,68,61,0.08)]" />
            <div className="absolute left-6 top-6">
              <span className="soft-label">主视觉</span>
            </div>
          </div>

          <div className="flex flex-col justify-between bg-[linear-gradient(180deg,#fffdfa,#f2ebe4)] p-6">
            <div className="space-y-4">
              <span className="panel-label">产品节奏</span>
              <div className="space-y-3">
                {[
                  "输入一段旅行记忆",
                  "选择纪念载体",
                  "获得结果预览",
                  "进入 3D 定制",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-[18px] border border-[rgba(115,147,164,0.12)] bg-[rgba(255,255,255,0.76)] px-4 py-3"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[rgba(115,147,164,0.08)] text-[11px] font-medium text-[color:var(--blue-deep)]">
                      0{index + 1}
                    </span>
                    <span className="text-[12px] text-[color:var(--ink)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-[20px] bg-[rgba(255,255,255,0.82)] px-4 py-4">
              <p className="panel-label">印途 X</p>
              <p className="mt-2 text-[12px] leading-7 text-[color:var(--ink-soft)]">
                更像日常生活方式品牌首页的产品入口，而不是需要先解锁才能进入的互动封面。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
