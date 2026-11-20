import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"

export function SiteFooter() {
  return <footer className="site-footer">
    <Link className="brand footer-brand" href="/"><Image src="/Lumina_horizon.png" alt="" width={38} height={38}/><span className="brand-name">LUMINA <b>HORIZON</b></span></Link>
    <p>Tecnología que transforma. Futuro para todos.</p>
    <span className="footer-copy">© {new Date().getFullYear()} Lumina Horizon.</span>
  </footer>
}

export function PageShell({children}:{children:React.ReactNode}) {
  return <><SiteHeader/><main className="inner-page">{children}</main><SiteFooter/></>
}

export function PageIntro({number,eyebrow,title,lead}:{number:string;eyebrow:string;title:React.ReactNode;lead:string}) {
  return <section className="inner-hero section-wrap"><div className="section-kicker">{number} / {eyebrow}</div><h1>{title}</h1><p>{lead}</p></section>
}
