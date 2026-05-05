import { MemoryEntry } from "@/lib/mock-data";

export function MemoryCard({
  entry,
  nostalgic = false,
}: {
  entry: MemoryEntry;
  nostalgic?: boolean;
}) {
  return (
    <article className={nostalgic ? "soft-surface p-5" : "surface p-5"}>
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] tracking-[0.12em] text-[color:var(--ink-soft)]">
            {entry.date}
          </p>
          <h3 className="mt-2 text-[1.16rem] font-medium tracking-[-0.03em] text-[color:var(--ink)]">
            {entry.destination}
          </h3>
        </div>
        <span className="rounded-full border border-[color:var(--line)] bg-white px-3 py-1 text-[11px] font-medium text-[color:var(--ink-soft)]">
          {entry.souvenirType}
        </span>
      </div>

      <div className="mb-4 rounded-[22px] border border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(244,239,231,0.78))] p-3">
        <div className="flex h-36 items-center justify-center rounded-[16px] border border-dashed border-[rgba(115,147,164,0.2)] bg-[linear-gradient(135deg,rgba(220,205,191,0.16),rgba(255,255,255,0.76),rgba(115,147,164,0.08))] px-6 text-center text-[12px] leading-7 text-[color:var(--ink-soft)]">
          {entry.preview}
        </div>
      </div>

      <p className="text-[13px] leading-7 text-[color:var(--ink-soft)]">
        {entry.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {entry.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[rgba(115,147,164,0.08)] px-3 py-1 text-[11px] font-medium text-[color:var(--blue-deep)]"
          >
            #{tag}
          </span>
        ))}
      </div>
    </article>
  );
}
