import { BrandPhotoCover } from "@/components/brand-photo-cover";
import Image from "next/image";
import Link from "next/link";
import { CarrierCard } from "@/components/carrier-card";
import { MemoryCard } from "@/components/memory-card";
import { ProductFlowNavigator } from "@/components/product-flow-navigator";
import { SectionTitle } from "@/components/section-title";
import { SoftVisual } from "@/components/soft-visual";
import { carrierShowcase, memoryEntries } from "@/lib/mock-data";

const targetAudience = [
  { label: "旅行爱好者", accent: "bg-[linear-gradient(135deg,#7C95E1,#B0C7FB)]" },
  { label: "Z 世代", accent: "bg-[linear-gradient(135deg,#B0C7FB,#D0D1F9)]" },
  { label: "个性主义者", accent: "bg-[linear-gradient(135deg,#D0D1F9,#EED6EC)]" },
  { label: "高品质追求者", accent: "bg-[linear-gradient(135deg,#EED6EC,#F2E6F1)]" },
];

const steps = [
  {
    no: "01",
    title: "写下旅途记忆",
    copy: "输入地点、日期与一段想保存的旅途片段。",
  },
  {
    no: "02",
    title: "选择纪念载体",
    copy: "从钥匙扣、生态球、摆件等形式里挑一个方向。",
  },
  {
    no: "03",
    title: "获得概念结果",
    copy: "系统会返回模拟的纪念概念页与设计说明。",
  },
  {
    no: "04",
    title: "继续 3D 定制",
    copy: "你可以继续调整材质、尺寸与色彩方向。",
  },
];

const brandCards = [
  {
    title: "为什么需要它",
    copy: "多数纪念品只记录地点，却很少记录你真正记住的那一瞬间。",
  },
  {
    title: "印途 X 做什么",
    copy: "把记忆里的气味、光线、街道与情绪，转成更适合保存的纪念形式。",
  },
  {
    title: "它想留下什么",
    copy: "不只是旅行证明，而是一件能重新唤起那段旅途的专属纪念物。",
  },
];

const brandHighlights = [
  {
    icon: "🔮",
    english: "PRODUCT VS BRAND",
    title: "产品与品牌",
    copy: "产品是回忆与情感的载体，品牌是个性化定制和科技的结合。印途 X 超越单纯的产品销售，成为个性化生活方式的象征。",
  },
  {
    icon: "📖",
    english: "MEMORY ALBUM",
    title: "回忆录",
    copy: "用户的旅行记忆将通过 3D 打印变成有形的物品。每一件成品都承载着独特的记忆片段，记录您最珍贵的山海足迹。",
  },
  {
    icon: "🖨️",
    english: "3D PRINT CUSTOM",
    title: "3D 打印定制",
    copy: "为用户提供完全个性化的产品。利用高精度 3D 打印技术，将您的照片转化为独一无二的立体模型，细节层次极为丰富。",
  },
  {
    icon: "🎨",
    english: "PERSONALIZED",
    title: "个性化纪念品",
    copy: "每个人的纪念品都独一无二。不论是刻字、颜色还是形态，都由您自己决定。您的创意就是最好的设计师。",
  },
  {
    icon: "⭐",
    english: "MORE THAN PRODUCTS",
    title: "超越产品本身",
    copy: "印途 X 提供的是旅行记忆的升华，是个性化定制的精神和情感表达。这不只是一件商品，更是您与世界连接的方式。",
  },
];

const brandPromiseStats = [
  { value: "100%", label: "个性定制" },
  { value: "3D", label: "高清打印" },
  { value: "∞", label: "独一无二" },
];

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

export default function HomePage() {
  return (
    <div className="space-y-28 md:space-y-36">
      <BrandPhotoCover />

      <section className="-mx-6 space-y-10 md:-mx-8">
        <article className="surface overflow-hidden rounded-none bg-[linear-gradient(180deg,rgba(208,209,249,0.16),rgba(255,253,249,0.98),rgba(242,230,241,0.18))] px-6 py-10 md:px-10 md:py-14">
          <h2 className="font-[family-name:var(--font-display)] text-[2rem] font-medium tracking-[-0.04em] text-[color:var(--ink)] md:text-[4.4rem]">
            品牌价值与定位
          </h2>

          <div className="mt-10 grid gap-5 xl:grid-cols-[1fr_1fr]">
            <div className="space-y-5">
              <article className="surface rounded-[32px] bg-[linear-gradient(180deg,rgba(208,209,249,0.14),rgba(255,253,249,0.96))] p-6 md:p-8">
                <p className="text-[0.82rem] tracking-[0.16em] text-[color:var(--ink-soft)]">
                  BRAND IDENTITY
                </p>
                <h3 className="mt-5 text-[1.2rem] font-medium tracking-[-0.02em] text-[color:var(--ink)] md:text-[1.5rem]">
                  品牌形象与定位
                </h3>
                <p className="mt-8 text-[13px] leading-9 text-[color:var(--ink-soft)] md:text-[14px]">
                  印途 X
                  是旅行纪念与个性化定制的完美结合。将情感和回忆转化为有形的纪念品，每一件作品都是独一无二的旅行故事的有力呈现。
                </p>
              </article>

              <article className="surface rounded-[32px] bg-[linear-gradient(180deg,rgba(238,214,236,0.14),rgba(255,253,249,0.96))] p-6 md:p-8">
                <p className="text-[0.82rem] tracking-[0.16em] text-[color:var(--ink-soft)]">
                  TARGET AUDIENCE
                </p>
                <h3 className="mt-5 text-[1.2rem] font-medium tracking-[-0.02em] text-[color:var(--ink)] md:text-[1.5rem]">
                  目标人群
                </h3>
                <div className="mt-8 flex flex-wrap gap-4">
                  {targetAudience.map((item) => (
                    <div
                      key={item.label}
                      className="inline-flex items-center gap-3 rounded-full border border-[rgba(220,205,191,0.54)] bg-[rgba(255,255,255,0.72)] px-5 py-3 shadow-[0_10px_22px_rgba(74,68,61,0.05)]"
                    >
                      <span
                        className={`inline-flex h-4 w-4 rotate-[8deg] rounded-full border border-white/70 shadow-[0_4px_12px_rgba(74,68,61,0.08)] ${item.accent}`}
                      />
                      <span className="text-[13px] font-medium text-[color:var(--ink)] md:text-[14px]">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            <div className="space-y-5">
              <article className="surface rounded-[32px] bg-[linear-gradient(180deg,rgba(208,209,249,0.14),rgba(255,253,249,0.96))] p-6 md:p-8">
                <p className="text-[0.82rem] tracking-[0.16em] text-[color:var(--ink-soft)]">
                  COMPETITIVE ANALYSIS ・ POPS / PODS
                </p>
                <div className="mt-8 space-y-8">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="h-3.5 w-3.5 rounded-full bg-[rgba(176,199,251,0.95)]" />
                      <h3 className="text-[1rem] font-medium tracking-[0.06em] text-[color:var(--blue-deep)] md:text-[1.08rem]">
                        POINT OF PARITY
                      </h3>
                    </div>
                    <p className="mt-6 pl-6 text-[13px] leading-9 text-[color:var(--ink-soft)] md:text-[14px]">
                      纪念品、旅行周边、手工品
                      <span className="px-1">——</span>
                      与传统纪念品行业的共同属性
                    </p>
                  </div>

                  <div className="border-t border-[rgba(220,205,191,0.54)] pt-8">
                    <div className="flex items-center gap-3">
                      <span className="h-3.5 w-3.5 rounded-full bg-[rgba(238,214,236,0.95)]" />
                      <h3 className="text-[1rem] font-medium tracking-[0.06em] text-[color:var(--blue-deep)] md:text-[1.08rem]">
                        POINT OF DIFFERENCE
                      </h3>
                    </div>
                    <p className="mt-6 pl-6 text-[13px] leading-9 text-[color:var(--ink-soft)] md:text-[14px]">
                      独特的旅行定制纪念品、情感价值
                      <span className="px-1">——</span>
                      每个人的纪念品都独一无二，个人记忆与科技完美融合
                    </p>
                  </div>
                </div>
              </article>

              <article className="surface rounded-[32px] bg-[linear-gradient(180deg,rgba(238,214,236,0.14),rgba(255,253,249,0.96))] p-6 md:p-8">
                <p className="text-[0.82rem] tracking-[0.16em] text-[color:var(--ink-soft)]">
                  WHY UNIQUE
                </p>
                <h3 className="mt-5 text-[1.2rem] font-medium tracking-[-0.02em] text-[color:var(--ink)] md:text-[1.5rem]">
                  为什么印途 X 具有独特性
                </h3>
                <p className="mt-8 text-[13px] leading-9 text-[color:var(--ink-soft)] md:text-[14px]">
                  突破传统纪念品的局限性，提供完全个性化、高质量的定制服务。不只是卖产品，而是将旅行记忆升华为有形的情感表达。
                </p>
              </article>
            </div>
          </div>
        </article>
      </section>

      <section className="space-y-10">
        <SectionTitle
          kicker="名称与符号"
          title="回忆有形，印途无界。"
          copy="对印途 X 来说，名称本身就像一段已经展开的旅程。"
        />
        <article className="illustration-card p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="rounded-[28px] border border-[rgba(220,205,191,0.82)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(248,244,238,0.92))] px-5 py-6 shadow-[0_18px_36px_rgba(74,68,61,0.04)]">
              <Image
                src="/brand-logo-new.jpg"
                alt="into X / 印途 X"
                width={560}
                height={560}
                className="mx-auto h-auto w-full max-w-[22rem] mix-blend-multiply opacity-[0.95]"
              />
            </div>

            <div className="space-y-5 text-left">
              <div className="space-y-4 text-[14px] leading-8 text-[color:var(--ink-soft)] md:text-[15px] md:leading-9">
                <p>
                  印，不只是留下痕迹，
                  <br />
                  更意味着把情绪、片段与感受重新拓印、重新制作。
                </p>
                <p>
                  途，指向每一次真正走过的地方，
                  <br />
                  也指向旅途中那些无法复制的个人时刻。
                </p>
                <p>
                  而 X 保留了未知、自我与延展的空间，
                  <br />
                  让这件纪念物不只关于地点，也关于你是谁、你如何记住这段路。
                </p>
                <p>
                  所以它最终形成的，
                  <br />
                  并不只是一个品牌名称，而是一种把回忆有形化的方式。
                </p>
              </div>
              <div className="rounded-[20px] border border-[rgba(220,205,191,0.62)] bg-[rgba(255,255,255,0.62)] px-4 py-4">
                <p className="text-[12px] leading-7 text-[color:var(--ink-soft)]">
                  让印途 X 不再只是字面意义，而是变成一种可以被看见、被识别、也被继续展开的旅行品牌姿态。
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="space-y-8">
        <article className="surface overflow-hidden rounded-[34px] bg-[linear-gradient(180deg,rgba(242,230,241,0.34),rgba(255,253,249,0.96),rgba(208,209,249,0.18))] px-6 py-12 text-center md:px-10 md:py-16">
          <p className="text-[0.82rem] tracking-[0.18em] text-[color:var(--ink-soft)]">
            BRAND HIGHLIGHTS ・ 品牌亮点
          </p>
          <h2 className="mt-6 font-[family-name:var(--font-display)] text-[2rem] font-medium tracking-[-0.03em] text-[color:var(--ink)] md:text-[4rem]">
            为什么选择印途 X
          </h2>
          <p className="mt-6 text-[0.98rem] font-medium text-[color:var(--ink-soft)] md:text-[1.18rem]">
            不只是产品，更是一种生活态度
          </p>
        </article>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {brandHighlights.slice(0, 3).map((item) => (
            <article
              key={item.title}
              className="surface rounded-[32px] bg-[linear-gradient(180deg,rgba(208,209,249,0.12),rgba(255,253,249,0.96))] p-6 md:p-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-[18px] border border-[rgba(220,205,191,0.54)] bg-[rgba(255,255,255,0.72)] text-[1.7rem] shadow-[0_10px_24px_rgba(74,68,61,0.06)]">
                <span aria-hidden="true">{item.icon}</span>
              </div>
              <p className="mt-6 text-[0.82rem] tracking-[0.14em] text-[color:var(--blue-deep)]">
                {item.english}
              </p>
              <h3 className="mt-3 text-[1.08rem] font-medium tracking-[-0.02em] text-[color:var(--ink)] md:text-[1.2rem]">
                {item.title}
              </h3>
              <p className="mt-5 text-[13px] leading-9 text-[color:var(--ink-soft)] md:text-[14px]">
                {item.copy}
              </p>
            </article>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:px-10 xl:px-28">
          {brandHighlights.slice(3).map((item) => (
            <article
              key={item.title}
              className="surface rounded-[32px] bg-[linear-gradient(180deg,rgba(238,214,236,0.16),rgba(255,253,249,0.96))] p-6 md:p-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-[18px] border border-[rgba(220,205,191,0.54)] bg-[rgba(255,255,255,0.72)] text-[1.7rem] shadow-[0_10px_24px_rgba(74,68,61,0.06)]">
                <span aria-hidden="true">{item.icon}</span>
              </div>
              <p className="mt-6 text-[0.82rem] tracking-[0.14em] text-[color:var(--blue-deep)]">
                {item.english}
              </p>
              <h3 className="mt-3 text-[1.08rem] font-medium tracking-[-0.02em] text-[color:var(--ink)] md:text-[1.2rem]">
                {item.title}
              </h3>
              <p className="mt-5 text-[13px] leading-9 text-[color:var(--ink-soft)] md:text-[14px]">
                {item.copy}
              </p>
            </article>
          ))}
        </div>

        <article className="surface overflow-hidden rounded-[34px] bg-[linear-gradient(135deg,rgba(208,209,249,0.14),rgba(255,253,249,0.98),rgba(238,214,236,0.18))] px-6 py-6 md:px-8 md:py-8">
          <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
            <div className="space-y-5">
              <div className="space-y-3">
                <p className="text-[0.82rem] tracking-[0.16em] text-[color:var(--ink-soft)]">
                  PRODUCT EXAMPLE ・ 产品示例
                </p>
                <h3 className="font-[family-name:var(--font-display)] text-[1.45rem] font-medium tracking-[-0.03em] text-[color:var(--ink)] md:text-[2rem]">
                  从一句输入词，到一件可视化的纪念品
                </h3>
              </div>

              <div className="rounded-[24px] border border-[rgba(220,205,191,0.58)] bg-[rgba(255,255,255,0.78)] p-5 shadow-[0_16px_36px_rgba(74,68,61,0.04)]">
                <p className="text-[11px] tracking-[0.14em] text-[color:var(--blue-deep)]">
                  示例输入语段
                </p>
                <p className="mt-4 text-[13px] leading-9 text-[color:var(--ink-soft)] md:text-[14px]">
                  在这个深圳自闭症儿童作画特展中，我仿佛走进了自闭症儿童的想象世界：
                  他们创作的色彩斑斓的蝴蝶在展厅里陈列着，整个场景中充斥着他们童趣和自由的想象力，
                  每一处细节都让我感受到孩子们独特的视角和天马行空的创意，温暖又治愈。
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[20px] border border-[rgba(192,198,231,0.62)] bg-[rgba(255,255,255,0.72)] px-4 py-4">
                  <p className="panel-label">生成方向</p>
                  <p className="mt-2 text-[14px] font-medium text-[color:var(--ink)]">
                    记忆生态球
                  </p>
                </div>
                <div className="rounded-[20px] border border-[rgba(192,198,231,0.62)] bg-[rgba(255,255,255,0.72)] px-4 py-4">
                  <p className="panel-label">亮点体现</p>
                  <p className="mt-2 text-[14px] font-medium text-[color:var(--ink)]">
                    个性化定制 × 情感可视化
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[28px] border border-[rgba(220,205,191,0.68)] bg-[rgba(255,255,255,0.84)] p-3 shadow-[0_20px_40px_rgba(74,68,61,0.06)]">
              <div className="relative aspect-[1044/1076] w-full rounded-[22px] bg-[rgba(255,255,255,0.92)]">
                <Image
                  src="/shenzhen-butterfly-caseboard.jpg"
                  alt="深圳蝴蝶主题记忆生态球设计示意图"
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 46vw, 100vw"
                />
              </div>
            </div>
          </div>
        </article>

        <article className="surface rounded-[34px] bg-[linear-gradient(90deg,rgba(208,209,249,0.22),rgba(255,253,249,0.98),rgba(238,214,236,0.2))] px-6 py-8 md:px-10 md:py-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-[0.82rem] tracking-[0.16em] text-[color:var(--ink-soft)]">
                OUR PROMISE
              </p>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-[1.6rem] font-medium tracking-[-0.03em] text-[color:var(--ink)] md:text-[2.25rem]">
                每一件印途 X，都是无可复制的唯一
              </h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {brandPromiseStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[24px] border border-[rgba(220,205,191,0.54)] bg-[rgba(255,255,255,0.66)] px-4 py-5 text-center"
                >
                  <p className="font-[family-name:var(--font-display)] text-[1.9rem] font-medium leading-none text-[color:var(--blue-deep)] md:text-[2.3rem]">
                    {item.value}
                  </p>
                  <p className="mt-3 text-[12px] leading-6 text-[color:var(--ink-soft)] md:text-[13px]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </section>

      <section className="-mx-6 overflow-hidden rounded-none bg-[linear-gradient(180deg,rgba(208,209,249,0.16),rgba(255,253,249,0.98),rgba(242,230,241,0.18))] px-6 py-10 md:-mx-8 md:px-8 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-8 md:space-y-12">
            <div className="space-y-3">
              <p className="text-[0.78rem] tracking-[0.16em] text-[color:var(--ink-soft)]">
                关于产品
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-[2.2rem] font-medium tracking-[-0.02em] text-[color:var(--ink)] md:text-[3.3rem]">
                INFORMATION
              </h2>
              <p className="text-[0.95rem] leading-8 text-[color:var(--ink-soft)]">
                了解印途 X
              </p>
            </div>

            <div className="max-w-md space-y-5">
              <p className="max-w-[22rem] text-[0.94rem] font-medium leading-[2] text-[color:var(--ink)]">
                将感受可视化，将记忆有形化，为你提供独一无二的 3D 打印旅行纪念品
              </p>

              <div className="space-y-3">
                {["明信片", "手工文创产品", "日记本"].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <span className="inline-block w-7 text-center text-[1.45rem] leading-none text-[color:var(--ink)]">
                      ×
                    </span>
                    <span className="font-[family-name:var(--font-display)] text-[1.02rem] font-medium text-[color:var(--ink)] md:text-[1.2rem]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center border-[2px] border-[rgba(53,50,48,0.82)] text-[1.45rem] leading-none text-[color:var(--ink)]">
                    ✓
                  </span>
                  <span className="font-[family-name:var(--font-display)] text-[1.08rem] font-medium text-[color:var(--ink)] md:text-[1.28rem]">
                    记忆的定格物
                  </span>
                </div>

                <div className="space-y-1 pl-[3.45rem]">
                  <p
                    className="text-[0.92rem] leading-8 text-[color:var(--ink)]"
                    style={{
                      fontFamily:
                        '"Bradley Hand", "Segoe Print", "Comic Sans MS", "Marker Felt", cursive',
                    }}
                  >
                    个人专属记忆手帐
                  </p>
                  <p
                    className="text-[0.92rem] leading-8 text-[color:var(--ink)]"
                    style={{
                      fontFamily:
                        '"Bradley Hand", "Segoe Print", "Comic Sans MS", "Marker Felt", cursive',
                    }}
                  >
                    3D打印定制回忆纪念品
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <span className="absolute -top-4 left-[70%] hidden h-6 w-6 rounded-full bg-[rgba(115,147,164,0.14)] lg:block" />
            <ProductFlowNavigator />
          </div>
        </div>
      </section>

      <section className="space-y-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            kicker="纪念载体"
            title="把同一段旅途，放进不同的纪念形式里。"
            copy="帮助用户快速理解可以生成哪些产品类型。"
          />
          <Link href="/create" className="arrow-link">
            前往选择 →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
          {carrierShowcase.map((carrier) => (
            <CarrierCard key={carrier.title} {...carrier} />
          ))}
        </div>
      </section>

      <section className="surface px-6 py-10 text-center md:px-12 md:py-12">
        <span className="section-kicker justify-center">开始这段记忆</span>
        <h2 className="section-title mx-auto mt-4 max-w-2xl">
          准备好把一段旅行记忆，整理成一件真正属于你的纪念物了吗？
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[13px] leading-8 text-[color:var(--ink-soft)]">
          现在就输入地点、日期、描述和情绪关键词，体验印途 X 的第一版纪念生成流程。
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/create" className="action-button">
            开始创作
            <span>→</span>
          </Link>
          <Link href="/memory-book" className="ghost-button">
            浏览记忆簿
          </Link>
        </div>
      </section>
    </div>
  );
}
