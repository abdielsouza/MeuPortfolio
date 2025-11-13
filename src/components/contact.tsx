"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);

    fetch("/api/send-mail", { method: "POST", body: JSON.stringify(formData) } ).then(res => {
      res.json().then(jsonRes => {
        if (!res.ok || res.status != 200) {
          console.error(jsonRes.error);
        }

        alert(jsonRes.message);
        setTimeout(() => true, 1500);
      });
    });

    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-sm tracking-widest uppercase text-primary mb-4">Vamos Conversar</p>
          <h2 className="text-4xl md:text-5xl font-bold">Entre em Contato</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Seu Nome"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-6 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-smooth"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Seu Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-6 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-smooth"
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Sua Mensagem"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-6 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-smooth resize-none"
            required
          />

          <button
            type="submit"
            className="w-full px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg glow-red transition-smooth border border-primary"
          >
            Enviar Mensagem
          </button>
        </form>

        {/* Social links */}
        <div className="mt-16 pt-12 border-t border-border flex justify-center gap-6">
          {[
            ["GitHub", "https://github.com/abdielsouza"],
            ["LinkedIn", "#"],
            ["Instagram", "https://instagram.com/abdielsouza988"]
          ].map((social) => (
            <a key={social[0]} href={social[1]} className="text-sm text-muted-foreground hover:text-primary transition-smooth">
              {social[0]}
            </a>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-muted-foreground">
          © 2025 Abdiel Souza. Todos os direitos reservados.
        </div>
      </div>
    </section>
  )
}
