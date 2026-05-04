import { Code, Atom, Braces, Rocket } from "lucide-react"
import photo from "/photo.jfif"
import { Circle } from "lucide-react"

function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center py-20 md:py-0">
      <div className="absolute inset-0 hero-grid pointer-events-none"></div>
      <div className="max-w-7xl mx-auto w-full px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 pt-10 md:pt-0 pb-16 md:pb-0">
        
        <div className="flex-2 w-full md:w-auto">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <span className="flex items-center gap-2 text-green-700 text-base font-semibold bg-green-100 px-4 py-2 rounded-full border border-green-200 shadow-sm">
              <span className="relative flex items-center justify-center">
                <Circle size={12} className="text-green-500 fill-green-500" />
                <span className="absolute inline-flex h-3 w-3 rounded-full bg-green-500 opacity-40 animate-ping"></span>
              </span>
              Ouvert aux opportunités
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary space-y-3 md:space-y-4 text-center md:text-left">
            <span>Je suis</span>
            
            <span className="block text-primary italic break-words">
              RABENATOANDRO Tahiriniaina Arson
            </span>
            
            <span className="block">
              <strong className="bg-yellow-300 text-white">Développeur Full Stack Web</strong> passionné et motivé, je transforme des idées en solutions digitales modernes, performantes et évolutives.
            </span>
          </h1>
          
          <div className="mt-6 flex items-center justify-center md:justify-start space-x-2">
            <a href="#contact" className="bg-primary text-white px-6 py-3 font-semibold hover:opacity-90 transition">
              Me contacter
            </a>
            <a href="#projects" className="bg-primary text-white px-6 py-3 font-semibold hover:opacity-90 transition">
              Voir mes projets
            </a>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center w-full md:w-auto mt-24 md:mt-0">
          <div className="relative">
            
            <div className="relative flex justify-center">
              
              <div className="absolute w-56 h-72 sm:w-64 sm:h-80 md:w-80 md:h-[450px] bg-gray-200 rounded-2xl translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6"></div>
              <div className="relative w-56 h-72 sm:w-64 sm:h-80 md:w-80 md:h-[450px] overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={photo}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>
              
            </div>
            
            
            {/* Tags dev - repositionnés pour mobile */}
            <span className="absolute -top-5 -left-12 md:-top-6 md:-left-16 flex items-center gap-2 bg-white/80 backdrop-blur-md px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm rounded-full shadow-lg hover:scale-110 transition whitespace-nowrap">
              <Code size={14} className="md:w-4 md:h-4" /> Node.js avec Express
            </span>
            
            <span className="absolute top-12 -right-14 md:top-16 md:-right-20 flex items-center gap-2 bg-white/80 backdrop-blur-md px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm rounded-full shadow-lg hover:scale-110 transition whitespace-nowrap">
              <Atom size={14} className="md:w-4 md:h-4 text-blue-500" /> React
            </span>
            
            <span className="absolute bottom-12 -right-12 md:bottom-16 md:-right-16 flex items-center gap-2 bg-white/80 backdrop-blur-md px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm rounded-full shadow-lg hover:scale-110 transition whitespace-nowrap">
              <Rocket size={14} className="md:w-4 md:h-4 text-purple-500" /> Full Stack
            </span>
            
            <span className="absolute -bottom-5 left-8 md:-bottom-6 md:left-16 flex items-center gap-2 bg-white/80 backdrop-blur-md px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm rounded-full shadow-lg hover:scale-110 transition whitespace-nowrap">
              <Braces size={14} className="md:w-4 md:h-4 text-yellow-500" /> JavaScript
            </span>
            
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Hero