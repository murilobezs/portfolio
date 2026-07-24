import Image from 'next/image'

export function Hero() {
  return (
    <section
      id="topo"
      className="min-h-screen flex items-center pt-16"
      aria-label="Apresentação"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 w-full py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Texto */}
          <div className="order-2 md:order-1">
            {/* Eyebrow */}
            <p className="text-sm font-sans tracking-[0.15em] uppercase text-accent-brand mb-5 font-medium">
              Portfólio
            </p>

            {/* Nome */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-[1.1] mb-6 text-balance">
              Murilo
              <br />
              Bezerra
            </h1>

            {/* Frase de impacto */}
            <p className="font-serif text-lg sm:text-xl md:text-2xl text-ink-muted italic leading-relaxed mb-8 text-pretty">
              &ldquo;Reportar com precisão técnica, narrar com profundidade humana.&rdquo;
            </p>

            {/* Descrição curta */}
            <p className="font-sans text-sm sm:text-base text-ink-muted leading-relaxed mb-10 max-w-md">
              Estudante de Jornalismo na USP, repórter da{' '}
              <span className="text-accent-brand font-medium">Jornalismo Júnior</span>.
              apaixonado por cultura pop. Formação técnica em Informática para Internet pela ETEC. Experiência em produção 
              de conteúdo, edição de vídeo e fotografia. Editor no{' '} <span className="text-accent-brand font-medium">SETEPOP</span>, redator no <span className="text-accent-brand font-medium">Fashionlismo</span> e criador de conteúdo.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#materias"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-accent-brand text-white font-sans text-sm font-medium rounded hover:bg-accent-brand-hover transition-colors"
              >
                Ver matérias
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-divider text-ink font-sans text-sm rounded hover:border-accent-brand hover:text-accent-brand transition-colors"
              >
                Sobre mim
              </a>
            </div>
          </div>

          {/* Foto */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            {/* padding compensa o badge e a borda decorativa para não vazar */}
            <div className="relative pt-4 pr-4 pb-8 pl-8">
              {/* Decoração: quadrado deslocado */}
              <div
                className="absolute top-0 right-0 w-[calc(100%-2rem)] h-[calc(100%-2rem)] border-2 border-accent-brand rounded-sm opacity-30"
                aria-hidden="true"
              />
              {/* Foto */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-sm overflow-hidden bg-muted">
                <Image
                  src="/images/murilo-profile.jpg"
                  alt="Foto de Murilo Bezerra"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                />
              </div>
              {/* Badge flutuante */}
              <div className="absolute bottom-0 left-0 bg-background border border-divider px-3 py-2 rounded shadow-sm">
                <p className="font-sans text-xs text-ink-muted uppercase tracking-widest">Disponível</p>
                <p className="font-serif text-sm font-semibold text-ink">para estágio e freelas</p>
              </div>
            </div>
          </div>
        </div>

        {/* Linha separadora editorial */}
        <div className="mt-16 md:mt-24 flex items-center gap-4 overflow-hidden">
          <div className="shrink-0 w-8 h-px bg-divider" aria-hidden="true" />
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs font-sans text-ink-faint tracking-widest uppercase">
            <span>USP</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span>Jornalismo Júnior</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span>ETEC</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span>SETEPOP</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span>Fashionlismo</span>
          </div>
          <div className="shrink-0 w-8 h-px bg-divider" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
