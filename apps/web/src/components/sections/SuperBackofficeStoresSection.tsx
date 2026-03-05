import { SectionTitle } from '../common'
import './sections.css'

export function SuperBackofficeStoresSection() {
  return (
    <section className="section-with-bg bg-ambrosius-nice">
      <div className="section-content">
      <SectionTitle
        title="Super backoffice - Gestione negozi"
        subtitle="Area manutentore per monitorare, abilitare e gestire i negozi (mock)."
      />
      <div className="overflow-x-auto rounded-xl border border-kf-aember/50 bg-kf-night/70 p-2">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 text-left text-slate-300">
              <th className="px-2 py-2">Negozio</th>
              <th className="px-2 py-2">Città</th>
              <th className="px-2 py-2">Stato</th>
              <th className="px-2 py-2">Azioni</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Crucible Roma', 'Roma', 'Attivo'],
              ['Milano KeyHub', 'Milano', 'Attivo'],
              ['Torino Forge', 'Torino', 'In revisione'],
              ['Key Naples', 'Napoli', 'Sospeso'],
            ].map((row) => (
              <tr key={row[0]} className="border-b border-white/5 text-slate-100">
                <td className="px-2 py-2">{row[0]}</td>
                <td className="px-2 py-2">{row[1]}</td>
                <td className="px-2 py-2">{row[2]}</td>
                <td className="px-2 py-2">
                  <button type="button" className="rounded border border-kf-gold/60 px-2 py-1 text-xs text-kf-gold">
                    Gestisci
                  </button>
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
