import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

function Navbar() {
  const [active, setActive] = useState("hero")
  const [open, setOpen] = useState(false)

  const menu = [
    { name: "Accueil", id: "hero" },
    { name: "À propos", id: "about" },
    { name: "Services", id: "services" },
    { name: "Projets", id: "projects" },
    { name: "Contact", id: "contact" },
  ]

  useEffect(() => {
    const sections = document.querySelectorAll("section")

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) {
          setActive(visible.target.id)
        }
      },
      { threshold: 0.2 }
    )

    sections.forEach((sec) => observer.observe(sec))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [open])

  return (
    <nav className="fixed w-full z-50 backdrop-blur-xl border-b border-collapse">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

        <h1 className="text-2xl font-bold text-primary italic">
          R.TA
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 absolute left-1/2 transform -translate-x-1/2">
          {menu.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.id}`}
                className="relative text-gray-700 hover:text-primary transition font-semibold pb-1"
              >
                {item.name}

                <span
                  className={`absolute left-0 -bottom-1 h-[3px] bg-primary transition-all duration-300 origin-left ${
                    active === item.id ? "w-full scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* CV DESKTOP */}
        <a
          href="/CV_Tahiriniaina_Arson.pdf"
          download
          className="hidden md:block bg-primary text-white px-4 py-2 hover:opacity-80 transition font-semibold"
        >
          Télécharger mon CV
        </a>

        {/* HAMBURGER MOBILE */}
        <button
          className="md:hidden text-primary"
          onClick={() => setOpen(!open)}
        >
          {open ? <X strokeWidth={3} /> : <Menu strokeWidth={3} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden h-screen text-lg flex flex-col items-center justify-center gap-6 pb-32 border-t bg-tertiary/75 backdrop-blur-xl">
      
          {menu.map((item, index) => (
            <a
              key={index}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className={`relative font-semibold transition ${
                active === item.id ? "text-primary" : "text-gray-700 hover:text-primary"
              }`}
            >
              {item.name}

              {/* underline active mobile */}
              <span
                className={`absolute left-0 -bottom-1 h-[3px] bg-primary transition-all duration-300 origin-left ${
                  active === item.id ? "w-full scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          ))}

          <a
            href="/CV_Tahiriniaina_Arson.pdf"
            download
            className="bg-primary text-white px-4 py-2 hover:opacity-80 transition font-semibold"
          >
            Télécharger mon CV
          </a>

        </div>
      )}
    </nav>
  )
}

export default Navbar