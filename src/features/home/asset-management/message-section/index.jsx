import { BarChart3, Compass, RefreshCw } from "lucide-react";

const points = [
  [Compass, "Ziele zuerst", "Ihre Ausgangslage, Prioritäten und Risikobereitschaft definieren den strategischen Rahmen."],
  [BarChart3, "Fundiert strukturieren", "Analysen und Marktkenntnis werden zu einem verständlichen, belastbaren Anlagekonzept."],
  [RefreshCw, "Laufend justieren", "Wir beobachten Veränderungen und passen die Strategie an, wenn Ziele oder Märkte es erfordern."],
];

export default function WelcomMessageSection() {
  return (
    <section className="detail-section" id="details">
      <div className="site-container detail-intro">
        <div><p className="eyebrow">Unser Ansatz</p><h2>Eine Strategie, die zu Ihrem Leben passt</h2></div>
        <p>Vermögensverwaltung beginnt für uns nicht mit einem Produkt, sondern mit einem klaren Verständnis Ihrer Ziele. Daraus entsteht eine transparente Struktur, die Stabilität und Entwicklung sinnvoll ausbalanciert.</p>
      </div>
      <div className="site-container detail-card-grid">
        {points.map(([Icon, title, text], i) => <article key={title}><span>0{i + 1}</span><Icon size={24} /><h3>{title}</h3><p>{text}</p></article>)}
      </div>
    </section>
  );
}
