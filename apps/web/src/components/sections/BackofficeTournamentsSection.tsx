import { SectionTitle } from '../common'
import './sections.css'

export function BackofficeTournamentsSection() {
  return (
    <section className="section-with-bg bg-commander-chan">
      <div className="section-content">
      <SectionTitle
        title="Backoffice - Creazione tornei"
        subtitle="Area organizzatore per inserire e pianificare tornei (mock)."
      />
      <form className="grid gap-3 rounded-xl border border-kf-untamed/40 bg-kf-night/70 p-4 md:grid-cols-2">
        <label className="flex flex-col gap-1 text-sm">
          Nome torneo
          <input className="rounded-md border border-white/20 bg-kf-void/80 px-3 py-2" defaultValue="Weekly KeyForge Night" />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          Formato
          <select className="rounded-md border border-white/20 bg-kf-void/80 px-3 py-2" defaultValue="Archon">
            <option>Archon</option>
            <option>Sealed</option>
            <option>Alliance</option>
          </select>
        </label>
        <label className="flex flex-col gap-1 text-sm">
          Data
          <input type="date" className="rounded-md border border-white/20 bg-kf-void/80 px-3 py-2" defaultValue="2026-03-20" />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          Posti disponibili
          <input type="number" className="rounded-md border border-white/20 bg-kf-void/80 px-3 py-2" defaultValue={24} />
        </label>
        <div className="md:col-span-2">
          <button type="button" className="rounded-md bg-kf-untamed px-4 py-2 font-semibold text-kf-void">
            Crea torneo (mock)
          </button>
        </div>
      </form>
      </div>
    </section>
  )
}
