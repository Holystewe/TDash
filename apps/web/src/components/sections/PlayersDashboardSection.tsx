import { KpiGrid, SectionTitle } from '../common'
import { mockPlayersKpis, mockPlayers } from '../../data/mockData'
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
                <th className="px-2 py-2">Username</th>
                <th className="px-2 py-2">Paese</th>
                <th className="px-2 py-2">SAS medio</th>
                <th className="px-2 py-2">Top deck</th>
                <th className="px-2 py-2">Win rate</th>
                <th className="px-2 py-2">Chains</th>
                <th className="px-2 py-2">Casa fav.</th>
              </tr>
            </thead>
            <tbody>
              {mockPlayers.map((player) => (
                <tr key={player.id} className="border-b border-white/5 text-slate-100">
                  <td className="px-2 py-2">
                    <a href={player.dokProfileLink} target="_blank" rel="noreferrer" className="text-kf-logos hover:underline">
                      {player.username}
                    </a>
                  </td>
                  <td className="px-2 py-2 text-slate-300">{player.country}</td>
                  <td className="px-2 py-2 font-semibold text-kf-gold">{player.avgSas}</td>
                  <td className="px-2 py-2 text-slate-200">
                    {player.topDeckName}
                    <span className="ml-1 text-xs text-kf-gold">({player.topDeckSas})</span>
                  </td>
                  <td className="px-2 py-2">{player.winRate}%</td>
                  <td className="px-2 py-2">{player.chains}</td>
                  <td className="px-2 py-2">{player.favoriteHouse}</td>
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
