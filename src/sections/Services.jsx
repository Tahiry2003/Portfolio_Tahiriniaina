import { Circle } from "lucide-react"
import { FaGlobe, FaLaptopCode, FaRocket, FaSyncAlt } from "react-icons/fa"

function Service() {
  return (
    <section id="services" className="min-h-screen scroll-mt-28 mb-28">
      <div className="max-w-7xl mx-auto w-full px-6">
        <h1 className="text-5xl font-bold text-secondary italic mb-12">
          <span className="text-yellow-300">02.</span> Mes Services
        </h1>

        <div className="max-w-7xl mb-12">
          <p className="text-secondary leading-relaxed text-2xl font-semibold">
            Je vous accompagne dans la création de solutions web modernes,
            performantes et adaptées à vos objectifs, de la simple page
            de présentation à des applications web complètes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border border-gray-200 rounded-3xl">
            <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-300/20 text-green-300 p-4 rounded-xl text-2xl">
                    <FaGlobe />
                </div>

                <h2 className="text-2xl font-bold text-primary">
                    Site vitrine
                </h2>
            </div>

            <p className="text-secondary text-xl font-semibold leading-relaxed">
                Création de sites web modernes pour présenter votre activité,
                vos services ou votre entreprise avec un design professionnel,
                responsive et optimisé pour tous les écrans.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-3xl">
            <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-300/20 text-green-300 p-4 rounded-xl text-2xl">
                    <FaRocket />
                </div>

                <h2 className="text-2xl font-bold text-primary">
                    Landing page
                </h2>
            </div>
            <p className="text-secondary text-xl font-semibold leading-relaxed">
                Conception de pages d’atterrissage optimisées pour la conversion,
                idéales pour vos campagnes marketing, lancement de produit
                ou collecte de leads.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-3xl">
            <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-300/20 text-green-300 p-4 rounded-xl text-2xl">
                    <FaSyncAlt />
                </div>

                <h2 className="text-2xl font-bold text-primary">
                    Refonte & amélioration
                </h2>
            </div>
            <p className="text-secondary text-xl font-semibold leading-relaxed">
                Modernisation de votre site existant avec un design amélioré,
                de meilleures performances, une expérience utilisateur optimisée
                et une structure plus efficace.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-3xl">
            <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-300/20 text-green-300 p-4 rounded-xl text-2xl">
                    <FaLaptopCode />
                </div>

                <h2 className="text-2xl font-bold text-primary">
                    Application web sur mesure
                </h2>
            </div>
            <p className="text-secondary text-xl font-semibold leading-relaxed">
                Développement d’applications web sur mesure avec des fonctionnalités
                avancées (authentification, gestion de données, tableaux de bord, etc),
                adaptées à vos besoins spécifiques.
            </p>
          </div>

        </div>
        <div className="mt-24 max-w-7xl mx-auto text-center px-4">
            <span className="inline-flex items-center gap-2 text-green-700 text-base font-semibold bg-green-100/70 px-4 py-2 rounded-full border border-green-200 shadow-sm backdrop-blur-sm mb-6">
                <span className="relative flex items-center justify-center">
                    <Circle size={12} className="text-green-500 fill-green-500" />
                    <span className="absolute inline-flex h-3 w-3 rounded-full bg-green-500 opacity-40 animate-ping"></span>
                </span>
                Disponible pour vos projets
            </span>
            

            <h2 className="text-5xl font-bold text-primary mb-6 leading-tight">
                Vous avez un projet de site internet ?
            </h2>

            <div className="max-w-3xl mx-auto mb-8">
                <p className="text-secondary font-semibold text-xl leading-relaxed">
                Parlez-moi de vos besoins et construisons ensemble une solution web performante et adaptée à vos objectifs. Je vous réponds rapidement, sous 24h maximum.
                </p>
            </div>

            <a
                href="#contact"
                className="bg-primary text-white px-6 py-3 font-semibold hover:opacity-90 transition "
            >
                Me contacter
            </a>
        </div>
      </div>
    </section>
  )
}

export default Service