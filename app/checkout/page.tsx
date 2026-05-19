"use client";

import React, { useState, useEffect, Suspense, useCallback } from 'react';
import { Lock, CreditCard, ShieldCheck, Mail, Trash2, ShoppingBag, X, Copy, PackageCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PixIcon, MastercardIcon, VisaIcon, EloIcon } from '@/components/store/payment-icons';
import { useCart } from '@/lib/cart-context';

function buildOrderCode(source: string) {
  let hash = 0;
  for (let index = 0; index < source.length; index += 1) {
    hash = Math.imul(31, hash) + source.charCodeAt(index);
    hash |= 0;
  }

  const now = new Date();
  const stamp = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, '0'),
    String(now.getDate()).padStart(2, '0'),
  ].join('');
  const suffix = String(Math.abs(hash) % 1000000).padStart(6, '0');

  return `CB-${stamp}-${suffix}`;
}

function CheckoutContent() {
  const { items, totalPrice, removeItem, updateQuantity } = useCart();
  
  const [isMounted, setIsMounted] = useState(false);
  const [showExitWarning, setShowExitWarning] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Intercepta fechamento da aba ou refresh
  useEffect(() => {
    if (!isMounted) return;
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = ''; 
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isMounted]);

  // Armadilha para o botão voltar do celular/navegador
  useEffect(() => {
    if (!isMounted) return;
    
    // Empurra um estado extra para amortecer o "Voltar"
    window.history.pushState({ trap: true }, '');

    const handlePopState = () => {
      // Quando tenta voltar, em vez de sair da página, exibe o popup
      setShowExitWarning(true);
      // E repõe a armadilha
      window.history.pushState({ trap: true }, '');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [isMounted]);

  // Estados
  const [payMethod, setPayMethod] = useState<'pix' | 'card'>('pix');
  const [currentStep, setCurrentStep] = useState(1);
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');

  // PIX State
  const [isGeneratingPix, setIsGeneratingPix] = useState(false);
  const [pixData, setPixData] = useState<{ qrCode: string, qrCodeImage: string | null, expiresAt?: string } | null>(null);
  const [pixError, setPixError] = useState<string | null>(null);

  // Card State
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [cardInstallments, setCardInstallments] = useState('1');
  const [isProcessingCard, setIsProcessingCard] = useState(false);
  const [cardResult, setCardResult] = useState<{ approved: boolean; message: string } | null>(null);
  const [cardError, setCardError] = useState<string | null>(null);

  // Thank You screen state
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [orderCode, setOrderCode] = useState('');

  // Load Pagou.ai tokenization script
  useEffect(() => {
    if (document.querySelector('script[src="https://api.conta.pagou.ai/v1/js"]')) return;
    const script = document.createElement('script');
    script.src = 'https://api.conta.pagou.ai/v1/js';
    script.async = true;
    document.head.appendChild(script);
  }, []);

  // Address State
  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [stateUF, setStateUF] = useState('');
  const [isFetchingCep, setIsFetchingCep] = useState(false);

  // Validation State
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [formError, setFormError] = useState('');

  const getInputClass = (field: string) => {
    const base = "w-full px-4 py-3 border rounded-xl bg-gray-50 focus:bg-white focus:outline-none transition-all ";
    return base + (errors[field] ? "border-red-500 focus:ring-2 focus:ring-red-500/30" : "border-gray-200 focus:ring-2 focus:ring-[#d4a017]/30 focus:border-[#d4a017]");
  };

  const createCheckoutSession = useCallback(async () => {
    const res = await fetch('/api/checkout/session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: items.map((item) => ({
          id: item.id,
          slug: item.slug,
          quantity: item.quantity,
        })),
      }),
    });

    const data = await res.json().catch(() => null);
    if (!res.ok) {
      throw new Error(data?.error || 'Nao foi possivel validar o checkout.');
    }
  }, [items]);

  const triggerError = (newErrors: Record<string, boolean>) => {
    setErrors(newErrors);
    setFormError('Preencha os campos obrigatórios');
    setTimeout(() => {
      setFormError('');
      setErrors({});
    }, 5000);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    if (value.length > 2) value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    if (value.length > 10) value = `${value.slice(0, 10)}-${value.slice(10)}`;
    setPhone(value);
  };

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    if (value.length > 3) value = `${value.slice(0, 3)}.${value.slice(3)}`;
    if (value.length > 7) value = `${value.slice(0, 7)}.${value.slice(7)}`;
    if (value.length > 11) value = `${value.slice(0, 11)}-${value.slice(11)}`;
    setCpf(value);
  };

  const handleCepChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 8) value = value.slice(0, 8);
    if (value.length > 5) value = `${value.slice(0, 5)}-${value.slice(5)}`;
    setCep(value);

    const rawCep = value.replace(/\D/g, '');
    if (rawCep.length === 8) {
      setIsFetchingCep(true);
      try {
        const response = await fetch(`https://viacep.com.br/ws/${rawCep}/json/`);
        const data = await response.json();
        if (!data.erro) {
          setStreet(data.logradouro || '');
          setNeighborhood(data.bairro || '');
          setCity(data.localidade || '');
          setStateUF(data.uf || '');
        }
      } catch (error) {
        console.error("Erro ao buscar CEP", error);
      } finally {
        setIsFetchingCep(false);
      }
    }
  };
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const seconds = String(timeLeft % 60).padStart(2, '0');

  const handlePixSubmit = async () => {
    setPixError(null);
    setIsGeneratingPix(true);
    
    try {
      await createCheckoutSession();

      const res = await fetch('/api/pix/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          value: totalPrice,
          phone,
          cpf,
          name,
          email,
          title: "Combo Enxoval"
        })
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || data.detail || 'Erro ao gerar PIX');
      }
      
      setPixData({
        qrCode: data.qrCode,
        qrCodeImage: data.qrCodeImage,
        expiresAt: data.expiresAt
      });

      setTimeout(() => {
        document.getElementById('payment-section')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    } catch (err: any) {
      setPixError(err.message);
    } finally {
      setIsGeneratingPix(false);
    }
  };

  const handleCopyPix = () => {
    if (pixData?.qrCode) {
      navigator.clipboard.writeText(pixData.qrCode);
      alert('Código PIX copiado!');
    }
  };

  const handleCardSubmit = async () => {
    setCardError(null);
    setCardResult(null);

    // ── Validação dos campos ──────────────────────────────────────
    const rawNum = cardNumber.replace(/\s/g, '');
    if (rawNum.length < 13 || rawNum.length > 19)
      return setCardError('Número do cartão inválido.');
    if (!cardHolder.trim())
      return setCardError('Informe o nome impresso no cartão.');
    const [expM, expY] = cardExpiry.split('/');
    if (!expM || !expY || expM.length !== 2 || expY.length !== 2)
      return setCardError('Validade inválida. Use MM/AA.');
    if (!cardCvv || cardCvv.length < 3)
      return setCardError('CVV inválido.');
    // ─────────────────────────────────────────────────────────────

    setIsProcessingCard(true);

    try {
      // Pega o IP real do cliente (tenta dois serviços)
      await createCheckoutSession();

      let clientIp = '0.0.0.0';
      try {
        const ipRes = await Promise.any([
          fetch('https://api.ipify.org?format=json').then(r => r.json()).then(d => d.ip),
          fetch('https://icanhazip.com').then(r => r.text()).then(t => t.trim())
        ]);
        clientIp = ipRes || '0.0.0.0';
      } catch {
        // fallback silencioso
      }

      const res = await fetch('/api/card/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          value: totalPrice,
          name, email, cpf, phone,
          installments: cardInstallments,
          title: 'Combo Enxoval',
          clientIp,
          card: {
            number: rawNum,
            holderName: cardHolder.trim(),
            expirationMonth: parseInt(expM),
            expirationYear: parseInt('20' + expY),
            cvv: cardCvv.trim(),
          },
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || data.detail || 'Erro ao processar cartão');

      setCardResult({ approved: data.approved, message: data.message });
      if (data.approved) {
        setOrderCode(buildOrderCode(data.txid || `${email}|${cpf}|${Date.now()}`));
        setTimeout(() => setPaymentConfirmed(true), 1500);
      }
    } catch (err: any) {
      console.error('[CARD]', err);
      setCardError(err.message || 'Erro inesperado. Tente novamente.');
    } finally {
      setIsProcessingCard(false);
    }
  };


  const handleNextToStep2 = () => {
    const newErrors: Record<string, boolean> = {};
    if (!name.trim()) newErrors.name = true;
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = true;
    if (cpf.replace(/\D/g, '').length !== 11) newErrors.cpf = true;
    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) newErrors.phone = true;
    
    if (Object.keys(newErrors).length > 0) {
      triggerError(newErrors);
      return;
    }
    
    setErrors({});
    setFormError('');
    setCurrentStep(2);
  };

  const handleNextToStep3 = () => {
    const newErrors: Record<string, boolean> = {};
    if (cep.replace(/\D/g, '').length !== 8) newErrors.cep = true;
    if (!street.trim()) newErrors.street = true;
    if (!number.trim()) newErrors.number = true;
    if (!neighborhood.trim()) newErrors.neighborhood = true;
    if (!city.trim()) newErrors.city = true;
    if (!stateUF.trim()) newErrors.stateUF = true;
    
    if (Object.keys(newErrors).length > 0) {
      triggerError(newErrors);
      return;
    }
    
    setErrors({});
    setFormError('');
    setCurrentStep(3);
  };

  if (!isMounted) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 text-gray-500 font-bold">Carregando checkout...</div>;
  }

  if (items.length === 0 && !pixData && !paymentConfirmed) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
        <h2 className="text-xl font-bold text-gray-900 mb-2">Seu carrinho está vazio</h2>
        <p className="text-gray-500 mb-6">Adicione produtos para finalizar sua compra.</p>
        <a href="/" className="bg-[#d4a017] text-[#1a1a1a] font-bold px-8 py-3 rounded-full uppercase tracking-wider">Voltar para a loja</a>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════
  // TELA DE OBRIGADO — exibida após pagamento confirmado
  // ═══════════════════════════════════════════════════════════════
  if (paymentConfirmed) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-gray-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 max-w-lg w-full text-center relative overflow-hidden"
        >
          {/* Barra dourada no topo */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#d4a017] via-[#f0c850] to-[#d4a017]" />

          {/* Ícone de sucesso animado */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 12 }}
            className="w-24 h-24 mx-auto mb-6 rounded-full bg-emerald-100 flex items-center justify-center"
          >
            <motion.svg
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="w-12 h-12 text-emerald-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                d="M5 13l4 4L19 7"
              />
            </motion.svg>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-3xl sm:text-4xl font-black text-gray-900 mb-2 tracking-tight"
          >
            Pedido Confirmado!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="text-gray-500 font-medium mb-8 text-sm sm:text-base"
          >
            Obrigado pela sua compra, <span className="text-gray-800 font-bold">{name.split(' ')[0]}</span>! 🎉
          </motion.p>

          {orderCode && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.72 }}
              className="bg-[#1a1a1a] rounded-2xl p-5 mb-6 text-left shadow-lg"
            >
              <div className="flex items-start gap-3">
                <PackageCheck className="w-5 h-5 text-[#d4a017] shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/50 font-black">Código do pedido</p>
                  <p className="mt-2 text-2xl font-black tracking-wide text-white break-words">{orderCode}</p>
                  <p className="mt-2 text-xs leading-relaxed text-white/70">
                    Use este código para acompanhar o andamento do pedido depois da compra.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => navigator.clipboard.writeText(orderCode)}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-black uppercase tracking-wide text-[#1a1a1a] transition hover:bg-[#f3ead8]"
              >
                <Copy className="w-4 h-4" />
                Copiar código
              </button>
            </motion.div>
          )}

          {/* Detalhes do pedido */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gray-50 rounded-2xl p-5 mb-6 text-left space-y-3"
          >
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500 font-medium">Método</span>
              <span className="font-bold text-gray-800 flex items-center gap-1.5">
                {payMethod === 'pix' ? (
                  <><PixIcon className="w-4 h-4" /> PIX</>
                ) : (
                  <><CreditCard className="w-4 h-4" /> Cartão de Crédito</>
                )}
              </span>
            </div>
            <div className="border-t border-gray-200" />
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500 font-medium">Total pago</span>
              <span className="font-black text-emerald-600 text-lg">
                R$ {totalPrice.toFixed(2).replace('.', ',')}
              </span>
            </div>
            {payMethod === 'card' && parseInt(cardInstallments) > 1 && (
              <>
                <div className="border-t border-gray-200" />
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">Parcelas</span>
                  <span className="font-bold text-gray-800">
                    {cardInstallments}x de R$ {(totalPrice / parseInt(cardInstallments)).toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </>
            )}
            <div className="border-t border-gray-200" />
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500 font-medium">E-mail</span>
              <span className="font-bold text-gray-800 text-xs">{email}</span>
            </div>
          </motion.div>

          {/* Mensagem de envio */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95 }}
            className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6 flex items-start gap-3"
          >
            <Mail className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <p className="text-xs text-emerald-800 font-medium text-left leading-relaxed">
              Enviamos a confirmação para <strong>{email}</strong>. O código acima acompanha o pedido na ConfortBem; o rastreio da transportadora será enviado quando o pedido for despachado.
            </p>
          </motion.div>

          {/* Garantia */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05 }}
            className="flex items-center justify-center gap-2 text-xs text-gray-400 font-bold mb-8"
          >
            <ShieldCheck className="w-4 h-4" />
            Garantia de Satisfação ConfortBem
          </motion.div>

          {/* Botão voltar para loja */}
          {orderCode && (
            <motion.a
              href={`/rastreio-de-pedido?codigo=${encodeURIComponent(orderCode)}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.12 }}
              className="mb-3 inline-block w-full py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-black text-sm uppercase tracking-wide shadow-lg transition-all hover:-translate-y-0.5"
            >
              Acompanhar Pedido
            </motion.a>
          )}

          <motion.a
            href="/"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="inline-block w-full py-4 bg-[#d4a017] hover:bg-[#b8891a] text-[#1a1a1a] rounded-xl font-black text-sm uppercase tracking-wide shadow-lg transition-all hover:-translate-y-0.5"
          >
            Continuar Comprando
          </motion.a>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      {/* Modal de Exit Intent */}
      <AnimatePresence>
        {showExitWarning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-[#1a1a1a]/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl p-6 sm:p-8 pt-8 sm:pt-10 max-w-md w-full shadow-2xl relative text-center border-4 border-[#d4a017]"
            >
              <button 
                onClick={() => setShowExitWarning(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
                aria-label="Fechar aviso"
              >
                <X size={24} />
              </button>
              
              <h2 className="text-3xl font-black text-gray-900 mb-2 uppercase tracking-tight">Espera aí!</h2>
              <p className="text-gray-600 font-medium mb-6 text-sm sm:text-base leading-relaxed">
                Você está a um passo de garantir seus produtos com <strong className="text-[#22c55e]">Envio Prioritário</strong>. Tem certeza que deseja abandonar seu carrinho e perder a reserva?
              </p>
              
              <div className="space-y-3">
                <button 
                  onClick={() => setShowExitWarning(false)}
                  className="w-full bg-[#22c55e] text-white font-black py-4 rounded-xl shadow-[0_4px_20px_rgba(34,197,94,0.3)] hover:-translate-y-1 hover:shadow-[0_6px_25px_rgba(34,197,94,0.4)] transition-all uppercase tracking-widest"
                >
                  Continuar Finalizando
                </button>
                <button 
                  onClick={() => {
                    window.history.back();
                    window.history.back();
                  }}
                  className="w-full bg-gray-100 text-gray-500 font-bold py-3.5 rounded-xl hover:bg-gray-200 transition-all uppercase tracking-wider text-xs"
                >
                  Quero perder meus itens
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-gray-50 text-gray-900 pb-12">
      {/* Topbar */}
      <div className="bg-white border-b border-gray-100 px-5 py-3 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-2">
          <img src="/images/logo.png" alt="ConfortBem" className="h-8 object-contain" />
          <span className="text-[10px] text-[#d4a017] tracking-widest uppercase font-semibold">Checkout</span>
        </div>
        <div className="flex items-center gap-1.5 text-gray-500 font-bold text-xs sm:text-sm">
          <ShieldCheck className="w-4 h-4 text-[#d4a017]" /> Pagamento 100% seguro
        </div>
      </div>

      {/* Timer Bar */}
      <div className="bg-[#1a1a1a] text-[#d4a017] text-center py-2.5 font-bold text-sm shadow-md">
        ⏰ Oferta expira em <strong className="font-black tabular-nums tracking-wider">{minutes}:{seconds}</strong> — finalize seu pedido agora
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto mt-6 px-4 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6">
        
        {/* Esquerda: Formulários */}
        <div className="space-y-4">
          
          {/* Sessão 1: Dados Pessoais */}
          <motion.div layout className={`bg-white border rounded-2xl p-6 shadow-sm transition-all duration-300 ${currentStep === 1 ? 'border-[#d4a017] ring-1 ring-[#d4a017]' : 'border-gray-200'}`}>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-extrabold text-gray-800 flex items-center gap-2">
                <span className={`w-6 h-6 rounded-full text-[#1a1a1a] flex items-center justify-center text-xs ${currentStep >= 1 ? 'bg-[#d4a017]' : 'bg-gray-300'}`}>1</span>
                Identificação
              </h2>
              {currentStep > 1 && (
                <button onClick={() => setCurrentStep(1)} className="text-[#d4a017] text-xs font-bold hover:underline">Editar</button>
              )}
            </div>
            
            <AnimatePresence mode="wait">
            {currentStep === 1 ? (
              <motion.div 
                key="step1-open"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-4 overflow-hidden"
              >
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Nome completo</label>
                  <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Seu nome" className={getInputClass('name')} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">E-mail</label>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="seu@email.com" className={getInputClass('email')} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">CPF</label>
                    <input type="text" value={cpf} onChange={handleCpfChange} placeholder="000.000.000-00" className={getInputClass('cpf')} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Celular</label>
                    <input type="tel" value={phone} onChange={handlePhoneChange} placeholder="(00) 00000-0000" className={getInputClass('phone')} />
                  </div>
                </div>
                {formError && <motion.p initial={{opacity:0}} animate={{opacity:1}} className="text-red-500 text-sm font-bold text-center pt-2">{formError}</motion.p>}
                <button onClick={handleNextToStep2} className="w-full mt-2 py-3.5 bg-[#1a1a1a] text-white font-bold rounded-xl hover:bg-black transition-all">
                  Continuar para Entrega
                </button>
              </motion.div>
            ) : (
              <motion.div 
                key="step1-closed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-gray-500 font-medium pt-2"
              >
                Dados preenchidos ✓
              </motion.div>
            )}
            </AnimatePresence>
          </motion.div>

          {/* Sessão 2: Endereço de Entrega */}
          <motion.div layout className={`bg-white border rounded-2xl p-6 shadow-sm transition-all duration-300 ${currentStep === 2 ? 'border-[#d4a017] ring-1 ring-[#d4a017]' : 'border-gray-200 opacity-60'}`}>
            <div className="flex items-center justify-between mb-5">
              <h2 className={`text-lg font-extrabold flex items-center gap-2 ${currentStep >= 2 ? 'text-gray-800' : 'text-gray-400'}`}>
                <span className={`w-6 h-6 rounded-full text-[#1a1a1a] flex items-center justify-center text-xs ${currentStep >= 2 ? 'bg-[#d4a017]' : 'bg-gray-300'}`}>2</span>
                Endereço de Entrega
              </h2>
              {currentStep > 2 && (
                <button onClick={() => setCurrentStep(2)} className="text-[#d4a017] text-xs font-bold hover:underline">Editar</button>
              )}
            </div>
            
            <AnimatePresence>
            {currentStep === 2 && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-4 overflow-hidden"
              >
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">CEP {isFetchingCep && <span className="text-emerald-500 lowercase normal-case">(buscando...)</span>}</label>
                  <input type="text" value={cep} onChange={handleCepChange} placeholder="00000-000" className={`sm:w-1/3 ${getInputClass('cep')}`} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Endereço (Rua, Avenida)</label>
                    <input type="text" value={street} onChange={e => setStreet(e.target.value)} placeholder="Nome da rua" className={getInputClass('street')} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Número</label>
                    <input type="text" value={number} onChange={e => setNumber(e.target.value)} placeholder="Ex: 123" className={getInputClass('number')} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Complemento (opcional)</label>
                    <input type="text" value={complement} onChange={e => setComplement(e.target.value)} placeholder="Apto, Bloco, Casa 2" className={getInputClass('complement')} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Bairro</label>
                    <input type="text" value={neighborhood} onChange={e => setNeighborhood(e.target.value)} placeholder="Nome do bairro" className={getInputClass('neighborhood')} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Cidade</label>
                    <input type="text" value={city} onChange={e => setCity(e.target.value)} placeholder="Sua cidade" className={getInputClass('city')} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Estado</label>
                    <input type="text" value={stateUF} onChange={e => setStateUF(e.target.value)} placeholder="UF" className={getInputClass('stateUF')} />
                  </div>
                </div>
                {formError && <motion.p initial={{opacity:0}} animate={{opacity:1}} className="text-red-500 text-sm font-bold text-center pt-2">{formError}</motion.p>}
                <button onClick={handleNextToStep3} className="w-full mt-2 py-3.5 bg-[#1a1a1a] text-white font-bold rounded-xl hover:bg-black transition-all">
                  Ir para Pagamento
                </button>
              </motion.div>
            )}
            </AnimatePresence>
          </motion.div>
          
          {/* Sessão 3: Pagamento */}
          <motion.div id="payment-section" layout className={`bg-white border rounded-2xl p-6 shadow-sm transition-all duration-300 ${currentStep === 3 ? 'border-[#d4a017] ring-1 ring-[#d4a017]' : 'border-gray-200 opacity-50'}`}>
            <h2 className={`text-lg font-extrabold mb-5 flex items-center gap-2 ${currentStep >= 3 ? 'text-gray-800' : 'text-gray-400'}`}>
              <span className={`w-6 h-6 rounded-full text-[#1a1a1a] flex items-center justify-center text-xs ${currentStep >= 3 ? 'bg-[#d4a017]' : 'bg-gray-300'}`}>3</span>
              Forma de pagamento
            </h2>
            
            <AnimatePresence>
            {currentStep === 3 && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <button 
                    onClick={() => setPayMethod('pix')}
                    className={`p-4 border-2 rounded-xl flex items-center gap-3 font-extrabold transition-all ${payMethod === 'pix' ? 'border-[#d4a017] bg-[#d4a017]/5 text-[#d4a017]' : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'}`}
                  >
                  <img src="https://icons.yampi.me/svg/card-pix.svg" alt="Pix" width="28" height="20" /> PIX
                  </button>
                  <button 
                    onClick={() => setPayMethod('card')}
                    className={`p-4 border-2 rounded-xl flex items-center gap-3 font-extrabold transition-all ${payMethod === 'card' ? 'border-[#d4a017] bg-[#d4a017]/5 text-[#d4a017]' : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'}`}
                  >
                    <CreditCard className="w-5 h-5" /> Cartão
                  </button>
                </div>

                <AnimatePresence mode="wait">
                {payMethod === 'pix' ? (
                  <motion.div 
                    key="pix"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="bg-gradient-to-b from-[#d4a017]/5 to-white border border-dashed border-[#d4a017]/40 rounded-xl p-5 text-center flex flex-col items-center"
                  >
                    {!pixData ? (
                      <>
                        <h3 className="font-bold text-gray-800 mb-1">Pague com PIX e libere envio na hora</h3>
                        <p className="text-sm text-gray-500 mb-4">Aprovação em segundos. Clique no botão abaixo para gerar seu PIX.</p>
                        <div className="flex flex-wrap justify-center gap-3 text-xs font-bold text-emerald-600 mb-2">
                          <span>✓ Aprovação instantânea</span>
                          <span>✓ Sem taxas extras</span>
                          <span>✓ Processamento prioritário</span>
                        </div>
                        {pixError && <div className="mt-2 text-xs text-red-500 font-bold bg-red-50 p-2 rounded w-full">{pixError}</div>}
                      </>
                    ) : (
                      <>
                        <h3 className="font-bold text-emerald-600 mb-2">PIX Gerado com Sucesso!</h3>
                        <div className="mb-3 w-full max-w-sm rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs font-bold text-amber-800">
                          Este QR Code expira em 10 minutos. Pague antes desse prazo para evitar gerar um novo PIX.
                        </div>
                        <div className="w-44 h-44 bg-white border-2 border-emerald-100 rounded-2xl p-3 mx-auto mb-4 shadow-sm relative">
                          <img 
                            src={pixData.qrCodeImage || `https://api.qrserver.com/v1/create-qr-code/?size=250x250&margin=0&data=${encodeURIComponent(pixData.qrCode)}`} 
                            alt="QR Code PIX" 
                            className="w-full h-full object-contain mix-blend-multiply" 
                          />
                        </div>
                        <p className="text-xs text-gray-500 mb-2">Ou copie o código abaixo (PIX Copia e Cola):</p>
                        <div className="flex items-center gap-2 w-full max-w-sm">
                          <input type="text" readOnly value={pixData.qrCode} className="flex-1 bg-white text-gray-700 text-xs p-3 rounded-xl border border-gray-200 font-mono focus:outline-none" />
                          <button onClick={handleCopyPix} className="bg-[#d4a017] text-[#1a1a1a] text-xs font-bold px-4 py-3 rounded-xl hover:bg-[#d4a017]/80 transition-colors">COPIAR</button>
                        </div>
                      </>
                    )}
                  </motion.div>
                ) : (
                  <motion.div 
                    key="card"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="space-y-4"
                  >
                    {cardResult ? (
                      <div className={`p-4 rounded-xl text-center font-bold text-sm ${
                        cardResult.approved
                          ? 'bg-emerald-50 border border-emerald-200 text-emerald-700'
                          : 'bg-red-50 border border-red-200 text-red-600'
                      }`}>
                        {cardResult.approved ? '✅ ' : '❌ '}{cardResult.message}
                      </div>
                    ) : (
                      <>
                        <div>
                          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Número do cartão</label>
                          <input
                            type="text"
                            value={cardNumber}
                            onChange={e => {
                              const v = e.target.value.replace(/\D/g, '').slice(0, 16);
                              setCardNumber(v.replace(/(\d{4})/g, '$1 ').trim());
                            }}
                            placeholder="0000 0000 0000 0000"
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d4a017]/30 focus:border-[#d4a017] transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Nome no cartão</label>
                          <input
                            type="text"
                            value={cardHolder}
                            onChange={e => setCardHolder(e.target.value.toUpperCase())}
                            placeholder="COMO IMPRESSO NO CARTÃO"
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d4a017]/30 focus:border-[#d4a017] transition-all"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Validade</label>
                            <input
                              type="text"
                              value={cardExpiry}
                              onChange={e => {
                                let v = e.target.value.replace(/\D/g, '').slice(0, 4);
                                if (v.length > 2) v = v.slice(0, 2) + '/' + v.slice(2);
                                setCardExpiry(v);
                              }}
                              placeholder="MM/AA"
                              className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d4a017]/30 focus:border-[#d4a017] transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">CVV</label>
                            <input
                              type="text"
                              value={cardCvv}
                              onChange={e => setCardCvv(e.target.value.replace(/\D/g, '').slice(0, 4))}
                              placeholder="000"
                              className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d4a017]/30 focus:border-[#d4a017] transition-all"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Parcelas</label>
                          <select
                            value={cardInstallments}
                            onChange={e => setCardInstallments(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d4a017]/30 focus:border-[#d4a017] transition-all"
                          >
                            {[1,2,3,4,5,6,7,8,9,10,11,12].map(n => (
                              <option key={n} value={n}>{n}x de R$ {(totalPrice / n).toFixed(2).replace('.', ',')} {n === 1 ? '(sem juros)' : ''}</option>
                            ))}
                          </select>
                        </div>
                        {cardError && <p className="text-red-500 text-sm font-bold text-center">{cardError}</p>}
                      </>
                    )}
                  </motion.div>
                )}
                </AnimatePresence>
              </motion.div>
            )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Direita: Resumo do Pedido */}
        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm lg:sticky lg:top-24">
            <h2 className="text-lg font-extrabold text-gray-800 mb-5">Resumo do pedido</h2>
            
            <div className="space-y-4 pb-5 border-b border-gray-100 mb-5 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 border border-gray-200 shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain p-1" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <strong className="block text-gray-800 font-bold leading-tight text-xs truncate">{item.name}</strong>
                    <div className="flex items-center justify-between mt-1.5">
                      {/* Quantity controls */}
                      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors font-bold text-base"
                        >−</button>
                        <span className="w-7 text-center text-xs font-bold text-gray-800">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors font-bold text-base"
                        >+</button>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-gray-800">R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-300 hover:text-red-400 transition-colors"
                          aria-label="Remover item"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-2.5 mb-5">
              <div className="flex justify-between text-sm text-gray-500 font-medium">
                <span>Subtotal</span>
                <span>R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-gray-500">
                <span>Frete</span>
                <span className="text-emerald-600">Grátis</span>
              </div>
              <div className="border-t border-gray-100 pt-3 flex justify-between items-baseline text-gray-800 font-black">
                <span>Total</span>
                <span className="text-lg">R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
              </div>
            </div>

            <button 
              onClick={() => {
                if (payMethod === 'pix') handlePixSubmit();
                else if (payMethod === 'card') handleCardSubmit();
              }}
              disabled={
                isGeneratingPix || isProcessingCard ||
                (payMethod === 'pix' && !!pixData) ||
                (payMethod === 'card' && !!cardResult?.approved)
              }
              className="w-full py-4 bg-[#22c55e] hover:bg-[#16a34a] disabled:bg-gray-400 text-white rounded-xl font-black text-sm uppercase tracking-wide shadow-lg transition-all hover:-translate-y-0.5"
            >
              {isGeneratingPix
                ? "GERANDO PIX..."
                : isProcessingCard
                ? "PROCESSANDO CARTÃO..."
                : payMethod === 'pix' && pixData
                ? "AGUARDANDO PAGAMENTO..."
                : payMethod === 'card' && cardResult?.approved
                ? "PAGAMENTO APROVADO ✓"
                : "Concluir Pagamento"}
            </button>

            <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2.5 text-xs font-bold text-emerald-800">
              <ShieldCheck className="w-5 h-5 shrink-0 text-emerald-600" />
              Garantia de Satisfação ConfortBem — Qualidade garantida.
            </div>

            {/* Payment Icons */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 mt-5 pt-4 border-t border-gray-100">
              <img src="https://icons.yampi.me/svg/card-amex.svg" alt="Amex" width="32" height="22" />
              <img src="https://icons.yampi.me/svg/card-visa.svg" alt="Visa" width="32" height="22" />
              <img src="https://icons.yampi.me/svg/card-diners.svg" alt="Diners" width="32" height="22" />
              <img src="https://icons.yampi.me/svg/card-mastercard.svg" alt="Mastercard" width="32" height="22" />
              <img src="https://icons.yampi.me/svg/card-discover.svg" alt="Discover" width="32" height="22" />
              <img src="https://icons.yampi.me/svg/card-aura.svg" alt="Aura" width="32" height="22" />
              <img src="https://icons.yampi.me/svg/card-elo.svg" alt="Elo" width="32" height="22" />
              <img src="https://icons.yampi.me/svg/card-hiper.svg" alt="Hiper" width="32" height="22" />
              <img src="https://icons.yampi.me/svg/card-pix.svg" alt="Pix" width="32" height="22" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center font-bold text-gray-500">Iniciando checkout seguro...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
