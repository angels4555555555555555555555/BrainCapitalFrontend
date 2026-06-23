export default function Hero({ imageUrl }) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('${imageUrl}')`, // required Source URL from the user
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label="Hero"
    >
      <div className="absolute inset-0 bg-black/25" />
      <div className="relative max-w-5xl mx-auto pt-24 px-4">
        <div className="text-white space-y-6 md:space-y-24 text-center md:text-left">
          <h1 className="text-3xl font-light md:text-5xl lg:text-6xl w-full md:w-[90%] mx-auto md:mx-0 leading-relaxed text-balance">
            Gemeinsam finanzielle Träume verwirklichen mit Der Brain Capital Asset GMBH
          </h1>
          <a href="/#Karriere" className="inline-block px-6 py-4 rounded-lg bg-[#5639A5] font-bold">
            Konsultation buchen
          </a>
        </div>
      </div>
    </section>
  );
}
