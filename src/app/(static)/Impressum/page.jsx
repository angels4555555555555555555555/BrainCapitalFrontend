import Footer from "@/features/home/footer";
import Header from "@/features/home/header";
import HeroSection from "@/features/home/herosection";

const Impressum = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <div className="max-w-5xl mx-auto px-4 text-3xl font-light text-center mt-24">
        <div className="text-4xl">RCH Capital Holding GMBH</div>
        <p>Adresse:</p>
        <p>Sankt Michael 29</p>
        <p>91056 Erlangen</p>
        <p>Deutschland</p>
        <br />
        <p>Zweigniederlassung</p>
        <br />
        <p>Potsdamer Str. 2,</p>
        <p>10785 Berlin,</p>
        <p>Deutschland</p>
        <p className="mt-10">Telefon:</p>
        <p>0305199994482</p>
        <p className="mt-10">E-Mail:</p>
        <p>info@rch-capital-holding.com</p>
        <p className="mt-10">Registergericht:</p>
        <p>Amtsgericht Führt HRB 20838</p>
        <p className="mt-10">Vertreten durch den Geschäftsführer:</p>
        <p>Alexander Rizzeli</p>
        <p className="my-24">
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
          die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
          jedoch keine Gewähr übernehmen.
          <br />
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Knut Ropte
          (Anschrift wie oben) Streitschlichtung: Die Europäische Kommission
          stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
          <a
            className="text-[#5538A4]"
            href="https://consumer-redress.ec.europa.eu/index_de"
          >
            https://consumer-redress.ec.europa.eu/index_de
          </a>{" "}
          Wir sind nicht verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
        <p className="mb-24">
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind
          als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung,
          Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
          Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
          Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für
          den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Impressum;
