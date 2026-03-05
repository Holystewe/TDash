import { useMemo, useState } from 'react'
import { CircleMarker, MapContainer, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './App.inline-fixes.css'

type SectionKey =
  | 'players-dashboard'
  | 'decks-dashboard'
  | 'tournaments-map'
  | 'user-profile'
  | 'players-profile'
  | 'backoffice-tournaments'
  | 'super-backoffice-stores'

type MenuEntry = {
  key: SectionKey
  label: string
}

type Tournament = {
  id: string
  name: string
  store: string
  city: string
  format: string
  date: string
  seats: number
  lat: number
  lng: number
}

const menuEntries: MenuEntry[] = [
  { key: 'players-dashboard', label: 'Dashboard players' },
  { key: 'decks-dashboard', label: 'Dashboard decks' },
  { key: 'tournaments-map', label: 'Tornei con mappa' },
  { key: 'user-profile', label: 'Profilo utente' },
  { key: 'players-profile', label: 'Profilo giocatori' },
  { key: 'backoffice-tournaments', label: 'Backoffice tornei' },
  { key: 'super-backoffice-stores', label: 'Super backoffice negozi' },
]

const mockPlayersKpis = [
  { label: 'Giocatori attivi', value: '1.284' },
  { label: 'Nuovi questa settimana', value: '87' },
  { label: 'Win rate media', value: '52.9%' },
  { label: 'Store con eventi', value: '42' },
]

const mockDeckKpis = [
  { label: 'Deck registrati', value: '6.412' },
  { label: 'Deck competitivi', value: '1.026' },
  { label: 'AERC medio', value: '63.4' },
  { label: 'Deck in top cut', value: '118' },
]

const houseDistribution = [
  { house: 'Shadows', value: 78, color: 'bg-kf-shadow', widthClass: 'house-width-100' },
  { house: 'Logos', value: 64, color: 'bg-kf-logos', widthClass: 'house-width-82' },
  { house: 'Dis', value: 59, color: 'bg-kf-dis', widthClass: 'house-width-76' },
  { house: 'Untamed', value: 57, color: 'bg-kf-untamed', widthClass: 'house-width-73' },
  { house: 'Brobnar', value: 42, color: 'bg-kf-brobnar', widthClass: 'house-width-54' },
  { house: 'Saurian', value: 37, color: 'bg-kf-saurian', widthClass: 'house-width-47' },
]

const tournaments: Tournament[] = [
  {
    id: 'T-401',
    name: 'Vault Open Roma',
    store: 'Crucible Roma',
    city: 'Roma',
    format: 'Archon',
    date: '2026-03-15',
    seats: 48,
    lat: 41.9028,
    lng: 12.4964,
  },
  {
    id: 'T-402',
    name: 'Night Forge Milano',
    store: 'Milano KeyHub',
    city: 'Milano',
    format: 'Sealed',
    date: '2026-03-19',
    seats: 32,
    lat: 45.4642,
    lng: 9.19,
  },
  {
    id: 'T-403',
    name: 'Forge Masters Torino',
    store: 'Piedmont Forge',
    city: 'Torino',
    format: 'Alliance',
    date: '2026-03-23',
    seats: 24,
    lat: 45.0703,
    lng: 7.6869,
  },
  {
    id: 'T-404',
    name: 'Liga del Crucible Madrid',
    store: 'Casa del Key',
    city: 'Madrid',
    format: 'Archon',
    date: '2026-03-27',
    seats: 40,
    lat: 40.4168,
    lng: -3.7038,
  },
]

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <header className="mb-5 rounded-xl border border-kf-amber/40 bg-kf-night/80 p-4">
      <h2 className="text-xl font-semibold text-kf-gold">{title}</h2>
      <p className="mt-1 text-sm text-slate-200">{subtitle}</p>
    </header>
  )
}

function KpiGrid({ items }: { items: Array<{ label: string; value: string }> }) {
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

function PlayersDashboardSection() {
  return (
    <section>
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
    </section>
  )
}

function DecksDashboardSection() {
  return (
    <section>
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
    </section>
  )
}

function TournamentsMapSection() {
  return (
    <section>
      <SectionTitle
        title="Tornei con mappa"
        subtitle="Calendario tornei e mappa eventi attivi con provider gratuito OpenStreetMap."
      />

      <div className="grid gap-4 xl:grid-cols-[340px_1fr]">
        <aside className="rounded-xl border border-kf-untamed/40 bg-kf-night/70 p-4">
          <h3 className="text-lg font-semibold text-kf-untamed">Prossimi tornei</h3>
          <ul className="mt-3 space-y-3">
            {tournaments.map((event) => (
              <li key={event.id} className="rounded-lg border border-white/10 bg-black/15 p-3">
                <p className="font-medium text-kf-gold">{event.name}</p>
                <p className="text-sm text-slate-200">{event.store}</p>
                <p className="text-xs text-slate-300">
                  {event.city} • {event.format} • {event.date} • {event.seats} posti
                </p>
              </li>
            ))}
          </ul>
        </aside>

        <div className="overflow-hidden rounded-xl border border-kf-logos/40">
          <MapContainer center={[43.2, 10.7]} zoom={5} className="h-[420px] w-full">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {tournaments.map((event) => (
              <CircleMarker
                key={event.id}
                center={[event.lat, event.lng]}
                radius={8}
                pathOptions={{ color: '#ffd166', fillColor: '#ff9f1c', fillOpacity: 0.85 }}
              >
                <Popup>
                  <strong>{event.name}</strong>
                  <br />
                  {event.city} - {event.store}
                  <br />
                  {event.format} - {event.date}
                </Popup>
              </CircleMarker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  )
}

function UserProfileSection() {
  return (
    <section>
      <SectionTitle
        title="Profilo utente"
        subtitle="Informazioni account e preferenze dell’utente autenticato (mock)."
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
    </section>
  )
}

function PlayersProfileSection() {
  return (
    <section>
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
    </section>
  )
}

function BackofficeTournamentsSection() {
  return (
    <section>
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
    </section>
  )
}

function SuperBackofficeStoresSection() {
  return (
    <section>
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
    </section>
  )
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<SectionKey>('players-dashboard')

  const activeLabel = useMemo(
    () => menuEntries.find((entry) => entry.key === activeSection)?.label ?? '',
    [activeSection],
  )

  const renderSection = () => {
    switch (activeSection) {
      case 'players-dashboard':
        return <PlayersDashboardSection />
      case 'decks-dashboard':
        return <DecksDashboardSection />
      case 'tournaments-map':
        return <TournamentsMapSection />
      case 'user-profile':
        return <UserProfileSection />
      case 'players-profile':
        return <PlayersProfileSection />
      case 'backoffice-tournaments':
        return <BackofficeTournamentsSection />
      case 'super-backoffice-stores':
        return <SuperBackofficeStoresSection />
      default:
        return null
    }
  }

  return (
    <main className="min-h-screen px-4 py-4 text-white md:px-6">
      <div className="mx-auto max-w-7xl">
        <header className="mb-4 flex items-center justify-between rounded-xl border border-kf-amber/50 bg-kf-night/85 p-4">
          <div>
            <h1 className="text-2xl font-bold text-kf-gold">TDash KeyForge Hub</h1>
            <p className="text-sm text-slate-200">UI mock con navigazione sezioni e palette ispirata alle Houses di KeyForge.</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden rounded-full border border-white/25 px-3 py-1 text-xs md:inline">{activeLabel}</span>
            <button
              type="button"
              aria-label="Apri menu"
              onClick={() => setIsMenuOpen((current) => !current)}
              className="rounded-md border border-kf-gold/70 bg-kf-void px-3 py-2 text-kf-gold"
            >
              ☰
            </button>
          </div>
        </header>

        {isMenuOpen && (
          <nav className="mb-4 rounded-xl border border-kf-amber/40 bg-kf-night/95 p-3">
            <ul className="grid gap-2 md:grid-cols-2 xl:grid-cols-3">
              {menuEntries.map((entry) => (
                <li key={entry.key}>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveSection(entry.key)
                      setIsMenuOpen(false)
                    }}
                    className={`w-full rounded-md px-3 py-2 text-left text-sm transition ${
                      activeSection === entry.key
                        ? 'bg-kf-amber text-kf-void font-semibold'
                        : 'bg-kf-void/80 text-slate-100 hover:bg-kf-void'
                    }`}
                  >
                    {entry.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {renderSection()}
      </div>
    </main>
  )
}

export default App
