import Link from "next/link";
import { SoftVisual } from "@/components/soft-visual";

type ResultPageProps = {
  searchParams?: Promise<{
    destination?: string;
    travelDate?: string;
    description?: string;
    emotions?: string;
    carrier?: string;
    style?: string;
  }>;
};

function formatDate(dateValue?: string) {
  return dateValue || "2024-08-25";
}

export default async function ResultPage({ searchParams }: ResultPageProps) {
  const params = (await searchParams) ?? {};
  const destination = params.destination || "垦丁";
  const travelDate = formatDate(params.travelDate);
  const description =
    params.description ||
    "那天在垦丁沿着海边慢慢骑车，微风拂面，后来晚上又去逛了夜市，吃了烧串、三文鱼和刨冰，还喝了珍珠奶茶。在回家的路上，又偶遇了当地的音乐节，是非常难忘的回忆。";
  const emotions = params.emotions || "明亮、自由、热闹";
  const carrier = params.carrier || "记忆拼贴板";
  const style = params.style || "暖色拼贴感";

  const splitKeywords = emotions
    .split(/[、,，]/)
    .map((item) => item.trim())
    .filter(Boolean);

  const title = `${destination} · 回忆解锁物`;
  const specs = [
    { label: "目的地", value: destination },
    { label: "旅行日期", value: travelDate },
    { label: "纪念载体", value: carrier },
    { label: "风格方向", value: style },
  ];

  return (
    <div className="space-y-20 md:space-y-28">
      <section className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
        <div className="space-y-6">
          <span className="section-kicker">结果展示</span>
          <h1 className="page-title max-w-2xl">{title}</h1>
          <SoftVisual
            variant="result"
            title={`${carrier} 的概念预览会在这里呈现。`}
            note="以地点轮廓、情绪色块和场景切片为线索，构成课堂展示用的结果占位。"
            imageSrc="/kenting-memory-collage.jpg"
            imageAlt="垦丁记忆拼贴板预览图"
          />
        </div>

        <div className="space-y-5">
          <article className="surface overflow-hidden">
            <div className="border-b border-[color:var(--line)] bg-[rgba(244,239,231,0.68)] px-6 py-5">
              <p className="panel-label">结果摘要</p>
              <h2 className="mt-3 text-[1.08rem] font-medium text-[color:var(--ink)]">
                {carrier}
              </h2>
              <p className="mt-2 text-[12px] leading-7 text-[color:var(--ink-soft)]">
                这件纪念物将以 {style} 的视觉语气呈现，并围绕 {destination} 的地点印象展开。
              </p>
            </div>
            <div className="grid gap-3 px-6 py-5 sm:grid-cols-2">
              {specs.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[18px] border border-[color:var(--line)] bg-[rgba(255,255,255,0.88)] px-4 py-4"
                >
                  <p className="panel-label">{item.label}</p>
                  <p className="mt-2 text-[14px] font-medium text-[color:var(--ink)]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="surface p-6">
            <p className="panel-label">记忆关键词</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[destination, ...splitKeywords, carrier, style].map((keyword) => (
                <span key={keyword} className="pill">
                  {keyword}
                </span>
              ))}
            </div>
          </article>

          <article className="surface p-6">
            <p className="panel-label">设计说明</p>
            <p className="mt-3 text-[13px] leading-8 text-[color:var(--ink-soft)]">
              系统会根据你输入的地点、情绪关键词与旅途描述，组合成一份更适合保存的纪念物方案。
              它会优先保留你在那段旅途中真正记得住的东西，比如气味、光线、风、节奏感，以及某个具体场景的停留感。
            </p>
          </article>

          <article className="surface p-6">
            <p className="panel-label">原始输入</p>
            <p className="mt-3 text-[13px] leading-8 text-[color:var(--ink-soft)]">
              {description}
            </p>
          </article>

          <article className="soft-surface p-6">
            <p className="panel-label">下一步</p>
            <h3 className="mt-3 text-[1rem] font-medium text-[color:var(--ink)]">
              进入 3D 定制，让这份概念更接近最终成品。
            </h3>
            <p className="mt-2 text-[12px] leading-7 text-[color:var(--ink-soft)]">
              下一阶段可以继续设置材质、尺寸与色彩方向，并把这份结果收进记忆簿。
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href={`/print-customization?destination=${encodeURIComponent(destination)}&travelDate=${encodeURIComponent(travelDate)}&carrier=${encodeURIComponent(carrier)}&style=${encodeURIComponent(style)}`}
                className="action-button"
              >
                进入 3D 定制
                <span>→</span>
              </Link>
              <Link href="/memory-book" className="ghost-button">
                收进手帐
              </Link>
              <Link href="/create" className="ghost-button">
                再创作一次
              </Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
