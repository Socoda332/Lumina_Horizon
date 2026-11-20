import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PageIntro, PageShell } from "@/components/site-shell"

const projects = [
  {
    n: "01",
    name: "Eteris Radio",
    type: "Radio digital",
    desc: "Una iniciativa de radio 100% digital, concebida para conectar a las personas con contenidos y experiencias sonoras.",
    status: "Proyecto en desarrollo",
    href: "/ecosistema/eteris-radio",
  },
  {
    n: "02",
    name: "Lazarus",
    type: "Software y accesibilidad",
    desc: "Una iniciativa de software que explora herramientas de inteligencia artificial y accesibilidad, incluyendo apoyo a la orientación y movilidad de personas con discapacidad visual.",
    status: "En desarrollo",
    href: "/ecosistema/lazarus",
  },
]

export default function EcosistemaPage() {
  return (
    <PageShell>
      <PageIntro
        number="02"
        eyebrow="NUESTRO ECOSISTEMA"
        title={<>Ideas que toman <span>su propio camino.</span></>}
        lead="Lumina Horizon impulsa iniciativas con identidades y enfoques propios, conectadas por una misma visión de innovación, tecnología y desarrollo."
      />
      <section className="section-wrap content-block">
        <div className="content-grid">
          {projects.map((project) => (
            <article className="content-tile" key={project.n}>
              <span className="tile-index">{project.n} / {project.type.toUpperCase()}</span>
              <h3>{project.name}</h3>
              <p>{project.desc}</p>
              <span className="state-note">{project.status}</span>
              <br />
              <Link className="content-link" href={project.href}>
                Explorar proyecto <ArrowUpRight size={15} />
              </Link>
            </article>
          ))}
        </div>
        <p className="contact-note">
          Eteris Radio y Lazarus son submarcas respaldadas por Lumina Horizon. Sus descripciones
          presentan su enfoque y estado actual; no implican disponibilidad comercial ni funcionalidades
          terminadas.
        </p>
        <section className="content-tile media-division">
          <span className="tile-index">DIVISIÓN / CONTENIDO Y COMUNICACIÓN</span>
          <h3>Lumina Horizon Media</h3>
          <p>
            División interna dedicada a la creación de contenido, comunicación y divulgación sobre
            tecnología, innovación, ciencia y cultura digital. También acompaña la documentación y
            difusión de las iniciativas del ecosistema.
          </p>
          <span className="state-note">División de Lumina Horizon</span>
          <br />
          <Link className="content-link" href="/media">
            Conocer Media <ArrowUpRight size={15} />
          </Link>
        </section>
      </section>
    </PageShell>
  )
}
