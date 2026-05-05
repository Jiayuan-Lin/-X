import { SectionTitle } from "@/components/section-title";
import { carrierTypes } from "@/lib/mock-data";

const styleOptions = [
  "暖色拼贴感",
  "空气自然感",
  "城市夜游感",
  "复古车票感",
  "柔和回忆感",
  "静物陈列感",
];

export default function CreatePage() {
  return (
    <div className="space-y-20 md:space-y-28">
      <section className="space-y-6">
        <div className="space-y-6">
          <span className="section-kicker">体验入口</span>
          <h1 className="page-title max-w-xl">
            从一段旅途片段开始，
            <br className="hidden md:block" />
            生成属于你的纪念概念。
          </h1>
          <p className="max-w-xl text-[13px] leading-8 text-[color:var(--ink-soft)] md:text-[14px]">
            这里像一张回忆的创造工作台。
            你只需要填写地点、日期、描述与情绪关键词，系统就会生成模拟结果。
          </p>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <article className="soft-surface p-6 md:p-8">
          <SectionTitle
            kicker="填写建议"
            title="写得越具体，生成出的纪念感就越清晰。"
            copy="抓住那天最真实、最想留下来的几个画面，生成出来的纪念感反而会更清楚。"
          />
        </article>

        <form
          action="/result"
          method="GET"
          className="surface p-6 md:p-8"
        >
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className="sticker">体验表单</span>
            <span className="panel-label">填写后进入结果展示页</span>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-[13px] font-medium text-[color:var(--ink)]">目的地</span>
              <input
                name="destination"
                className="input-field"
                placeholder="例如：垦丁"
                defaultValue="垦丁"
              />
            </label>
            <label className="space-y-2">
              <span className="text-[13px] font-medium text-[color:var(--ink)]">旅行日期</span>
              <input
                name="travelDate"
                type="date"
                className="input-field"
                defaultValue="2024-08-25"
              />
            </label>
          </div>

          <label className="mt-5 block space-y-2">
            <span className="text-[13px] font-medium text-[color:var(--ink)]">旅行描述</span>
            <textarea
              name="description"
              rows={6}
              className="input-field"
              defaultValue="那天在垦丁沿着海边慢慢骑车，微风拂面，后来晚上又去逛了夜市，吃了烧串、三文鱼和刨冰，还喝了珍珠奶茶。在回家的路上，又偶遇了当地的音乐节，是非常难忘的回忆。"
            />
          </label>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-[13px] font-medium text-[color:var(--ink)]">情绪关键词</span>
              <input
                name="emotions"
                className="input-field"
                placeholder="例如：明亮、自由、热闹"
                defaultValue="明亮、自由、热闹"
              />
            </label>
            <label className="space-y-2">
              <span className="text-[13px] font-medium text-[color:var(--ink)]">纪念载体</span>
              <select
                name="carrier"
                className="input-field"
                defaultValue="记忆拼贴板"
              >
                {carrierTypes.map((carrier) => (
                  <option key={carrier} value={carrier}>
                    {carrier}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="mt-5 block space-y-2">
            <span className="text-[13px] font-medium text-[color:var(--ink)]">风格偏好</span>
            <select
              name="style"
              className="input-field"
              defaultValue="暖色拼贴感"
            >
              {styleOptions.map((style) => (
                <option key={style} value={style}>
                  {style}
                </option>
              ))}
            </select>
          </label>

          <div className="mt-8 flex flex-wrap gap-3">
            <button type="submit" className="action-button">
              生成结果
              <span>→</span>
            </button>
            <span className="panel-label self-center">当前版本仅展示模拟生成结果，不连接真实模型服务</span>
          </div>
        </form>
      </section>
    </div>
  );
}
