import Link from "next/link";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="site-container footer-grid">
        <div className="footer-brand">
          <Link className="brand brand--footer p-2 rounded-md bg-[#f2600c]" href="/">
            <Image src="/logo.png" width={1219} height={358} className="w-40 h-auto" alt="Brain Capital Asset" />
          </Link>
          <p>Präzise Finanzstrategien für Stabilität, Liquidität und nachhaltiges Wachstum.</p>
          <div className="footer-social">
            <a href="#" aria-label="LinkedIn"><Linkedin size={16} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={16} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={16} /></a>
          </div>
        </div>
        <div className="footer-column"><span>Navigation</span><Link href="/#leistungen">Leistungen</Link><Link href="/#unternehmen">Unternehmen</Link><Link href="/#warum-rch">Warum Capital Brain</Link><Link href="/#kontakt">Kontakt</Link></div>
        <div className="footer-column"><span>Expertise</span><Link href="/verm-gensverwaltung">Vermögensverwaltung</Link><Link href="/ipo">Kapitalmarkt & IPO</Link><Link href="/arbitrage">Fest- & Tagesgeld</Link><Link href="/login">Kundenlogin</Link></div>
        <div className="footer-column footer-contact"><span>Direkter Kontakt</span><a href="tel:+4930519994482"><Phone size={15} />089 244 167 734</a><a href="mailto:info@braincapitalasset.com"><Mail size={15} />E-Mail senden <ArrowUpRight size={14} /></a><Link href="/Impressum">Impressum</Link></div>
      </div>
      <div className="site-container footer-legal">
        <p>
          Brain Capital Asset  vermittelt und begleitet Finanzstrategien im Bereich Vermögensverwaltung, Kapitalmarkt & IPO sowie Fest- und Tagesgeld. Die Inhalte dieser Website dienen ausschließlich der allgemeinen Information und stellen keine individuelle Anlageberatung dar. Kapitalanlagen sind grundsätzlich mit Risiken verbunden, unter anderem dem Risiko des teilweisen oder vollständigen Verlusts des eingesetzten Kapitals.
        </p>
        <p>
          Vor einer Entscheidung empfehlen wir ein persönliches Beratungsgespräch, in dem Ihre individuelle Situation, Ihre Ziele und Ihre Risikobereitschaft berücksichtigt werden.
        </p>
      </div>
      <div className="site-container footer-bottom">
        <span>© {new Date().getFullYear()} Brain Capital Asset </span>
        <div><Link href="/Impressum">Impressum</Link><span>Datenschutz</span></div>
      </div>
    </footer>
  );
}
