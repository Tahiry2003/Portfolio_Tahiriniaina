import { useState } from "react"
import { ChevronRight } from "lucide-react"
import photo from "../data/projet.png"

function Projects() {
  const [filter, setFilter] = useState("Tous")

  const projects = [
    { title: "E-varotra", desc: "Vente de friperie de qualite", type: "Web", img: photo },
    { title: "Portfolio", desc: "App mobile", type: "Mobile", img: photo },
    { title: "E-participation", desc: "Doleances citoyenne / info communal", type: "Web", img: photo },
    { title: "Gestion Cabinet", desc: "Gerer les personnel du cabinet", type: "Web", img: photo },
    { title: "Recherche operationnel", desc: "Programmation Lineaire simplexe", type: "Web", img: photo },
  ]

  // 🔹 Filtrage
  const filteredProjects =
    filter === "Tous"
      ? projects
      : projects.filter((p) => p.type === filter)

  return (
    <section id="projects" className="min-h-screen scroll-mt-28 mb-28">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h1 className="text-5xl font-bold text-secondary italic mb-8 flex text-start">
          <span className="text-yellow-300">02.</span>Mes projets
        </h1>

        <h2 className="text-3xl font-bold text-primary italic mb-8 flex text-start">
          _ Mes projets recents
        </h2>

        {/* 🔹 FILTRE */}
        <div className="flex gap-3 mb-10 flex-wrap">
          {["Tous", "Web", "Mobile"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-5 py-2 border font-semibold transition
                ${
                  filter === item
                    ? "bg-primary text-white"
                    : "hover:bg-gray-100"
                }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* 🔹 GRID */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3">
          {filteredProjects.map((p, i) => (
            <div
              key={i}
              className="group relative bg-tertiary rounded-3xl border text-left overflow-hidden"
            >
              <div className="bg-white rounded-t-xl h-60 flex items-center justify-center relative">
                <span className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {p.type}
                </span>

                <img
                  src={p.img}
                  alt="project"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-primary">
                    {p.title}
                  </h3>
                  <p className="text-secondary text-base font-semibold">
                    {p.desc}
                  </p>
                </div>

                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary opacity-0 group-hover:opacity-100 transition">
                  <ChevronRight size={18} className="text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects