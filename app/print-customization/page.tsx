import Link from "next/link";
import { SoftVisual } from "@/components/soft-visual";

type PrintCustomizationPageProps = {
  searchParams?: Promise<{
    destination?: string;
    travelDate?: string;
    carrier?: string;
    style?: string;
  }>;
};

export default async function PrintCustomizationPage({
  searchParams,
}: PrintCustomizationPageProps) {
  const params = (await searchParams) ?? {};
  const destination = params.destination || "垦丁";
  const travelDate = params.travelDate || "2024-08-25";
  const carrier = params.carrier || "记忆拼贴板";
  const style = params.style || "暖色拼贴感";

  const materialOptions = ["哑光树脂", "细砂陶瓷", "暖木复合材", "透明亚克力"];
  const sizeOptions = ["随身小尺寸", "桌面标准尺寸", "展示加大尺寸"];
  const colorOptions = ["保留旅途原始色调", "柔和米沙色系", "蓝灰纪念版", "暖金点缀版"];

  return (
    <div className="space-y-20 md:space-y-28">
      <section className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
        <div className="space-y-6">
          <span className="section-kicker">3D 定制</span>
          <h1 className="page-title max-w-2xl">
            把纪念概念继续推进为
            <br className="hidden md:block" />
            更接近最终成品的 3D 定制方案
          </h1>
          <SoftVisual
            variant="result"
            title={`${destination} · ${carrier} 的 3D 成品预览`}
            note="这里展示的是课堂演示用的视觉占位，不连接真实工厂或支付系统。"
            imageSrc="/kenting-memory-collage.jpg"
            imageAlt="垦丁记忆拼贴板成品预览图"
          />
        </div>

        <div className="space-y-5">
          <div className="surface p-6">
            <p className="panel-label">基础信息</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[18px] border border-[color:var(--line)] bg-[rgba(255,255,255,0.72)] p-4">
                <p className="panel-label">目的地</p>
                <p className="mt-2 text-[15px] font-medium text-[color:var(--ink)]">
                  {destination}
                </p>
              </div>
              <div className="rounded-[18px] border border-[color:var(--line)] bg-[rgba(255,255,255,0.72)] p-4">
                <p className="panel-label">旅行日期</p>
                <p className="mt-2 text-[15px] font-medium text-[color:var(--ink)]">
                  {travelDate}
                </p>
              </div>
            </div>
          </div>

          <div className="surface p-6">
            <p className="panel-label">纪念品类型</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[carrier, "钥匙扣", "记忆生态球", "桌面摆件", "记忆拼贴板"].map((item) => (
                <span
                  key={item}
                  className={`pill ${item === carrier ? "border-[rgba(61,118,149,0.3)] bg-[rgba(61,118,149,0.08)]" : ""}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="surface p-6">
            <p className="panel-label">材质选择</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {materialOptions.map((item, index) => (
                <span
                  key={item}
                  className={`pill ${index === 0 ? "border-[rgba(221,179,85,0.3)] bg-[rgba(221,179,85,0.1)]" : ""}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="surface p-6">
            <p className="panel-label">尺寸选择</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {sizeOptions.map((item, index) => (
                <span
                  key={item}
                  className={`pill ${index === 1 ? "border-[rgba(61,118,149,0.3)] bg-[rgba(61,118,149,0.08)]" : ""}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="surface p-6">
            <p className="panel-label">色彩 / 风格选择</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[style, ...colorOptions].map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className={`pill ${index === 0 ? "border-[rgba(200,94,61,0.26)] bg-[rgba(200,94,61,0.08)]" : ""}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="surface overflow-hidden p-0">
            <div className="border-b border-[color:var(--line)] bg-[linear-gradient(135deg,rgba(61,118,149,0.12),rgba(255,255,255,0.9))] px-6 py-5">
              <p className="panel-label">打印确认</p>
              <h2 className="mt-3 text-[1.18rem] font-medium text-[color:var(--ink)]">
                确认进入 3D 打印准备流程
              </h2>
              <p className="mt-2 text-[13px] leading-7 text-[color:var(--ink-soft)]">
                课堂演示版本不会连接真实工厂或支付流程，这里只展示完整用户旅程中的最后一步入口。
              </p>
            </div>
            <div className="flex flex-wrap gap-3 px-6 py-5">
              <Link href="/memory-book" className="action-button">
                确认打印入口
                <span>→</span>
              </Link>
              <Link href="/result" className="ghost-button">
                返回结果页
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
