import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Providers } from "@/app/providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rodrigo Méndez Gallery | Expressive Art",
  description: "Art gallery featuring watercolors, drawings, paintings and sketchbook works",
  keywords: "art, gallery, watercolor, paintings, drawings, Mexico, contemporary art",
  authors: [{ name: "Rodrigo Méndez" }],
  creator: "Rodrigo Méndez",
  publisher: "Rodrigo Méndez Gallery",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rodrigomendezgallery.com",
    title: "Rodrigo Méndez Gallery | Expressive Art",
    description: "Art gallery featuring watercolors, drawings, paintings and sketchbook works",
    siteName: "Rodrigo Méndez Gallery",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rodrigo Méndez Gallery | Expressive Art",
    description: "Art gallery featuring watercolors, drawings, paintings and sketchbook works",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Providers>
            <div className="flex flex-col min-h-screen">
              <ScrollToTop />
              <div className="fixed bottom-4 right-4 z-50">
                <ThemeToggle />
              </div>
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  )
}
