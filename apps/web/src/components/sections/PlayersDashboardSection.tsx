import { KpiGrid, SectionTitle } from '../common'
import { mockPlayersKpis } from '../../data/mockData'
import './sections.css'

export function PlayersDashboardSection() {
  return (
    <section className="section-with-bg bg-labwork">
      <div className="section-content">
      <SectionTitle
        title="Dashboard players"
        subtitle="Vista sintetica della community giocatori, con numeri principali e classifica mock."
      />
      <KpiGrid items={mockPlayersKpis} />
      <div className="mt-4 rounded-xl border border-kf-logos/40 bg-kf-night/70 p-4">
        <h3 className="text-lg font-semibold text-kf-logos">Top players (mock)</h3>
        <div className="mt-3 overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-left text-slate-300">
                <th className="px-2 py-2">Player</th>
                <th className="px-2 py-2">Rating</th>
                <th className="px-2 py-2">Win rate</th>
                <th className="px-2 py-2">Casa favorita</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Elena Rossi', '1820', '61%', 'Logos'],
                ['Marco Bianchi', '1784', '58%', 'Shadows'],
                ['Giulia Neri', '1762', '57%', 'Dis'],
                ['Luca Verdi', '1721', '56%', 'Untamed'],
              ].map((row) => (
                <tr key={row[0]} className="border-b border-white/5 text-slate-100">
                  <td className="px-2 py-2">{row[0]}</td>
                  <td className="px-2 py-2">{row[1]}</td>
                  <td className="px-2 py-2">{row[2]}</td>
                  <td className="px-2 py-2">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </section>
  )
}
