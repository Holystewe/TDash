export type SectionKey =
  | 'players-dashboard'
  | 'decks-dashboard'
  | 'tournaments-map'
  | 'user-profile'
  | 'players-profile'
  | 'backoffice-tournaments'
  | 'super-backoffice-stores'

export type MenuEntry = {
  key: SectionKey
  label: string
}
