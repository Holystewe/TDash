import { KpiGrid, SectionTitle } from '../common'
import { mockDeckKpis, houseDistribution } from '../../data/mockData'
import '../../App.inline-fixes.css'
import './sections.css'

export function DecksDashboardSection() {
  return (
    <section className="section-with-bg bg-ambrosius-nice">
      <div className="section-content">
      <SectionTitle
        title="Dashboard decks"
        subtitle="KPI e distribuzione case dei mazzi più presenti nel meta (dati mock)."
      />
      <KpiGrid items={mockDeckKpis} />

      <div className="mt-4 rounded-xl border border-kf-dis/40 bg-kf-night/70 p-4">
        <h3 className="text-lg font-semibold text-kf-dis">Distribuzione case</h3>
        <div className="mt-3 space-y-2">
          {houseDistribution.map((house) => (
            <div key={house.house} className="grid grid-cols-[110px_1fr_48px] items-center gap-2">
              <span className="text-sm text-slate-200">{house.house}</span>
              <div className="h-2.5 overflow-hidden rounded-full bg-white/15">
                <div className={`h-full ${house.color} ${house.widthClass}`} />
              </div>
              <span className="text-right text-sm text-kf-gold">{house.value}%</span>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}
