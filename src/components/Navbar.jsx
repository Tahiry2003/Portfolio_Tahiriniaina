import { useState } from "react"

function Navbar() {
  const [open, setOpen] = useState(false)

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
                className="text-gray-700 hover:text-primary transition font-semibold"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Bouton (droite) */}
        <button className="hidden md:block bg-black text-tertiary px-4 py-2 hover:bg-gray-800 transition font-bold">
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