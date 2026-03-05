import { SectionTitle } from '../common'
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
              <th className="px-2 py-2">Player</th>
              <th className="px-2 py-2">Regione</th>
              <th className="px-2 py-2">Deck registrati</th>
              <th className="px-2 py-2">Casa top</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Alessia M.', 'Lazio', '18', 'Logos'],
              ['Daniele F.', 'Lombardia', '24', 'Shadows'],
              ['Riccardo T.', 'Piemonte', '11', 'Untamed'],
              ['Francesca C.', 'Campania', '14', 'Dis'],
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
    </section>
  )
}
