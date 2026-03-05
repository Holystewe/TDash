type KpiItem = {
  label: string
  value: string
}

type KpiGridProps = {
  items: KpiItem[]
}

export function KpiGrid({ items }: KpiGridProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <article key={item.label} className="rounded-xl border border-kf-amber/30 bg-kf-night/70 p-4">
          <p className="text-xs uppercase tracking-wide text-slate-300">{item.label}</p>
          <p className="mt-2 text-2xl font-semibold text-kf-gold">{item.value}</p>
        </article>
      ))}
    </div>
  )
}
