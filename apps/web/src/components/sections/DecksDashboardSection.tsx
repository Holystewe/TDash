import { KpiGrid, SectionTitle } from '../common'
import { mockDeckKpis, houseDistribution, mockDecks } from '../../data/mockData'
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
        <h3 className="text-lg font-semibold text-kf-dis">Mazzi registrati</h3>
        <div className="mt-3 overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-left text-slate-300">
                <th className="px-2 py-2">Nome mazzo</th>
                <th className="px-2 py-2">Set</th>
                <th className="px-2 py-2">Case</th>
                <th className="px-2 py-2">SAS</th>
                <th className="px-2 py-2">AERC</th>
                <th className="px-2 py-2">Win rate</th>
                <th className="px-2 py-2">Chains</th>
                <th className="px-2 py-2">Competitivo</th>
              </tr>
            </thead>
            <tbody>
              {mockDecks.map((deck) => (
                <tr key={deck.id} className="border-b border-white/5 text-slate-100">
                  <td className="px-2 py-2">
                    <a href={deck.dokLink} target="_blank" rel="noreferrer" className="text-kf-gold hover:underline">
                      {deck.name}
                    </a>
                  </td>
                  <td className="px-2 py-2 text-slate-300">{deck.set}</td>
                  <td className="px-2 py-2">{deck.houses.join(' / ')}</td>
                  <td className="px-2 py-2 font-semibold text-kf-gold">{deck.sas}</td>
                  <td className="px-2 py-2 text-slate-300">{deck.aerc}</td>
                  <td className="px-2 py-2">{deck.winRate}%</td>
                  <td className="px-2 py-2">{deck.chains}</td>
                  <td className="px-2 py-2">
                    {deck.isCompetitive
                      ? <span className="rounded-full bg-kf-dis/60 px-2 py-0.5 text-xs font-semibold text-white">Sì</span>
                      : <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-slate-400">No</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

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
