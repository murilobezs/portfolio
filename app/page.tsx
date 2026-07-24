import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Materias } from '@/components/materias'
import { Projetos } from '@/components/projetos'
import { ContactFooter } from '@/components/contact-footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Materias />
      <Projetos />
      <ContactFooter />
    </main>
  )
}
