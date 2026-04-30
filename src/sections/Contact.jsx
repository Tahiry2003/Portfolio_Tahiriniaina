import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa"
import emailjs from "@emailjs/browser"
import { useRef, useState } from "react"

function Contact() {
  const form = useRef()
  const [isSent, setIsSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.sendForm(
      "service_n3cpkvx",
      "template_3pir6kk",
      form.current,
      "IbBjPhNA5NW0X0xXC"
    )
    .then(() => {
      setIsSent(true)
      setLoading(false)
      form.current.reset()
      setTimeout(() => setIsSent(false), 3000)
    })
    .catch(() => {
      setLoading(false)
    })
  }

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
                className="flex items-center gap-3 transition group"
              >
                <FaEnvelope size={22} className="group-hover:text-red-500 transition" />
                <span className="group-hover:text-red-500 transition">
                  tahiriniainaarson4@gmail.com
                </span>
              </a>

              <a
                href="https://wa.me/261343345703"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition group"
              >
                <FaWhatsapp size={24} className="group-hover:text-green-500 transition" />
                <span className="group-hover:text-green-500 transition">
                  +261 34 33 457 03
                </span>
              </a>

              <a
                href="https://github.com/Tahiry2003"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition group"
              >
                <FaGithub size={22} className="group-hover:text-black transition" />
                <span className="group-hover:text-black transition">
                  Tahiry2003
                </span>
              </a>

              <a
                href="https://linkedin.com/in/tahiriniaina-arson-2a8a1637a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition group"
              >
                <FaLinkedin size={22} className="group-hover:text-blue-600 transition" />
                <span className="group-hover:text-blue-600 transition">
                  Tahiriniaina Arson
                </span>
              </a>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="space-y-6 font-semibold">
            <div className="grid grid-cols-2 gap-6">
              <input name="last_name" type="text" placeholder="Prénom *"
                className="border-b border-gray-400 focus:border-black outline-none py-2 bg-transparent" />
              <input name="first_name" type="text" placeholder="Nom *"
                className="border-b border-gray-400 focus:border-black outline-none py-2 bg-transparent" />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <input name="email" type="email" placeholder="Email *"
                className="border-b border-gray-400 focus:border-black outline-none py-2 bg-transparent" />
              <input name="phone" type="text" placeholder="Téléphone"
                className="border-b border-gray-400 focus:border-black outline-none py-2 bg-transparent" />
            </div>

            <textarea
              name="message"
              placeholder="Votre message..."
              rows={8}
              className="w-full border-b border-gray-400 focus:border-black outline-none py-2 bg-transparent"
            />

            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-3 transition text-white ${
                isSent
                  ? "bg-green-600"
                  : "bg-primary hover:opacity-80"
              }`}
            >
              {loading
                ? "Envoi..."
                : isSent
                ? "Message envoyé"
                : "Envoyer"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact