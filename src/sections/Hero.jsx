import { Code, Atom, Braces, Rocket } from "lucide-react"
import photo from "/photo.jfif"
import { Circle } from "lucide-react"

function Hero() {
  return (
    <section id="hero" className="h-screen flex items-center">
      <div className="absolute inset-0 hero-grid pointer-events-none"></div>
      <div className="max-w-7xl mx-auto w-full px-6 flex flex-col md:flex-row items-center justify-between gap-16">

        <div className="flex-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="flex items-center gap-2 text-green-700 text-base font-semibold bg-green-100 px-4 py-2 rounded-full border border-green-200 shadow-sm">
              <span className="relative flex items-center justify-center">
                <Circle size={12} className="text-green-500 fill-green-500" />
                <span className="absolute inline-flex h-3 w-3 rounded-full bg-green-500 opacity-40 animate-ping"></span>
              </span>
              Ouvert aux opportunités
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-secondary space-y-4">
            <span>Bienvenue, Je suis</span>

            <span className="block text-primary italic">
              RABENATOANDRO Tahiriniaina Arson
            </span>

            <span className="block">
              <strong className="bg-yellow-300 text-white">Développeur Full Stack Web & Mobile</strong> Motivé et passionné, je transforme des idées en solutions digitales performantes et modernes.
            </span>
          </h1>

          <div className="mt-6 flex items-center space-x-2">
            <a href="#contact" className="bg-primary text-white px-6 py-3 font-semibold hover:opacity-90 transition">
              Me contacter
            </a>
            <a href="#projects" className="bg-primary text-white px-6 py-3 font-semibold hover:opacity-90 transition">
              Voir mes projets
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative">

            <div className="relative flex justify-center">

              <div className="absolute w-64 h-80 md:w-80 md:h-[450px] bg-gray-200 rounded-2xl translate-x-6 translate-y-6"></div>
              <div className="relative w-64 h-80 md:w-80 md:h-[450px] overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={photo}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>


            {/* Tags dev */}
            <span className="absolute -top-6 -left-16 flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 text-sm rounded-full shadow-lg hover:scale-110 transition">
              <Code size={16} /> Node.js avec Express
            </span>

            <span className="absolute top-16 -right-20 flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 text-sm rounded-full shadow-lg hover:scale-110 transition">
              <Atom size={16} className="text-blue-500" /> React
            </span>

            <span className="absolute bottom-16 -right-16 flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 text-sm rounded-full shadow-lg hover:scale-110 transition">
              <Rocket size={16} className="text-purple-500" /> Full Stack
            </span>

            <span className="absolute -bottom-6 left-16 flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 text-sm rounded-full shadow-lg hover:scale-110 transition">
              <Braces size={16} className="text-yellow-500" /> JavaScript
            </span>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero