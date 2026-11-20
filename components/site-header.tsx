"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"

const links = [
  ["Nosotros", "/nosotros"],
  ["Ecosistema", "/ecosistema"],
  ["Innovación", "/innovacion"],
  ["Media", "/media"],
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <Link className="brand" href="/" aria-label="Lumina Horizon, inicio" onClick={() => setOpen(false)}>
      <Image src="/Lumina_horizon.png" alt="" width={46} height={46} priority />
      <span className="brand-name">LUMINA <b>HORIZON</b></span>
    </Link>
    <button className="menu-toggle" type="button" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>
      {open ? <X size={22} /> : <Menu size={22} />}
    </button>
    <nav id="primary-navigation" className={open ? "navigation navigation-open" : "navigation"} aria-label="Navegación principal">
      {links.map(([name, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{name}</Link>)}
      <Link className="nav-contact" href="/contacto" onClick={() => setOpen(false)}>Conversemos <ArrowUpRight size={15}/></Link>
    </nav>
  </header>
}
