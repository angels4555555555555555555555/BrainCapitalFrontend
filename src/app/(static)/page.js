import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  Check,
  Landmark,
  LineChart,
  Mail,
  MapPin,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  WalletCards,
} from "lucide-react";
import Header from "@/features/home/header";
import Footer from "@/features/home/footer";
import FaqAccordion from "@/features/home/faq-accordion";

const services = [
  {
    icon: LineChart,
    number: "01",
    title: "Kapitalmarkt & IPO",
    text: "Wir strukturieren den Weg zum Kapitalmarkt und begleiten Unternehmen sowie Investoren mit klaren, nachvollziehbaren Entscheidungen.",
    href: "/ipo",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Fest- & Tagesgeld",
    text: "Sicherheitsorientierte Lösungen für planbare Erträge, verfügbare Liquidität und den langfristigen Erhalt von Kapital.",
    href: "/arbitrage",
  },
  {
    icon: WalletCards,
    number: "03",
    title: "Vermögensstrategie",
    text: "Individuelle Konzepte verbinden Ihre finanziellen Ziele mit einer ausgewogenen Struktur aus Stabilität und Wachstum.",
    href: "/verm-gensverwaltung",
  },
];

const strengths = [
  [Target, "Individuell ausgerichtet", "Jede Strategie beginnt mit Ihren Zielen, Ihrem Zeithorizont und Ihrer persönlichen Risikobereitschaft."],
  [BarChart3, "Analytisch fundiert", "Marktdaten, Chancen und Risiken werden strukturiert bewertet und verständlich eingeordnet."],
  [BadgeCheck, "Transparent begleitet", "Sie erhalten klare Empfehlungen, nachvollziehbare Prozesse und einen festen Ansprechpartner."],
];

const faqs = [
  ["Wie läuft das Erstgespräch ab?", "In einem unverbindlichen Erstgespräch klären wir, wo Sie stehen und welche Struktur zu Ihren Zielen passt. Im Anschluss erhalten Sie eine klare Einordnung der nächsten Schritte."],
  ["Welche Leistungen bietet Brain Capital Asset an?", "Wir begleiten Sie in drei Kernbereichen: Kapitalmarkt & IPO, Fest- & Tagesgeld sowie individuelle Vermögensstrategien – jeweils abgestimmt auf Stabilität, Liquidität und Wachstum."],
  ["Wo ist Brain Capital Asset ansässig?", "Wir sind mit Standorten in Montabaur persönlich für Sie erreichbar und betreuen Mandate bundesweit."],
  ["Wie kann ich Kontakt aufnehmen?", "Sie erreichen uns telefonisch unter 089 244 167 734 oder per E-Mail an info@brain-capital-asset.com – alternativ nutzen Sie das Kontaktformular auf dieser Seite."],
];

const team = [
  {
    name: "Thomas Goldberg",
    role: "Finanzberater",
    image: "/image (1).jpg",
    text: "Entwickelt kapitalmarktorientierte Strategien mit einem klaren Fokus auf langfristige Wertschöpfung.",
  },
  {
    name: "Jan Beulich",
    role: "Investmentexperte",
    image: "/image (2).jpg",
    text: "Verbindet präzise Marktanalyse mit strategischem Weitblick bei der Strukturierung von Investments.",
  },
  {
    name: "Christiane Bauer",
    role: "Assistenz der Geschäftsführung",
    image: "/image (3).jpg",
    imagePosition: "center top",
    text: "Koordiniert zentrale Abläufe und sorgt für verlässliche, effiziente Kommunikation im Mandat.",
  },
];

function SectionHeading({ eyebrow, title, text, light = false }) {
  return (
    <div className={`section-heading ${light ? "section-heading--light" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="section-intro">{text}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero-shell">
        <div className="site-container hero-breadcrumb"><span>Startseite</span><span>/</span><strong>Finanzberatung</strong></div>
        <div className="site-container hero-grid">
          <div className="hero-copy">
            <div className="status-pill">Brain Capital Asset</div>
            <h1>Finanzstrategien <strong>voller Möglichkeiten</strong></h1>
            <p>
              Wir verbinden stabile Anlageformen mit strategischem Zugang zum
              Kapitalmarkt – persönlich, transparent und auf Ihre Ziele ausgerichtet.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#kontakt">
                Jetzt Beratung anfragen <ArrowRight size={17} />
              </a>
            </div>
            <div className="hero-trust">
              <div><strong>2 Standorte</strong><span>Montabaur</span></div>
              <div><strong>3 Kompetenzfelder</strong><span>Ein abgestimmtes System</span></div>
              <div><strong>Persönlich</strong><span>Feste Ansprechpartner</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="callout-section">
        <div className="site-container">
          <div className="callout-box">
            <h3>Unverbindliches Erstgespräch vereinbaren</h3>
            <p>In einem unverbindlichen Erstgespräch klären wir, wo Sie stehen und welche Struktur zu Ihren Zielen passt – ganz ohne Verpflichtung.</p>
            <a className="text-link" href="#kontakt">Termin anfragen <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="section" id="leistungen">
        <div className="site-container">
          <div className="heading-row">
            <SectionHeading
              eyebrow="Unsere Leistungen"
              title="Ein System für Ihre finanziellen Ziele"
              text="Drei Kompetenzfelder, präzise aufeinander abgestimmt und in einer klaren Strategie gebündelt."
            />
            <a href="#kontakt" className="text-link">Beratung anfragen <ArrowRight size={16} /></a>
          </div>
          <div className="service-grid">
            {services.map(({ icon: Icon, number, title, text, href }) => (
              <Link className="service-card" href={href} key={title}>
                <div className="card-top"><span className="icon-box"><Icon size={22} /></span><span>{number}</span></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="card-link">Mehr erfahren <ArrowRight size={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tinted" id="unternehmen">
        <div className="site-container story-grid">
          <div className="story-visual">
            <img src="https://images.unsplash.com/photo-1738737271801-d404a575d870?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Strategiegespräch zu Anlageformen und Kapitalmarkt" width={700} height={1200} sizes="(max-width: 860px) 100vw, 42vw rounded-md" />
            <div className="visual-note">
              <Sparkles size={19} />
              <div><span>Seit 2021</span><strong>Strategisch an Ihrer Seite</strong></div>
            </div>
          </div>
          <div className="story-copy">
            <SectionHeading eyebrow="Brain Capital Asset" title="Finanzberatung mit unternehmerischer Perspektive" />
            <p>
              Von Montabaur aus begleiten wir Unternehmen und
              Investoren in entscheidenden Finanzphasen. Unser Schwerpunkt liegt
              auf Kapitalmarkt- und IPO-Strategien sowie strukturierten Fest- und
              Tagesgeldlösungen.
            </p>
            <p>
              Als Teil einer unternehmerisch geprägten Holding denken wir über
              einzelne Produkte hinaus. Wir ordnen Chancen ein, machen Risiken
              sichtbar und entwickeln Lösungen, die Stabilität, Liquidität und
              Wachstum sinnvoll verbinden.
            </p>
            <div className="check-list">
              <span><Check size={17} /> Klare Entscheidungsgrundlagen</span>
              <span><Check size={17} /> Persönliche Begleitung</span>
              <span><Check size={17} /> Langfristiger Strategiehorizont</span>
            </div>
            <a className="button button--secondary" href="#kontakt">Unternehmen kennenlernen</a>
          </div>
        </div>
      </section>

      <section className="section" id="warum-capitalbrain">
        <div className="site-container">
          <SectionHeading
            eyebrow="Warum Capital Brain"
            title="Komplexität wird zu einer klaren nächsten Entscheidung"
            text="Unser Beratungsansatz ist strukturiert, verständlich und konsequent an Ihrem Mandat ausgerichtet."
          />
          <div className="strength-grid">
            {strengths.map(([Icon, title, text], index) => (
              <article className="strength-item" key={title}>
                <span className="strength-number">0{index + 1}</span>
                <Icon size={25} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--navy" id="team">
        <div className="site-container">
          <div className="heading-row">
            <SectionHeading
              light
              eyebrow="Unser Team"
              title="Erfahrung, die persönlich erreichbar bleibt"
              text="Ein kompaktes Team mit klaren Verantwortlichkeiten und kurzen Entscheidungswegen."
            />
            <div className="team-count"><Users size={18} /><span>3 Ansprechpartner</span></div>
          </div>
          <div className="team-grid">
            {team.map((person) => (
              <article className="team-card" key={person.name}>
                <Image src={person.image} alt={`${person.name}, ${person.role}`} width={640} height={720} sizes="(max-width: 620px) 100vw, (max-width: 860px) 50vw, 33vw" style={person.imagePosition ? { objectPosition: person.imagePosition } : undefined} />
                <div className="team-card__body">
                  <span>{person.role}</span>
                  <h3>{person.name}</h3>
                  <p>{person.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section quality-section">
        <div className="site-container quality-grid">
          <SectionHeading
            eyebrow="Qualitätsverständnis"
            title="Sorgfalt ist kein Zusatz. Sie ist die Grundlage."
            text="Fachliche Weiterbildung, belastbare Prozesse und hohe Compliance-Standards prägen jede Zusammenarbeit."
          />
          <div className="quality-list">
            <div><BadgeCheck size={22} /><span><strong>Geprüfte Kompetenz</strong>Fundierte Einordnung statt pauschaler Empfehlungen.</span></div>
            <div><ShieldCheck size={22} /><span><strong>Verantwortungsvolle Prozesse</strong>Transparenz und Sorgfalt in jeder Mandatsphase.</span></div>
            <div><TrendingUp size={22} /><span><strong>Aktuelles Marktwissen</strong>Strategien werden kontinuierlich neu bewertet.</span></div>
          </div>
        </div>
      </section>

      <section className="section section--tinted testimonials-section">
        <div className="site-container">
          <SectionHeading eyebrow="Mandantenstimmen" title="Zusammenarbeit, die Vertrauen schafft" />
          <div className="testimonial-grid">
            <article>
              <Quote size={26} />
              <p>„Die Beratung war transparent, klar strukturiert und mit einem überzeugenden Blick auf langfristige Finanzlösungen verbunden.“</p>
              <footer><strong>Michael Becker</strong><span>Becker Invest Solutions GmbH</span></footer>
            </article>
            <article>
              <Quote size={26} />
              <p>„Fundierte Marktkenntnis und eine nachvollziehbare Vorgehensweise haben uns in jeder Phase Sicherheit gegeben.“</p>
              <footer><strong>Thomas Keller</strong><span>Keller Advisory Services</span></footer>
            </article>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="site-container">
          <SectionHeading eyebrow="Häufige Fragen" title="Antworten auf Ihre wichtigsten Fragen" />
          <FaqAccordion items={faqs} />
          <p className="faq-footnote">Weitere Fragen? <a href="#kontakt">Sprechen Sie uns direkt an</a></p>
        </div>
      </section>

      <section className="section contact-section" id="kontakt">
        <div className="site-container contact-grid">
          <div className="contact-copy">
            <SectionHeading light eyebrow="Kontakt" title="Lassen Sie uns über Ihre nächsten Schritte sprechen" />
            <p>In einem unverbindlichen Erstgespräch klären wir, wo Sie stehen und welche Struktur zu Ihren Zielen passt.</p>
            <div className="contact-links">
              <a href="tel:+4930519994482"><span><Phone size={19} /></span><div><small>Telefon</small><strong>089 244 167 734</strong></div></a>
              <a href="mailto:info@brain-capital-asset.com"><span><Mail size={19} /></span><div><small>E-Mail</small><strong>info@brain-capital-asset.com</strong></div></a>
              <div><span><MapPin size={19} /></span><div><small>Standorte</small><strong>Montabaur</strong></div></div>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-heading"><span>Erstgespräch</span><strong>Nachricht senden</strong></div>
            <div className="form-grid">
              <label>Vor- und Nachname<input name="name" type="text" placeholder="Ihr Name" /></label>
              <label>E-Mail-Adresse<input name="email" type="email" placeholder="name@unternehmen.de" /></label>
              <label className="full">Worum geht es?<select name="topic" defaultValue=""><option value="" disabled>Bitte auswählen</option><option>Vermögensstrategie</option><option>Kapitalmarkt & IPO</option><option>Fest- & Tagesgeld</option><option>Sonstiges</option></select></label>
              <label className="full">Ihre Nachricht<textarea name="message" rows="4" placeholder="Erzählen Sie uns kurz von Ihrem Anliegen." /></label>
            </div>
            <label className="consent"><input type="checkbox" /> <span>Ich stimme der Verarbeitung meiner Angaben zur Kontaktaufnahme zu.</span></label>
            <button className="button button--primary form-submit" type="button">Anfrage absenden <ArrowRight size={17} /></button>
          </form>
        </div>
      </section>

      <section className="cta-bar">
        <div className="site-container cta-bar-grid">
          <div className="cta-bar-info">
            <div><small>Telefon Support</small><strong>089 244 167 734</strong></div>
            <div><small>E-Mail-Service</small><strong>info@brain-capital-asset.com</strong></div>
          </div>
          <div className="cta-bar-actions">
            <a className="button button--primary" href="#kontakt">Erstgespräch vereinbaren</a>
            <Link className="button button--dark" href="/login">Kundenlogin</Link>
          </div>
        </div>
      </section>

      <section className="office-strip">
        <div className="site-container office-grid">
          <div><Building2 size={20} /><span><small>Hauptsitz</small><strong>Bahnalle 11-13 56410 Deutschland Montabaur</strong></span></div>
          <div><Landmark size={20} /><span><small>Zweigniederlassung</small><strong>Hopfenstraße 4 80335 München Deutschland</strong></span></div>
          <a href="https://maps.google.com/?q=Potsdamer+Str.+2,+10785+Berlin" target="_blank" rel="noreferrer">Auf Karte öffnen <ArrowRight size={16} /></a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
