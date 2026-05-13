export type EvidenceLevel = 'high' | 'medium' | 'low'

export interface Source {
  title: string
  url: string
}

export interface AnalysisResult {
  verdict: string
  emoji: string
  evidenceLevel: EvidenceLevel
  evidenceScore: number
  explanation: string
  minimumDose: string
  sources: Source[]
  bullshitFactors: string[]
}

export interface Protocol {
  id: string
  title: string
  icon: string
  description: string
  minimumDose: string[]
  ignoreList: string[]
  evidenceScore: number
}

export interface Trend {
  id: string
  name: string
  noiseScore: number
  verdict: string
  oneLiner: string
}

export interface UserProfile {
  id: string
  email: string
  plan: 'free' | 'pro'
  queries_today: number
  created_at: string
}
