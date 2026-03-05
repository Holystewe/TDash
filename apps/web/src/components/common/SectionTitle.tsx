type SectionTitleProps = {
  title: string
  subtitle: string
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <header className="mb-5 rounded-xl border border-kf-amber/40 bg-kf-night/80 p-4">
      <h2 className="text-xl font-semibold text-kf-gold">{title}</h2>
      <p className="mt-1 text-sm text-slate-200">{subtitle}</p>
    </header>
  )
}
