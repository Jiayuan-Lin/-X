import { MemoryMapArchive } from "@/components/memory-map-archive";
import { MemoryBookShareStrip } from "@/components/memory-book-share-strip";
import { SectionTitle } from "@/components/section-title";
import { memoryEntries } from "@/lib/mock-data";

export default function MemoryBookPage() {
  return (
    <div className="space-y-20 md:space-y-28">
      <section className="space-y-10">
        <SectionTitle
          kicker="地图浏览"
          title="点击地图中的地点，查看对应的旅途纪念档案。"
          copy="地图会直接标出旅途回忆的位置，点击不同地点后，右侧会切换显示对应的纪念品方案与说明。"
        />
        <MemoryMapArchive />
      </section>

      <section className="space-y-8">
        <MemoryBookShareStrip />
        <SectionTitle
          kicker="地点摘录"
          title="在地图之外散落的一些旅行摘迹。"
        />
        <div className="grid gap-4 md:grid-cols-2">
          {memoryEntries.map((entry) => (
            <article key={`${entry.destination}-${entry.date}`} className="surface p-5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-[1rem] font-medium text-[color:var(--ink)]">
                  {entry.destination}
                </h3>
                <span className="text-[11px] text-[color:var(--ink-soft)]">{entry.date}</span>
              </div>
              <p className="mt-3 text-[13px] leading-7 text-[color:var(--ink-soft)]">
                {entry.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
