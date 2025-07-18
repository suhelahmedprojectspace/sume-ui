import React from 'react'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  metadataBase: new URL('https://astra-ui.dev'), // Change to Astra's domain
  title: {
    template: '%s - Astra UI'
  },
  description: 'Astra UI: A modern UI package suite for building fast, beautiful web apps',
  applicationName: 'Astra UI',
  generator: 'Next.js',
  appleWebApp: {
    title: 'Astra UI'
  },
  other: {
    'msapplication-TileImage': '/ms-icon-144x144.png',
    'msapplication-TileColor': '#ffffff'
  },
  twitter: {
    site: 'https://astra-ui.dev' // Or Astra's official Twitter handle
  }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const navbar = (
    <Navbar
      logo={
        <div style={{ fontWeight: 600 }}>
          <span style={{ color: '#6366f1' }}>Astra</span>{' '}
          <span style={{ opacity: 0.6 }}>UI Packages</span>
        </div>
      }
      chatLink="https://discord.gg/hEM84NMkRv" // Update if Astra has its own Discord
    />
  )

  const pageMap = await getPageMap()

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="✷" /> {/* Optional: Change favicon glyph to suit Astra's theme */}
      <body>
        <Layout
          banner={<Banner storageKey="astra-ui-banner">🎉 Astra UI Beta is Live!</Banner>}
          navbar={navbar}
          footer={<Footer>MIT {new Date().getFullYear()} © Astra UI.</Footer>}
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/your-org/astra-ui-docs" // Update to Astra's repo
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
