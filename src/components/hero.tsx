"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl opacity-20 animate-pulse" />
      </div>

      <div
        className={`relative z-10 text-center px-6 transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-6 inline-block">
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-2">Abdiel Souza - Software Developer</p>
          <div className="h-1 w-16 bg-primary mx-auto" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Programador &
          <span className="block text-primary text-glow-red">Desenvolvedor</span>
          Full-Stack
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Desenvolvimento de utilitários e websites, com foco em boa organização e eficiência.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg glow-red transition-smooth border border-primary"
          >
            Ver Meus Projetos
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-primary text-primary hover:bg-primary/10 font-semibold rounded-lg transition-smooth"
          >
            Me Contate
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
