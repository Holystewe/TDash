import { SectionTitle } from '../common'
import './sections.css'

export function UserProfileSection() {
  return (
    <section className="section-with-bg bg-commander-chan">
      <div className="section-content">
      <SectionTitle
        title="Profilo utente"
        subtitle="Informazioni account e preferenze dell'utente autenticato (mock)."
      />
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-kf-sanctum/50 bg-kf-night/70 p-4">
          <p className="text-xs uppercase text-slate-300">Nome utente</p>
          <p className="mt-1 text-2xl font-semibold text-kf-sanctum">Stefano Petri</p>
          <p className="mt-2 text-sm text-slate-200">Ruolo: Player / Store manager</p>
          <p className="text-sm text-slate-200">Città: Roma</p>
        </article>
        <article className="rounded-xl border border-kf-aember/50 bg-kf-night/70 p-4">
          <p className="text-xs uppercase text-slate-300">Preferenze</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-100">
            <li>Notifiche tornei nel raggio di 30 km</li>
            <li>Formato preferito: Archon</li>
            <li>Case preferite: Logos, Shadows</li>
          </ul>
        </article>
      </div>
      </div>
    </section>
  )
}
