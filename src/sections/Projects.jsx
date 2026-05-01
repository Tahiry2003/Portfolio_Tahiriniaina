import { useState } from "react"
import { ChevronRight } from "lucide-react"
import ProjectDetails from "../components/ProjectDetails"
import projectsData from "../data/projects.json"

function Projects() {
  const [filter, setFilter] = useState("Tous")
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = projectsData

  const filteredProjects =
    filter === "Tous"
      ? projects
      : projects.filter((p) => p.type === filter)

  return (
    <section id="projects" className="min-h-screen scroll-mt-28 mb-28">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* TITLE */}
        <h1 className="text-5xl font-bold text-secondary italic mb-8 flex text-start">
          <span className="text-yellow-300">02.</span> Mes projets
        </h1>

        <h2 className="text-3xl font-bold text-primary italic mb-8 flex text-start">
          _ Mes projets récents
        </h2>

        {/* FILTER */}
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
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3">
          {filteredProjects.map((p, i) => (
            <div
              key={i}
              className="group relative bg-tertiary rounded-3xl border text-left overflow-hidden"
            >
              {/* IMAGE */}
              <div className="bg-white rounded-t-xl h-auto relative">
                <span className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {p.type}
                </span>

                <img
                  src={p.img}
                  alt="project"
                  className="w-full h-[350px] object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 flex items-center justify-between border-t-2">
                <div>
                  <h3 className="text-xl font-bold text-primary">
                    {p.title}
                  </h3>
                  <p className="text-secondary text-base font-semibold">
                    {p.desc}
                  </p>
                </div>

                {/* OPEN MODAL */}
                <button
                  onClick={() => setSelectedProject(p)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-primary opacity-0 group-hover:opacity-100 transition"
                >
                  <ChevronRight size={18} className="text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 MODAL */}
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

export default Projects