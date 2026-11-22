import { ArrowUpRight } from "lucide-react"
import { PageIntro, PageShell } from "@/components/site-shell"
import { mediaLinks } from "@/app/media-links"

const editorialAreas = [
  { number: "01", title: "Actualidad", description: "Acontecimientos y noticias relevantes del mundo de la tecnología, la ciencia y la innovación." },
  { number: "02", title: "Inteligencia artificial", description: "Avances, herramientas, aplicaciones y debates sobre el desarrollo de la IA." },
  { number: "03", title: "Ciencia e investigación", description: "Descubrimientos, estudios y conocimiento que ayudan a comprender nuestro entorno." },
  { number: "04", title: "Industria y empresas", description: "Organizaciones, productos, estrategias y movimientos del sector tecnológico." },
  { number: "05", title: "Innovación y desarrollo", description: "Software, nuevas soluciones, emprendimientos y tecnologías emergentes." },
  { number: "06", title: "Cultura digital y accesibilidad", description: "El impacto de la tecnología en la sociedad y las oportunidades para hacerla más inclusiva." },
]

const coverage = [
  { title: "Mundo", description: "Seguimiento de avances y acontecimientos internacionales." },
  { title: "Latinoamérica", description: "Evolución del ecosistema tecnológico regional." },
  { title: "Colombia", description: "Cobertura nacional que crecerá progresivamente junto con nuestra capacidad editorial." },
]

const channels = [
  { title: "YouTube", description: "Videos, reportajes y formatos audiovisuales.", href: mediaLinks.youtube },
  { title: "Instagram", description: "Piezas breves, novedades y contenido visual.", href: mediaLinks.instagram },
  { title: "Facebook", description: "Publicaciones y distribución de nuestros contenidos.", href: mediaLinks.facebook },
]

function EditorialAreas() {
  return <section className="section-wrap media-content-section"><div className="section-kicker">01 / QUÉ EXPLORAMOS</div><h2>Temas para comprender <span>un mundo en transformación.</span></h2><div className="media-area-grid">{editorialAreas.map((area) => <article className="media-area-card" key={area.number}><span>{area.number}</span><h3>{area.title}</h3><p>{area.description}</p></article>)}</div></section>
}

function Coverage() {
  return <section className="media-coverage"><div className="section-wrap"><div className="section-kicker">02 / COBERTURA</div><h2>Una mirada global, <span>con raíces en Colombia.</span></h2><div className="media-coverage-grid">{coverage.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div></section>
}

function EditorialPrinciples() {
  return <section className="section-wrap media-principles"><div className="section-kicker">03 / CÓMO INFORMAMOS</div><h2>Periodismo con rigor, <span>sin propaganda.</span></h2><p className="media-principles-lead">Lumina Horizon Media busca informar con independencia y responsabilidad. No adopta una postura partidista ni promueve intereses políticos. Los asuntos públicos se tratarán cuando sean relevantes, con contexto, contraste y fuentes identificables.</p><ul><li>Verificamos la información y contrastamos fuentes.</li><li>Diferenciamos noticias, análisis, opinión y contenido patrocinado.</li><li>Atribuimos declaraciones, datos e imágenes a sus fuentes.</li><li>Reconocemos y corregimos errores de manera transparente.</li><li>Analizamos empresas y competidores con criterios consistentes, reconociendo avances y señalando limitaciones.</li></ul></section>
}

function DistributionChannels() {
  return <section className="media-channels"><div className="section-wrap"><div className="section-kicker">04 / DÓNDE ENCONTRAR EL CONTENIDO</div><h2>La conversación continúa <span>en nuestros canales.</span></h2><p className="media-channels-intro">La web reúne la información institucional de Media. Los videos y publicaciones audiovisuales se distribuirán principalmente en nuestras plataformas sociales.</p><div className="media-channel-grid">{channels.map((channel) => <a className="media-channel-card" href={channel.href} target="_blank" rel="noreferrer" key={channel.title}><span><strong>{channel.title}</strong><ArrowUpRight size={18}/></span><p>{channel.description}</p><small>Visitar canal</small></a>)}</div><p className="media-provisional-note">Estos enlaces corresponden a canales provisionales. La identidad y los perfiles institucionales de Lumina Horizon Media podrán actualizarse más adelante.</p></div></section>
}

export default function MediaPage() {
  return <PageShell><PageIntro number="04" eyebrow="LUMINA HORIZON MEDIA" title={<>Información para comprender <span>lo que está cambiando.</span></>} lead="Una división editorial de Lumina Horizon dedicada a explorar la actualidad, la tecnología, la ciencia y la innovación desde una perspectiva global, con una cobertura de Colombia que crecerá progresivamente."/><EditorialAreas/><Coverage/><EditorialPrinciples/><DistributionChannels/><section className="section-wrap media-about"><span className="state-note">DIVISIÓN EN DESARROLLO</span><p>Lumina Horizon Media forma parte del ecosistema de Lumina Horizon. Su propósito es informar, explicar y explorar lo que el mundo desarrolla, así como compartir los aprendizajes y avances de nuestros propios proyectos. La cobertura y los formatos se ampliarán de manera responsable, conforme exista contenido verificado y capacidad para mantenerlos.</p></section></PageShell>
}
