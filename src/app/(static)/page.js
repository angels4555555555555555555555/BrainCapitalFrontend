import Link from "next/link";
import Awards from "@/features/home/awards";
import Contact from "@/features/home/contact";
import FeatureCards from "@/features/home/feature-cards";
import Footer from "@/features/home/footer";
import Header from "@/features/home/header";
import Hero from "@/features/home/hero";
import SplitSection from "@/features/home/split-section";
import Strengths from "@/features/home/strengths";
import Team from "@/features/home/team";
import Testimonials from "@/features/home/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero imageUrl="/d7e50718-c133-4bbb-96c4-91a523984dfd.png" />
      <section
        className="py-16 md:py-24 scroll-smooth scroll-mt-20 md:scroll-mt-35"
        id="Services"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mx-auto mb-10 md:mb-14">
            <p className="uppercase font-bold text-base text-muted-foreground">
              Services
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mx-auto text-balance">
              Individuelle Finanzlösungen für Sie
            </h2>
          </div>
          <FeatureCards />
          <div className="text-center mt-18">
            <Link href="/#Karriere" className="px-6 py-4 text-white rounded-lg bg-[#5639A5] font-bold">
              Konsultation buchen
            </Link>
          </div>
        </div>
      </section>

      <SplitSection
        kicker="UNSERE GESCHICHTE"
        title="Vertrauen Sie uns mit Ihrer Finanzplanung"
        copy={
          <>
            <p>
              Mit der Gründung am 04.10.2021 in Erlangen haben wir uns als spezialisierter Finanzberater mit klarem Fokus auf Kapitalmarktstrategien und Börsengänge (IPOs) positioniert. Unser Hauptsitz in Erlangen, Deutschland, bildet das strategische Zentrum unserer Unternehmensberatung und Strukturierung von Kapitalmarktprojekten.
            </p>
            <p>
              Als Teil einer größeren Holding, die an zahlreichen Unternehmen beteiligt ist und aktiv Start-ups sowie Wachstumsunternehmen fördert, liegt unser wirtschaftlicher Schwerpunkt dort, wo nachhaltige Wertschöpfung entsteht: am Kapitalmarkt. Insbesondere die strukturierte Vorbereitung und Begleitung von Unternehmen bis zum Börsengang stellt den zentralen Hebel für Wachstum und Ertragssteigerung dar.
            </p>
            <p>
              Unser Zweitstandort in Monheim am Rhein ist gezielt auf das IPO-Geschäft sowie strukturierte Fest- und Tagesgeldlösungen ausgerichtet. Dort bündeln wir unsere operative Expertise in der Kapitalmarktvorbereitung, Investorenstrukturierung und der Umsetzung sicherheitsorientierter Anlagekonzepte.
            </p>
            <p>
              Unser Anspruch ist es, Unternehmen und Investoren in entscheidenden Marktphasen professionell zu begleiten und substanziellen Mehrwert durch Kapitalmarktzugang und stabile Ertragsmodelle zu schaffen.
            </p>
          </>
        }
        image="/image (7).png"
        imageAlt="Beratungsszene in einem Meetingraum"
      />

      <section
        id="WARUM"
        className="py-16 md:py-24 scroll-smooth scroll-mt-20 md:scroll-mt-40"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mx-auto mb-10 md:mb-14">
            <p className="uppercase font-bold text-base text-muted-foreground">
              WARUM MIT UNS ARBEITEN
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mx-auto text-balance">
              Unsere Stärken für Sie
            </h2>
          </div>
          <Strengths />
          <div className="text-center mt-18">
            <a className="px-6 py-4 text-white rounded-lg bg-[#5639A5] font-bold">
              Konsultation buchen
            </a>
          </div>
        </div>
      </section>

      <SplitSection
        kicker="EINZIGARTIGER ANSATZ"
        copy={
          <>
            <p>
              Als erfahrene Finanzberater entwickeln wir strukturierte und skalierbare Finanzlösungen, die konsequent auf Wertsteigerung und Kapitalmarktfähigkeit ausgerichtet sind. Unser Ansatz verbindet fundierte Analyse, unternehmerisches Denken und eine klare Fokussierung auf nachhaltige Renditepotenziale.
            </p>
            <p>
              Durch kontinuierliche Marktbeobachtung und die aktive Anpassung an Kapitalmarkt- und IPO-relevante Entwicklungen stellen wir sicher, dass unsere Strategien aktuellen regulatorischen und wirtschaftlichen Anforderungen entsprechen. Ziel ist es, Unternehmen und Investoren in entscheidenden Phasen des Wachstums professionell zu begleiten und langfristigen Mehrwert durch Kapitalmarktzugang, Strukturierung und effiziente Allokation von Kapital zu schaffen.
            </p>
          </>
        }
        image="/b666bd421d.jpg"
        imageAlt="Beratungsszene in einem Meetingraum"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mx-auto mb-10 md:mb-14">
            <p className="uppercase font-bold text-base text-muted-foreground">
              UNSER TEAM
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mx-auto text-balance">
              Unser Expertenteam für Finanzberatung
            </h2>
          </div>
          <Team />
        </div>
      </section>

      <section className="bg-gray-100 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mx-auto mb-10 md:mb-12 max-w-xl">
            <p className="uppercase font-bold text-base text-muted-foreground">
              ANERKANNTE SPITZENLEISTUNGEN
            </p>
            <p className="text-muted-foreground mt-8 text-center leading-relaxed font-light text-lg">
             Unser Team wurde mit renommierten Auszeichnungen und maßgeblichen Akkreditierungen der Finanzbranche ausgezeichnet, die für fachliche Exzellenz, Verlässlichkeit und Professionalität stehen. Diese Anerkennungen sind das Ergebnis kontinuierlicher Qualifikation, hoher Qualitätsstandards und eines klaren Anspruchs an verantwortungsvolle Beratung. So schaffen wir Vertrauen und eine belastbare Grundlage für langfristige Partnerschaften.
            </p>
          </div>
          <Awards />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mx-auto mb-10 md:mb-14">
            <p className="uppercase font-bold text-base text-muted-foreground">
              TESTIMONIALS
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mx-auto text-balance">
              Kundenbewertungen unserer Finanzberater
            </h2>
          </div>
          <Testimonials />
        </div>
      </section>

      <section
        className="bg-gray-100 py-16 md:py-24 scroll-smooth scroll-mt-20 md:scroll-mt-28"
        id="Karriere"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mx-auto mb-10 md:mb-14">
            <p className="uppercase font-bold text-base text-muted-foreground">
              KONTAKTIEREN SIE UNS
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mx-auto text-balance">
              Kontaktieren Sie uns für Finanzberatung
            </h2>
          </div>
          <Contact />
        </div>
      </section>

      <iframe
        width="100%"
        height="570"
        frameBorder="0"
        allowFullScreen={true}
        data-categories="unclassified"
        data-termly-iframe-id="termly-iframe-0"
        style={{ display: "block" }}
        data-autoblock-ignore="1"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2586.98059972991!2d10.9454587!3d49.579254899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a201fee8a3b80f%3A0x963ffc23b12ebe60!2sSt.%20Michael%2029%2C%2091056%20Erlangen%2C%20Germany!5e0!3m2!1sen!2s!4v1767283243135!5m2!1sen!2s"
        title="Google Maps Location"
      ></iframe>

      <Footer />
    </main>
  );
}
