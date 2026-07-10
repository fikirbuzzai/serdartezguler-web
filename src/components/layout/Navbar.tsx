'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { NAV_LINKS, WA_CTA, siteConfig } from '@/lib/config'

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen]   = useState(false)
  const [theme, setTheme] = useState<'dark'|'light'>('dark')

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    try { localStorage.setItem('st-theme', next) } catch {}
  }

  return (
    <nav
      className="sticky top-0 z-50 h-[62px] flex items-center justify-between px-10 border-b"
      style={{ background: 'rgba(8,8,14,.97)', backdropFilter: 'blur(20px)', borderColor: 'var(--br)' }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 shrink-0" aria-label={siteConfig.name}>
        <span style={{ fontFamily: 'var(--font-space)', fontWeight: 700, fontSize: 17, letterSpacing: '-.3px', color: 'var(--text)' }}>
          {siteConfig.name}
          <span style={{ color: 'var(--accent)', marginLeft: 1 }}>.</span>
        </span>
      </Link>

      {/* Desktop nav */}
      <ul className="hidden md:flex items-center gap-0.5 list-none">
        {NAV_LINKS.map(link => {
          const active = pathname === link.href || pathname?.startsWith(link.href + '/')
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors"
                style={{
                  fontFamily: 'var(--font-space)',
                  color:      active ? 'var(--text)' : 'var(--t2)',
                  background: active ? 'rgba(255,255,255,.08)' : 'transparent',
                }}
              >
                {link.label}
              </Link>
            </li>
          )
        })}
      </ul>

      {/* Right actions */}
      <div className="flex items-center gap-2">
        <Link
          href="/st-agent"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-bold text-white"
          style={{ background: 'linear-gradient(135deg,#4F7EFF,#7C3AED,#06B6D4)', backgroundSize: '200% auto', animation: 'agGrad 5s linear infinite' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white/80" style={{ animation: 'apPulse 2s ease-in-out infinite' }} />
          ST Agent
        </Link>
        <a
          href={WA_CTA}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-semibold text-white"
          style={{ background: '#25D366' }}
        >
          WhatsApp
        </a>
        <button
          onClick={toggleTheme}
          className="w-8 h-8 rounded-md flex items-center justify-center text-sm transition-colors"
          style={{ border: '1px solid var(--br)', color: 'var(--t2)', background: 'transparent' }}
          aria-label="Tema değiştir"
        >
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          <span className="block w-5 h-0.5" style={{ background: 'var(--text)' }} />
          <span className="block w-5 h-0.5" style={{ background: 'var(--text)' }} />
          <span className="block w-5 h-0.5" style={{ background: 'var(--text)' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="absolute top-full left-0 right-0 border-b z-50 flex flex-col"
          style={{ background: 'var(--s1)', borderColor: 'var(--br)' }}
        >
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-6 py-3 text-[14px] font-medium transition-colors"
              style={{ fontFamily: 'var(--font-space)', color: 'var(--t2)' }}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-6 py-4 flex gap-3">
            <a href={WA_CTA} target="_blank" rel="noopener"
               className="flex-1 py-2.5 rounded-lg text-center text-[13px] font-semibold text-white"
               style={{ background: '#25D366' }}>
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
