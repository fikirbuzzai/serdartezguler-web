// ─── Site Config ────────────────────────────────────────────────────────────
export interface SiteConfig {
  name: string
  tagline: string
  description: string
  url: string
  email: string
  whatsapp: string
  social: {
    linkedin: string
    twitter: string
    instagram: string
    youtube: string
  }
}

// ─── Lead / Contact ──────────────────────────────────────────────────────────
export type LeadStatus = 'new' | 'contacted' | 'in_progress' | 'closed' | 'spam'

export type ServiceType =
  | 'AI Readiness Audit'
  | 'Executive Workshop'
  | 'AI Strategy Sprint'
  | 'AI Growth Systems'
  | 'AI Agent Strategy'
  | 'Executive Advisory'
  | 'Konuşmacı / Moderatör Daveti'
  | 'Newsletter Üyelik'
  | 'Diğer'

export interface Lead {
  id: string
  name: string
  email: string
  company?: string
  type: ServiceType | string
  message?: string
  status: LeadStatus
  notes?: string
  source: string
  ip?: string
  created_at: string
  updated_at?: string
}

// ─── Service ─────────────────────────────────────────────────────────────────
export interface Service {
  slug: string
  label: string
  badge: string
  badgeVariant: 'featured' | 'popular' | 'ceo' | 'enterprise' | 'geo'
  icon: string
  problem: string
  title: string
  description: string
  output: string
  tags: string[]
  cta: string
  duration: string
  for: string
}

// ─── Answer Page ─────────────────────────────────────────────────────────────
export interface AnswerPage {
  slug: string
  title: string
  description: string
  h1: string
  content: string
  faqs: { q: string; a: string }[]
  related: { title: string; href: string }[]
  category: 'AI Growth' | 'GEO' | 'CEO' | 'Agents' | 'Framework'
  readTime: string
  publishedAt: string
}

// ─── Framework Step ──────────────────────────────────────────────────────────
export interface FrameworkStep {
  id: string
  number: string
  word: string
  title: string
  description: string
  outputs: string[]
}

// ─── Case Study ──────────────────────────────────────────────────────────────
export interface CaseStudy {
  id: string
  sector: string
  title: string
  problem: string
  action: string
  result: string
  learning: string
  metrics: {
    value: string
    label: string
    verified: boolean
  }[]
}

// ─── Contact Form ────────────────────────────────────────────────────────────
export interface ContactFormData {
  name: string
  email: string
  company?: string
  type: string
  message?: string
  honeypot?: string
}

export interface ContactFormResponse {
  ok: boolean
  message: string
  id?: string
}

// ─── Workspace / Brand Engine (future) ──────────────────────────────────────
export interface WorkspaceModule {
  id: string
  name: string
  brand: string
  status: 'active' | 'beta' | 'planned'
}
