import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CallToActionSection() {
  return <section className="detail-cta"><div className="site-container"><div><p className="eyebrow">Nächster Schritt</p><h2>Bringen wir Struktur in Ihre finanziellen Ziele.</h2></div><Link className="button button--primary" href="/#kontakt">Gespräch anfragen <ArrowRight size={17} /></Link></div></section>;
}
