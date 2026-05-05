import Link from "next/link";
import { SectionTitle } from "@/components/section-title";

const pricingPlans = [
  {
    label: "基础款",
    price: "¥99",
    note: "适合先完成一份轻量纪念",
    summary: "保留一段旅途里最清晰的地点印象，生成入门级专属纪念方案。",
    features: ["1 份基础概念生成", "标准材质建议", "基础包装方案", "适合钥匙扣 / 冰箱贴"],
    accent:
      "border-[rgba(124,149,225,0.22)] bg-[linear-gradient(180deg,rgba(176,199,251,0.22),rgba(255,255,255,0.96))]",
  },
  {
    label: "升级款",
    price: "¥159",
    note: "更适合保留情绪和场景层次",
    summary: "加入更多旅途细节与风格引导，让纪念物更接近真正想留下来的那份感觉。",
    features: ["2 轮方案细化", "更多材质 / 色彩建议", "更完整的设计说明", "适合生态球 / 桌面摆件"],
    accent:
      "border-[rgba(208,209,249,0.4)] bg-[linear-gradient(180deg,rgba(208,209,249,0.38),rgba(255,255,255,0.98))]",
  },
  {
    label: "套装款",
    price: "¥239",
    note: "适合一段旅途做成完整收藏",
    summary: "把同一次旅行拆成多件纪念形式，形成更有层次的个人旅行收藏组合。",
    features: ["2-3 种纪念载体组合", "统一主题包装", "系列化视觉说明", "适合送礼或长期保存"],
    accent:
      "border-[rgba(238,214,236,0.5)] bg-[linear-gradient(180deg,rgba(238,214,236,0.46),rgba(255,255,255,0.98))]",
  },
];

const marketingGroups = [
  {
    icon: "📱",
    title: "小红书",
    copy: "内容种草，社区传播",
    mode: "Pull",
    tone:
      "border-[rgba(167,180,165,0.28)] bg-[rgba(167,180,165,0.12)] text-[color:var(--sage)]",
  },
  {
    icon: "📸",
    title: "Instagram",
    copy: "视觉营销，海外用户",
    mode: "Pull",
    tone:
      "border-[rgba(167,180,165,0.28)] bg-[rgba(167,180,165,0.12)] text-[color:var(--sage)]",
  },
  {
    icon: "🎪",
    title: "旅游景区合作",
    copy: "景区联名，现场展示",
    mode: "Push",
    tone:
      "border-[rgba(124,149,225,0.24)] bg-[rgba(124,149,225,0.12)] text-[color:var(--blue-deep)]",
  },
  {
    icon: "🏢",
    title: "企业定制礼品",
    copy: "B2B 批量定制渠道",
    mode: "Push",
    tone:
      "border-[rgba(124,149,225,0.24)] bg-[rgba(124,149,225,0.12)] text-[color:var(--blue-deep)]",
  },
  {
    icon: "🛒",
    title: "线上店铺",
    copy: "官网 / 淘宝 / 微信",
    mode: "Push",
    tone:
      "border-[rgba(124,149,225,0.24)] bg-[rgba(124,149,225,0.12)] text-[color:var(--blue-deep)]",
  },
];

const strategyCards = [
  {
    dot: "bg-[color:var(--sage)]",
    title: "Pull Strategy・拉动式营销",
    copy: "通过社交媒体内容种草和用户口碑驱动需求。小红书 / Instagram 真实旅行分享，让用户主动寻找印途 X。",
    surface:
      "border-[rgba(167,180,165,0.24)] bg-[linear-gradient(180deg,rgba(167,180,165,0.12),rgba(255,255,255,0.72))]",
  },
  {
    dot: "bg-[rgba(196,176,228,0.95)]",
    title: "Push Strategy・推动式营销",
    copy: "通过景区合作展示、企业定制礼品渠道主动推广品牌，将产品直接触达潜在用户的旅行场景。",
    surface:
      "border-[rgba(196,176,228,0.3)] bg-[linear-gradient(180deg,rgba(208,209,249,0.18),rgba(255,255,255,0.72))]",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-20 md:space-y-28">
      <section className="space-y-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            kicker="营销投放"
            title="传播方式会同时覆盖官方阵地、合作渠道和社媒扩散。"
          />
          <span className="sticker">品牌传播路径</span>
        </div>
        <div className="grid gap-5 xl:grid-cols-[1fr_1fr]">
          <article className="surface overflow-hidden rounded-[34px] border-[rgba(220,205,191,0.74)] bg-[linear-gradient(180deg,rgba(248,244,238,0.96),rgba(244,239,231,0.92))] p-6 md:p-8">
            <div className="space-y-8">
              <p className="text-[0.82rem] tracking-[0.16em] text-[color:var(--ink-soft)]">
                DISTRIBUTION CHANNELS ・ 渠道
              </p>
              <div className="space-y-4">
                {marketingGroups.map((group) => (
                  <div
                    key={group.title}
                    className="flex items-center gap-4 rounded-[28px] border border-[rgba(220,205,191,0.48)] bg-[rgba(255,255,255,0.5)] px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.42)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-[16px] border border-[rgba(220,205,191,0.42)] bg-[rgba(255,255,255,0.72)] text-[1.45rem] shadow-[0_10px_24px_rgba(74,68,61,0.06)]">
                      <span aria-hidden="true">{group.icon}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[1rem] font-medium tracking-[-0.02em] text-[color:var(--ink)] md:text-[1.06rem]">
                        {group.title}
                      </h3>
                      <p className="mt-1 text-[12px] leading-7 text-[color:var(--ink-soft)] md:text-[13px]">
                        {group.copy}
                      </p>
                    </div>
                    <span
                      className={`inline-flex min-w-[5.4rem] items-center justify-center rounded-full border px-4 py-2 text-[12px] font-medium md:text-[13px] ${group.tone}`}
                    >
                      {group.mode}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="surface overflow-hidden rounded-[34px] border-[rgba(220,205,191,0.74)] bg-[linear-gradient(180deg,rgba(250,246,241,0.98),rgba(244,239,231,0.92))] p-6 md:p-8">
            <div className="space-y-8">
              <p className="text-[0.82rem] tracking-[0.16em] text-[color:var(--ink-soft)]">
                GROWTH STRATEGY ・ PUSH / PULL 逻辑
              </p>
              <div className="space-y-5">
                {strategyCards.map((card) => (
                  <div
                    key={card.title}
                    className={`rounded-[30px] border p-6 md:p-8 ${card.surface}`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`h-4 w-4 rounded-full ${card.dot}`} />
                      <h3 className="text-[1rem] font-medium tracking-[-0.02em] text-[color:var(--ink)] md:text-[1.1rem]">
                        {card.title}
                      </h3>
                    </div>
                    <p className="mt-6 pl-8 text-[13px] leading-9 text-[color:var(--ink-soft)] md:text-[14px]">
                      {card.copy}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-[rgba(220,205,191,0.7)] pt-6">
                <p className="text-[13px] leading-8 text-[color:var(--ink-soft)] md:text-[14px]">
                  定价逻辑：根据定制的复杂度、材料品质和附加服务综合定价，确保每个价格档次都能为用户带来超出预期的价值体验。
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="space-y-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionTitle kicker="价格方案" title="" />
          <span className="sticker">展示版价格结构</span>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <article
              key={plan.label}
              className={`surface relative overflow-hidden p-6 md:p-7 ${plan.accent} ${
                index === 1 ? "lg:-translate-y-2 shadow-[0_26px_70px_rgba(138,131,197,0.14)]" : ""
              }`}
            >
              {index === 1 ? (
                <span className="absolute right-5 top-5 rounded-full bg-[rgba(255,255,255,0.88)] px-3 py-1 text-[10px] font-medium tracking-[0.08em] text-[color:var(--blue-deep)]">
                  推荐
                </span>
              ) : null}
              <p className="panel-label">{plan.label}</p>
              <div className="mt-4 flex items-end gap-2">
                <span className="font-[family-name:var(--font-display)] text-[2rem] font-medium leading-none text-[color:var(--ink)] md:text-[2.5rem]">
                  {plan.price}
                </span>
                <span className="pb-1 text-[12px] text-[color:var(--ink-soft)]">/ 单次方案</span>
              </div>
              <p className="mt-2 text-[12px] leading-7 text-[color:var(--blue-deep)]">
                {plan.note}
              </p>
              <p className="mt-4 text-[13px] leading-8 text-[color:var(--ink-soft)]">
                {plan.summary}
              </p>
              <div className="mt-5 space-y-2">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 rounded-[16px] border border-[rgba(255,255,255,0.58)] bg-[rgba(255,255,255,0.62)] px-3 py-2"
                  >
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[rgba(255,255,255,0.9)] text-[11px] text-[color:var(--blue-deep)]">
                      ✓
                    </span>
                    <span className="text-[12px] leading-6 text-[color:var(--ink)]">{feature}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="surface px-6 py-10 text-center md:px-12 md:py-12">
        <span className="section-kicker justify-center">进入制作体验</span>
        <h2 className="section-title mx-auto mt-4 max-w-2xl">
          如果你想回到产品本身，现在就可以直接进入制作环节。
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[13px] leading-8 text-[color:var(--ink-soft)]">
          看完价格和传播方式之后，可以直接去体验印途 X 的生成路径，看看一段旅行记忆会怎样被转化成纪念物。
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/create" className="action-button">
            进入制作
            <span>→</span>
          </Link>
          <Link href="/" className="ghost-button">
            返回品牌介绍
          </Link>
        </div>
      </section>
    </div>
  );
}
