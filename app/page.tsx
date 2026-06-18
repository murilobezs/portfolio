import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Reveal } from '@/components/Reveal'

export default function Home() {
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
          <Reveal className="glass rounded-3xl p-6 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_290px] lg:items-center">
              <div>
                <p className="text-[10px] tracking-[0.45em] uppercase text-cyan-200/90">
                  MURILO BEZERRA
                </p>
                <p className="text-xs tracking-[0.35em] uppercase text-lime-200/85">
                  Jornalismo • Design • Front-end
                </p>
                <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight sm:text-5xl md:text-6xl gradient-text">
                  Narrativas com apuração, contexto e clareza editorial.
                </h1>
                <p className="mt-5 max-w-3xl text-zinc-300 md:text-lg">
                  Jornalismo investigativo, design visual e desenvolvimento web com visão integrada. Criando conteúdo que conecta e informa.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/feed"
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-400/35 bg-cyan-400/10 px-6 py-3 text-xs font-bold tracking-[0.16em] uppercase text-white hover:bg-cyan-400/20 transition-colors"
                  >
                    Ver Feed
                  </Link>
                  <Link
                    href="/projetos"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-xs font-bold tracking-[0.16em] uppercase text-white hover:bg-white/10 transition-colors"
                  >
                    Portfolio
                  </Link>
                </div>
              </div>
              <aside className="profile-spot mx-auto w-full max-w-[290px] rounded-[1.2rem] border border-white/20 bg-black/35 p-3 backdrop-blur">
                <div className="overflow-hidden rounded-[1rem] border border-white/15 bg-zinc-900/70 h-64 flex items-center justify-center">
                  <img
                    src="assets/foto-murilo-placeholder.svg"
                    alt="Foto de Murilo Bezerra"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-3 text-center text-[11px] tracking-[0.18em] uppercase text-zinc-300">
                  Foto para perfil editorial
                </p>
              </aside>
            </div>
          </Reveal>
        </section>

        <section className="mx-auto w-[92%] max-w-6xl py-6 md:py-10">
          <Reveal className="mb-7">
            <p className="text-xs tracking-[0.35em] uppercase text-zinc-400">Destaques</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Áreas de atuação</h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                tag: 'Jornalismo',
                title: 'Narrativas Investigativas',
                description: 'Pauta, apuração, entrevistas e redação com foco em investigação e contexto.'
              },
              {
                tag: 'Design',
                title: 'Direção Visual',
                description: 'Construção visual de narrativas, design de interface e identidade editorial.'
              },
              {
                tag: 'Front-end',
                title: 'Desenvolvimento Web',
                description: 'Interface, interatividade e experiência digital com React e tecnologias modernas.'
              },
            ].map((item) => (
              <Reveal key={item.title}>
                <article className="glass rounded-3xl p-6 h-full">
                  <p className="text-xs tracking-[0.24em] uppercase text-zinc-400">
                    {item.tag}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm text-zinc-300">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="formacao" className="mx-auto w-[92%] max-w-6xl py-8 md:py-14">
          <Reveal className="glass rounded-3xl p-6 md:p-10">
            <p className="text-xs tracking-[0.35em] uppercase text-zinc-400">Formação</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Base acadêmica e técnica</h2>
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {[
                {
                  school: 'USP',
                  course: 'Jornalismo',
                  description:
                    'Formação em andamento com foco em reportagem, ética, apuração e narrativa.'
                },
                {
                  school: 'ETEC Prof Maria Cristina Medeiros',
                  course: 'Informática para Internet',
                  description:
                    'Formação técnica concluída, com base em desenvolvimento web e comunicação digital.'
                },
              ].map((item) => (
                <div
                  key={item.course}
                  className="rounded-2xl border border-white/10 bg-black/30 p-5 backdrop-blur"
                >
                  <p className="text-xs tracking-[0.24em] uppercase text-zinc-400">
                    {item.school}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">{item.course}</h3>
                  <p className="mt-2 text-sm text-zinc-300">{item.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section id="contato" className="mx-auto w-[92%] max-w-6xl py-10 md:py-16">
          <Reveal className="glass rounded-3xl p-6 text-center md:p-12">
            <p className="text-xs tracking-[0.35em] uppercase text-zinc-400">Contato</p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Aberto para projetos editoriais e digitais
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
              Jornalismo, conteúdo, front-end e direção visual com visão integrada.
            </p>
            <div className="contact-links mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="mailto:murilobezs@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white px-6 py-3 text-xs font-bold tracking-[0.16em] uppercase text-black hover:bg-zinc-200 transition-colors"
              >
                <span>✉ E-mail</span>
              </Link>
              <Link
                href="https://www.instagram.com/murilobezs"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-xs font-bold tracking-[0.16em] uppercase text-white hover:bg-white/10 transition-colors"
              >
                <span>📷 Instagram</span>
              </Link>
              <Link
                href="https://github.com/murilobezs"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-xs font-bold tracking-[0.16em] uppercase text-white hover:bg-white/10 transition-colors"
              >
                <span>💻 GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/murilobezs"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-xs font-bold tracking-[0.16em] uppercase text-white hover:bg-white/10 transition-colors"
              >
                <span>💼 LinkedIn</span>
              </Link>
              <Link
                href="https://wa.me/5511999999999?text=Oi%2C%20Murilo!%20Vi%20seu%20portfolio%20e%20quero%20falar%20sobre%20um%20projeto."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-xs font-bold tracking-[0.16em] uppercase text-white hover:bg-white/10 transition-colors"
              >
                <span>💬 WhatsApp</span>
              </Link>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </>
  )
}
