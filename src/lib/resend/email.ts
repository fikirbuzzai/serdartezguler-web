import { Resend } from 'resend'
import type { Lead } from '@/types'

const resend = new Resend(process.env.RESEND_API_KEY)
const FROM   = 'ST Site <noreply@serdartezguler.com>'
const TO     = process.env.CONTACT_EMAIL ?? 'st@serdartezguler.com'

export async function sendLeadNotification(lead: Lead): Promise<boolean> {
  try {
    await resend.emails.send({
      from:    FROM,
      to:      TO,
      replyTo: lead.email,
      subject: `[ST] Yeni Talep: ${lead.type} — ${lead.name}`,
      text: [
        'Yeni talep alındı.',
        ''.padEnd(40, '─'),
        `Talep No  : ${lead.id}`,
        `Ad Soyad  : ${lead.name}`,
        `E-posta   : ${lead.email}`,
        `Şirket    : ${lead.company ?? '—'}`,
        `Talep     : ${lead.type}`,
        `Tarih     : ${new Date(lead.created_at).toLocaleString('tr-TR')}`,
        ''.padEnd(40, '─'),
        '',
        `Mesaj:\n${lead.message ?? '—'}`,
        '',
        'Panel: https://serdartezguler.com/admin',
      ].join('\n'),
    })
    return true
  } catch (err) {
    console.error('[Resend] Email failed:', err)
    return false
  }
}

export async function sendLeadConfirmation(lead: Lead): Promise<boolean> {
  try {
    await resend.emails.send({
      from:    FROM,
      to:      lead.email,
      subject: 'Talebiniz Alındı — Serdar Tezgüler',
      text: [
        `Merhaba ${lead.name},`,
        '',
        'Talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.',
        '',
        `Talep türü : ${lead.type}`,
        `Referans   : ${lead.id}`,
        '',
        'Serdar Tezgüler',
        'st@serdartezguler.com',
        'https://serdartezguler.com',
      ].join('\n'),
    })
    return true
  } catch (err) {
    console.error('[Resend] Confirmation failed:', err)
    return false
  }
}
