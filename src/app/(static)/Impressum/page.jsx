import Link from "next/link";
import {
  ArrowLeft,
  Building2,
  Copyright,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Scale,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import Footer from "@/features/home/footer";
import Header from "@/features/home/header";

const contactCards = [
  {
    icon: MapPin,
    label: "Hauptsitz",
    content: <address className="not-italic">Sankt Michael 29<br />91056 Erlangen<br />Deutschland</address>,
  },
  {
    icon: Building2,
    label: "Zweigniederlassung",
    content: <address className="not-italic">Potsdamer Str. 2<br />10785 Berlin<br />Deutschland</address>,
  },
  {
    icon: Phone,
    label: "Direkter Kontakt",
    content: (
      <div className="flex flex-col gap-1">
        <a className="hover:text-[var(--accent)]" href="tel:+4930519994482">030 519 994 482</a>
        <a className="break-all hover:text-[var(--accent)]" href="mailto:info@brain-capital-asset.com">info@brain-capital-asset.com</a>
      </div>
    ),
  },
];

const legalSections = [
  {
    icon: UserRound,
    title: "Vertretung und Register",
    content: (
      <dl className="grid sm:grid-cols-[190px_1fr] gap-x-6 gap-y-3">
        <dt className="font-semibold text-[var(--muted)]">Geschäftsführer</dt>
        <dd>Alexander Rizzeli</dd>
        <dt className="font-semibold text-[var(--muted)]">Registergericht</dt>
        <dd>Amtsgericht Fürth</dd>
        <dt className="font-semibold text-[var(--muted)]">Registernummer</dt>
        <dd>HRB 20838</dd>
      </dl>
    ),
  },
  {
    icon: ShieldCheck,
    title: "Verantwortlich für den Inhalt",
    content: (
      <p>
        Verantwortlich für die redaktionellen Inhalte ist Knut Ropte,
        Anschrift wie oben.
      </p>
    ),
  },
  {
    icon: Scale,
    title: "Haftung für Inhalte",
    content: (
      <p>
        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
        die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
        jedoch keine Gewähr übernehmen.
      </p>
    ),
  },
  {
    icon: Scale,
    title: "Streitbeilegung",
    content: (
      <div className="space-y-4">
        <p>
          Die Europäische Kommission stellt Informationen zur außergerichtlichen
          Beilegung von Verbraucherstreitigkeiten online bereit.
        </p>
        <a
          className="inline-flex items-center gap-2 font-semibold text-[var(--accent)] hover:underline"
          href="https://consumer-redress.ec.europa.eu/index_de"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zur Plattform der Europäischen Kommission
          <ExternalLink size={16} />
        </a>
        <p>
          Wir sind nicht verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </div>
    ),
  },
  {
    icon: Copyright,
    title: "Urheberrecht",
    content: (
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als
        solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und
        jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen
        der schriftlichen Zustimmung des jeweiligen Autors oder Erstellers.
        Downloads und Kopien dieser Seite sind ausschließlich für den privaten,
        nicht kommerziellen Gebrauch gestattet.
      </p>
    ),
  },
];

export const metadata = {
  title: "Impressum | Brain Capital Asset GmbH",
  description: "Anbieterkennzeichnung und rechtliche Informationen der Brain Capital Asset GmbH.",
};

export default function Impressum() {
  return (
    <>
      <Header />
      <main className="bg-[var(--surface)] text-[var(--ink)]">
        <section className="relative overflow-hidden bg-[var(--navy)] text-white">
          <div className="absolute inset-y-0 right-0 w-1/2 opacity-20 bg-[radial-gradient(circle_at_center,var(--gold),transparent_65%)]" />
          <div className="site-container relative py-16 md:py-24">
            <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-[var(--gold)]">
              <ArrowLeft size={16} /> Zurück zur Startseite
            </Link>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold)]">Rechtliche Informationen</p>
            <h1 className="max-w-3xl text-4xl md:text-6xl font-semibold tracking-[-0.04em]">Impressum</h1>
            <p className="mt-5 max-w-2xl text-base md:text-lg leading-7 text-white/70">
              Anbieterkennzeichnung und gesetzliche Pflichtangaben der Brain Capital Asset GmbH.
            </p>
          </div>
        </section>

        <section className="site-container py-12 md:py-20">
          <div className="mb-8 flex items-end justify-between gap-6 border-b border-[var(--line)] pb-5">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">Anbieterkennzeichnung</p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.025em] text-[var(--navy)]">Brain Capital Asset GmbH</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-10 md:mb-14">
            {contactCards.map(({ icon: Icon, label, content }) => (
              <article key={label} className="rounded-[8px] border border-[var(--line)] bg-white p-6 md:p-7">
                <div className="mb-5 flex size-10 items-center justify-center rounded-[6px] bg-[var(--gold)] text-[var(--navy)]">
                  <Icon size={20} />
                </div>
                <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.1em] text-[var(--muted)]">{label}</h3>
                <div className="font-medium leading-7 text-[var(--navy)]">{content}</div>
              </article>
            ))}
          </div>

          <div className="grid lg:grid-cols-[260px_1fr] gap-8 lg:gap-14">
            <aside className="lg:sticky lg:top-32 lg:self-start rounded-[8px] bg-[var(--navy)] p-6 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--gold)]">Auf einen Blick</p>
              <nav className="mt-5 flex flex-col" aria-label="Impressum Abschnitte">
                {legalSections.map(({ title }, index) => (
                  <a key={title} href={`#legal-${index}`} className="border-t border-white/10 py-3 text-sm text-white/75 hover:text-white">
                    {title}
                  </a>
                ))}
              </nav>
            </aside>

            <div className="space-y-4">
              {legalSections.map(({ icon: Icon, title, content }, index) => (
                <article id={`legal-${index}`} key={title} className="scroll-mt-36 rounded-[8px] border border-[var(--line)] bg-white p-6 md:p-8">
                  <div className="flex gap-4 md:gap-5">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-[6px] bg-[var(--surface-blue)] text-[var(--navy)]">
                      <Icon size={20} />
                    </div>
                    <div className="min-w-0">
                      <h2 className="mb-4 text-xl font-semibold text-[var(--navy)]">{title}</h2>
                      <div className="text-[15px] leading-7 text-[var(--muted)]">{content}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
