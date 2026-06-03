import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Wallet,
  Coins,
  Repeat,
  ClipboardCheck,
  Rocket,
  Radio,
  Sparkles,
  Shirt,
  Send,
  ShieldCheck,
  LineChart,
  Lock,
  Users,
  Megaphone,
  Fuel,
  Zap,
} from "lucide-react";
import alienMascot from "@/assets/alien-mascot.png";
import { Starfield } from "./Starfield";
import { Ufo } from "./Ufo";

const CA_PLACEHOLDER = "Revealed Soon";
const SOON = "/coming-soon";
const TELEGRAM_URL = "https://t.me/AlienFuel";
const X_URL = "https://x.com/aliens_Fuel";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { href: "#story", label: "The Story" },
    { href: "#tokenomics", label: "Tokenomics" },
    { href: "#roadmap", label: "Roadmap" },
    { href: "#community", label: "Community" },
  ];
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-primary/15"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <a href="#top" className="flex items-center gap-2 group">
          <img
            src={alienMascot}
            alt="$ALIENS mascot"
            className="h-9 w-9 rounded-full ring-1 ring-primary/40 bg-purple-deep/30"
            width={36}
            height={36}
          />
          <span className="font-display font-black tracking-widest text-primary text-glow-soft text-lg">
            $ALIENS
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-primary transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a href={X_URL} target="_blank" rel="noopener noreferrer" aria-label="X" className="text-muted-foreground hover:text-primary transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2H21l-6.52 7.45L22 22h-6.83l-4.74-6.2L4.8 22H2l7.04-8.04L2 2h6.91l4.29 5.7L18.244 2Zm-1.2 18.2h1.86L7.04 3.7H5.06L17.045 20.2Z"/></svg>
          </a>
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-muted-foreground hover:text-primary transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M21.5 3.5 2.6 10.8c-1.3.5-1.3 1.2-.2 1.5l4.8 1.5 11-7c.5-.3 1-.1.6.2l-9 8.1.3.5 4.7 3.5c.8.5 1.4.2 1.6-.7l2.9-13.5c.3-1.3-.4-1.9-1.8-1.4Z"/></svg>
          </a>
          <a
            href="#buy"
            className="hidden sm:inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-bold font-display tracking-wider text-primary-foreground btn-glow"
          >
            BUY $ALIENS
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-25" />
      <Starfield count={120} />
      <div className="absolute top-32 left-6 stamp text-xs sm:text-sm hidden sm:block">
        TOP SECRET
      </div>
      <div className="absolute bottom-40 right-8 stamp text-xs sm:text-sm hidden sm:block">
        DECLASSIFIED · 2026
      </div>
      <Ufo className="absolute top-28 w-24 opacity-80 animate-ufo" />

      <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-3 py-1.5 text-xs font-display tracking-widest text-primary mb-6 shadow-[0_0_20px_oklch(0.85_0.22_155/0.25)]">
            <Fuel className="h-3.5 w-3.5 animate-pulse-glow" />
            FUELING THE ALIEN · LIVE
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl leading-[1.05] text-glow text-primary">
            THEY WALK<br />AMONG US
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
            The official 2026 declassified Solana meme coin. Built for the
            community, secured by the chain, fueled by belief.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a
              href="#buy"
              className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3.5 font-display font-bold tracking-wider text-primary-foreground btn-glow"
            >
              BUY NOW
            </a>
            <Link
              to={SOON}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-primary/40 px-7 py-3.5 font-display font-bold tracking-wider text-primary hover:bg-primary/10 transition"
            >
              <LineChart className="h-4 w-4" />
              VIEW LIVE CHART
            </Link>
          </div>
          <div className="mt-8 card-cyber rounded-lg p-3 sm:p-4 text-left">
            <div className="text-[10px] font-display tracking-widest text-primary/80 mb-1">
              CONTRACT ADDRESS
            </div>
            <code className="block text-xs sm:text-sm text-foreground/90 break-all font-mono">
              {CA_PLACEHOLDER}
            </code>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end pb-16">
          <div className="absolute inset-0 m-auto h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />

          {/* Token stream — fueling the alien */}
          <div className="pointer-events-none absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 hidden sm:flex flex-col gap-2 z-10">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-3 w-3 rounded-full bg-primary shadow-[0_0_12px_oklch(0.85_0.22_155/0.9)] animate-fuel-stream"
                style={{ animationDelay: `${i * 0.4}s` }}
              />
            ))}
          </div>

          <img
            src={alienMascot}
            alt="Cute grey alien being fueled with $ALIENS tokens"
            className="relative w-64 sm:w-80 lg:w-[26rem] drop-shadow-[0_0_40px_rgba(0,255,157,0.45)] animate-float"
            width={520}
            height={520}
          />

          {/* Fuel gauge */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-56 sm:w-72 card-cyber rounded-lg px-4 py-3">
            <div className="flex items-center justify-between text-[10px] font-display tracking-widest mb-1.5">
              <span className="flex items-center gap-1.5 text-primary"><Zap className="h-3 w-3" /> FUEL LEVEL</span>
              <span className="text-primary text-glow-soft">98%</span>
            </div>
            <div className="h-2 rounded-full bg-secondary overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-primary"
                style={{ width: "98%", boxShadow: "0 0 14px oklch(0.85 0.22 155 / 0.7)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="text-xs font-display tracking-[0.3em] text-primary/80 mb-3">
            // {eyebrow}
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-primary text-glow">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function Story() {
  return (
    <Section id="story" eyebrow="ARCHIVE 01" title="DECLASSIFIED 2026">
      <div className="relative mx-auto max-w-3xl card-cyber rounded-2xl p-8 sm:p-12 scan-line">
        <Ufo className="absolute -top-8 -right-4 w-20 animate-float" />
        <div className="space-y-5 text-base sm:text-lg text-foreground/90 leading-relaxed">
          <p>
            For decades the government hid the truth. In 2026 the White House
            launched Aliens.gov, confirming what we always knew:{" "}
            <span className="text-primary font-semibold text-glow-soft">
              They Walk Among Us.
            </span>
          </p>
          <p>
            While the world debates borders,{" "}
            <span className="text-primary font-semibold">$ALIENS</span> focuses
            on the real invasion — the one happening on Solana.
          </p>
          <p>
            Born from the declassification files, $ALIENS is a community-driven
            token uniting believers, builders, and degens. No fake utility. No
            empty promises. Just transparent tokenomics, locked liquidity, and a
            cult ready to broadcast.
          </p>
        </div>
      </div>
    </Section>
  );
}

function Tokenomics() {
  const items = [
    { label: "Liquidity (Locked)", value: 80, note: "Locked at launch, verifiable on-chain", Icon: Lock },
    { label: "Marketing & Growth", value: 10, note: "Listings, partnerships, community ops", Icon: Megaphone },
    { label: "Team (Vested)", value: 10, note: "Long-term aligned, multi-month vest", Icon: Users },
  ];
  return (
    <Section id="tokenomics" eyebrow="ARCHIVE 02" title="TOKENOMICS">
      <div className="grid lg:grid-cols-3 gap-6 mb-10">
        {[
          { k: "Total Supply", v: "1,000,000,000" },
          { k: "Taxes", v: "0 / 0" },
          { k: "Network", v: "Solana" },
        ].map((s) => (
          <div key={s.k} className="card-cyber rounded-xl p-6 text-center">
            <div className="text-xs font-display tracking-widest text-primary/70">{s.k}</div>
            <div className="mt-2 font-display text-2xl sm:text-3xl text-foreground text-glow-soft">
              {s.v}
            </div>
          </div>
        ))}
      </div>
      <div className="card-cyber rounded-2xl p-6 sm:p-10">
        <div className="space-y-6">
          {items.map((it) => (
            <div key={it.label}>
              <div className="flex justify-between items-center text-sm sm:text-base mb-2">
                <span className="flex items-center gap-2 font-display tracking-wider text-foreground">
                  <it.Icon className="h-4 w-4 text-primary" />
                  {it.label}
                </span>
                <span className="font-display text-primary text-glow-soft">
                  {it.value}%
                </span>
              </div>
              <div className="h-3 rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                  style={{
                    width: `${it.value}%`,
                    boxShadow: "0 0 14px oklch(0.85 0.22 155 / 0.6)",
                  }}
                />
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{it.note}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Roadmap() {
  const phases = [
    { p: "PHASE 1", t: "Launch & Community", d: "Fair launch, LP locked, foundational believers onboarded.", Icon: Rocket },
    { p: "PHASE 2", t: "Listings & Visibility", d: "DEX trending, CMC/CoinGecko listings, CEX outreach.", Icon: Radio },
    { p: "PHASE 3", t: "Alien Identity", d: "PFP collection and on-chain holder perks for the cult.", Icon: Sparkles },
    { p: "PHASE 4", t: "IRL Invasion", d: "Merch drops, IRL events, and cross-chain expansion.", Icon: Shirt },
  ];
  return (
    <Section id="roadmap" eyebrow="ARCHIVE 03" title="MISSION ROADMAP">
      <ol className="relative grid md:grid-cols-2 gap-6">
        {phases.map((ph, i) => (
          <li
            key={ph.p}
            className="card-cyber rounded-xl p-6 relative overflow-hidden group transition"
          >
            <ph.Icon
              className="absolute -top-2 -right-2 h-24 w-24 text-primary/10 group-hover:text-primary/20 transition"
              strokeWidth={1}
            />
            <div className="text-xs font-display tracking-widest text-primary/80">
              {ph.p} · 0{i + 1}
            </div>
            <h3 className="mt-2 font-display text-xl text-foreground text-glow-soft">
              {ph.t}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{ph.d}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function HowToBuy() {
  const steps = [
    { n: 1, t: "Get a Solana wallet", d: "Install Phantom or Solflare on your phone or browser.", Icon: Wallet },
    { n: 2, t: "Fund with SOL", d: "Buy SOL on any major exchange and send it to your wallet.", Icon: Coins },
    { n: 3, t: "Swap on a DEX", d: "Open Raydium or Jupiter and connect your wallet.", Icon: Repeat },
    { n: 4, t: "Paste the contract", d: CA_PLACEHOLDER, Icon: ClipboardCheck },
  ];
  return (
    <Section id="buy" eyebrow="ARCHIVE 04" title="SECURE YOUR BAGS">
      <div className="grid sm:grid-cols-2 gap-5">
        {steps.map((s) => (
          <div key={s.n} className="card-cyber rounded-xl p-6 flex gap-4">
            <div className="shrink-0 h-12 w-12 rounded-lg bg-primary/15 border border-primary/40 flex items-center justify-center">
              <s.Icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-xs font-display tracking-widest text-primary/80">
                STEP 0{s.n}
              </div>
              <h3 className="font-display text-lg text-foreground mt-1">{s.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground break-all">{s.d}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          to={SOON}
          className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3.5 font-display font-bold tracking-wider text-primary-foreground btn-glow"
        >
          BUY ON RAYDIUM
        </Link>
        <Link
          to={SOON}
          className="inline-flex items-center justify-center rounded-md border border-primary/40 px-7 py-3.5 font-display font-bold tracking-wider text-primary hover:bg-primary/10 transition"
        >
          BUY ON JUPITER
        </Link>
      </div>
    </Section>
  );
}

function Community() {
  const pillars = [
    { Icon: ShieldCheck, t: "Liquidity Locked", d: "LP is locked and verifiable on-chain from day one." },
    { Icon: Users, t: "Community Owned", d: "Fair launch, no presale, no insider allocation." },
    { Icon: LineChart, t: "Transparent", d: "All wallets visible. Real tokenomics, no surprises." },
    { Icon: Sparkles, t: "Built to Last", d: "Branding, merch, and IRL activations on the way." },
  ];
  return (
    <Section id="community" eyebrow="ARCHIVE 05" title="WHY $ALIENS">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        {pillars.map((p) => (
          <div key={p.t} className="card-cyber rounded-xl p-6">
            <p.Icon className="h-7 w-7 text-primary mb-4" strokeWidth={1.5} />
            <h3 className="font-display text-base text-foreground text-glow-soft">
              {p.t}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
          </div>
        ))}
      </div>
      <div className="card-cyber rounded-2xl p-8 sm:p-12 text-center">
        <h3 className="font-display text-2xl sm:text-3xl text-primary text-glow">
          JOIN THE INVASION
        </h3>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
          Truthers, degens, and believers unite. The mothership is boarding now.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-3.5 font-display font-bold tracking-wider text-primary-foreground btn-glow"
          >
            <Send className="h-4 w-4" />
            JOIN TELEGRAM
          </a>
          <a
            href={X_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-primary/40 px-7 py-3.5 font-display font-bold tracking-wider text-primary hover:bg-primary/10 transition"
          >
            FOLLOW ON X
          </a>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-primary/15 py-10 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <img src={alienMascot} alt="" className="h-7 w-7 rounded-full" width={28} height={28} />
          <span className="font-display tracking-widest text-primary text-sm">$ALIENS</span>
        </div>
        <p className="text-xs text-muted-foreground text-center">
          © 2026 $ALIENS · Not financial advice · Pump responsibly · They walk among us
        </p>
        <div className="flex gap-4 text-muted-foreground text-xs font-display tracking-widest">
          <a href={X_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition" aria-label="X">X</a>
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition" aria-label="Telegram">TG</a>
          <Link to={SOON} className="hover:text-primary transition" aria-label="Dexscreener">DEX</Link>
        </div>
      </div>
    </footer>
  );
}

export function AlienSite() {
  return (
    <div className="relative min-h-screen">
      <NavBar />
      <main>
        <Hero />
        <Story />
        <Tokenomics />
        <Roadmap />
        <HowToBuy />
        <Community />
      </main>
      <Footer />
    </div>
  );
}
