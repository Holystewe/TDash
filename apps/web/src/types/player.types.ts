export type Player = {
  id: string
  username: string
  country: string
  region: string
  dokProfileLink: string

  // Deck stats
  registeredDecksCount: number
  avgSas: number
  topDeckName: string
  topDeckSas: number

  // Win stats
  totalWins: number
  totalLosses: number
  winRate: number

  // Competitive profile
  chains: number
  powerLevel: 1 | 2 | 3 | 4
  favoriteHouse: string
}
