'use client'

import Link from 'next/link'
import { Mail, Instagram, Github, Linkedin, MessageCircle } from 'lucide-react'

export function Footer() {
  const contactLinks = [
    {
      href: 'mailto:murilobezs@gmail.com',
      icon: Mail,
      label: 'E-mail',
      target: undefined,
    },
    {
      href: 'https://www.instagram.com/murilobezs',
      icon: Instagram,
      label: 'Instagram',
      target: '_blank',
    },
    {
      href: 'https://github.com/murilobezs',
      icon: Github,
      label: 'GitHub',
      target: '_blank',
    },
    {
      href: 'https://www.linkedin.com/in/murilobezs',
      icon: Linkedin,
      label: 'LinkedIn',
      target: '_blank',
    },
    {
      href: 'https://wa.me/5511999999999?text=Oi%2C%20Murilo!%20Vi%20seu%20portfolio%20e%20quero%20falar%20sobre%20um%20projeto.',
      icon: MessageCircle,
      label: 'WhatsApp',
      target: '_blank',
    },
  ]

  return (
    <footer className="mx-auto flex w-[92%] max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-white/10 py-8 text-xs text-zinc-400">
      <span>© 2026 Murilo Bezerra</span>
      <span>MURILO BEZERRA • Jornalismo • Front-end • Design</span>
      <div className="flex gap-3">
        {contactLinks.map(({ href, icon: Icon, label, target }) => (
          <Link
            key={label}
            href={href}
            target={target}
            rel={target === '_blank' ? 'noreferrer' : undefined}
            aria-label={label}
            className="hover:text-cyan-300 transition-colors p-2"
          >
            <Icon className="h-4 w-4" />
          </Link>
        ))}
      </div>
    </footer>
  )
}
