// ─── DADOS DOS PROJETOS — edite aqui para adicionar ou alterar ───────────────
const PROJETOS = [
  {
    id: 1,
    titulo: 'Portfólio Pessoal',
    descricao:
      'Este próprio site — desenvolvido do zero com Next.js e Tailwind CSS, com foco em design editorial, dark mode e exportação estática.',
    ferramentas: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    tipo: 'Desenvolvimento Web',
    link: '#',
    destaque: true,
  },
  {
    id: 2,
    titulo: 'Newsletter: Byte a Byte',
    descricao:
      'Newsletter semanal que traduz notícias de tecnologia para leitores não técnicos. Curadoria, redação e distribuição por e-mail.',
    ferramentas: ['Substack', 'Figma', 'Canva'],
    tipo: 'Jornalismo Digital',
    link: '#',
    destaque: false,
  },
  {
    id: 3,
    titulo: 'Cobertura Especial: Eleições USP 2023',
    descricao:
      'Trabalho acadêmico de cobertura jornalística multimídia das eleições para o DCE da USP. Texto, áudio e visualizações de dados dos resultados.',
    ferramentas: ['Datawrapper', 'Adobe Audition', 'Notion'],
    tipo: 'Trabalho Acadêmico',
    link: '#',
    destaque: false,
  },
  {
    id: 4,
    titulo: 'Mapa das Culturas Periféricas',
    descricao:
      'Projeto de dados jornalísticos que mapeia coletivos culturais nas periferias de São Paulo. Raspagem de dados, limpeza e visualização interativa.',
    ferramentas: ['Python', 'Pandas', 'Flourish'],
    tipo: 'Jornalismo de Dados',
    link: '#',
    destaque: false,
  },
  {
    id: 5,
    titulo: 'Podcast: Repórter no Código',
    descricao:
      'Série de episódios sobre a interseção entre jornalismo e tecnologia, com entrevistas a profissionais de newsrooms digitais brasileiras.',
    ferramentas: ['Audacity', 'Spotify for Podcasters', 'Notion'],
    tipo: 'Jornalismo Sonoro',
    link: '#',
    destaque: false,
  },
  {
    id: 6,
    titulo: 'Freela: Site para Banda Independente',
    descricao:
      'Desenvolvimento de landing page para uma banda de indie rock de São Paulo. Integração com plataformas de streaming e sistema de divulgação de shows.',
    ferramentas: ['Next.js', 'Tailwind CSS', 'Vercel'],
    tipo: 'Freela',
    link: '#',
    destaque: false,
  },
]
// ─────────────────────────────────────────────────────────────────────────────

const TIPO_COLORS: Record<string, string> = {
  'Desenvolvimento Web': 'bg-tag-bg text-tag-text',
  'Jornalismo Digital': 'bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300',
  'Trabalho Acadêmico': 'bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300',
  'Jornalismo de Dados': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300',
  'Jornalismo Sonoro': 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
  Freela: 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300',
}

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

interface ProjetoCardProps {
  projeto: (typeof PROJETOS)[number]
}

function ProjetoCard({ projeto }: ProjetoCardProps) {
  const tipoCls = TIPO_COLORS[projeto.tipo] ?? 'bg-tag-bg text-tag-text'

  return (
    <article className="group flex flex-col bg-card border border-divider rounded-sm p-6 hover:shadow-md hover:border-accent-brand/30 hover:-translate-y-0.5 transition-all duration-300">
      {/* Topo: tipo + link */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <span className={`px-2.5 py-0.5 text-[10px] font-sans font-semibold uppercase tracking-wider rounded-full ${tipoCls}`}>
          {projeto.tipo}
        </span>
        {projeto.link !== '#' && (
          <a
            href={projeto.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-faint hover:text-accent-brand transition-colors flex-shrink-0"
            aria-label={`Ver projeto: ${projeto.titulo}`}
          >
            <ExternalLinkIcon />
          </a>
        )}
      </div>

      {/* Título */}
      <h3 className="font-serif text-xl font-bold text-ink leading-snug mb-3 group-hover:text-accent-brand transition-colors text-balance flex-1">
        {projeto.titulo}
      </h3>

      {/* Descrição */}
      <p className="font-sans text-sm text-ink-muted leading-relaxed mb-5">
        {projeto.descricao}
      </p>

      {/* Ferramentas */}
      <div className="mt-auto">
        <div className="flex flex-wrap gap-1.5">
          {projeto.ferramentas.map((f) => (
            <span
              key={f}
              className="px-2 py-0.5 text-[11px] font-sans text-ink-faint bg-muted border border-divider rounded"
            >
              {f}
            </span>
          ))}
        </div>
      </div>

      {/* Rodapé: link CTA */}
      <div className="mt-5 pt-4 border-t border-divider flex items-center justify-end">
        <a
          href={projeto.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-sans font-medium text-accent-brand hover:gap-3 transition-all"
          aria-label={`Ver projeto: ${projeto.titulo}`}
        >
          Ver projeto <ExternalLinkIcon />
        </a>
      </div>
    </article>
  )
}

export function Projetos() {
  return (
    <section id="projetos" className="py-24 md:py-32 bg-surface-elevated" aria-labelledby="projetos-titulo">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-accent-brand mb-3">
              Trabalhos
            </p>
            <h2
              id="projetos-titulo"
              className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight"
            >
              Projetos
            </h2>
          </div>
          <p className="font-sans text-sm text-ink-muted max-w-sm leading-relaxed">
            Projetos pessoais, trabalhos acadêmicos e freelas que combinam narrativa,
            dados e tecnologia.
          </p>
        </div>

        {/* Linha editorial */}
        <div className="h-px bg-divider mb-12" aria-hidden="true" />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJETOS.map((p) => (
            <ProjetoCard key={p.id} projeto={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
