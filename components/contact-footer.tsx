// ─── DADOS DE CONTATO — edite aqui ───────────────────────────────────────────
const CONTATO = {
  email: 'murilo.bezerra@usp.br',
  linkedin: 'https://linkedin.com/in/murilobezs',
  instagram: 'https://instagram.com/muribezerras',
}
// ─────────────────────────────────────────────────────────────────────────────

function EmailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

interface SocialLinkProps {
  href: string
  label: string
  icon: React.ReactNode
}

function SocialLink({ href, label, icon }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center gap-3 px-5 py-4 border border-divider rounded-sm text-ink-muted hover:text-accent-brand hover:border-accent-brand hover:bg-accent-brand-muted transition-all duration-200 group"
    >
      <span className="transition-transform group-hover:scale-110">{icon}</span>
      <span className="font-sans text-sm">{label}</span>
    </a>
  )
}

export function ContactFooter() {
  const year = new Date().getFullYear()

  return (
    <>
      {/* ─── SEÇÃO CONTATO ─── */}
      <section id="contato" className="py-24 md:py-32" aria-labelledby="contato-titulo">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          {/* Cabeçalho */}
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-accent-brand mb-3">
              Contato
            </p>
            <h2
              id="contato-titulo"
              className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight mb-5 text-balance"
            >
              Vamos conversar?
            </h2>
            <p className="font-sans text-base text-ink-muted leading-relaxed">
              Aberto a pautas, parcerias, freelas e trocas de ideia sobre
              jornalismo, tecnologia ou qualquer coisa no meio do caminho.
            </p>
          </div>

          {/* Linha editorial */}
          <div className="h-px bg-divider mb-12" aria-hidden="true" />

          {/* E-mail em destaque */}
          <div className="mb-10">
            <p className="font-sans text-xs text-ink-faint uppercase tracking-widest mb-3">
              E-mail
            </p>
            <a
              href={`mailto:${CONTATO.email}`}
              className="font-serif text-2xl md:text-3xl text-ink hover:text-accent-brand transition-colors group inline-flex items-center gap-3"
            >
              {CONTATO.email}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100 transition-opacity text-accent-brand" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Links sociais */}
          <div>
            <p className="font-sans text-xs text-ink-faint uppercase tracking-widest mb-5">
              Redes sociais
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl">
              <SocialLink
                href={CONTATO.linkedin}
                label="LinkedIn"
                icon={<LinkedInIcon />}
              />
              <SocialLink
                href={CONTATO.instagram}
                label="Instagram"
                icon={<InstagramIcon />}
              />
              <SocialLink
                href={`mailto:${CONTATO.email}`}
                label="E-mail direto"
                icon={<EmailIcon />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-divider bg-surface-elevated">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Marca */}
            <div>
              <p className="font-serif text-lg font-bold text-ink">
                Murilo Bezerra
                <span className="ml-1 w-1.5 h-1.5 rounded-full bg-accent-brand inline-block align-middle" aria-hidden="true" />
              </p>
              <p className="font-sans text-xs text-ink-faint mt-1">
                Jornalismo & Tecnologia · São Paulo, SP
              </p>
            </div>

            {/* Nav footer */}
            <nav aria-label="Navegação do rodapé">
              <ul className="flex flex-wrap gap-6" role="list">
                {[
                  { label: 'Sobre', href: '#sobre' },
                  { label: 'Matérias', href: '#materias' },
                  { label: 'Projetos', href: '#projetos' },
                  { label: 'Contato', href: '#contato' },
                ].map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="font-sans text-xs text-ink-faint hover:text-accent-brand transition-colors uppercase tracking-wider"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Copyright */}
            <p className="font-sans text-xs text-ink-faint">
              &copy; {year} Murilo Bezerra
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
