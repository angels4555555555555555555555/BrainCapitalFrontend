import { ArrowDown, ArrowRight } from "lucide-react";

export default function IpoHeroSection() {
  return <section className="detail-hero detail-hero--ipo"><div className="site-container detail-hero__content"><p className="eyebrow">Kapitalmarkt & IPO</p><h1>Den Börsengang strategisch vorbereiten.</h1><p>Wir strukturieren zentrale Schritte, schaffen belastbare Entscheidungsgrundlagen und begleiten den Zugang zum öffentlichen Kapitalmarkt.</p><div className="hero-actions"><a className="button button--primary" href="/#kontakt">Projekt besprechen <ArrowRight size={17} /></a><a className="button button--light" href="#details">Mehr erfahren <ArrowDown size={17} /></a></div></div></section>;
}
