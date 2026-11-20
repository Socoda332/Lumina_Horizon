import { PageIntro, PageShell } from "@/components/site-shell"

const pillars = [
  ["Innovación", "Explorar nuevas ideas y enfoques tecnológicos con criterio y apertura al cambio."],
  ["Desarrollo", "Convertir conceptos en proyectos, herramientas y experiencias que aporten valor."],
  ["Inclusión", "Considerar distintas capacidades, contextos y formas de interactuar con la tecnología."],
  ["Visión de futuro", "Anticipar posibilidades y construir con una perspectiva responsable y de largo plazo."],
]

export default function NosotrosPage() {
  return (
    <PageShell>
      <PageIntro
        number="01"
        eyebrow="QUIÉNES SOMOS"
        title={<>La tecnología tiene sentido cuando <span>mejora lo que nos rodea.</span></>}
        lead="Lumina Horizon es una iniciativa tecnológica en construcción, enfocada en innovación, desarrollo digital y accesibilidad. Nacemos de la convicción de que la tecnología debe ampliar posibilidades y responder a necesidades reales."
      />
      <section className="section-wrap content-block">
        <h2>Nuestra manera de pensar</h2>
        <p>
          Exploramos ideas, desarrollamos iniciativas digitales y trabajamos en soluciones que conectan
          tecnología, creatividad y accesibilidad. Nuestro camino comienza observando necesidades reales
          y convirtiendo ideas en proyectos con propósito.
        </p>
        <p>
          Trabajamos desde la curiosidad, el aprendizaje y la responsabilidad. Nos interesa comprender
          los problemas antes de proponer soluciones, experimentar con nuevas herramientas y comunicar
          con honestidad lo que estamos construyendo.
        </p>
        <div className="content-grid">
          {pillars.map(([title, description], index) => (
            <article className="content-tile" key={title}>
              <span className="tile-index">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
