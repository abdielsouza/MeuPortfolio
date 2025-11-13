"use client"

import { useState } from "react"

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      title: "Colormind AI",
      description:
        "Utilitário web para geração de paleta de cores com IA. Carregue uma imagem e extraia a paleta de cores.",
      tags: ["Streamlit", "Python", "Machine Learning"],
      link: "https://colormind.streamlit.app",
      image: "/colormind-project.png",
    },
    {
      title: "LSTM Stock Price Predictor",
      description:
        "Utilitário web para previsão do preço de ações com IA. Feito com PyTorch e Streamlit.",
      tags: ["Streamlit", "Python", "Machine Learning"],
      link: "https://lstmstockprice-predictor.streamlit.app",
      image: "/lstm-stock-price-project.png",
    },
    {
      title: "Fast Time Website",
      description:
        "Uma landing page de boa estetíca criada a pedido de um antigo cliente.",
      tags: ["Next.js", "Typescript", "TailwindCSS"],
      link: "https://fast-time-website.vercel.app",
      image: "/fast-time-project.png",
    },
    {
      title: "Windmill Event Handling Library",
      description:
        "Uma biblioteca de event handling para projetos Python.",
      tags: ["Python", "Utils"],
      link: "https://github.com/abdielsouza/windmill",
      image: "/windmill-project.png",
    },
    {
      title: "Auxtypes Library",
      description:
        "Uma biblioteca de tipos e funções auxiliares para projetos C/C++.",
      tags: ["C/C++", "Utils"],
      link: "https://github.com/abdielsouza/auxtypes",
      image: "/auxtypes-project.png",
    },
  ]

  return (
    <section id="projects" className="relative py-24 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-sm tracking-widest uppercase text-primary mb-4">Trabalhos</p>
          <h2 className="text-4xl md:text-5xl font-bold">Projetos em Destaque</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {projects.map((project, idx) => (
            <button
              key={idx}
              onClick={() => setActiveProject(idx)}
              className={`text-left p-6 rounded-lg border transition-smooth ${
                activeProject === idx
                  ? "border-primary glow-red bg-card"
                  : "border-border bg-transparent hover:border-primary/50"
              }`}
            >
              <h3 className="font-bold text-lg mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 bg-primary/20 text-primary rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>

        {/* Project detail */}
        <div className="border border-border rounded-lg overflow-hidden">
          <div className="relative h-96 bg-secondary/50 flex items-center justify-center">
            <img
              src={projects[activeProject].image || "/placeholder.svg"}
              alt={projects[activeProject].title}
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
          <div className="p-8 bg-card border-t border-border">
            <h3 className="text-2xl font-bold mb-2">{projects[activeProject].title}</h3>
            <p className="text-muted-foreground mb-6">{projects[activeProject].description}</p>
            <a
              href={projects[activeProject].link}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
            >
              Ver Projeto →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
