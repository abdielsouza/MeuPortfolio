export default function About() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "Svelte", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "APIs REST", "Vercel"] },
    { category: "Ciência de Dados", items: ["RStudio", "Python", "Excel", "Estatística", "Machine Learning"] },
    { category: "Compiladores & Sistemas", items: ["C/C++", "OCaml", "Rust"] }
  ]

  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-sm tracking-widest uppercase text-primary mb-4">Sobre</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Desenvolvedor autodidata e
            <span className="block text-primary">multitarefas</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou desenvolvedor full-stack apaixonado por criar interfaces práticas e código que escala. Atuo em
              projetos que combinam boa organização e código eficiente.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Especializado em React, Next.js, Python, C++ e desenvolvimento backend, sempre focando em performance, acessibilidade e
              experiência do usuário impecável.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Também estudo ciência de dados e tenho uma grande paixão pela área.
              Tenho projetos com modelos de IA nos quais aplico meu conhecimento.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Quando não estou programando, estou explorando novas tecnologias, contribuindo em outros projetos ou
              aprimorando minhas skills em diferentes ramos de tecnologia.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.category}
                className="p-6 bg-card border border-border rounded-lg border-glow-red hover:glow-red transition-smooth"
              >
                <h3 className="text-primary font-bold mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
