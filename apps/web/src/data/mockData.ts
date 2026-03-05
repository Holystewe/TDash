import type { MenuEntry, Tournament } from '../types'

export const menuEntries: MenuEntry[] = [
  { key: 'players-dashboard', label: 'Dashboard players' },
  { key: 'decks-dashboard', label: 'Dashboard decks' },
  { key: 'tournaments-map', label: 'Tornei con mappa' },
  { key: 'user-profile', label: 'Profilo utente' },
  { key: 'players-profile', label: 'Profilo giocatori' },
  { key: 'backoffice-tournaments', label: 'Backoffice tornei' },
  { key: 'super-backoffice-stores', label: 'Super backoffice negozi' },
]

export const mockPlayersKpis = [
  { label: 'Giocatori attivi', value: '1.284' },
  { label: 'Nuovi questa settimana', value: '87' },
  { label: 'Win rate media', value: '52.9%' },
  { label: 'Store con eventi', value: '42' },
]

export const mockDeckKpis = [
  { label: 'Deck registrati', value: '6.412' },
  { label: 'Deck competitivi', value: '1.026' },
  { label: 'AERC medio', value: '63.4' },
  { label: 'Deck in top cut', value: '118' },
]

export const houseDistribution = [
  { house: 'Shadows', value: 78, color: 'bg-kf-shadow', widthClass: 'house-width-100' },
  { house: 'Logos', value: 64, color: 'bg-kf-logos', widthClass: 'house-width-82' },
  { house: 'Dis', value: 59, color: 'bg-kf-dis', widthClass: 'house-width-76' },
  { house: 'Untamed', value: 57, color: 'bg-kf-untamed', widthClass: 'house-width-73' },
  { house: 'Brobnar', value: 42, color: 'bg-kf-brobnar', widthClass: 'house-width-54' },
  { house: 'Saurian', value: 37, color: 'bg-kf-saurian', widthClass: 'house-width-47' },
]

export const tournaments: Tournament[] = [
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
