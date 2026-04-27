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
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        {/* Logo */}
        <h1 className="text-xl font-bold">MonPortfolio</h1>

        {/* Menu desktop */}
        <ul className="hidden md:flex gap-6">
          {menu.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.id}`}
                className="hover:text-blue-500 transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Bouton mobile */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <ul className="md:hidden bg-white p-4 space-y-4">
          {menu.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="block"
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