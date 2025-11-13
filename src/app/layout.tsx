import type React from "react"
import type { Metadata } from "next"
import { Kode_Mono } from "next/font/google"
// import LocalFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

/*
const spaceGrotesk = LocalFont({
  src: [
    {
      path: "../../public/fonts/SpaceGrotesk-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/SpaceGrotesk-Medium.ttf",
      weight: "500",
    },
  ],
  variable: "--font-future",
})
*/

const monoFont = Kode_Mono({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Designer & Developer",
  description: "Portfólio minimalista dark com iluminações vermelhas",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <body className={`${monoFont.className} font-mono antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
