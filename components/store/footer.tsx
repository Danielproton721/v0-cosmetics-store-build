import { Instagram, Facebook, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-[#ffffff] py-8 px-4">
      <div className="max-w-md mx-auto text-center">
        <h3 className="text-lg font-bold tracking-wide mb-1">Gota Dourada</h3>
        <p className="text-[10px] text-[#ffffff]/50 uppercase tracking-widest mb-4">
          Cosméticos Capilares
        </p>

        <div className="flex items-center justify-center gap-4 mb-6">
          <a
            href="#"
            className="p-2 rounded-full bg-[#ffffff]/10 hover:bg-[#d4a017] transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-[#ffffff]/10 hover:bg-[#d4a017] transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={18} />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-[#ffffff]/10 hover:bg-[#d4a017] transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        <div className="border-t border-[#ffffff]/10 pt-4">
          <p className="text-[11px] text-[#ffffff]/40">
            {"2026 Gota Dourada. Todos os direitos reservados."}
          </p>
        </div>
      </div>
    </footer>
  )
}
