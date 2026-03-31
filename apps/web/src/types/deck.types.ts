export type Deck = {
  id: string
  name: string
  set: string
  houses: [string, string, string]

  // Scoring
  sas: number
  aerc: number
  aercAemberControl: number
  aercExpectedAember: number
  aercArtifactControl: number
  aercCreatureControl: number
  aercEfficiency: number
  aercRecursion: number

  // Win stats
  wins: number
  losses: number
  winRate: number

  // Chains / power
  chains: number
  powerLevel: 1 | 2 | 3 | 4

  // Special cards
  tokenCount: number
  anomalyCount: number
  isCompetitive: boolean

  // External links
  mastervaultLink: string
  dokLink: string

  // Ownership
  owner: string
  registeredAt: string
}
