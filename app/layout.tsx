import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Lumina Horizon | Tecnología, innovación y desarrollo",
    template: "%s | Lumina Horizon",
  },
  description:
    "Lumina Horizon es una iniciativa tecnológica enfocada en innovación, desarrollo digital y accesibilidad. Conoce nuestro ecosistema y proyectos.",
  applicationName: "Lumina Horizon",
  metadataBase: new URL("https://github.com/Socoda332/Lumina_Horizon"),
  openGraph: {
    title: "Lumina Horizon",
    description: "Tecnología que transforma. Futuro para todos.",
    type: "website",
    locale: "es_CO",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
