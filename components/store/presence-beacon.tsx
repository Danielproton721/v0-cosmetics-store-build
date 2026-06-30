"use client"

import { useEffect } from "react"

// Heartbeat de presença: manda um sinal pro /api/presence a cada ~20s com um id
// de sessão estável, pra alimentar o contador de "online agora" do painel /admin.
// Best-effort: qualquer falha é silenciosa e nunca atrapalha a navegação.
export function PresenceBeacon() {
  useEffect(() => {
    const newId = () => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`
    let id = ""
    try {
      id = localStorage.getItem("fn_sid") || ""
      if (!id) {
        id = newId()
        localStorage.setItem("fn_sid", id)
      }
    } catch {
      id = newId()
    }

    const ping = () => {
      fetch("/api/presence", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ id }),
        keepalive: true,
      }).catch(() => {})
    }

    ping()
    const interval = setInterval(ping, 20_000)
    const onVisible = () => {
      if (document.visibilityState === "visible") ping()
    }
    document.addEventListener("visibilitychange", onVisible)

    return () => {
      clearInterval(interval)
      document.removeEventListener("visibilitychange", onVisible)
    }
  }, [])

  return null
}
