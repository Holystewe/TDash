import { useMemo, useState } from 'react'
import type { SectionKey } from './types'
import { menuEntries } from './data/mockData'
import {
  PlayersDashboardSection,
  DecksDashboardSection,
  TournamentsMapSection,
  UserProfileSection,
  PlayersProfileSection,
  BackofficeTournamentsSection,
  SuperBackofficeStoresSection,
} from './components/sections'

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
