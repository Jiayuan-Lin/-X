type CarrierCardProps = {
  title: string;
  description: string;
  accent: string;
};

export function CarrierCard({ title, description, accent }: CarrierCardProps) {
  return (
    <article className="surface flex aspect-square flex-col justify-between p-4 md:p-5">
      <div>
        <div className={`mb-4 flex h-[5.4rem] items-center justify-center rounded-[22px] ${accent}`}>
          <div className="relative h-10 w-10 rounded-[16px] border border-white/60 bg-[rgba(255,255,255,0.64)]">
            <div className="absolute inset-2 rounded-[10px] border border-[rgba(255,255,255,0.78)]" />
          </div>
        </div>
        <h3 className="text-[0.94rem] font-medium tracking-[-0.02em] text-[color:var(--ink)]">
          {title}
        </h3>
        <p className="mt-2 text-[12px] leading-6 text-[color:var(--ink-soft)]">
          {description}
        </p>
      </div>
      <span className="mt-4 text-[11px] tracking-[0.08em] text-[color:var(--blue-deep)]">
        纪念形式
      </span>
    </article>
  );
}
