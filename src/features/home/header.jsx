"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  ChevronDown,
  Globe2,
  Headphones,
  LockKeyhole,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const primaryLinks = [
  ["Leistungen", "/#leistungen"],
  ["Unternehmen", "/#unternehmen"],
  ["Warum Capital Brain", "/#warum-capitalbrain"],
  ["Team", "/#team"],
  ["Impressum", "/Impressum"],
];

const expertiseLinks = [
  ["Vermögensverwaltung", "/verm-gensverwaltung"],
  ["Kapitalmarkt & IPO", "/ipo"],
  ["Fest- & Tagesgeld", "/arbitrage"],
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="header-primary w-full">
        <div className="site-container header-primary__inner w-full">
          <Link className="brand bg-[var(--gold)] px-2 py-1 rounded-md" href="/" onClick={() => setOpen(false)} aria-label="Brain Capital Asset Startseite">
            <Image src="/logo.png" width={1219} height={358} className="w-28 h-auto" alt="Brain Capital Asset" priority />
          </Link>
          <p className="brand-claim"><strong>Ihr Partner </strong>für strukturierte Finanzstrategien</p>
          <div className="header-utilities">
            <a href="/#kontakt"><Headphones size={16} /> Kontakt</a>
            <button className="language-button" type="button" aria-label="Sprache Deutsch"><Globe2 size={18} /><span>DE</span></button>
            <Link className="header-login" href="/login"><LockKeyhole size={15} /> Einloggen <ChevronDown size={14} /></Link>
            <Link className="button button--primary header-cta" href="/#kontakt">Beratung anfragen</Link>
          </div>
          <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Menü schließen" : "Menü öffnen"}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <div className="header-secondary">
        <div className="site-container nav-shell">
          <nav className="desktop-nav" aria-label="Hauptnavigation">
            {primaryLinks.map(([label, href]) => <Link href={href} key={label}>{label}</Link>)}
            <div className="nav-dropdown">
              <button type="button">Expertise <ChevronDown size={15} /></button>
              <div className="nav-dropdown__menu">
                {expertiseLinks.map(([label, href]) => (
                  <Link href={href} key={label} className={pathname === href ? "active" : ""}>{label}<ArrowRight size={14} /></Link>
                ))}
              </div>
            </div>
          </nav>
          <Link className="secondary-contact" href="/#kontakt">Erstgespräch vereinbaren <ArrowRight size={15} /></Link>
        </div>
      </div>

      <div className={`mobile-menu ${open ? "mobile-menu--open" : ""}`}>
        <div className="mobile-menu__inner">
          <span className="micro-label">Navigation</span>
          {[...primaryLinks, ...expertiseLinks].map(([label, href], index) => (
            <Link href={href} key={label} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}<ArrowRight size={17} /></Link>
          ))}
          <div className="mobile-menu__actions">
            <Link href="/login" onClick={() => setOpen(false)}><LockKeyhole size={16} /> Kundenlogin</Link>
            <Link className="button button--primary" href="/#kontakt" onClick={() => setOpen(false)}>Beratung anfragen</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
