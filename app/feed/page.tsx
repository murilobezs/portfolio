'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Reveal } from '@/components/Reveal'

interface Publication {
  _id: string
  title: string
  description: string
  category: string
  type: 'article' | 'post' | 'project'
  image?: string
  embedUrl?: string
  embedType?: 'instagram' | 'twitter' | 'youtube'
  url?: string
  publishedAt: string
}

export default function Feed() {
  const [publications, setPublications] = useState<Publication[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<string>('todos')

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const res = await fetch('/api/publications')
        const data = await res.json()
        setPublications(data)
      } catch (error) {
        console.error('Erro ao carregar publicações:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPublications()
  }, [])

  const categories = ['todos', 'article', 'post', 'project']
  const filtered = filter === 'todos' 
    ? publications 
    : publications.filter(pub => pub.type === filter)

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
        <section className="mx-auto w-[92%] max-w-4xl py-14 md:py-20">
          <Reveal>
            <div className="mb-8">
              <p className="text-xs tracking-[0.35em] uppercase text-zinc-400">
                Publicações
              </p>
              <h1 className="mt-4 text-4xl font-bold md:text-6xl gradient-text">
                Feed Editorial
              </h1>
              <p className="mt-4 max-w-3xl text-zinc-300 md:text-lg">
                Artigos, reportagens, posts e projetos multimídia.
              </p>
            </div>
          </Reveal>

          {/* Filtros */}
          <Reveal className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition-all ${
                  filter === cat
                    ? 'bg-cyan-400/30 border border-cyan-400/60 text-white'
                    : 'border border-white/20 text-zinc-300 hover:border-white/40'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </Reveal>
        </section>

        <section className="mx-auto w-[92%] max-w-4xl pb-16">
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <p className="text-zinc-400">Carregando publicações...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="glass rounded-3xl p-8 text-center">
              <p className="text-zinc-400">Nenhuma publicação nesta categoria.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filtered.map((pub) => (
                <Reveal key={pub._id}>
                  <article className="glass rounded-3xl p-6 md:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-xs tracking-[0.24em] uppercase text-zinc-400">
                          {pub.category}
                        </p>
                        <h2 className="mt-2 text-2xl font-bold">{pub.title}</h2>
                      </div>
                      <span className="text-xs text-zinc-500">
                        {new Date(pub.publishedAt).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                    <p className="text-zinc-300 mb-4">{pub.description}</p>

                    {/* Embed Social */}
                    {pub.embedUrl && pub.embedType === 'instagram' && (
                      <div className="mt-4">
                        <iframe
                          src={`https://www.instagram.com/p/${pub.embedUrl}/embed`}
                          width="100%"
                          height="400"
                          className="rounded-lg"
                        ></iframe>
                      </div>
                    )}

                    {pub.embedUrl && pub.embedType === 'twitter' && (
                      <div className="mt-4">
                        <iframe
                          src={`https://twitframe.com/show?url=${encodeURIComponent(pub.embedUrl)}`}
                          width="100%"
                          height="600"
                          className="rounded-lg"
                        ></iframe>
                      </div>
                    )}

                    {pub.embedUrl && pub.embedType === 'youtube' && (
                      <div className="mt-4">
                        <iframe
                          width="100%"
                          height="400"
                          src={`https://www.youtube.com/embed/${pub.embedUrl}`}
                          title={pub.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-lg"
                        ></iframe>
                      </div>
                    )}

                    {pub.url && (
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 mt-4 text-cyan-400 hover:text-cyan-300 font-semibold"
                      >
                        Ler mais →
                      </a>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  )
}
