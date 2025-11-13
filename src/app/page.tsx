"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import ScrollIndicator from "@/components/scroll-indicator"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <Header scrollY={scrollY} />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <ScrollIndicator scrollY={scrollY} />
    </main>
  )
}
