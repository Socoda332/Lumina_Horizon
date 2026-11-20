import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Lumina Horizon | Tecnología, innovación y desarrollo",
    template: "%s | Lumina Horizon",
  },
  description: "Lumina Horizon es una iniciativa tecnológica en construcción, enfocada en innovación, desarrollo digital y accesibilidad.",
  applicationName: "Lumina Horizon",
  openGraph: {
    title: "Lumina Horizon",
    description: "Tecnología que transforma. Futuro para todos.",
    type: "website",
    locale: "es_CO",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>
}
