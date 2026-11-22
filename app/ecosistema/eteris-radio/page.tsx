import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PageIntro, PageShell } from "@/components/site-shell"
import { projectLinks } from "@/app/project-links"

export default function EterisPage(){
  return <PageShell>
    <PageIntro number="02.1" eyebrow="SUBMARCA · RADIO DIGITAL" title={<>Eteris <span>Radio.</span></>} lead="Una nueva forma de conectar con el mundo."/>
    <section className="section-wrap content-block">
      <span className="state-note">PROYECTO EN DESARROLLO</span>
      <h2>Una experiencia sonora por construir.</h2>
      <p>Eteris Radio es la iniciativa de Lumina Horizon dedicada a la radio 100% digital. Su propuesta parte de conectar audiencias a través de contenidos sonoros y una identidad propia dentro del ecosistema.</p>
      <p>Estamos trabajando en el desarrollo del proyecto. Próximamente compartiremos información confirmada sobre programación, formatos y canales de escucha.</p>
      {projectLinks.eterisWebsite
        ? <a className="content-link" href={projectLinks.eterisWebsite} target="_blank" rel="noopener noreferrer">Visitar el sitio oficial de Eteris Radio <ArrowUpRight size={15}/></a>
        : <p className="contact-note">El sitio web oficial de Eteris Radio se publicará aquí cuando esté disponible.</p>}
      <Link className="content-link" href="/#ecosistema">Volver al ecosistema</Link>
    </section>
  </PageShell>
}