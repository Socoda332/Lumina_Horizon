"use client"

import Image from "next/image"
import { useState } from "react"
import { ArrowDownRight, ArrowRight, ArrowUpRight, Eye, Menu, Radio, ShieldCheck, Sparkles, X } from "lucide-react"

const navigation = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Ecosistema", href: "#ecosistema" },
  { label: "Innovación", href: "#innovacion" },
  { label: "Media", href: "#media" },
]

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Lumina Horizon, inicio">
          <Image src="/Lumina_horizon.png" alt="Símbolo de Lumina Horizon" width={48} height={48} priority />
          <span className="brand-name">LUMINA <b>HORIZON</b></span>
        </a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? "navigation navigation-open" : "navigation"} aria-label="Navegación principal">
          {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
          <a className="nav-contact" href="#contacto" onClick={() => setMenuOpen(false)}>Conversemos <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow"><span className="eyebrow-line" /> TECNOLOGÍA · INNOVACIÓN · DESARROLLO</p>
          <h1>El futuro no se espera.<br /><span>Se construye.</span></h1>
          <p className="hero-copy">Somos Lumina Horizon. Exploramos ideas y desarrollamos iniciativas tecnológicas con una convicción: la innovación debe abrir posibilidades para las personas.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#ecosistema">Conoce nuestro ecosistema <ArrowUpRight size={17} /></a>
            <a className="text-link" href="#nosotros">Descubre quiénes somos <ArrowDownRight size={16} /></a>
          </div>
        </div>
        <div className="hero-index"><span>01</span><i /> UNA VISIÓN EN CONSTRUCCIÓN</div>
        <a className="scroll-cue" href="#nosotros" aria-label="Desplazarse a la siguiente sección"><span /> SCROLL PARA EXPLORAR</a>
      </section>

      <section className="intro-section section-wrap" id="nosotros">
        <div className="section-kicker">01 / QUIÉNES SOMOS</div>
        <div className="intro-layout">
          <h2>La tecnología tiene sentido cuando <span>mejora lo que nos rodea.</span></h2>
          <div className="intro-text">
            <p>Lumina Horizon es una iniciativa tecnológica en construcción, con enfoque en innovación, desarrollo digital y accesibilidad. Nuestro punto de partida es sencillo: observar necesidades reales, explorar soluciones y convertir ideas en proyectos.</p>
            <a className="inline-link" href="#innovacion">Nuestra manera de pensar <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="principles">
          <article><span className="principle-number">01</span><Sparkles size={21} /><h3>Innovación</h3><p>Cuestionar lo establecido y explorar nuevas posibilidades.</p></article>
          <article><span className="principle-number">02</span><ArrowUpRight size={21} /><h3>Desarrollo</h3><p>Transformar ideas en experiencias y soluciones útiles.</p></article>
          <article><span className="principle-number">03</span><Eye size={21} /><h3>Inclusión</h3><p>Considerar a las personas y sus distintas formas de interactuar con el mundo.</p></article>
          <article><span className="principle-number">04</span><ShieldCheck size={21} /><h3>Visión de futuro</h3><p>Anticipar posibilidades y construir con una perspectiva de largo plazo.</p></article>
        </div>
      </section>

      <section className="ecosystem-section" id="ecosistema">
        <div className="section-wrap">
          <div className="section-heading">
            <div><div className="section-kicker">02 / NUESTRO ECOSISTEMA</div><h2>Ideas que toman <span>su propio camino.</span></h2></div>
            <p>Proyectos con identidad propia, conectados por una misma visión de innovación y propósito.</p>
          </div>
          <div className="project-grid">
            <article className="project-card project-eteris">
              <div className="project-topline"><span>SUBMARCA / MEDIOS DIGITALES</span><Radio size={20} /></div>
              <div className="project-art eteris-art" aria-hidden="true"><div className="radio-orbit orbit-a" /><div className="radio-orbit orbit-b" /><div className="radio-core"><Radio size={42} strokeWidth={1.1} /></div></div>
              <div className="project-info"><div><h3>Eteris <span>Radio</span></h3><p>Una nueva forma de conectar con el mundo.</p></div><span className="status status-planned">Proyecto en desarrollo</span></div>
              <a className="project-link" href="/ecosistema/eteris-radio" aria-label="Conocer el proyecto Eteris Radio">Conocer Eteris Radio <ArrowUpRight size={17} /></a>
            </article>
            <article className="project-card project-lazarus">
              <div className="project-topline"><span>SUBMARCA / SOFTWARE Y ACCESIBILIDAD</span><Eye size={20} /></div>
              <div className="project-art lazarus-art" aria-hidden="true"><div className="lazarus-rings" /><div className="lazarus-core"><Eye size={42} strokeWidth={1.1} /></div><span className="scan-line" /></div>
              <div className="project-info"><div><h3>Lazarus</h3><p>Tecnología de asistencia para explorar el entorno con mayor información.</p></div><span className="status status-progress">En desarrollo</span></div>
              <a className="project-link" href="/ecosistema/lazarus" aria-label="Consultar el estado del proyecto Lazarus">Conocer Lazarus <ArrowUpRight size={17} /></a>
            </article>
          </div>
          <p className="project-note">Las descripciones reflejan el enfoque de los proyectos, no una disponibilidad comercial ni funcionalidades ya implementadas.</p>
        </div>
      </section>

      <section className="innovation-section section-wrap" id="innovacion">
        <div className="section-kicker">03 / NUESTRA PERSPECTIVA</div>
        <div className="innovation-layout">
          <h2>La innovación empieza por <span>hacer mejores preguntas.</span></h2>
          <div className="innovation-copy"><p>Creemos en una tecnología pensada desde las personas. Por eso nos interesan especialmente la inteligencia artificial, el software, la accesibilidad y las nuevas formas de crear y compartir conocimiento.</p><p>No presentamos promesas como resultados: cada iniciativa debe demostrar su valor a través del trabajo, la experimentación y la mejora continua.</p></div>
        </div>
        <div className="focus-strip"><span>ÁREAS DE INTERÉS</span><b>Inteligencia artificial</b><i /><b>Software</b><i /><b>Accesibilidad</b><i /><b>Cultura digital</b></div>
      </section>

      <section className="media-section" id="media">
        <div className="section-wrap media-layout">
          <div><div className="section-kicker">04 / LUMINA HORIZON MEDIA</div><p className="media-label">DIVISIÓN DE CONTENIDO</p><h2>Ideas, tecnología<br />y conversaciones<br /><span>que inspiran.</span></h2></div>
          <div className="media-description"><p>Lumina Horizon Media es la división dedicada a explorar y comunicar temas de tecnología, ciencia, innovación, cultura digital y accesibilidad a través de formatos audiovisuales y editoriales.</p><p>Un espacio para aprender, investigar y compartir perspectivas. Su contenido se irá incorporando a medida que cada publicación esté lista.</p><a className="button button-outline" href="#contacto">Conoce nuestra visión <ArrowUpRight size={17} /></a></div>
          <div className="media-watermark" aria-hidden="true">LH<span>.</span></div>
        </div>
      </section>

      <section className="contact-section section-wrap" id="contacto">
        <div className="section-kicker">05 / SIGUIENTE HORIZONTE</div>
        <div className="contact-panel"><div><p className="eyebrow">CONSTRUYAMOS CON PROPÓSITO</p><h2>Las buenas ideas<br /><span>merecen avanzar.</span></h2></div><div className="contact-side"><p>Estamos dando forma a Lumina Horizon y a sus proyectos. Si quieres conocer más sobre esta iniciativa, sigue nuestros próximos avances.</p><a className="button button-primary" href="https://github.com/Socoda332/Lumina_Horizon" target="_blank" rel="noreferrer">Ver proyecto en GitHub <ArrowUpRight size={17} /></a></div></div>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#inicio"><Image src="/Lumina_horizon.png" alt="" width={38} height={38} /><span className="brand-name">LUMINA <b>HORIZON</b></span></a>
        <p>Tecnología que transforma. Futuro para todos.</p>
        <nav className="footer-legal" aria-label="Enlaces legales"><a href="/privacidad">Privacidad y datos</a><a href="/cookies">Política de cookies</a></nav>
        <span className="footer-copy">© {new Date().getFullYear()} Lumina Horizon. Una visión en construcción.</span>
      </footer>
    </main>
  )
}
