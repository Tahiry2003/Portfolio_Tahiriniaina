import { Code, Atom, Braces, Rocket } from "lucide-react"

function Hero() {
  return (
    <section id="hero" className="h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full px-6 flex flex-col md:flex-row items-center justify-between gap-10">

        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary space-y-4">
            <span>Bienvenue, Je suis</span>

            <span className="block text-primary italic">
              RABENATOANDRO Tahiriniaina Arson
            </span>

            <span className="block">
              Développeur Full Stack Web à la recherche d'une nouvelle opportunité
            </span>
          </h1>

          <div className="mt-6 flex items-center space-x-2">
            <button className="bg-primary text-white px-6 py-3 font-semibold hover:opacity-90 transition">
              Me contacter
            </button>
            <button className="bg-primary text-white px-6 py-3 font-semibold hover:opacity-90 transition">
              Voir mes projets
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative">

            {/* Image */}
            <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-2xl">

            </div>


            {/* Tags dev */}
            <span className="absolute -top-16 -left-16 flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 text-sm rounded-full shadow-lg hover:scale-110 transition">
              <Code size={16} /> Développeur Web
            </span>

            <span className="absolute top-16 -right-20 flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 text-sm rounded-full shadow-lg hover:scale-110 transition">
              <Atom size={16} className="text-blue-500" /> React
            </span>

            <span className="absolute bottom-16 -right-16 flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 text-sm rounded-full shadow-lg hover:scale-110 transition">
              <Rocket size={16} className="text-purple-500" /> Full Stack
            </span>

            <span className="absolute -bottom-20 left-16 flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 text-sm rounded-full shadow-lg hover:scale-110 transition">
              <Braces size={16} className="text-yellow-500" /> JavaScript
            </span>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero