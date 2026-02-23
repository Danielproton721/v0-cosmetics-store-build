"use client"

import { useState } from "react"
import { Loader2, Truck } from "lucide-react"

export function ShippingCalculator() {
  const [cep, setCep] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{ prazo: string; valor: string } | null>(null)
  const [error, setError] = useState("")

  const handleConsultar = async () => {
    if (cep.length < 8) {
      setError("Digite um CEP valido")
      return
    }

    setError("")
    setLoading(true)
    setResult(null)

    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 1200))

    setResult({
      prazo: "5 a 8 dias uteis",
      valor: "R$ 12,90",
    })
    setLoading(false)
  }

  return (
    <div className="px-4 py-4 bg-[#ffffff] border-t border-[#f5f5f5]">
      <label htmlFor="cep-input" className="text-sm text-[#737373] mb-2 block">
        Digite seu CEP
      </label>
      <div className="flex gap-2">
        <input
          id="cep-input"
          type="text"
          maxLength={9}
          value={cep}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "")
            if (value.length <= 8) {
              setCep(value.length > 5 ? `${value.slice(0, 5)}-${value.slice(5)}` : value)
            }
          }}
          placeholder="00000-000"
          className="flex-1 border border-[#e5e5e5] rounded-lg px-3 py-2.5 text-sm text-[#1a1a1a] placeholder:text-[#737373]/50 outline-none focus:border-[#d4a017] focus:ring-1 focus:ring-[#d4a017]/30 transition-all bg-[#ffffff]"
        />
        <button
          onClick={handleConsultar}
          disabled={loading}
          className="bg-[#1a1a1a] text-[#ffffff] text-xs font-semibold px-5 py-2.5 rounded-lg uppercase tracking-wider hover:bg-[#1a1a1a]/85 disabled:opacity-50 transition-all flex items-center gap-2"
        >
          {loading && <Loader2 size={14} className="animate-spin" />}
          Consultar
        </button>
      </div>

      {error && <p className="text-xs text-red-500 mt-2">{error}</p>}

      {result && (
        <div className="mt-3 flex items-center gap-2 bg-[#f5f5f5] rounded-lg p-3">
          <Truck size={16} className="text-[#d4a017] shrink-0" />
          <div className="text-xs text-[#1a1a1a]">
            <p className="font-medium">{result.valor} - {result.prazo}</p>
          </div>
        </div>
      )}

      <button className="text-xs text-[#d4a017] underline mt-2 hover:text-[#d4a017]/80 transition-colors">
        Nao sei meu CEP
      </button>
    </div>
  )
}
