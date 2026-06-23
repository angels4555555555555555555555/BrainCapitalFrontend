import { CalendarClock, RefreshCcw, ShieldCheck } from "lucide-react";

const options = [
  [RefreshCcw, "Tagesgeld", "Flexible Verfügbarkeit bei variabler Verzinsung – geeignet für Rücklagen und kurzfristig benötigtes Kapital."],
  [CalendarClock, "Festgeld", "Feste Laufzeiten und vereinbarte Zinssätze schaffen eine verlässliche Grundlage für die Ertragsplanung."],
  [ShieldCheck, "Sicherheitsrahmen", "Wir achten auf transparente Konditionen, solide Bankpartner und die jeweils geltende gesetzliche Einlagensicherung."],
];

export default function ArbitrageDetails() {
  return <section className="detail-section" id="details"><div className="site-container detail-intro"><div><p className="eyebrow">Stabile Basis</p><h2>Planbar anlegen, flexibel bleiben</h2></div><p>Fest- und Tagesgeld können den sicherheitsorientierten Teil einer Vermögensstruktur bilden. Gemeinsam prüfen wir, wie Laufzeit, Verfügbarkeit und Verzinsung zu Ihren Zielen passen.</p></div><div className="site-container detail-card-grid">{options.map(([Icon,title,text],i)=><article key={title}><span>0{i+1}</span><Icon size={24}/><h3>{title}</h3><p>{text}</p></article>)}</div><div className="site-container detail-note"><strong>Bestehende Verträge im Blick.</strong><p>Wenn ein Festgeldvertrag vorzeitig beendet werden soll, prüfen wir geeignete Übertragungs- oder Vermittlungsmöglichkeiten. Ziel ist eine nachvollziehbare Lösung, die potenzielle Nachteile reduziert.</p></div></section>;
}
