import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { sendLeadNotification, sendLeadConfirmation } from '@/lib/resend/email'
import type { ContactFormData, Lead } from '@/types'

const RATE_LIMIT_WINDOW = 3600 * 1000 // 1 hour
const RATE_LIMIT_MAX    = 5
const rateLimitMap      = new Map<string, { count: number; ts: number }>()

function checkRate(ip: string): boolean {
  const now  = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || now - entry.ts > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, ts: now })
    return true
  }
  if (entry.count >= RATE_LIMIT_MAX) return false
  entry.count++
  return true
}

function getIP(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'
  )
}

export async function POST(req: NextRequest) {
  const ip = getIP(req)

  // Rate limit
  if (!checkRate(ip)) {
    return NextResponse.json(
      { ok: false, message: 'Çok fazla deneme. 1 saat sonra tekrar deneyin.' },
      { status: 429 }
    )
  }

  let body: ContactFormData
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, message: 'Geçersiz istek.' }, { status: 400 })
  }

  // Honeypot
  if (body.honeypot) {
    return NextResponse.json({ ok: true, message: 'Teşekkürler!' })
  }

  // Validation
  if (!body.name?.trim())  return NextResponse.json({ ok: false, message: 'Ad soyad gerekli.' }, { status: 400 })
  if (!body.email?.trim()) return NextResponse.json({ ok: false, message: 'E-posta gerekli.' },  { status: 400 })
  if (!/\S+@\S+\.\S+/.test(body.email)) return NextResponse.json({ ok: false, message: 'Geçersiz e-posta.' }, { status: 400 })
  if (!body.type?.trim())  return NextResponse.json({ ok: false, message: 'Talep türü gerekli.' }, { status: 400 })

  // Save to Supabase
  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from('leads')
    .insert({
      name:    body.name.trim(),
      email:   body.email.trim(),
      company: body.company?.trim() ?? null,
      type:    body.type.trim(),
      message: body.message?.trim() ?? null,
      status:  'new',
      source:  'web_form',
      ip:      ip.replace(/\.\d+$/, '.xxx'),
    })
    .select('id, created_at')
    .single()

  if (error || !data) {
    console.error('[Supabase] Insert failed:', error)
    return NextResponse.json(
      { ok: false, message: 'Kayıt hatası. Lütfen e-posta ile yazın.' },
      { status: 500 }
    )
  }

  const lead: Lead = {
    id:         data.id,
    name:       body.name.trim(),
    email:      body.email.trim(),
    company:    body.company?.trim(),
    type:       body.type.trim(),
    message:    body.message?.trim(),
    status:     'new',
    source:     'web_form',
    created_at: data.created_at,
  }

  // Send emails (non-blocking)
  await Promise.allSettled([
    sendLeadNotification(lead),
    sendLeadConfirmation(lead),
  ])

  return NextResponse.json({
    ok:      true,
    message: 'Talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.',
    id:      data.id,
  })
}
