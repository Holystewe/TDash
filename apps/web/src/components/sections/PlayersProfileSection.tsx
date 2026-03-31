import { SectionTitle } from '../common'
import { mockPlayers } from '../../data/mockData'
import './sections.css'

export function PlayersProfileSection() {
  return (
    <section className="section-with-bg bg-ambrosius-bad">
      <div className="section-content">
      <SectionTitle
        title="Profilo giocatori"
        subtitle="Elenco profili giocatori per consultazione rapida (mock)."
      />
      <div className="overflow-x-auto rounded-xl border border-kf-brobnar/40 bg-kf-night/70 p-2">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 text-left text-slate-300">
              <th className="px-2 py-2">Username</th>
              <th className="px-2 py-2">Regione</th>
              <th className="px-2 py-2">Deck</th>
              <th className="px-2 py-2">SAS medio</th>
              <th className="px-2 py-2">Top deck (SAS)</th>
              <th className="px-2 py-2">Win rate</th>
              <th className="px-2 py-2">Power lvl</th>
              <th className="px-2 py-2">Casa fav.</th>
              <th className="px-2 py-2">DoK</th>
            </tr>
          </thead>
          <tbody>
            {mockPlayers.map((player) => (
              <tr key={player.id} className="border-b border-white/5 text-slate-100">
                <td className="px-2 py-2 font-medium">{player.username}</td>
                <td className="px-2 py-2 text-slate-300">{player.region}</td>
                <td className="px-2 py-2">{player.registeredDecksCount}</td>
                <td className="px-2 py-2 font-semibold text-kf-gold">{player.avgSas}</td>
                <td className="px-2 py-2 text-slate-200">
                  {player.topDeckName}
                  <span className="ml-1 text-xs text-kf-gold">({player.topDeckSas})</span>
                </td>
                <td className="px-2 py-2">{player.winRate}%</td>
                <td className="px-2 py-2">{player.powerLevel}</td>
                <td className="px-2 py-2">{player.favoriteHouse}</td>
                <td className="px-2 py-2">
                  <a href={player.dokProfileLink} target="_blank" rel="noreferrer" className="text-xs text-kf-logos hover:underline">
                    profilo
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </section>
  )
}
