"use client"

import { useState } from "react"

interface HeaderProps {
  scrollY: number
}

export default function Header({ scrollY }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: "Sobre", href: "#about" },
    { label: "Projetos", href: "#projects" },
    { label: "Contato", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-glow-red">
          {"<"}Portfolio{"/"}
        </div>
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm tracking-widest uppercase hover:text-primary transition-smooth"
            >
              {item.label}
            </a>
          ))}
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5"
        >
          <span className="block w-full h-0.5 bg-foreground transition-all" />
          <span className="block w-full h-0.5 bg-foreground transition-all" />
          <span className="block w-full h-0.5 bg-foreground transition-all" />
        </button>
      </nav>
    </header>
  )
}
