import { ArrowDown, ArrowRight } from "lucide-react";

export default function AssetManagementHeroSection() {
  return (
    <section className="detail-hero detail-hero--wealth">
      <div className="site-container detail-hero__content">
        <p className="eyebrow">Vermögensstrategie</p>
        <h1>Vermögen strukturiert weiterentwickeln.</h1>
        <p>Individuelle Strategien verbinden Kapitalerhalt, Liquidität und langfristige Chancen in einem klaren Gesamtkonzept.</p>
        <div className="hero-actions"><a className="button button--primary" href="/#kontakt">Erstgespräch vereinbaren <ArrowRight size={17} /></a><a className="button button--light" href="#details">Ansatz entdecken <ArrowDown size={17} /></a></div>
      </div>
    </section>
  );
}
