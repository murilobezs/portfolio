import Image from 'next/image'

// ─── DADOS DAS MATÉRIAS — edite aqui para adicionar ou alterar ───────────────
const MATERIAS = [
  {
    id: 1,
    titulo: 'Como a IA está mudando as redações brasileiras',
    resumo:
      'Veículos do país experimentam ferramentas de inteligência artificial para automatizar tarefas, mas jornalistas alertam para os riscos à verificação e à autoria.',
    veiculo: 'Jornalismo Júnior',
    data: 'Maio 2024',
    categoria: 'Tecnologia',
    imagem: '/images/materia-tecnologia.png',
    link: '#',
    destaque: true,
  },
  {
    id: 2,
    titulo: 'Sarau na periferia: quando a poesia resiste ao silêncio',
    resumo:
      'Coletivos culturais em Cidade Tiradentes transformam becos e praças em palcos, construindo uma cena literária longe dos holofotes dos centros culturais da capital.',
    veiculo: 'Jornalismo Júnior',
    data: 'Março 2024',
    categoria: 'Cultura',
    imagem: '/images/materia-cultura.png',
    link: '#',
    destaque: false,
  },
  {
    id: 3,
    titulo: 'Cortes na USP: o que está em jogo para a pesquisa pública',
    resumo:
      'Com o contingenciamento de verbas, laboratórios pausam projetos e bolsistas perdem apoio. Professores e alunos debatem os impactos de longo prazo.',
    veiculo: 'Jornal do Campus (USP)',
    data: 'Fevereiro 2024',
    categoria: 'Educação',
    imagem: '/images/materia-educacao.png',
    link: '#',
    destaque: false,
  },
  {
    id: 4,
    titulo: 'Metrô lotado e sem previsão: a saga do transporte em São Paulo',
    resumo:
      'Uma semana acompanhando usuários do sistema de transporte público paulistano revela falhas estruturais que afetam desproporcionalmente os trabalhadores da periferia.',
    veiculo: 'Jornalismo Júnior',
    data: 'Janeiro 2024',
    categoria: 'Cidade',
    imagem: '/images/materia-cidade.png',
    link: '#',
    destaque: false,
  },
  {
    id: 5,
    titulo: 'A nova onda do movimento estudantil nas federais',
    resumo:
      'Após anos de refluxo, centros acadêmicos e diretórios voltam a centralizar debates e protestos em universidades públicas de todo o Brasil.',
    veiculo: 'Agência Universitária de Notícias (AUN)',
    data: 'Novembro 2023',
    categoria: 'Política',
    imagem: '/images/materia-politica.png',
    link: '#',
    destaque: false,
  },
]
// ─────────────────────────────────────────────────────────────────────────────

const CATEGORIA_COLORS: Record<string, string> = {
  Tecnologia: 'bg-tag-bg text-tag-text',
  Cultura: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
  Educação: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300',
  Cidade: 'bg-slate-200 text-slate-700 dark:bg-slate-700/50 dark:text-slate-300',
  Política: 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300',
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

interface MateriaCardProps {
  materia: (typeof MATERIAS)[number]
  destaque?: boolean
}

function MateriaCard({ materia, destaque = false }: MateriaCardProps) {
  const categoriaCls = CATEGORIA_COLORS[materia.categoria] ?? 'bg-tag-bg text-tag-text'

  if (destaque) {
    return (
      <article className="group md:col-span-2 bg-card border border-divider rounded-sm overflow-hidden hover:shadow-lg hover:border-accent-brand/30 transition-all duration-300">
        <a
          href={materia.link}
          target="_blank"
          rel="noopener noreferrer"
          className="grid grid-cols-1 md:grid-cols-2 h-full"
          aria-label={`Ler matéria: ${materia.titulo}`}
        >
          {/* Imagem */}
          <div className="relative h-56 md:h-full min-h-[260px] overflow-hidden bg-muted">
            <Image
              src={materia.imagem}
              alt={`Imagem de capa da matéria: ${materia.titulo}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Conteúdo */}
          <div className="p-7 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-2.5 py-0.5 text-[11px] font-sans font-semibold uppercase tracking-wider rounded-full ${categoriaCls}`}>
                  {materia.categoria}
                </span>
                <span className="text-xs font-sans text-ink-faint">{materia.data}</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-ink leading-snug mb-4 group-hover:text-accent-brand transition-colors text-balance">
                {materia.titulo}
              </h3>
              <p className="font-sans text-sm text-ink-muted leading-relaxed">
                {materia.resumo}
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-xs font-sans text-ink-faint">{materia.veiculo}</span>
              <span className="flex items-center gap-1.5 text-xs font-sans font-medium text-accent-brand group-hover:gap-2.5 transition-all">
                Ler matéria <ExternalLinkIcon />
              </span>
            </div>
          </div>
        </a>
      </article>
    )
  }

  return (
    <article className="group bg-card border border-divider rounded-sm overflow-hidden hover:shadow-md hover:border-accent-brand/30 hover:-translate-y-0.5 transition-all duration-300">
      <a
        href={materia.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col h-full"
        aria-label={`Ler matéria: ${materia.titulo}`}
      >
        {/* Imagem */}
        <div className="relative h-44 overflow-hidden bg-muted flex-shrink-0">
          <Image
            src={materia.imagem}
            alt={`Imagem de capa da matéria: ${materia.titulo}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Conteúdo */}
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span className={`px-2 py-0.5 text-[10px] font-sans font-semibold uppercase tracking-wider rounded-full ${categoriaCls}`}>
              {materia.categoria}
            </span>
            <span className="text-[11px] font-sans text-ink-faint">{materia.data}</span>
          </div>
          <h3 className="font-serif text-lg font-bold text-ink leading-snug mb-2 group-hover:text-accent-brand transition-colors text-balance flex-1">
            {materia.titulo}
          </h3>
          <p className="font-sans text-sm text-ink-muted leading-relaxed line-clamp-2 mb-4">
            {materia.resumo}
          </p>
          <div className="flex items-center justify-between mt-auto pt-3 border-t border-divider">
            <span className="text-[11px] font-sans text-ink-faint truncate max-w-[60%]">
              {materia.veiculo}
            </span>
            <span className="flex items-center gap-1 text-[11px] font-sans font-medium text-accent-brand">
              Ler <ExternalLinkIcon />
            </span>
          </div>
        </div>
      </a>
    </article>
  )
}

export function Materias() {
  const [destaque, ...demais] = MATERIAS

  return (
    <section id="materias" className="py-24 md:py-32" aria-labelledby="materias-titulo">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-accent-brand mb-3">
              Portfólio
            </p>
            <h2
              id="materias-titulo"
              className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight"
            >
              Matérias
            </h2>
          </div>
          <p className="font-sans text-sm text-ink-muted max-w-sm leading-relaxed">
            Reportagens, perfis e coberturas publicadas em veículos universitários
            e plataformas independentes.
          </p>
        </div>

        {/* Linha editorial */}
        <div className="h-px bg-divider mb-12" aria-hidden="true" />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card destaque — ocupa 2 colunas no md+ */}
          <MateriaCard materia={destaque} destaque />
          {/* Demais cards */}
          {demais.map((m) => (
            <MateriaCard key={m.id} materia={m} />
          ))}
        </div>
      </div>
    </section>
  )
}
