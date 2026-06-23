function Quote({inst, author, children }) {
  return (
    <div className="text-center max-w-xl mx-auto">
      <svg
      className="mx-auto"
        xmlns="http://www.w3.org/2000/svg"
        width="51"
        height="33"
        viewBox="0 0 51 33"
        fill="none"
      >
        <path
          d="M8.39024 17.4912C7.77518 13.4777 10.4516 7.91494 14.4381 4.49556C15.8993 3.24226 16.6749 2.82327 22.267 0.426164C19.6388 -0.688855 13.3476 0.565697 10.8592 2.09851C-1.61119 10.5436 -0.83668 23.9016 1.12051 27.302C3.72091 33.0714 10.04 33.601 13.6329 31.0786C20.6929 25.1838 15.4923 16.7944 8.39024 17.4912Z"
          fill="#5639A5"
        />
        <path
          d="M37.0218 17.9766C36.4068 13.9631 39.0832 8.4003 43.0697 4.98092C44.5309 3.72761 45.3065 3.30862 50.8986 0.911513C48.2703 -0.203501 41.9792 1.05105 39.4907 2.58386C27.0204 11.029 27.7949 24.387 29.7521 27.7874C32.3525 33.5568 38.6716 34.0864 42.2645 31.564C49.3245 25.6691 44.1239 17.2798 37.0218 17.9766Z"
          fill="#5639A5"
        />
      </svg>
      <p className="mt-4 font-light text-2xl">{author}</p>
      <p className="font-medium mb-6">{inst}</p>
      <p className="text-lg leading-relaxed font-light">{children}</p>
    </div>
  );
}

export default function Testimonials() {
  return (
    <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
      <Quote inst="Becker Invest Solutions GmbH" author="Michael Becker">
        Die Zusammenarbeit mit der Brain Capital Asset GmbH war von hoher Fachkompetenz und klarer Struktur geprägt. Besonders überzeugt haben uns die transparente Beratung und der strategische Blick auf langfristige Finanzlösungen in Montabaur, Deutschland.
      </Quote>
      <Quote inst="Keller Advisory Services" author="Thomas Keller">
        Brain Capital Asset GmbH hat uns mit einer strukturierten Vorgehensweise, fundierter Marktkenntnis und hoher Professionalität überzeugt. Die Beratung war klar, nachvollziehbar und nachhaltig ausgerichtet.
      </Quote>
      <Quote inst="Hoffmann Capital Consulting GmbH" author="Sebastian Hoffmann">
        Die Zusammenarbeit mit der Brain Capital Asset GmbH war geprägt von strategischem Weitblick, klarer Kommunikation und hoher Verlässlichkeit. Besonders hervorzuheben ist die professionelle Begleitung bei komplexen Finanzthemen.
      </Quote>
    </div>
  );
}
