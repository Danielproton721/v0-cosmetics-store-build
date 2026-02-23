"use client"

import { useState } from "react"
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
        <a href="/" className="text-sm text-[#737373] hover:text-[#1a1a1a] transition-colors">
          Todos os Produtos
        </a>
        <a href="#" className="text-sm text-[#737373] hover:text-[#1a1a1a] transition-colors">
          Fortalecimento
        </a>
        <a href="#" className="text-sm text-[#737373] hover:text-[#1a1a1a] transition-colors">
          Antiqueda
        </a>
        <a href="#" className="text-sm text-[#737373] hover:text-[#1a1a1a] transition-colors">
          Tonicos
        </a>
      </FooterAccordion>

      <FooterAccordion title="A Gota">
        <a href="#" className="text-sm text-[#737373] hover:text-[#1a1a1a] transition-colors">
          Sobre Nos
        </a>
        <a href="#" className="text-sm text-[#737373] hover:text-[#1a1a1a] transition-colors">
          Nossa Historia
        </a>
        <a href="#" className="text-sm text-[#737373] hover:text-[#1a1a1a] transition-colors">
          Politica de Privacidade
        </a>
      </FooterAccordion>

      <FooterAccordion title="Ajuda">
        <a href="#" className="text-sm text-[#737373] hover:text-[#1a1a1a] transition-colors">
          FAQ
        </a>
        <a href="#" className="text-sm text-[#737373] hover:text-[#1a1a1a] transition-colors">
          Trocas e Devolucoes
        </a>
        <a href="#" className="text-sm text-[#737373] hover:text-[#1a1a1a] transition-colors">
          Rastreio de Pedido
        </a>
      </FooterAccordion>

      <FooterAccordion title="Contato">
        <div className="flex items-center gap-2 text-sm text-[#737373]">
          <Mail size={14} className="shrink-0" />
          <a href="mailto:sac@gotadourada.com.br" className="hover:text-[#1a1a1a] transition-colors">
            sac@gotadourada.com.br
          </a>
        </div>
      </FooterAccordion>

      {/* Copyright */}
      <div className="px-4 pt-6 pb-4 text-center">
        <p className="text-[11px] text-[#737373]">
          {"2025, Gota Dourada. Todos Os Direitos Reservados."}
        </p>
      </div>

      {/* Payment methods */}
      <div className="flex items-center justify-center gap-3 px-4 pb-4">
        {/* Visa */}
        <div className="w-10 h-6 bg-[#f5f5f5] rounded flex items-center justify-center">
          <svg viewBox="0 0 48 32" className="w-8 h-5">
            <rect width="48" height="32" rx="4" fill="#1A1F71" />
            <text x="24" y="20" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="sans-serif">VISA</text>
          </svg>
        </div>
        {/* Mastercard */}
        <div className="w-10 h-6 bg-[#f5f5f5] rounded flex items-center justify-center">
          <svg viewBox="0 0 48 32" className="w-8 h-5">
            <rect width="48" height="32" rx="4" fill="#252525" />
            <circle cx="19" cy="16" r="8" fill="#EB001B" />
            <circle cx="29" cy="16" r="8" fill="#F79E1B" />
          </svg>
        </div>
        {/* Amex */}
        <div className="w-10 h-6 bg-[#f5f5f5] rounded flex items-center justify-center">
          <svg viewBox="0 0 48 32" className="w-8 h-5">
            <rect width="48" height="32" rx="4" fill="#006FCF" />
            <text x="24" y="18" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="sans-serif">AMEX</text>
          </svg>
        </div>
        {/* Pix */}
        <div className="w-10 h-6 bg-[#f5f5f5] rounded flex items-center justify-center">
          <svg viewBox="0 0 48 32" className="w-8 h-5">
            <rect width="48" height="32" rx="4" fill="#32BCAD" />
            <text x="24" y="19" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">PIX</text>
          </svg>
        </div>
        {/* Boleto */}
        <div className="w-10 h-6 bg-[#f5f5f5] rounded flex items-center justify-center">
          <svg viewBox="0 0 48 32" className="w-8 h-5">
            <rect width="48" height="32" rx="4" fill="#333" />
            <text x="24" y="19" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold" fontFamily="sans-serif">BOLETO</text>
          </svg>
        </div>
      </div>
    </footer>
  )
}
