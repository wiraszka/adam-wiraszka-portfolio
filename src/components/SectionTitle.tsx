interface SectionTitleProps {
  name: string;
}

export default function SectionTitle({ name }: SectionTitleProps) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div data-testid="section-line" className="w-24 shrink-0 h-px bg-stone-400" />
      <h2 className="font-mono text-lg text-stone-500 whitespace-nowrap">&lt;{name}/&gt;</h2>
    </div>
  );
}
