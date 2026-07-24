const FORMACAO = [
  {
    instituicao: 'Universidade de São Paulo (USP)',
    curso: 'Bacharelado em Jornalismo',
    periodo: '2026 — presente',
    tipo: 'Graduação',
    descricao:
      'Uma das mais prestigiadas escolas de comunicação do Brasil. Formação que combina teoria da comunicação, reportagem, edição, jornalismo digital e ética profissional.',
  },
  {
    instituicao: 'ETEC — Escola Técnica Estadual',
    curso: 'Técnico em Informática para Internet',
    periodo: '2023 — 2025',
    tipo: 'Formação Técnica',
    descricao:
      'Formação técnica em desenvolvimento web, banco de dados, redes e programação. Habilidades que ampliam o alcance do trabalho jornalístico no ambiente digital.',
  },
]

const EXPERIENCIAS = [
  {
    organizacao: 'Jornalismo Júnior',
    papel: 'Repórter / Membro',
    periodo: '2026 — presente',
    descricao:
      'Empresa júnior de jornalismo da ECA-USP. Produção de reportagens, entrevistas e cobertura de pautas relevantes para a comunidade universitária e o público geral.',
  },

  {
    organizacao: 'SETEPOP',
    papel: 'Editor',
    periodo: '2026 — presente',
    descricao:
      'Veículo sobre cultura pop, entretenimento, cinema, música e moda. Apuração de pautas e realização de entrevistas. Coberturas de grandes eventos e estreias da indústria cultural.',
  },

   {
    organizacao: 'Fashionlismo',
    papel: 'Redator',
    periodo: '2026 — presente',
    descricao:
      'Portal independente sobre moda, comportamento, wellness e cultura. Atuo na apuração de pautas e criação de matérias sobre moda e cultura.',
  },
]

const HABILIDADES = [
  'Reportagem',
  'Redação Editorial',
  'Edição de Texto',
  'Jornalismo Digital',
  'HTML / CSS',
  'JavaScript',
  'Next.js',
  'Pesquisa Jornalística',
  'Entrevista',
  'Foto / Vídeo Básico',
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-accent-brand mb-3">
      {children}
    </p>
  )
}

export function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-surface-elevated" aria-labelledby="sobre-titulo">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Cabeçalho da seção */}
        <div className="mb-16 md:mb-20">
          <SectionLabel>Sobre</SectionLabel>
          <h2
            id="sobre-titulo"
            className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight text-balance"
          >
            Jornalismo com
            <br />
            <span className="text-accent-brand">mentalidade técnica</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
          {/* Bio — ocupa 3/5 */}
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-5 text-ink-muted font-sans text-base leading-relaxed">
              <p>
                Sou Murilo Bezerra, estudante de Jornalismo na{' '}
                <strong className="text-ink font-semibold">
                  Escola de Comunicações e Artes da USP
                </strong>
                . Acredito que as melhores histórias nascem quando a curiosidade
                jornalística encontra a compreensão técnica do mundo.
              </p>
              <p>
                Minha trajetória é pouco convencional: antes de entrar para o jornalismo,
                me formei técnico em Informática para Internet pela ETEC, onde aprendi a
                construir para a web e entender como a tecnologia molda o
                mundo que queremos cobrir.
              </p>
              <p>
                Hoje, faço parte da{' '}
                <strong className="text-ink font-semibold">Jornalismo Júnior</strong>, a
                empresa júnior de jornalismo da USP, onde produzo reportagens e desenvolvo
                projetos que unem narrativa e inovação digital.
              </p>
              <p>Também sou editor no{' '}
                <strong className="text-ink font-semibold">SETEPOP</strong>, veículo sobre cultura pop no qual atuo na redação de críticas, cobertura de grandes eventos e notícias do mundo do entretenimento.
              </p>
              <p>Além disso, escrevo sobre cultura e moda no{' '}
                <strong className="text-ink font-semibold">Fashionlismo</strong>, portal independente de moda, comportamento, wellness e cultura.
              </p>
            </div>

            {/* Habilidades */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-ink mb-4">Habilidades</h3>
              <div className="flex flex-wrap gap-2">
                {HABILIDADES.map((h) => (
                  <span
                    key={h}
                    className="px-3 py-1 text-xs font-sans font-medium bg-tag-bg text-tag-text rounded-full"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Formação + Experiência — ocupa 2/5 */}
          <div className="lg:col-span-2 space-y-10">
            {/* Formação */}
            <div>
              <h3 className="font-serif text-xl font-bold text-ink mb-6 pb-3 border-b border-divider">
                Formação
              </h3>
              <div className="space-y-7">
                {FORMACAO.map((f) => (
                  <article key={f.curso} className="group">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <span className="text-[10px] font-sans font-semibold uppercase tracking-widest text-accent-brand bg-accent-brand-muted px-2 py-0.5 rounded-full">
                        {f.tipo}
                      </span>
                      <span className="text-xs font-sans text-ink-faint whitespace-nowrap">
                        {f.periodo}
                      </span>
                    </div>
                    <h4 className="font-serif text-base font-bold text-ink mt-2">
                      {f.curso}
                    </h4>
                    <p className="text-sm font-sans text-ink-muted mb-2">{f.instituicao}</p>
                    <p className="text-xs font-sans text-ink-faint leading-relaxed">
                      {f.descricao}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            {/* Experiência */}
            <div>
              <h3 className="font-serif text-xl font-bold text-ink mb-6 pb-3 border-b border-divider">
                Experiência
              </h3>
              <div className="space-y-7">
                {EXPERIENCIAS.map((e) => (
                  <article key={e.papel}>
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <span className="text-[10px] font-sans font-semibold uppercase tracking-widest text-accent-brand bg-accent-brand-muted px-2 py-0.5 rounded-full">
                        {e.papel}
                      </span>
                      <span className="text-xs font-sans text-ink-faint whitespace-nowrap">
                        {e.periodo}
                      </span>
                    </div>
                    <h4 className="font-serif text-base font-bold text-ink mt-2">
                      {e.organizacao}
                    </h4>
                    <p className="text-xs font-sans text-ink-faint leading-relaxed mt-1">
                      {e.descricao}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
