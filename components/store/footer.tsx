"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Mail } from "lucide-react"
import { ReputationSeals } from "./reputation-seals"

const PAYMENT_ICONS = [
  { alt: "Amex", src: "https://icons.yampi.me/svg/card-amex.svg" },
  { alt: "Visa", src: "https://icons.yampi.me/svg/card-visa.svg" },
  { alt: "Diners", src: "https://icons.yampi.me/svg/card-diners.svg" },
  { alt: "Mastercard", src: "https://icons.yampi.me/svg/card-mastercard.svg" },
  { alt: "Discover", src: "https://icons.yampi.me/svg/card-discover.svg" },
  { alt: "Aura", src: "https://icons.yampi.me/svg/card-aura.svg" },
  { alt: "Elo", src: "https://icons.yampi.me/svg/card-elo.svg" },
  { alt: "Hiper", src: "https://icons.yampi.me/svg/card-hiper.svg" },
  { alt: "Pix", src: "https://icons.yampi.me/svg/card-pix.svg" },
]

interface FooterAccordionProps {
  title: string
  children: React.ReactNode
}

function FooterAccordion({ title, children }: FooterAccordionProps) {
  const [open, setOpen] = useState(true)

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-4"
      >
        <span className="text-sm font-medium text-white">{title}</span>
        <ChevronDown
          size={18}
          className={`text-white/50 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-4 pb-4 flex flex-col gap-2">
          {children}
        </div>
      )}
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pb-24">

      {/* Sessão 1 — Sobre a Empresa */}
      <FooterAccordion title="Fio Nobre">
        <p className="text-sm text-white/60 leading-relaxed">
          Enxovais, conforto e bem-estar para o lar. Curadoria premium em cortinas, jogos de cama,
          tapetes e almofadas com foco em qualidade e requinte.
        </p>
      </FooterAccordion>

      {/* Sessão 2 — Dados Fiscais */}
      <FooterAccordion title="EMPRESA">
        <p className="text-sm text-white/60 leading-relaxed">
          Marca operada por C ALVES FRANCA LTDA
        </p>
        <p className="text-sm text-white/60">
          <span className="font-medium text-white">CNPJ:</span> 64.846.844/0001-30
        </p>
        <p className="text-sm text-white/60">
          <span className="font-medium text-white">Endereço:</span> Rua Eduardo Gomes, 428 — Jardim Tropical — Capitão Poço, PA — CEP 68.650-000
        </p>
      </FooterAccordion>

      {/* Sessão 3 — Institucional */}
      <FooterAccordion title="INSTITUCIONAL">
        <Link href="/politica-de-privacidade" className="text-sm text-white/60 hover:text-white transition-colors">
          Política de Privacidade
        </Link>
        <Link href="/termos-de-uso" className="text-sm text-white/60 hover:text-white transition-colors">
          Termos de Uso
        </Link>
        <Link href="/trocas-e-devolucoes" className="text-sm text-white/60 hover:text-white transition-colors">
          Trocas e Devoluções
        </Link>
        <Link href="/contato-e-catalogo" className="text-sm text-white/60 hover:text-white transition-colors">
          Contato e Catálogo
        </Link>
        <a
          href="mailto:suporte@fionobres.shop"
          className="text-sm text-white/60 hover:text-white transition-colors inline-flex items-center gap-2"
        >
          <Mail size={14} />
          suporte@fionobres.shop
        </a>
      </FooterAccordion>

      {/* Sessão 4 — Formas de pagamento */}
      <FooterAccordion title="FORMAS DE PAGAMENTO">
        <p className="text-xs text-white/60 leading-relaxed">
          Aceitamos Pix e cartões de crédito das principais bandeiras.
        </p>
        <div className="flex flex-wrap items-center gap-1.5 mt-1">
          {PAYMENT_ICONS.map((icon) => (
            <img
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              width={32}
              height={22}
              loading="lazy"
              className="rounded bg-white"
            />
          ))}
        </div>
      </FooterAccordion>

      {/* Selos de reputação */}
      <div className="border-t border-white/10 px-4 py-6">
        <ReputationSeals />
      </div>

      {/* Copyright — Bottom bar */}
      <div className="px-4 pt-6 pb-6 border-t border-white/10 flex flex-col items-center gap-1 text-center mt-4">
        <p className="text-[11px] text-white/50 uppercase tracking-wide">
          © 2026 FIO NOBRE. TODOS OS DIREITOS RESERVADOS.
        </p>
        <p className="text-[11px] text-white/30 uppercase tracking-wide">
          DESIGN DE INTERIORES &amp; BEM-ESTAR
        </p>
      </div>
    </footer>
  )
}
