import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PageIntro, PageShell } from "@/components/site-shell"
import { projectLinks } from "@/app/project-links"

export default function EterisPage(){
  return <PageShell>
    <PageIntro number="02.1" eyebrow="SUBMARCA · RADIO DIGITAL" title={<>Eteris <span>Radio.</span></>} lead="Una nueva forma de conectar con el mundo."/>
    <section className="section-wrap content-block">
      <span className="state-note">DISPONIBLE EN TUNEIN</span>
      <h2>Conecta con Eteris Radio.</h2>
      <p>Eteris Radio es la propuesta de Lumina Horizon dedicada a la radio 100% digital. Ya cuenta con una presencia de escucha en TuneIn, desde donde puedes acceder a la emisora.</p>
      <p>Seguiremos desarrollando sus contenidos, identidad y canales digitales. Compartiremos nuevas vías de acceso cuando estén disponibles.</p>
      <a className="content-link" href={projectLinks.eterisTuneIn} target="_blank" rel="noopener noreferrer">Escuchar Eteris Radio en TuneIn <ArrowUpRight size={15}/></a>
      <Link className="content-link" href="/#ecosistema">Volver al ecosistema</Link>
    </section>
  </PageShell>
}