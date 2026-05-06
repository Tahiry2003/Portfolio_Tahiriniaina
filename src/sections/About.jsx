function About() {
  return (
    <section id="about" className="min-h-screen scroll-mt-28 mb-28">
      <div className="max-w-7xl mx-auto w-full px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-secondary italic mb-8">
          <span className="text-yellow-300">01.</span> A propos
        </h1>

        <div className="w-full">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary italic mb-6">
              _ Qui suis-je ?
            </h2>

            <p className="text-secondary leading-relaxed text-xl md:text-2xl font-semibold">
              Développeur passionné par la conception de solutions digitales,
              je me spécialise dans le développement Web
              <br /><br />
              J’adopte une approche centrée sur l’architecture logicielle afin de
              concevoir des applications fiables, évolutives et adaptées aux besoins
              métiers les plus exigeants.
              <br /><br />
              De l’analyse des besoins jusqu’au déploiement, j’interviens sur
              l’ensemble du cycle de vie des produits afin de transformer des idées
              en solutions concrètes, performantes et intuitives.
            </p>

            <div className="mt-10 md:mt-16 flex flex-col sm:flex-row items-start gap-4">
              <div className="w-full sm:w-fit bg-gray-100 px-6 py-5 rounded-xl border border-gray-200 shadow-sm">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary">
                  + 1 an d’expérience
                </h1>
              </div>

              <div className="w-full sm:w-fit bg-gray-100 px-6 py-5 rounded-xl border border-gray-200 shadow-sm">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary">
                  + 5 projets réalisés
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-primary italic mb-6">
            _ Expertises Techniques
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-8">
                Frontend
              </h3>

              <ul className="flex flex-wrap gap-3 justify-center md:justify-start font-semibold text-lg">
                <li className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg border-2 border-collapse">
                  React
                </li>
                <li className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg border-2 border-collapse">
                  Next.js
                </li>
                <li className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg border-2 border-collapse ">
                  JavaScript
                </li>
                <li className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg border-2 border-collapse">
                  HTML
                </li>
                <li className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg border-2 border-collapse">
                  CSS
                </li>
                <li className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg border-2 border-collapse">
                  Tailwind CSS
                </li>
              </ul>
            </div>

            <div className="p-6 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-8">
                Backend & SGBD
              </h3>

              <ul className="flex flex-wrap gap-3 justify-center md:justify-start font-semibold text-lg">
                <li className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg border-2 border-collapse">
                  Node.js
                </li>
                <li className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg border-2 border-collapse">
                  Express
                </li>
                <li className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg border-2 border-collapse">
                  Flask
                </li>
                <li className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg border-2 border-collapse">
                  Laravel
                </li>
                <li className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg border-2 border-collapse">
                  API REST
                </li>
                <li className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg border-2 border-collapse">
                  PostgreSQL
                </li>
                <li className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg border-2 border-collapse">
                  MySQL
                </li>
              </ul>
            </div>

            <div className="p-6 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-8">
                Skills
              </h3>

              <ul className="flex flex-wrap gap-3 justify-center md:justify-start font-semibold text-lg">
                <li className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg border-2 border-collapse">
                  Gestion de projet
                </li>
                <li className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg border-2 border-collapse">
                  Conception
                </li>
                <li className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg border-2 border-collapse">
                  UML
                </li>
                <li className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg border-2 border-collapse">
                  2TUP
                </li>
              </ul>
            </div>

          </div>        
        </div>

        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-primary italic mb-8">
            _ Expériences
          </h2>

          <p className="text-secondary leading-relaxed text-xl md:text-2xl font-semibold mb-8">
            Quelques expériences concrètes qui ont renforcé mes compétences en développement web.
          </p>

          <div className="space-y-6">
            <div className="p-6 rounded-3xl border border-gray-200 shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between">
                <h3 className="text-2xl font-bold text-primary">
                  Développeur Web | Full-Stack
                </h3>

                <p className="text-lg md:text-xl text-yellow-300 font-bold mt-3 md:mt-0 px-3 py-1 bg-yellow-50/60 rounded-xl border border-yellow-100">
                  sep 2024 - nov 2024
                </p>
              </div>

              <p className="text-xl text-green-300 font-bold mt-3">
                Ministere de l'Interieur
              </p>

              <p className="text-secondary leading-relaxed text-xl md:text-2xl font-semibold mt-3">
                Développement d’une application web avec React et Node.js avec Express, incluant la conception d’API REST et la gestion de bases de données PostgreSQL.
              </p>

              <ul className="flex flex-wrap gap-3 justify-start font-semibold text-lg mt-5">
                {["React", "Node.js", "Express", "PostgreSQL", "Git"].map((tech, index) => (
                  <li
                    key={index}
                    className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg border-2 border-collapse"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-3xl border border-gray-200 shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between">
                <h3 className="text-2xl font-bold text-primary">
                  Développeur Web | Full-Stack
                </h3>

                <p className="text-lg md:text-xl text-yellow-300 font-bold mt-3 md:mt-0 px-3 py-1 bg-yellow-50/60 rounded-xl border border-yellow-100">
                  sep 2024 - nov 2024
                </p>
              </div>

              <p className="text-xl text-green-300 font-bold mt-3">
                NJ CAM Systems
              </p>

              <p className="text-secondary leading-relaxed text-xl md:text-2xl font-semibold mt-3">
                Participation au développement d’une application web avec React et Node.js.
                Mise en place d’API REST et gestion de base de données PostgreSQL.
              </p>

              <ul className="flex flex-wrap gap-3 justify-start font-semibold text-lg mt-5">
                {["React", "Node.js", "Express", "PostgreSQL", "Git"].map((tech, index) => (
                  <li
                    key={index}
                    className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg border-2 border-collapse"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About