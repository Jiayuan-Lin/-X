type SectionTitleProps = {
  kicker: string;
  title: string;
  copy?: string;
};

export function SectionTitle({ kicker, title, copy }: SectionTitleProps) {
  return (
    <div className="space-y-3">
      <span className="section-kicker">{kicker}</span>
      <h2 className="section-title max-w-3xl">{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}
