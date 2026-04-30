function About() {
  return (
    <section id="about" className="min-h-screen scroll-mt-28 mb-28">
      <div className="max-w-7xl mx-auto w-full px-6">

        <h1 className="text-5xl font-bold text-secondary italic mb-8">
          <span className="text-yellow-300">01.</span> A propos
        </h1>

        <div className="w-full">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-primary italic mb-6">
              _ Qui suis-je ?
            </h2>

            <p className="text-secondary leading-relaxed text-2xl font-semibold">
              Développeur passionné par la conception de solutions digitales,
              je me spécialise dans le développement Web, Mobile ainsi que
              dans la création de systèmes complexes comme les ERP et les SaaS.
              <br /><br />
              J’adopte une approche centrée sur l’architecture logicielle afin de
              concevoir des applications fiables, évolutives et adaptées aux besoins
              métiers les plus exigeants.
              <br /><br />
              De l’analyse des besoins jusqu’au déploiement, j’interviens sur
              l’ensemble du cycle de vie des produits afin de transformer des idées
              en solutions concrètes, performantes et intuitives.
            </p>

            <div className="mt-16 flex items-start gap-4">
              <div className="w-full md:w-fit bg-gray-100 px-6 py-5 rounded-xl border border-gray-200 shadow-sm">
                <h1 className="text-2xl md:text-3xl font-bold text-secondary">
                  + 1 an d’expérience
                </h1>
              </div>

              <div className="w-full md:w-fit bg-gray-100 px-6 py-5 rounded-xl border border-gray-200 shadow-sm">
                <h1 className="text-2xl md:text-3xl font-bold text-secondary">
                  + 10 projets réalisés
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-primary italic mb-6">
            _ Expertises Techniques
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 text-center">
              <h3 className="text-3xl font-bold text-primary mb-8">
                Frontend
              </h3>

              <ul className="flex flex-wrap gap-3 justify-start font-semibold text-lg">
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
              <h3 className="text-3xl font-bold text-primary mb-8">
                Backend
              </h3>

              <ul className="flex flex-wrap gap-3 justify-start font-semibold text-lg">
                <li className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg border-2 border-collapse">
                  Node.js
                </li>
                <li className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg border-2 border-collapse">
                  Express
                </li>
                <li className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg border-2 border-collapse">
                  PHP
                </li>
                <li className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg border-2 border-collapse">
                  Laravel
                </li>
                <li className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg border-2 border-collapse">
                  Python
                </li>
                <li className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg border-2 border-collapse">
                  API REST
                </li>
                <li className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg border-2 border-collapse">
                  PostgreSQL
                </li>
              </ul>
            </div>

            <div className="p-6 text-center">
              <h3 className="text-3xl font-bold text-primary mb-8">
                Skills
              </h3>

              <ul className="flex flex-wrap gap-3 justify-start font-semibold text-lg">
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
      </div>
    </section>
  )
}

export default About