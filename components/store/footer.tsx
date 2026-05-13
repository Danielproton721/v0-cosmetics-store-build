"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Mail } from "lucide-react"

interface FooterAccordionProps {
  title: string
  children: React.ReactNode
}

function FooterAccordion({ title, children }: FooterAccordionProps) {
  const [open, setOpen] = useState(false)

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
      <FooterAccordion title="Loja">
        <Link href="/produtos" className="text-sm text-[#737373] hover:text-[#1a1a1a] transition-colors">
          Todos os Produtos
        </Link>
        <Link href="/colecoes/toalhas" className="text-sm text-[#737373] hover:text-[#1a1a1a] transition-colors">
          Toalhas
        </Link>
        <Link href="/colecoes/colchas-e-cobre-leito" className="text-sm text-[#737373] hover:text-[#1a1a1a] transition-colors">
          Colchas
        </Link>
        <Link href="/colecoes/edredons" className="text-sm text-[#737373] hover:text-[#1a1a1a] transition-colors">
          Edredons
        </Link>
      </FooterAccordion>

      <FooterAccordion title="A Loja">
        <Link href="/sobre-nos" className="text-sm text-[#737373] hover:text-[#1a1a1a] transition-colors">
          Sobre Nos
        </Link>
        <Link href="/nossa-historia" className="text-sm text-[#737373] hover:text-[#1a1a1a] transition-colors">
          Nossa Historia
        </Link>
        <Link href="/politica-de-privacidade" className="text-sm text-[#737373] hover:text-[#1a1a1a] transition-colors">
          Politica de Privacidade
        </Link>
      </FooterAccordion>

      <FooterAccordion title="Ajuda">
        <Link href="/faq" className="text-sm text-[#737373] hover:text-[#1a1a1a] transition-colors">
          FAQ
        </Link>
        <Link href="/trocas-e-devolucoes" className="text-sm text-[#737373] hover:text-[#1a1a1a] transition-colors">
          Trocas e Devolucoes
        </Link>
        <Link href="/rastreio-de-pedido" className="text-sm text-[#737373] hover:text-[#1a1a1a] transition-colors">
          Rastreio de Pedido
        </Link>
      </FooterAccordion>

      <FooterAccordion title="Contato">
        <div className="flex items-center gap-2 text-sm text-[#737373]">
          <Mail size={14} className="shrink-0" />
          <a href="mailto:contato@confortbem.com.br" className="hover:text-[#1a1a1a] transition-colors">
            contato@confortbem.com.br
          </a>
        </div>
      </FooterAccordion>

      {/* Trust Badges & Payment Methods */}
      <div className="flex flex-col items-center justify-center gap-5 px-4 pt-4 pb-8 border-t border-[#e5e5e5]">
        {/* Security Seals */}
        <div className="flex items-center justify-center gap-4 w-full">
          <a
            id="link-reclame-aqui"
            href="https://www.reclameaqui.com.br/empresa/casa-hoenning/?utm_source=referral&utm_medium=embbed&utm_campaign=ra_verificada&utm_term=vertical"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img src="/images/reclame-aqui-oficial.webp" alt="Reclame Aqui" className="h-[42px] w-[150px] object-contain" />
          </a>
          <a
            id="link-google-safe"
            href="https://transparencyreport.google.com/safe-browsing/search?url=https:%2F%2Fbellaprimavera.com.br%2F&hl=pt_BR"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img src="/images/google-safe-oficial.png" alt="Google Safe" className="h-[42px] w-[150px] object-contain" />
          </a>
        </div>

        {/* Payment Icons */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-[280px]">
          <img src="https://icons.yampi.me/svg/card-amex.svg" alt="Amex" width="35" height="24" />
          <img src="https://icons.yampi.me/svg/card-visa.svg" alt="Visa" width="35" height="24" />
          <img src="https://icons.yampi.me/svg/card-diners.svg" alt="Diners" width="35" height="24" />
          <img src="https://icons.yampi.me/svg/card-mastercard.svg" alt="Mastercard" width="35" height="24" />
          <img src="https://icons.yampi.me/svg/card-discover.svg" alt="Discover" width="35" height="24" />
          <img src="https://icons.yampi.me/svg/card-aura.svg" alt="Aura" width="35" height="24" />
          <img src="https://icons.yampi.me/svg/card-elo.svg" alt="Elo" width="35" height="24" />
          <img src="https://icons.yampi.me/svg/card-hiper.svg" alt="Hiper" width="35" height="24" />
          <img src="https://icons.yampi.me/svg/card-pix.svg" alt="Pix" width="35" height="24" />
        </div>
      </div>

      {/* Copyright */}
      <div className="px-4 pt-2 pb-6 text-center">
        <p className="text-[11px] text-[#737373]">
          {"2025, ConfortBem. Todos Os Direitos Reservados."}
        </p>
      </div>
    </footer>
  )
}
