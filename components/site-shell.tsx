import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const links = [
  ["Nosotros", "/nosotros"],
  ["Ecosistema", "/ecosistema"],
  ["Innovación", "/innovacion"],
  ["Media", "/media"],
]

export function SiteHeader() {
  return <header className="site-header"><Link className="brand" href="/"><Image src="/Lumina_horizon.png" alt="Lumina Horizon" width={46} height={46}/><span className="brand-name">LUMINA <b>HORIZON</b></span></Link><nav className="navigation" aria-label="Navegación principal">{links.map(([name,href])=><Link key={href} href={href}>{name}</Link>)}<Link className="nav-contact" href="/contacto">Conversemos <ArrowUpRight size={15}/></Link></nav></header>
}

export function SiteFooter() {
  return <footer className="site-footer"><Link className="brand footer-brand" href="/"><Image src="/Lumina_horizon.png" alt="" width={38} height={38}/><span className="brand-name">LUMINA <b>HORIZON</b></span></Link><p>Tecnología que transforma. Futuro para todos.</p><span className="footer-copy">© {new Date().getFullYear()} Lumina Horizon.</span></footer>
}

export function PageShell({children}:{children:React.ReactNode}) {
  return <><SiteHeader/><main className="inner-page">{children}</main><SiteFooter/></>
}

export function PageIntro({number,eyebrow,title,lead}:{number:string;eyebrow:string;title:React.ReactNode;lead:string}) {
  return <section className="inner-hero section-wrap"><div className="section-kicker">{number} / {eyebrow}</div><h1>{title}</h1><p>{lead}</p></section>
}
