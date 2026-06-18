'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <header className="sticky top-0 z-70 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <nav className="mx-auto flex w-[92%] max-w-6xl items-center justify-between py-4">
          <Link
            href="/"
            className="flex items-center gap-3 text-sm font-bold tracking-[0.18em] uppercase hover:text-cyan-300 transition-colors"
            title="Voltar ao início"
          >
            <span className="brand-mark" aria-hidden="true">MB</span>
            <span>MURILO BEZERRA</span>
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative h-11 w-11 rounded-full border border-white/20 md:hidden flex items-center justify-center hover:bg-white/10 transition-colors"
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

          <ul className="hidden items-center gap-6 text-sm md:flex">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-cyan-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projetos"
                className="transition-colors hover:text-cyan-300"
              >
                Portfólio
              </Link>
            </li>
            <li>
              <Link
                href="/feed"
                className="transition-colors hover:text-cyan-300"
              >
                Feed Editorial
              </Link>
            </li>
            <li>
              <Link
                href="/#formacao"
                className="transition-colors hover:text-cyan-300"
              >
                Formação
              </Link>
            </li>
            <li>
              <Link
                href="/#contato"
                className="transition-colors hover:text-cyan-300"
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute inset-0 top-16 z-50 border-t border-white/10 bg-black/95 backdrop-blur-xl md:hidden">
            <ul className="flex flex-col gap-4 p-6 text-sm">
              <li>
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 transition-colors hover:text-cyan-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projetos"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 transition-colors hover:text-cyan-300"
                >
                  Portfólio
                </Link>
              </li>
              <li>
                <Link
                  href="/feed"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 transition-colors hover:text-cyan-300"
                >
                  Feed Editorial
                </Link>
              </li>
              <li>
                <Link
                  href="/#formacao"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 transition-colors hover:text-cyan-300"
                >
                  Formação
                </Link>
              </li>
              <li>
                <Link
                  href="/#contato"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 transition-colors hover:text-cyan-300"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  )
}
