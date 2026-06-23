import { BadgeCheck, Building2, ChartNoAxesCombined, Scale } from "lucide-react";

const benefits = [
  [ChartNoAxesCombined, "Wachstum finanzieren", "Ein IPO kann neues Eigenkapital für Expansion, Produktentwicklung oder die Stärkung der Bilanz erschließen."],
  [Building2, "Marktposition stärken", "Die Börsennotierung kann Sichtbarkeit und Glaubwürdigkeit gegenüber Kunden, Partnern und Talenten erhöhen."],
  [BadgeCheck, "Liquidität ermöglichen", "Gründer und frühe Investoren erhalten perspektivisch einen handelbaren Markt für ihre Beteiligungen."],
  [Scale, "Pflichten beherrschen", "Transparenz, Governance und Regulierung steigen. Eine saubere Vorbereitung macht diese Anforderungen steuerbar."],
];

export default function IPODetails() {
  return <section className="detail-section" id="details"><div className="site-container detail-intro"><div><p className="eyebrow">IPO im Überblick</p><h2>Kapitalzugang mit langfristiger Wirkung</h2></div><p>Der Börsengang ist mehr als eine Finanzierungsrunde. Er verändert Sichtbarkeit, Governance und Handlungsspielräume eines Unternehmens – und verlangt deshalb eine präzise Vorbereitung.</p></div><div className="site-container detail-card-grid detail-card-grid--four">{benefits.map(([Icon,title,text],i)=><article key={title}><span>0{i+1}</span><Icon size={24}/><h3>{title}</h3><p>{text}</p></article>)}</div><div className="site-container detail-note"><strong>Entscheidend ist die Vorbereitung.</strong><p>Wir ordnen Chancen und Anforderungen frühzeitig ein, strukturieren relevante Arbeitspakete und begleiten die Umsetzung mit klarem Blick auf Unternehmen und Investoren.</p></div></section>;
}
