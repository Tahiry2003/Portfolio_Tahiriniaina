import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa"

function Contact() {
  return (
    <section id="contact" className="min-h-screen scroll-mt-28">
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6">

        <h1 className="text-5xl font-bold text-secondary italic mb-8">
          <span className="text-yellow-300">03.</span> Contactez-moi
        </h1>

        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary italic mb-8 flex text-start">
              _ Formulaire de contact
            </h2>

            <p className="text-secondary text-lg font-semibold">
              Discutons de votre projet et trouvons ensemble la meilleure solution.
            </p>

            <div className="space-y-4 text-secondary font-semibold">
              <a
                href="mailto:tahiriniainaarson4@gmail.com"
                className="flex items-center gap-3 hover:text-red-500 transition"
              >
                <FaEnvelope size={22} />
                tahiriniainaarson4@gmail.com
              </a>

              {/* WHATSAPP (lien direct chat) */}
              <a
                href="https://wa.me/261343345703"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-green-500 transition"
              >
                <FaWhatsapp size={24} />
                +261 34 33 457 03
              </a>

              {/* GITHUB */}
              <a
                href="https://github.com/Tahiry2003"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-black transition"
              >
                <FaGithub size={22} />
                Tahiry2003
              </a>

              {/* LINKEDIN */}
              <a
                href="https://linkedin.com/in/tahiriniaina-arson-2a8a1637a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-blue-600 transition"
              >
                <FaLinkedin size={22} />
                Tahiriniaina Arson
              </a>

            </div>
          </div>

          {/* RIGHT FORM */}
          <form className="space-y-6">

            <div className="grid grid-cols-2 gap-6">
              <input type="text" placeholder="Prénom *"
                className="border-b border-gray-400 focus:border-black outline-none py-2 bg-transparent" />
              <input type="text" placeholder="Nom *"
                className="border-b border-gray-400 focus:border-black outline-none py-2 bg-transparent" />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <input type="email" placeholder="Email *"
                className="border-b border-gray-400 focus:border-black outline-none py-2 bg-transparent" />
              <input type="text" placeholder="Téléphone"
                className="border-b border-gray-400 focus:border-black outline-none py-2 bg-transparent" />
            </div>

            <textarea
              placeholder="Votre message..."
              rows={8}
              className="w-full border-b border-gray-400 focus:border-black outline-none py-2 bg-transparent"
            />

            <button className="bg-primary text-white font-semibold px-6 py-3 hover:opacity-80 transition">
              Envoyer
            </button>

          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact