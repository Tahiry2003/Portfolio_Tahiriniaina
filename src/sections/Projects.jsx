import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import photo from "../data/projet.png"

function Projects() {
  const projects = [
    { title: "MJ Pharma", desc: "Marketplace B2B", type: "Web", img: photo },
    { title: "Projet 2", desc: "App mobile", type: "Mobile", img: photo },
    { title: "Projet 3", desc: "Dashboard", type: "Web", img: photo },
    { title: "Projet 4", desc: "E-commerce", type: "Web", img: photo },
    { title: "Projet 5", desc: "Portfolio", type: "Web", img: photo },
  ]

  const containerRef = useRef(null)

  const scroll = (direction) => {
    const container = containerRef.current
    const card = container.querySelector("div")
    const cardWidth = card.offsetWidth + 32 // gap-8 = 32px

    container.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    })
  }

  return (
    <section id="projects" className="min-h-screen scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h1 className="text-6xl font-bold text-secondary italic mb-8 flex text-start">
          <span className="text-yellow-300">02.</span> Mes projets
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold text-primary italic mb-10 flex text-start">
          _ Voici quelque projets que j'ai realises
        </h2>

        <div
          ref={containerRef}
          className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
        >
          {projects.map((p, i) => (
            <div
              key={i}
              className="min-w-[31.5%] snap-start group relative bg-tertiary rounded-3xl border text-left overflow-hidden"
            >
              <div className="bg-white rounded-t-xl h-52 flex items-center justify-center relative">
                <span className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {p.type}
                </span>

                <img
                  src={p.img}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-primary">
                    {p.title}
                  </h3>
                  <p className="text-secondary text-base">
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

        <div className="mt-12 flex justify-center gap-4">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-gray-100 transition"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-gray-100 transition"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="mt-12">
          <button className="border px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Voir tous les projets →
          </button>
        </div>

      </div>
    </section>
  )
}

export default Projects