"use client";

import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Instagram } from 'lucide-react';
import Image from 'next/image';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-400">Abdiel Souza</h1>
          <div className="hidden md:flex space-x-4">
            <a href="#about" className="hover:text-green-400 transition-colors">Sobre</a>
            <a href="#skills" className="hover:text-green-400 transition-colors">Habilidades</a>
            <a href="#projects" className="hover:text-green-400 transition-colors">Projetos</a>
            <a href="#contact" className="hover:text-green-400 transition-colors">Contatos</a>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 p-4">
          <a href="#about" className="block py-2 hover:text-green-400 transition-colors">Sobre</a>
          <a href="#skills" className="block py-2 hover:text-green-400 transition-colors">Habilidades</a>
          <a href="#projects" className="block py-2 hover:text-green-400 transition-colors">Projetos</a>
          <a href="#contact" className="block py-2 hover:text-green-400 transition-colors">Contatos</a>
        </div>
      )}

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="mb-8 relative inline-block">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-green-400 glow transition-all">
              <Image src="/20230823_104644.jpg" alt="Abdiel Souza" className="w-full h-full object-cover" width={200} height={200} />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Abdiel Souza</h1>
          <p className="text-xl md:text-2xl mb-8">Desenvolvedor Web Full-Stack</p>
          <a href="#contact" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition-colors">
            Entre em contato!
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Sobre Mim</h2>
          <p className="text-lg mb-4 text-center lg:w-[600px] mx-auto">
            Sou um desenvolvedor web full-stack especializado em Next.js e Python, sabendo lidar bem com quaisquer outras tecnologias web. Estou em constante aprendizado
            para criar soluções eficientes,aplicativos da web escaláveis ​​e fáceis de usar que resolvem problemas do mundo real. Também sou estudante de ciência de dados.
          </p>
          <p className="text-lg text-center lg:w-[600px] mx-auto">
            Com uma base sólida em tecnologias front-end e back-end, posso realizar projetos de forma eficiente e
            com qualidade de serviço, podendo assim oferecer aos usuários as melhores experiências com os
            projetos.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4 space-y-10">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Hard Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {['Next.js', 'React', 'Python', 'Javascript/Typescript', 'HTML', 'CSS', 'Node.js', 'SQL', 'Svelte', 'PostgreSQL', 'Django', 'Estatística e IA', 'Excel', 'C/C++', 'Elixir (com Phoenix Framework)', 'Clojure'].map((skill) => (
                <div key={skill} className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Soft Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {['Proatividade', 'Boa Comunicação', 'Bom raciocínio lógico', 'Ajudador', 'Pontualidade', 'Facilidade com cálculos'].map((skill) => (
                <div key={skill} className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Projetos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                name: "Code Zero",
                description: "O website da minha marca que falhou, servindo como demonstração de design. Feito com NextJS.",
                url: "https://code-zero.vercel.app"
              },
              {
                id: 2,
                name: "Mais Audível",
                description: "Um website de conscientização sobre surdez e recursos de aprendizado e comunicação. Algumas funcionalidades ainda estão sendo desenvolvidas. Feito com SvelteKit.",
                url: "https://mais-audivel-app-git-master-abdiel-castro-souzas-projects.vercel.app"
              },
              {
                id: 3,
                name: "The Robot Portfolio",
                description: "Um modelo de web design para projetos de portfólio, feito por mim.",
                url: "https://robot-portfolio-template.vercel.app"
              },
              {
                id: 4,
                name: "Atmos Dashboard",
                description: "Um modelo de web design para dashboard, feito com NextJS.",
                url: "https://atmos-dashboard.vercel.app"
              },
              {
                id: 5,
                name: "Stylizer Project (Prototype)",
                description: "Um estilizador de websites.",
                url: "https://stylizer.vercel.app"
              }
            ].map((project) => (
              <div key={project.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-green-400/50 transition-shadow">
                <Image src={`/project-${project.id}.png`} alt={`Project ${project.id}`} className="w-full h-48 object-cover" width={400} height={200} />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <a href={project.url} className="text-green-400 hover:text-green-300 transition-colors">Ver Projeto</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Fale comigo</h2>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/abdielsouza" target='_blank' className="text-green-400 hover:text-green-300 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/abdiel-c-413703223" target='_blank' className="text-green-400 hover:text-green-300 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:abdielcsouza@gmail.com" target='_blank' className="text-green-400 hover:text-green-300 transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://instagram.com/dev_engenharias" target='_blank' className="text-green-400 hover:text-green-300 transition-colors">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-4 text-center">
        <p>&copy; 2024 Abdiel Souza. Todos os direitos reservados.</p>
      </footer>

      {/* Global Styles */}
      <style jsx global>{`
        .glow {
          box-shadow: 0 0 15px rgba(74, 222, 128, 0.5);
        }
        .glow:hover {
          box-shadow: 0 0 25px rgba(74, 222, 128, 0.7);
        }
      `}</style>
    </div>
  )
}
