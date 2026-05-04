import { Circle } from "lucide-react"
import { FaGlobe, FaLaptopCode, FaRocket, FaSyncAlt } from "react-icons/fa"

function Service() {
  return (
    <section id="services" className="min-h-screen scroll-mt-28 mb-28">
      <div className="max-w-7xl mx-auto w-full px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-secondary italic mb-8">
          <span className="text-yellow-300">02.</span> Mes Services
        </h1>

        <div className="max-w-7xl mb-12">
          <p className="text-secondary leading-relaxed text-2xl font-semibold">
            Je crée des sites web modernes, rapides et efficaces pour vous aider à
            développer votre présence en ligne et atteindre vos objectifs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border border-gray-200 rounded-3xl">
            <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-300/20 text-green-300 p-4 border-2 border-green-200 rounded-xl text-2xl">
                    <FaGlobe />
                </div>
            </div>
            <h2 className="text-2xl font-bold text-primary mb-2">
                Site vitrine
            </h2>

            <p className="text-secondary text-xl font-semibold leading-relaxed">
                Création de sites web modernes pour présenter votre activité de manière professionnelle,
                inspirer confiance et attirer de nouveaux clients.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-3xl">
            <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-300/20 text-green-300 p-4 border-2 border-green-200 rounded-xl text-2xl">
                    <FaRocket />
                </div>
            </div>
            <h2 className="text-2xl font-bold text-primary mb-2">
                Landing page
            </h2>
            <p className="text-secondary text-xl font-semibold leading-relaxed">
                Conception de pages optimisées pour convertir vos visiteurs en clients,
                idéales pour lancer un produit ou promouvoir une offre.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-3xl">
            <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-300/20 text-green-300 p-4 border-2 border-green-200 rounded-xl text-2xl">
                    <FaSyncAlt />
                </div>
            </div>
            <h2 className="text-2xl font-bold text-primary mb-2">
                Refonte
            </h2>
            <p className="text-secondary text-xl font-semibold leading-relaxed">
                Amélioration de votre site existant pour le rendre plus moderne, rapide et efficace,
                avec une meilleure expérience utilisateur.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-3xl">
            <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-300/20 text-green-300 p-4 border-2 border-green-200 rounded-xl text-2xl">
                    <FaLaptopCode />
                </div>
            </div>
            <h2 className="text-2xl font-bold text-primary mb-2">
                Application web sur mesure
            </h2>
            <p className="text-secondary text-xl font-semibold leading-relaxed">
                Développement d’applications web sur mesure avec des fonctionnalités adaptées
                à vos besoins : gestion, tableaux de bord, authentification, etc.
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
                Vous avez une idée ou un projet ?
            </h2>

            <div className="max-w-3xl mx-auto mb-12">
                <p className="text-secondary font-semibold text-2xl leading-relaxed">
                    Parlez-moi de votre projet et voyons comment créer une solution simple, efficace et adaptée à vos besoins. Je vous réponds rapidement, sous 24h maximum.
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