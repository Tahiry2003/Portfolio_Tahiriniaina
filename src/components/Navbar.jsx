import { useState } from "react"

function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("hero")

  useState(() => {
  const sections = document.querySelectorAll("section")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id)
        }
      })
    },
    { threshold: 0.6 }
  )

  sections.forEach((sec) => observer.observe(sec))

  return () => observer.disconnect()
}, [])

  const menu = [
    { name: "Accueil", id: "hero" },
    { name: "À propos", id: "about" },
    { name: "Projets", id: "projects" },
    { name: "Contact", id: "contact" },
  ]

  return (
    <nav className="fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-6">

        {/* Logo (gauche) */}
        <h1 className="text-2xl font-bold text-primary">
        Tahiriniaina Arson
        </h1>

        {/* Menu (centre desktop) */}
        <ul className="hidden md:flex gap-8 absolute left-1/2 transform -translate-x-1/2">
          {menu.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.id}`}
                className={`relative text-gray-700 hover:text-primary transition font-semibold pb-1
                  ${active === item.id ? "text-primary" : ""}
                `}
              >
                {item.name}

                {/* ligne active */}
                <span
                  className={`absolute left-0 -bottom-1 h-[3px] bg-primary transition-all duration-300
                    ${active === item.id ? "w-full" : "w-0"}
                  `}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Bouton (droite) */}
        <button className="hidden md:block bg-gray-700 text-tertiary px-4 py-2 hover:bg-primary transition font-bold">
          Telecharger mon CV
        </button>
        

        {/* Menu mobile button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden flex flex-col items-center gap-4 py-4 bg-white shadow-md">
          {menu.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="text-secondary"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar