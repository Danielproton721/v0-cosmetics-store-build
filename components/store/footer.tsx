"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Mail } from "lucide-react"

interface FooterAccordionProps {
  title: string
  children: React.ReactNode
}

function FooterAccordion({ title, children }: FooterAccordionProps) {
  const [open, setOpen] = useState(true)

  return (
    <div className="border-b border-[#e5e5e5]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-4"
      >
        <span className="text-sm font-medium text-[#1a1a1a]">{title}</span>
        <ChevronDown
          size={18}
          className={`text-[#737373] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
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
    <footer className="bg-[#ffffff] border-t border-[#e5e5e5] pb-24">

      {/* Sessão 1 — Sobre a Empresa */}
      <FooterAccordion title="Confortebem">
        <p className="text-sm text-[#737373] leading-relaxed">
          Enxovais, conforto e bem-estar para o lar. Curadoria premium em cortinas, jogos de cama,
          tapetes e almofadas com foco em qualidade e requinte.
        </p>
      </FooterAccordion>

      {/* Sessão 2 — Dados Fiscais (Compliance Google Ads) */}
      <FooterAccordion title="EMPRESA">
        <p className="text-sm text-[#737373] leading-relaxed">
          Marca operada por Voil Atelie Comercio de Enxovais e Decoracao LTDA
        </p>
        <p className="text-sm text-[#737373]">
          <span className="font-medium text-[#1a1a1a]">CNPJ:</span> 64.980.979/0001-94
        </p>
        <p className="text-sm text-[#737373]">
          <span className="font-medium text-[#1a1a1a]">Endereço:</span> Garça — São Paulo — Brasil
        </p>
      </FooterAccordion>

      {/* Sessão 3 — Institucional */}
      <FooterAccordion title="INSTITUCIONAL">
        <Link href="/politica-de-privacidade" className="text-sm text-[#737373] hover:text-[#1a1a1a] transition-colors">
          Política de Privacidade
        </Link>
        <Link href="/termos-de-uso" className="text-sm text-[#737373] hover:text-[#1a1a1a] transition-colors">
          Termos de Uso
        </Link>
        <Link href="/contato-e-catalogo" className="text-sm text-[#737373] hover:text-[#1a1a1a] transition-colors">
          Contato e Catálogo
        </Link>
      </FooterAccordion>

      {/* Copyright — Bottom bar */}
      <div className="px-4 pt-6 pb-6 border-t border-[#e5e5e5] flex flex-col items-center gap-1 text-center mt-4">
        <p className="text-[11px] text-[#737373] uppercase tracking-wide">
          © 2026 CONFORTEBEM. TODOS OS DIREITOS RESERVADOS.
        </p>
        <p className="text-[11px] text-[#b0b0b0] uppercase tracking-wide">
          DESIGN DE INTERIORES &amp; BEM-ESTAR
        </p>
      </div>
    </footer>
  )
}
