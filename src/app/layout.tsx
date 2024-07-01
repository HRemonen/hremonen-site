import { Analytics } from '@vercel/analytics/react'
import { BLOG_NAME } from '@/lib/constants'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${BLOG_NAME}`,
  description: `Logi ei elämää ihmeellisemmistä asioista.`,
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => (
    <html lang='en' className='bg-background'>
      <head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicon/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/favicon/safari-pinned-tab.svg'
          color='#000000'
        />
        <link rel='shortcut icon' href='/favicon/favicon.ico' />
        <meta name='msapplication-TileColor' content='#000000' />
        <meta
          name='msapplication-config'
          content='/favicon/browserconfig.xml'
        />
        <meta name='theme-color' content='#000' />

        <link rel='alternate' type='application/rss+xml' href='/feed.xml' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900&display=swap" rel="stylesheet" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,200..900;1,7..72,200..900&display=swap" rel="stylesheet"/>
      </head>
      <body className={inter.className}>
        <main id="main-content" className='min-h-screen'>{children}</main>
        <Analytics />
      </body>
    </html>
  )

  export default RootLayout

