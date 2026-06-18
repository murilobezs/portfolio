import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Reveal } from '@/components/Reveal'

export const metadata = {
  title: 'Portfólio | Murilo Bezerra',
  description: 'Conheça meus projetos em jornalismo, design e desenvolvimento.',
}

export default function Projetos() {
  const projetos = [
    {
      title: 'Projeto 1',
      description: 'Descrição do seu primeiro projeto',
      category: 'Jornalismo',
      image: 'assets/foto-murilo-placeholder.svg',
    },
    {
      title: 'Projeto 2',
      description: 'Descrição do seu segundo projeto',
      category: 'Design',
      image: 'assets/foto-murilo-placeholder.svg',
    },
    {
      title: 'Projeto 3',
      description: 'Descrição do seu terceiro projeto',
      category: 'Front-end',
      image: 'assets/foto-murilo-placeholder.svg',
    },
  ]

  return (
    <>
      <Header />
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-noise"></div>
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl"></div>
        <div className="absolute top-1/3 -right-20 h-72 w-72 rounded-full bg-lime-300/15 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-rose-300/20 blur-3xl"></div>
      </div>

      <main className="relative z-10">
        <section className="mx-auto w-[92%] max-w-6xl py-14 md:py-20">
          <Reveal>
            <div className="mb-8">
              <p className="text-xs tracking-[0.35em] uppercase text-zinc-400">
                Seu trabalho
              </p>
              <h1 className="mt-4 text-4xl font-bold md:text-6xl gradient-text">
                Portfólio
              </h1>
              <p className="mt-4 max-w-3xl text-zinc-300 md:text-lg">
                Projetos em jornalismo investigativo, design e desenvolvimento web.
              </p>
            </div>
          </Reveal>
        </section>

        <section className="mx-auto w-[92%] max-w-6xl py-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projetos.map((projeto) => (
              <Reveal key={projeto.title}>
                <article className="glass rounded-3xl overflow-hidden group">
                  <div className="h-48 bg-gradient-to-br from-cyan-400/20 to-lime-400/20 flex items-center justify-center">
                    <img
                      src={projeto.image}
                      alt={projeto.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs tracking-[0.24em] uppercase text-zinc-400">
                      {projeto.category}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold group-hover:text-cyan-300 transition-colors">
                      {projeto.title}
                    </h3>
                    <p className="mt-3 text-sm text-zinc-300">
                      {projeto.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
