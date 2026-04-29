import { useState, useEffect } from "react"

function Navbar() {
  const [active, setActive] = useState("hero")

  const menu = [
    { name: "Accueil", id: "hero" },
    { name: "À propos", id: "about" },
    { name: "Projets", id: "projects" },
    { name: "Contact", id: "contact" },
  ]

  useEffect(() => {
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

  return (
    <nav className="fixed w-full z-50 backdrop-blur-xl border-b border-collapse">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

        <h1 className="text-2xl font-bold text-primary italic">
          R.TA
        </h1>

        <ul className="hidden md:flex gap-8 absolute left-1/2 transform -translate-x-1/2">
          {menu.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.id}`}
                className={`relative text-gray-700 hover:text-primary transition font-semibold pb-1`}
              >
                {item.name}

                {/* underline active */}
                <span
                  className={`absolute left-0 -bottom-1 h-[3px] bg-primary transition-all duration-300
                    ${active === item.id ? "w-full" : "w-0"}
                  `}
                />
              </a>
            </li>
          ))}
        </ul>

        <button className="hidden md:block bg-primary text-white px-4 py-2 hover:opacity-80 transition font-semibold">
          Télécharger mon CV
        </button>
      </div>
    </nav>
  )
}

export default Navbar