import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Press_Start_2P } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-press-start",
})

export const metadata: Metadata = {
  title: "Blind Date Hackathon - Mystery Match? One Day Hackathon",
  description: "Join the Blind Date Hackathon on 15/09/2025 at Oracle Lab, Vidya Academy. ₹6,000 prize pool!",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} ${jetbrainsMono.variable} ${pressStart2P.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
