function Person({ name, role, img, children }) {
  return (
    <div className="bg-card">
      <img
        src={img || "/placeholder.svg"}
        alt={`${name} – ${role}`}
        className="w-full h-78 object-cover"
      />
      <div className="pt-4">
        <h4 className="font-light text-center text-2xl">{name}</h4>
        <p className="text-bse font-bold text-center text-muted-foreground mb-6">{role}</p>
        <p className="text-muted-foreground text-center leading-relaxed font-light text-lg">{children}</p>
      </div>
    </div>
  )
}

export default function Team() {
  return (
    <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
      <Person name="Thomas Goldberg" role="Finanzberater" img="/image (3).jfif">
        Thomas Goldberg unterstützt Sie mit tiefgehender Kapitalmarktexpertise und individuell entwickelten Finanzstrategien. Unser Anspruch ist es, nachhaltige Werte zu schaffen und Sie als vertrauensvoller Partner langfristig zu begleiten.
      </Person>
      <Person name="Jan Beulich" role="Investmentexperte" img="/image (6).png">
        Jan Beulich vereint präzise Marktanalyse mit strategischem Weitblick, um strukturierte und leistungsfähige Investmentstrategien zu entwickeln. Sein Schwerpunkt liegt auf der Identifikation von Chancen und der langfristigen Ausrichtung von Kapital.
      </Person>
      <Person name="Christiane Bauer" role="Assistenz der Geschäftsführung" img="/image.jpg">
        Christiane Bauer verantwortet die strukturierte Risikobewertung und Entwicklung von Absicherungsstrategien, um die finanzielle Sicherheit unserer Mandanten nachhaltig zu unterstützen. Darüber hinaus koordiniert sie als zentrale Assistenz die organisatorischen und administrativen Abläufe für Thomas Goldberg und Jan Beulich und gewährleistet so effiziente Prozesse und eine verlässliche Kommunikation.
      </Person>
    </div>
  )
}
