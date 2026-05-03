import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { MapPin, Circle } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-primary text-white">

      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-10 items-center">

        {/* 🔹 LEFT */}
        <div className="text-center md:text-left">
          <div className="flex items-center gap-2 mb-4">
            <span className="flex items-center gap-2 text-green-700 text-base font-semibold bg-green-100 opacity-80 px-4 py-2 rounded-full border border-green-200 shadow-sm">
              <span className="relative flex items-center justify-center">
                <Circle size={12} className="text-green-500 fill-green-500" />
                <span className="absolute inline-flex h-3 w-3 rounded-full bg-green-500 opacity-40 animate-ping"></span>
              </span>
              Ouvert aux opportunités
            </span>
          </div>
          <h2 className="text-3xl font-bold italic">R.TA</h2>
          <p className="text-gray-300 text-sm mt-2">
            Développeur Web & Mobile
          </p>
          <p className="text-gray-300 text-sm mt-2 flex items-center gap-2 justify-center md:justify-start">
            <MapPin size={18} className="text-yellow-300" />
            Fianarantsoa, Madagascar
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <span className="text-sm tracking-widest text-gray-400 font-semibold uppercase">
            Navigation
          </span>

          <div className="flex justify-center gap-6 text-sm text-gray-300 font-semibold">
            <a href="#hero" className="hover:text-white transition">Accueil</a>
            <a href="#about" className="hover:text-white transition">À propos</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#projects" className="hover:text-white transition">Projets</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>

        {/* 🔹 RIGHT SOCIAL ICONS */}
        <div className="flex justify-center md:justify-end gap-5 text-3xl">

          <a
            href="https://github.com/TON_GITHUB"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition transform hover:scale-125"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/TON_LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition transform hover:scale-125"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://wa.me/261XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition transform hover:scale-125"
          >
            <FaWhatsapp />
          </a>

        </div>

      </div>

      {/* 🔹 BOTTOM */}
      <div className="border-t border-gray-700 text-center p-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} RABENATOANDRO Tahiriniaina Arson. Tous droits réservés.
      </div>

    </footer>
  )
}

export default Footer