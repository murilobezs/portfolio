import type { Metadata } from 'next'
import { SpaceGrotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = SpaceGrotesk({ 
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

export const metadata: Metadata = {
  title: 'Murilo Bezerra | Jornalismo, Design e Front-end',
  description: 'Portfólio de jornalismo, design e desenvolvimento front-end. Narrativas com apuração, contexto e clareza editorial.',
  keywords: ['jornalismo', 'portfolio', 'design', 'front-end', 'web development'],
  authors: [{ name: 'Murilo Bezerra' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://murilobezerra.dev',
    siteName: 'Murilo Bezerra',
    title: 'Murilo Bezerra | Jornalismo, Design e Front-end',
    description: 'Portfólio de jornalismo, design e desenvolvimento front-end.',
    images: [
      {
        url: 'https://murilobezerra.dev/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Murilo Bezerra',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Murilo Bezerra | Jornalismo, Design e Front-end',
    description: 'Portfólio de jornalismo, design e desenvolvimento front-end.',
    images: ['https://murilobezerra.dev/og-image.png'],
    creator: '@murilobezs',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add("js");`,
          }}
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${spaceGrotesk.className} text-zinc-100 antialiased selection:bg-white selection:text-black`}>
        {children}
      </body>
    </html>
  )
}
