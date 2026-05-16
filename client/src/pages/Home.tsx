/*
 * DESIGN: Dark Authority — preto profundo (#0D0D0D) + amarelo (#F5C518)
 * Montserrat bold para headlines, Roboto para corpo
 * Foco total em conversão via WhatsApp
 */

import { useEffect, useRef, useState } from "react";

const WHATSAPP_NUMBER = "5547997624005";
const WHATSAPP_MSG = encodeURIComponent("Olá! Vim pelo site da Retira Multas e gostaria de atendimento.");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;
const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663536759710/ExN8VriAZxrfZRYXXeWKRx/hero_retira_multas_a5050d80.jpg";

// ─── Icons ────────────────────────────────────────────────────────────────────
const WhatsAppIcon = ({ size = 24, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const ShieldIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const DocumentIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);

const CarIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13"/>
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
    <circle cx="5.5" cy="18.5" r="2.5"/>
    <circle cx="18.5" cy="18.5" r="2.5"/>
  </svg>
);

const ScaleIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="3" x2="12" y2="21"/>
    <path d="M5 6l7-3 7 3"/>
    <path d="M5 6l-2 9a5 5 0 0 0 10 0L5 6z"/>
    <path d="M19 6l-2 9a5 5 0 0 0 10 0L19 6z"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const MapPinIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const CheckIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const StarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#F5C518" stroke="#F5C518" strokeWidth="1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const GlobeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const UserIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const AlertIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);

// ─── Scroll Animation Hook ────────────────────────────────────────────────────
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ─── Counter Animation Hook ───────────────────────────────────────────────────
function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, duration, start]);
  return count;
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: "Início", href: "#hero" },
    { label: "Serviços", href: "#servicos" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(13,13,13,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(245,197,24,0.15)" : "none",
      }}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 no-underline">
          <div
            className="flex items-center justify-center w-9 h-9 rounded"
            style={{ background: "#F5C518" }}
          >
            <span style={{ fontFamily: "Montserrat", fontWeight: 900, fontSize: "1rem", color: "#0D0D0D" }}>RM</span>
          </div>
          <span style={{ fontFamily: "Montserrat", fontWeight: 800, fontSize: "1.1rem", color: "#F7F7F7", letterSpacing: "-0.02em" }}>
            Retira<span style={{ color: "#F5C518" }}>Multas</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="no-underline transition-colors duration-200"
              style={{ color: "#A0A0A0", fontSize: "0.875rem", fontFamily: "Roboto", fontWeight: 500 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F5C518")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#A0A0A0")}
            >
              {link.label}
            </a>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem" }}>
            <WhatsAppIcon size={16} color="white" />
            Falar no WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none" }}
        >
          <span style={{ display: "block", width: 22, height: 2, background: menuOpen ? "#F5C518" : "#F7F7F7", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translateY(6px)" : "none" }} />
          <span style={{ display: "block", width: 22, height: 2, background: "#F7F7F7", opacity: menuOpen ? 0 : 1, transition: "all 0.3s" }} />
          <span style={{ display: "block", width: 22, height: 2, background: menuOpen ? "#F5C518" : "#F7F7F7", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "none" }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: "rgba(13,13,13,0.98)", borderTop: "1px solid rgba(245,197,24,0.15)", padding: "1rem" }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block no-underline py-3"
              style={{ color: "#F7F7F7", fontFamily: "Roboto", fontWeight: 500, borderBottom: "1px solid rgba(255,255,255,0.05)" }}
            >
              {link.label}
            </a>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full justify-center mt-4" style={{ display: "flex" }}>
            <WhatsAppIcon size={18} color="white" />
            Falar no WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center"
      style={{
        background: "#0D0D0D",
        paddingTop: "5rem",
        paddingBottom: "4rem",
      }}
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(105deg, rgba(13,13,13,0.97) 0%, rgba(13,13,13,0.92) 45%, rgba(13,13,13,0.65) 75%, rgba(13,13,13,0.4) 100%)",
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 mb-6"
            style={{
              background: "rgba(245,197,24,0.12)",
              border: "1px solid rgba(245,197,24,0.3)",
              borderRadius: "100px",
              padding: "0.375rem 1rem",
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#F5C518", display: "inline-block", animation: "pulse-green 2s infinite" }} />
            <span style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.1em", color: "#F5C518", textTransform: "uppercase" }}>
              5 Anos de Experiência • Atendimento em Todo o Brasil
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "Montserrat",
              fontWeight: 900,
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              lineHeight: 1.1,
              color: "#F7F7F7",
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            Sua CNH em Risco?{" "}
            <span style={{ color: "#F5C518" }}>Nós Defendemos</span>{" "}
            Seus Direitos.
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontFamily: "Roboto",
              fontWeight: 400,
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "#C0C0C0",
              lineHeight: 1.7,
              marginBottom: "2rem",
              maxWidth: "520px",
            }}
          >
            Especialistas em recurso de multas, defesa de suspensão e cassação de CNH. Atendemos em Blumenau e em todo o Brasil com análise gratuita do seu caso.
          </p>

          {/* Urgency bar */}
          <div
            className="flex items-center gap-3 mb-8 p-4 rounded-lg"
            style={{ background: "rgba(245,197,24,0.08)", border: "1px solid rgba(245,197,24,0.2)" }}
          >
            <AlertIcon />
            <div>
              <p style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: "0.875rem", color: "#F5C518", margin: 0 }}>
                ⚠ Atenção: Prazos de recurso são curtos!
              </p>
              <p style={{ fontFamily: "Roboto", fontSize: "0.8rem", color: "#A0A0A0", margin: 0 }}>
                Após receber a notificação, você tem apenas 30 dias para recorrer. Não perca o prazo.
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ fontSize: "1rem", padding: "1rem 2rem" }}>
              <WhatsAppIcon size={20} color="white" />
              Consultar Multa Grátis Agora
            </a>
            <a href="#servicos" className="btn-outline" style={{ fontSize: "1rem", padding: "1rem 2rem" }}>
              Ver Nossos Serviços
              <ArrowRightIcon />
            </a>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 mt-10">
            {[
              { value: "+2.000", label: "Clientes Atendidos" },
              { value: "5 Anos", label: "de Experiência" },
              { value: "Todo", label: "o Brasil" },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ fontFamily: "Montserrat", fontWeight: 800, fontSize: "1.5rem", color: "#F5C518" }}>{stat.value}</div>
                <div style={{ fontFamily: "Roboto", fontSize: "0.8rem", color: "#A0A0A0" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(to bottom, transparent, #0D0D0D)" }} />
    </section>
  );
}

// ─── Stats Bar ────────────────────────────────────────────────────────────────
function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setStarted(true);
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const c1 = useCounter(2000, 2000, started);
  const c2 = useCounter(98, 1800, started);
  const c3 = useCounter(5, 1500, started);
  const c4 = useCounter(27, 2200, started);

  const stats = [
    { value: `+${c1.toLocaleString("pt-BR")}`, label: "Clientes Atendidos" },
    { value: `${c2}%`, label: "Taxa de Satisfação" },
    { value: `${c3} Anos`, label: "de Mercado" },
    { value: `${c4}`, label: "Estados Atendidos" },
  ];

  return (
    <div ref={ref} style={{ background: "#F5C518", padding: "1.5rem 0" }}>
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: "Montserrat", fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#0D0D0D", lineHeight: 1 }}>
                {s.value}
              </div>
              <div style={{ fontFamily: "Roboto", fontSize: "0.8rem", color: "#333", marginTop: "0.25rem", fontWeight: 500 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Problema Section ─────────────────────────────────────────────────────────
function ProblemSection() {
  const problems = [
    {
      icon: <AlertIcon />,
      title: "Risco de Perder sua CNH",
      desc: "Acumular pontos ou receber multas graves pode levar à suspensão ou cassação da sua habilitação — e isso muda completamente sua vida.",
    },
    {
      icon: <ClockIcon />,
      title: "Prazos Curtos e Burocracia",
      desc: "Você tem apenas 30 dias para entrar com a defesa prévia. Perder esse prazo significa perder o direito de recorrer — para sempre.",
    },
    {
      icon: <DocumentIcon />,
      title: "Processo Complicado e Confuso",
      desc: "Formulários, órgãos de trânsito, documentos técnicos... Sem orientação especializada, é fácil errar e prejudicar sua própria defesa.",
    },
  ];

  return (
    <section style={{ background: "#0D0D0D", padding: "5rem 0" }}>
      <div className="container">
        <div className="text-center mb-12 fade-up">
          <div className="section-label justify-center">
            <span>O Problema</span>
          </div>
          <h2 style={{ fontFamily: "Montserrat", fontWeight: 800, fontSize: "clamp(1.75rem, 4vw, 2.75rem)", color: "#F7F7F7", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
            Você Recebeu uma Multa e{" "}
            <span style={{ color: "#F5C518" }}>Não Sabe o Que Fazer?</span>
          </h2>
          <p style={{ fontFamily: "Roboto", color: "#A0A0A0", fontSize: "1.05rem", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
            Milhares de motoristas perdem seus direitos todos os anos por não saber como agir no momento certo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <div
              key={i}
              className="card-accent fade-up p-6 rounded-lg"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div style={{ color: "#F5C518", marginBottom: "1rem" }}>{p.icon}</div>
              <h3 style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: "1.1rem", color: "#F7F7F7", marginBottom: "0.75rem" }}>{p.title}</h3>
              <p style={{ fontFamily: "Roboto", color: "#A0A0A0", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA after problem */}
        <div className="text-center mt-10 fade-up">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ fontSize: "1rem", padding: "1rem 2rem" }}>
            <WhatsAppIcon size={20} color="white" />
            Falar com Especialista Agora
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Quem Somos ───────────────────────────────────────────────────────────────
function AboutSection() {
  const differentials = [
    "5 anos de atuação especializada em trânsito",
    "Localização estratégica em frente ao DETRAN",
    "Atendimento presencial e online para todo o Brasil",
    "Análise individual e personalizada de cada caso",
    "Suporte jurídico especializado na área de trânsito",
    "Atendimento rápido e direto pelo WhatsApp",
  ];

  return (
    <section style={{ background: "#111111", padding: "5rem 0" }}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-up">
            <div className="section-label">Quem Somos</div>
            <h2 style={{ fontFamily: "Montserrat", fontWeight: 800, fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "#F7F7F7", marginBottom: "1.25rem", letterSpacing: "-0.02em" }}>
              Especialistas que Entendem{" "}
              <span style={{ color: "#F5C518" }}>Cada Detalhe</span>{" "}
              do Seu Caso
            </h2>
            <p style={{ fontFamily: "Roboto", color: "#A0A0A0", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              A Retira Multas atua há 5 anos ajudando motoristas a enfrentarem problemas de trânsito com estratégia, experiência e atendimento especializado.
            </p>
            <p style={{ fontFamily: "Roboto", color: "#A0A0A0", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Somos especializados em recursos administrativos de multas, defesa de suspensão de CNH, defesa de cassação e suporte jurídico na área de trânsito. Nosso compromisso é oferecer atendimento claro, rápido e seguro, sempre buscando a melhor solução para cada caso.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Solicitar Análise Gratuita
              <ArrowRightIcon />
            </a>
          </div>

          <div className="fade-up" style={{ transitionDelay: "0.2s" }}>
            <div
              className="rounded-xl p-6"
              style={{ background: "#1C1C1C", border: "1px solid rgba(245,197,24,0.1)" }}
            >
              <h3 style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: "1.1rem", color: "#F5C518", marginBottom: "1.25rem" }}>
                Por que escolher a Retira Multas?
              </h3>
              <div className="flex flex-col gap-3">
                {differentials.map((d, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="flex-shrink-0 flex items-center justify-center rounded-full"
                      style={{ width: 24, height: 24, background: "rgba(245,197,24,0.15)", color: "#F5C518", marginTop: "2px" }}
                    >
                      <CheckIcon size={14} />
                    </div>
                    <span style={{ fontFamily: "Roboto", color: "#C0C0C0", fontSize: "0.9rem", lineHeight: 1.6 }}>{d}</span>
                  </div>
                ))}
              </div>

              {/* Location badge */}
              <div
                className="flex items-start gap-3 mt-5 p-4 rounded-lg"
                style={{ background: "rgba(245,197,24,0.06)", border: "1px solid rgba(245,197,24,0.15)" }}
              >
                <div style={{ color: "#F5C518", flexShrink: 0 }}><MapPinIcon /></div>
                <div>
                  <p style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: "0.85rem", color: "#F5C518", margin: 0 }}>Localização Estratégica</p>
                  <p style={{ fontFamily: "Roboto", fontSize: "0.8rem", color: "#A0A0A0", margin: 0, lineHeight: 1.5 }}>
                    Sala em frente ao DETRAN, dentro do Shopping Park Europeu — Blumenau, SC
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Services Section ─────────────────────────────────────────────────────────
function ServicesSection() {
  const services = [
    {
      icon: <DocumentIcon />,
      title: "Recurso de Multas",
      desc: "Análise técnica e elaboração de defesa administrativa para contestar autuações e buscar a melhor solução possível.",
    },
    {
      icon: <ShieldIcon />,
      title: "Defesa de Suspensão de CNH",
      desc: "Atuação especializada para motoristas que estão respondendo processo de suspensão e precisam proteger o direito de dirigir.",
    },
    {
      icon: <ScaleIcon />,
      title: "Defesa de Cassação da CNH",
      desc: "Estratégia e acompanhamento em situações mais graves, com suporte técnico e jurídico especializado.",
    },
    {
      icon: <ClockIcon />,
      title: "Acompanhamento de Processo",
      desc: "Monitoramento e orientação durante todas as etapas do processo junto aos órgãos de trânsito.",
    },
    {
      icon: <UserIcon />,
      title: "Consultoria Jurídica",
      desc: "Suporte especializado para dúvidas, análise de casos e orientação estratégica na área de trânsito.",
    },
    {
      icon: <CarIcon />,
      title: "Análise de Pontuação da CNH",
      desc: "Verificação da situação do condutor para identificar riscos, prazos e possibilidades de defesa.",
    },
  ];

  return (
    <section id="servicos" style={{ background: "#0D0D0D", padding: "5rem 0" }}>
      <div className="container">
        <div className="text-center mb-12 fade-up">
          <div className="section-label justify-center">Nossos Serviços</div>
          <h2 style={{ fontFamily: "Montserrat", fontWeight: 800, fontSize: "clamp(1.75rem, 4vw, 2.75rem)", color: "#F7F7F7", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
            Soluções Completas para{" "}
            <span style={{ color: "#F5C518" }}>Defender Seus Direitos</span>
          </h2>
          <p style={{ fontFamily: "Roboto", color: "#A0A0A0", fontSize: "1.05rem", maxWidth: "540px", margin: "0 auto", lineHeight: 1.7 }}>
            Cada caso é único. Por isso, analisamos sua situação individualmente e definimos a melhor estratégia para você.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={i}
              className="card-accent fade-up rounded-lg p-6 flex flex-col"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div style={{ color: "#F5C518", marginBottom: "1rem" }}>{s.icon}</div>
              <h3 style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: "1.05rem", color: "#F7F7F7", marginBottom: "0.75rem" }}>{s.title}</h3>
              <p style={{ fontFamily: "Roboto", color: "#A0A0A0", fontSize: "0.875rem", lineHeight: 1.7, margin: 0, flex: 1 }}>{s.desc}</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mt-5 no-underline transition-colors duration-200"
                style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: "0.8rem", color: "#F5C518", letterSpacing: "0.05em", textTransform: "uppercase" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFD700")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#F5C518")}
              >
                Quero Atendimento <ArrowRightIcon />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────
function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Você Entra em Contato",
      desc: "Envie sua situação pelo WhatsApp. É rápido, simples e sem compromisso. Nossa equipe está disponível todos os dias das 8h às 20h.",
    },
    {
      num: "02",
      title: "Analisamos Seu Caso",
      desc: "Avaliamos seu problema, documentos e possibilidades. Você recebe um diagnóstico claro e honesto sobre as chances de sucesso.",
    },
    {
      num: "03",
      title: "Definimos a Estratégia",
      desc: "Com base na análise, apresentamos a melhor estratégia para o seu caso — sem enrolação, sem juridiquês.",
    },
    {
      num: "04",
      title: "Iniciamos Seu Atendimento",
      desc: "Damos andamento ao recurso, defesa ou acompanhamento. Você fica informado em cada etapa do processo.",
    },
  ];

  return (
    <section id="como-funciona" style={{ background: "#111111", padding: "5rem 0" }}>
      <div className="container">
        <div className="text-center mb-12 fade-up">
          <div className="section-label justify-center">Como Funciona</div>
          <h2 style={{ fontFamily: "Montserrat", fontWeight: 800, fontSize: "clamp(1.75rem, 4vw, 2.75rem)", color: "#F7F7F7", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
            Simples, Rápido e{" "}
            <span style={{ color: "#F5C518" }}>Sem Complicação</span>
          </h2>
          <p style={{ fontFamily: "Roboto", color: "#A0A0A0", fontSize: "1.05rem", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
            Em 4 passos você já tem seu caso em andamento. Sem burocracia, sem enrolação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="fade-up relative"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 left-full w-full h-px z-0"
                  style={{ background: "linear-gradient(90deg, rgba(245,197,24,0.4), transparent)", width: "calc(100% - 2rem)", left: "calc(100% - 1rem)" }}
                />
              )}
              <div
                className="rounded-xl p-6 relative z-10 h-full"
                style={{ background: "#1C1C1C", border: "1px solid rgba(245,197,24,0.08)" }}
              >
                <div
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 900,
                    fontSize: "2.5rem",
                    color: "#F5C518",
                    lineHeight: 1,
                    marginBottom: "0.75rem",
                  }}
                >
                  {step.num}
                </div>
                <h3 style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: "1rem", color: "#F7F7F7", marginBottom: "0.75rem" }}>{step.title}</h3>
                <p style={{ fontFamily: "Roboto", color: "#A0A0A0", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 fade-up">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ fontSize: "1rem", padding: "1rem 2rem" }}>
            <WhatsAppIcon size={20} color="white" />
            Começar Agora — É Grátis
          </a>
          <p style={{ fontFamily: "Roboto", color: "#606060", fontSize: "0.8rem", marginTop: "0.75rem" }}>
            Análise inicial gratuita e sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Benefits Section ─────────────────────────────────────────────────────────
function BenefitsSection() {
  const benefits = [
    { icon: "💰", title: "Economia de Dinheiro", desc: "Evite pagar multas indevidas ou injustas. Um recurso bem feito pode cancelar a multa completamente." },
    { icon: "🛡️", title: "Proteja Sua CNH", desc: "Evite a acumulação de pontos que pode levar à suspensão ou cassação da sua habilitação." },
    { icon: "😌", title: "Tranquilidade Total", desc: "Deixe a burocracia com quem entende. Você foca na sua vida enquanto cuidamos do seu caso." },
    { icon: "⚡", title: "Atendimento Rápido", desc: "Respondemos no mesmo dia. Sabemos que os prazos são curtos e agimos com urgência." },
    { icon: "🌎", title: "Atendimento Online", desc: "Não importa onde você esteja no Brasil — atendemos 100% online com a mesma qualidade." },
    { icon: "📋", title: "Análise Personalizada", desc: "Cada caso é único. Analisamos os detalhes da sua autuação para montar a melhor defesa." },
  ];

  return (
    <section style={{ background: "#0D0D0D", padding: "5rem 0" }}>
      <div className="container">
        <div className="text-center mb-12 fade-up">
          <div className="section-label justify-center">Benefícios</div>
          <h2 style={{ fontFamily: "Montserrat", fontWeight: 800, fontSize: "clamp(1.75rem, 4vw, 2.75rem)", color: "#F7F7F7", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
            O Que Você Ganha ao{" "}
            <span style={{ color: "#F5C518" }}>Nos Contratar</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="fade-up rounded-xl p-6"
              style={{
                background: "#1C1C1C",
                border: "1px solid rgba(255,255,255,0.05)",
                transitionDelay: `${i * 0.1}s`,
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(245,197,24,0.2)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.05)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{b.icon}</div>
              <h3 style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: "1rem", color: "#F7F7F7", marginBottom: "0.5rem" }}>{b.title}</h3>
              <p style={{ fontFamily: "Roboto", color: "#A0A0A0", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials Section ─────────────────────────────────────────────────────
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Carlos M.",
      city: "Blumenau, SC",
      stars: 5,
      text: "Atendimento rápido, claro e muito profissional. Conseguiram cancelar minha multa em menos de 30 dias. Recomendo demais!",
      initial: "C",
    },
    {
      name: "Fernanda R.",
      city: "São Paulo, SP",
      stars: 5,
      text: "Me ajudaram com meu processo de suspensão da CNH. Achei que ia perder minha habilitação, mas eles resolveram tudo. Muito obrigada!",
      initial: "F",
    },
    {
      name: "Roberto S.",
      city: "Joinville, SC",
      stars: 5,
      text: "Excelente atendimento e muita atenção ao meu caso. Explicaram tudo com clareza e me passaram segurança desde o primeiro contato.",
      initial: "R",
    },
    {
      name: "Ana Paula T.",
      city: "Florianópolis, SC",
      stars: 5,
      text: "Recebi uma multa que considerei injusta. A equipe analisou tudo e entrou com o recurso. Resultado: multa cancelada! Serviço impecável.",
      initial: "A",
    },
    {
      name: "Marcelo L.",
      city: "Curitiba, PR",
      stars: 5,
      text: "Fui atendido online mesmo estando em outro estado. Processo todo pelo WhatsApp, muito prático. Profissionais sérios e comprometidos.",
      initial: "M",
    },
    {
      name: "Juliana C.",
      city: "Brusque, SC",
      stars: 5,
      text: "Estava desesperada com a situação da minha CNH. Eles me acalmaram, explicaram tudo e resolveram. Atendimento humano e eficiente.",
      initial: "J",
    },
  ];

  return (
    <section id="depoimentos" style={{ background: "#111111", padding: "5rem 0" }}>
      <div className="container">
        <div className="text-center mb-12 fade-up">
          <div className="section-label justify-center">Depoimentos</div>
          <h2 style={{ fontFamily: "Montserrat", fontWeight: 800, fontSize: "clamp(1.75rem, 4vw, 2.75rem)", color: "#F7F7F7", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
            O Que Nossos Clientes{" "}
            <span style={{ color: "#F5C518" }}>Dizem Sobre Nós</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            <span style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: "1rem", color: "#F5C518", marginLeft: "0.5rem" }}>4.9/5</span>
            <span style={{ fontFamily: "Roboto", color: "#A0A0A0", fontSize: "0.875rem" }}>— baseado em +200 avaliações</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="fade-up rounded-xl p-6"
              style={{
                background: "#1C1C1C",
                border: "1px solid rgba(255,255,255,0.05)",
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, j) => <StarIcon key={j} />)}
              </div>
              <p style={{ fontFamily: "Roboto", color: "#C0C0C0", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.25rem", fontStyle: "italic" }}>
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="flex items-center justify-center rounded-full flex-shrink-0"
                  style={{ width: 40, height: 40, background: "#F5C518", fontFamily: "Montserrat", fontWeight: 800, fontSize: "1rem", color: "#0D0D0D" }}
                >
                  {t.initial}
                </div>
                <div>
                  <div style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: "0.875rem", color: "#F7F7F7" }}>{t.name}</div>
                  <div style={{ fontFamily: "Roboto", fontSize: "0.75rem", color: "#A0A0A0" }}>{t.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Brazil Section ───────────────────────────────────────────────────────────
function BrazilSection() {
  const features = [
    { icon: "📱", label: "Atendimento 100% Online" },
    { icon: "📄", label: "Envio Digital de Documentos" },
    { icon: "🔍", label: "Análise à Distância" },
    { icon: "⚡", label: "Suporte Rápido pelo WhatsApp" },
  ];

  return (
    <section style={{ background: "#F5C518", padding: "4rem 0" }}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="fade-up">
            <div
              className="inline-flex items-center gap-2 mb-4"
              style={{
                background: "rgba(0,0,0,0.1)",
                borderRadius: "100px",
                padding: "0.375rem 1rem",
              }}
            >
              <GlobeIcon />
              <span style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.1em", color: "#0D0D0D", textTransform: "uppercase" }}>
                Cobertura Nacional
              </span>
            </div>
            <h2 style={{ fontFamily: "Montserrat", fontWeight: 900, fontSize: "clamp(1.75rem, 4vw, 2.75rem)", color: "#0D0D0D", marginBottom: "1rem", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
              Atendemos Todo o Brasil
            </h2>
            <p style={{ fontFamily: "Roboto", color: "#333", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Mesmo se você não estiver em Blumenau, podemos te atender. A Retira Multas oferece atendimento e acompanhamento para clientes de todo o Brasil, com praticidade, agilidade e suporte especializado.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span style={{ fontSize: "1.25rem" }}>{f.icon}</span>
                  <span style={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "0.875rem", color: "#0D0D0D" }}>{f.label}</span>
                </div>
              ))}
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: "#0D0D0D", color: "#F5C518" }}>
              <WhatsAppIcon size={20} color="#F5C518" />
              Falar com Especialista
            </a>
          </div>
          <div className="fade-up flex justify-center" style={{ transitionDelay: "0.2s" }}>
            <div className="brazil-map" style={{ maxWidth: "500px", width: "100%", margin: "0 auto" }}>
              <div
                className="map-container"
                style={{
                  background: "#0D0D0D",
                  border: "2px solid rgba(245,197,24,0.4)",
                  borderRadius: "1rem",
                  padding: "3rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  aspectRatio: "1",
                  overflow: "hidden",
                }}
              >
                <i
                  className="fas fa-map-marked-alt"
                  style={{
                    fontSize: "5rem",
                    color: "#F5C518",
                    position: "absolute",
                    zIndex: 20,
                  }}
                />
                <div
                  className="location-pins"
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                  }}
                >
                  <div
                    className="pin"
                    style={{
                      position: "absolute",
                      top: "60%",
                      left: "55%",
                      width: "12px",
                      height: "12px",
                      background: "#F5C518",
                      borderRadius: "50%",
                      animation: "pulse-pin 2s infinite",
                      boxShadow: "0 0 8px rgba(245,197,24,0.8)",
                    }}
                  />
                  <div
                    className="pin"
                    style={{
                      position: "absolute",
                      top: "40%",
                      left: "45%",
                      width: "12px",
                      height: "12px",
                      background: "#F5C518",
                      borderRadius: "50%",
                      animation: "pulse-pin 2s infinite",
                      animationDelay: "0.5s",
                      boxShadow: "0 0 8px rgba(245,197,24,0.8)",
                    }}
                  />
                  <div
                    className="pin"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "65%",
                      width: "12px",
                      height: "12px",
                      background: "#F5C518",
                      borderRadius: "50%",
                      animation: "pulse-pin 2s infinite",
                      animationDelay: "1s",
                      boxShadow: "0 0 8px rgba(245,197,24,0.8)",
                    }}
                  />
                </div>
              </div>
              <style>{`
                @keyframes pulse-pin {
                  0% { opacity: 1; transform: scale(1); }
                  50% { opacity: 0.4; transform: scale(0.7); }
                  100% { opacity: 0; transform: scale(0.3); }
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Urgency Section ──────────────────────────────────────────────────────────
function UrgencySection() {
  return (
    <section style={{ background: "#0D0D0D", padding: "4rem 0" }}>
      <div className="container">
        <div
          className="rounded-2xl p-8 md:p-12 text-center fade-up"
          style={{
            background: "linear-gradient(135deg, #1A1200 0%, #1C1C1C 50%, #1A1200 100%)",
            border: "1px solid rgba(245,197,24,0.3)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative glow */}
          <div style={{ position: "absolute", top: "-50%", left: "50%", transform: "translateX(-50%)", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(245,197,24,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>⏰</div>
            <h2 style={{ fontFamily: "Montserrat", fontWeight: 900, fontSize: "clamp(1.5rem, 4vw, 2.5rem)", color: "#F5C518", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
              Não Perca o Prazo!
            </h2>
            <p style={{ fontFamily: "Roboto", color: "#C0C0C0", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "600px", margin: "0 auto 0.75rem" }}>
              Após receber a notificação de infração, você tem <strong style={{ color: "#F5C518" }}>apenas 30 dias</strong> para entrar com a defesa prévia. Após esse prazo, você perde o direito de recorrer.
            </p>
            <p style={{ fontFamily: "Roboto", color: "#A0A0A0", fontSize: "0.9rem", marginBottom: "2rem" }}>
              Cada dia que passa é um dia a menos para defender seus direitos. Aja agora.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ fontSize: "1.1rem", padding: "1.1rem 2.5rem" }}>
              <WhatsAppIcon size={22} color="white" />
              Quero Recorrer Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact Section ──────────────────────────────────────────────────────────
function ContactSection() {
  const [formData, setFormData] = useState({ nome: "", telefone: "", cidade: "", assunto: "", mensagem: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Olá! Vim pelo site da Retira Multas.\n\nNome: ${formData.nome}\nTelefone: ${formData.telefone}\nCidade: ${formData.cidade}\nAssunto: ${formData.assunto}\nMensagem: ${formData.mensagem}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%",
    background: "#1C1C1C",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "0.5rem",
    padding: "0.875rem 1rem",
    color: "#F7F7F7",
    fontFamily: "Roboto",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box" as const,
  };

  return (
    <section id="contato" style={{ background: "#111111", padding: "5rem 0" }}>
      <div className="container">
        <div className="text-center mb-12 fade-up">
          <div className="section-label justify-center">Contato</div>
          <h2 style={{ fontFamily: "Montserrat", fontWeight: 800, fontSize: "clamp(1.75rem, 4vw, 2.75rem)", color: "#F7F7F7", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
            Fale Agora com a{" "}
            <span style={{ color: "#F5C518" }}>Retira Multas</span>
          </h2>
          <p style={{ fontFamily: "Roboto", color: "#A0A0A0", fontSize: "1.05rem", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
            Receba atendimento especializado e entenda quais são as melhores opções para o seu caso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="fade-up flex flex-col gap-5">
            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl p-5 no-underline transition-all duration-300"
              style={{ background: "rgba(37,211,102,0.08)", border: "1px solid rgba(37,211,102,0.2)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(37,211,102,0.12)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(37,211,102,0.08)"; }}
            >
              <div className="flex items-center justify-center rounded-full flex-shrink-0" style={{ width: 52, height: 52, background: "#25D366" }}>
                <WhatsAppIcon size={26} color="white" />
              </div>
              <div>
                <div style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: "0.75rem", color: "#25D366", textTransform: "uppercase", letterSpacing: "0.1em" }}>WhatsApp</div>
                <div style={{ fontFamily: "Montserrat", fontWeight: 800, fontSize: "1.3rem", color: "#F7F7F7" }}>(47) 99762-4005</div>
                <div style={{ fontFamily: "Roboto", fontSize: "0.8rem", color: "#A0A0A0" }}>Clique para abrir conversa</div>
              </div>
            </a>

            {/* Info cards */}
            {[
              {
                icon: <ClockIcon />,
                title: "Atendimento Presencial",
                lines: ["Segunda a Sexta, das 10h às 18h"],
              },
              {
                icon: <PhoneIcon />,
                title: "Urgências no WhatsApp",
                lines: ["Todos os dias, das 8h às 20h"],
              },
              {
                icon: <MapPinIcon />,
                title: "Endereço",
                lines: ["Rod. Paul Fritz Kuenrich, 1600", "Itoupava Norte, Blumenau - SC", "Sala em frente ao DETRAN", "Shopping Park Europeu"],
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 rounded-xl p-5" style={{ background: "#1C1C1C", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ color: "#F5C518", flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <div style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: "0.875rem", color: "#F5C518", marginBottom: "0.25rem" }}>{item.title}</div>
                  {item.lines.map((line, j) => (
                    <div key={j} style={{ fontFamily: "Roboto", fontSize: "0.875rem", color: "#A0A0A0", lineHeight: 1.6 }}>{line}</div>
                  ))}
                </div>
              </div>
            ))}

            {/* Map buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://maps.google.com/?q=Rod.+Paul+Fritz+Kuenrich,+1600,+Itoupava+Norte,+Blumenau+-+SC"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ fontSize: "0.875rem", padding: "0.75rem 1.25rem" }}
              >
                <MapPinIcon />
                Ver Localização
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ fontSize: "0.875rem", padding: "0.75rem 1.25rem" }}>
                <WhatsAppIcon size={16} color="white" />
                Falar no WhatsApp
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="fade-up" style={{ transitionDelay: "0.2s" }}>
            <div className="rounded-xl p-6" style={{ background: "#1C1C1C", border: "1px solid rgba(255,255,255,0.05)" }}>
              <h3 style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: "1.1rem", color: "#F7F7F7", marginBottom: "1.5rem" }}>
                Enviar Mensagem
              </h3>
              {submitted ? (
                <div className="text-center py-8">
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
                  <h4 style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: "1.1rem", color: "#F5C518", marginBottom: "0.5rem" }}>Mensagem Enviada!</h4>
                  <p style={{ fontFamily: "Roboto", color: "#A0A0A0", fontSize: "0.9rem" }}>Você foi redirecionado para o WhatsApp. Nossa equipe responderá em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label style={{ fontFamily: "Roboto", fontSize: "0.8rem", color: "#A0A0A0", display: "block", marginBottom: "0.375rem" }}>Nome *</label>
                      <input
                        type="text"
                        required
                        placeholder="Seu nome"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "#F5C518")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                      />
                    </div>
                    <div>
                      <label style={{ fontFamily: "Roboto", fontSize: "0.8rem", color: "#A0A0A0", display: "block", marginBottom: "0.375rem" }}>Telefone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="(00) 00000-0000"
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "#F5C518")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                      />
                    </div>
                  </div>
                  <div>
                    <label style={{ fontFamily: "Roboto", fontSize: "0.8rem", color: "#A0A0A0", display: "block", marginBottom: "0.375rem" }}>Cidade</label>
                    <input
                      type="text"
                      placeholder="Sua cidade"
                      value={formData.cidade}
                      onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#F5C518")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: "Roboto", fontSize: "0.8rem", color: "#A0A0A0", display: "block", marginBottom: "0.375rem" }}>Assunto</label>
                    <select
                      value={formData.assunto}
                      onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
                      style={{ ...inputStyle, cursor: "pointer" }}
                      onFocus={(e) => (e.target.style.borderColor = "#F5C518")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    >
                      <option value="" style={{ background: "#1C1C1C" }}>Selecione o assunto</option>
                      <option value="Recurso de Multa" style={{ background: "#1C1C1C" }}>Recurso de Multa</option>
                      <option value="Defesa de Suspensão de CNH" style={{ background: "#1C1C1C" }}>Defesa de Suspensão de CNH</option>
                      <option value="Defesa de Cassação de CNH" style={{ background: "#1C1C1C" }}>Defesa de Cassação de CNH</option>
                      <option value="Acompanhamento de Processo" style={{ background: "#1C1C1C" }}>Acompanhamento de Processo</option>
                      <option value="Consultoria Jurídica" style={{ background: "#1C1C1C" }}>Consultoria Jurídica</option>
                      <option value="Análise de Pontuação" style={{ background: "#1C1C1C" }}>Análise de Pontuação</option>
                      <option value="Outro" style={{ background: "#1C1C1C" }}>Outro</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontFamily: "Roboto", fontSize: "0.8rem", color: "#A0A0A0", display: "block", marginBottom: "0.375rem" }}>Mensagem</label>
                    <textarea
                      rows={4}
                      placeholder="Descreva brevemente sua situação..."
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      style={{ ...inputStyle, resize: "vertical" }}
                      onFocus={(e) => (e.target.style.borderColor = "#F5C518")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                  <button type="submit" className="btn-whatsapp w-full justify-center" style={{ display: "flex", marginTop: "0.5rem" }}>
                    <SendIcon />
                    Enviar via WhatsApp
                  </button>
                  <p style={{ fontFamily: "Roboto", color: "#606060", fontSize: "0.75rem", textAlign: "center", margin: 0 }}>
                    Ao enviar, você será redirecionado para o WhatsApp
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const links = [
    { label: "Início", href: "#hero" },
    { label: "Quem Somos", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <footer style={{ background: "#080808", borderTop: "1px solid rgba(245,197,24,0.1)", padding: "3rem 0 1.5rem" }}>
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center justify-center w-9 h-9 rounded" style={{ background: "#F5C518" }}>
                <span style={{ fontFamily: "Montserrat", fontWeight: 900, fontSize: "1rem", color: "#0D0D0D" }}>RM</span>
              </div>
              <span style={{ fontFamily: "Montserrat", fontWeight: 800, fontSize: "1.1rem", color: "#F7F7F7" }}>
                Retira<span style={{ color: "#F5C518" }}>Multas</span>
              </span>
            </div>
            <p style={{ fontFamily: "Roboto", color: "#606060", fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "1rem" }}>
              Defesa especializada para proteger sua CNH e seus direitos no trânsito.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/retiramultascnh/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-lg transition-all duration-200 no-underline"
                style={{ width: 36, height: 36, background: "rgba(255,255,255,0.05)", color: "#A0A0A0" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#F5C518"; (e.currentTarget as HTMLAnchorElement).style.background = "rgba(245,197,24,0.1)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#A0A0A0"; (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)"; }}
              >
                <InstagramIcon />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-lg transition-all duration-200 no-underline"
                style={{ width: 36, height: 36, background: "rgba(255,255,255,0.05)", color: "#A0A0A0" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#25D366"; (e.currentTarget as HTMLAnchorElement).style.background = "rgba(37,211,102,0.1)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#A0A0A0"; (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)"; }}
              >
                <WhatsAppIcon size={20} color="currentColor" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: "0.875rem", color: "#F5C518", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Links Rápidos
            </h4>
            <div className="flex flex-col gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="no-underline transition-colors duration-200"
                  style={{ fontFamily: "Roboto", fontSize: "0.875rem", color: "#606060" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#F5C518")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#606060")}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: "0.875rem", color: "#F5C518", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Contato
            </h4>
            <div className="flex flex-col gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 no-underline" style={{ color: "#A0A0A0" }}>
                <WhatsAppIcon size={16} color="#25D366" />
                <span style={{ fontFamily: "Roboto", fontSize: "0.875rem" }}>(47) 99762-4005</span>
              </a>
              <div className="flex items-start gap-2" style={{ color: "#A0A0A0" }}>
                <MapPinIcon />
                <span style={{ fontFamily: "Roboto", fontSize: "0.8rem", lineHeight: 1.6 }}>
                  Rod. Paul Fritz Kuenrich, 1600<br />
                  Itoupava Norte, Blumenau - SC<br />
                  Em frente ao DETRAN
                </span>
              </div>
              <div style={{ fontFamily: "Roboto", fontSize: "0.8rem", color: "#606060" }}>
                <div>Presencial: Seg–Sex, 10h–18h</div>
                <div>WhatsApp: Todos os dias, 8h–20h</div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 mt-6">
          <p style={{ fontFamily: "Roboto", fontSize: "0.75rem", color: "#404040", margin: 0 }}>
            © {new Date().getFullYear()} Retira Multas. Todos os direitos reservados. CNPJ: 57.111.920/0001-02
          </p>
          <p style={{ fontFamily: "Roboto", fontSize: "0.75rem", color: "#404040", margin: 0 }}>
            Atendimento em todo o Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Floating WhatsApp ────────────────────────────────────────────────────────
function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      title="Falar no WhatsApp"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.5s ease" }}
    >
      <WhatsAppIcon size={28} color="white" />
    </a>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Home() {
  useScrollAnimation();

  return (
    <div className="min-h-screen" style={{ background: "#0D0D0D" }}>
      <Navbar />
      <HeroSection />
      <StatsBar />
      <ProblemSection />
      <AboutSection />
      <ServicesSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TestimonialsSection />
      <BrazilSection />
      <UrgencySection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
