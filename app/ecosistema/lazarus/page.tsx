import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PageIntro, PageShell } from "@/components/site-shell"
import { projectLinks } from "@/app/project-links"

export default function LazarusPage(){
  return <PageShell>
    <PageIntro number="02.2" eyebrow="SUBMARCA · SOFTWARE Y ACCESIBILIDAD" title={<>Lazarus<span>.</span></>} lead="Tecnología que explora nuevas posibilidades para la orientación y la movilidad asistida."/>
    <section className="section-wrap content-block">
      <span className="state-note">EN DESARROLLO</span>
      <h2>Diseñar pensando en la autonomía.</h2>
      <p>Lazarus es una aplicación en desarrollo que busca explorar el uso de inteligencia artificial para apoyar la orientación y movilidad de personas con discapacidad visual.</p>
      <p>El proyecto se encuentra en desarrollo. No debe considerarse un sustituto del bastón, del perro guía ni de otras herramientas de movilidad. Antes de comunicar funciones concretas, estas deberán ser implementadas, evaluadas y probadas en condiciones reales, con especial atención a la seguridad y la accesibilidad.</p>
      <div className="store-links">
        {projectLinks.lazarusGooglePlay
          ? <a className="button button-outline" href={projectLinks.lazarusGooglePlay} target="_blank" rel="noopener noreferrer">Google Play <ArrowUpRight size={15}/></a>
          : <span className="store-status">Google Play · Próximamente</span>}
        {projectLinks.lazarusAppStore
          ? <a className="button button-outline" href={projectLinks.lazarusAppStore} target="_blank" rel="noopener noreferrer">App Store <ArrowUpRight size={15}/></a>
          : <span className="store-status">App Store · Próximamente</span>}
      </div>
      <Link className="content-link" href="/#ecosistema">Volver al ecosistema</Link>
    </section>
  </PageShell>
}