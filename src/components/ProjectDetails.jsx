import { useEffect } from "react"
import { X } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

function ProjectDetails({ project, onClose }) {

  const [index, setIndex] = useState(0)

const images = project.images || [project.img]

const nextImage = () => {
  setIndex((prev) => (prev + 1) % images.length)
}

const prevImage = () => {
  setIndex((prev) => (prev - 1 + images.length) % images.length)
}
  useEffect(() => {
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  if (!project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-semibold">

    <div
      className="absolute inset-0 bg-black/40 backdrop-blur-md"
      onClick={onClose}
    ></div>

    <div className="relative bg-white/90 backdrop-blur-xl max-w-7xl w-full rounded-3xl p-6 shadow-2xl border border-gray-200">

      <button
        onClick={onClose}
        className="absolute z-50 top-3 right-3 bg-primary p-2 text-white rounded-full"
      >
        <X size={18} />
      </button>
      <div className="grid md:grid-cols-[1fr_2.5fr] gap-6 items-start">
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-primary mb-1">
            {project.title}
          </h2>

          <div>
            <h3 className="font-semibold text-primary mb-1">
                Date
            </h3>
            <p className="text-secondary">
                {project.date}
            </p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold text-primary mb-1">
              Technologies
            </h3>

            <ul className="flex flex-wrap gap-3">
              {project.tech?.map((t, i) => (
                <li
                  key={i}
                  className="bg-gray-100 text-gray-800 text-lg px-6 py-3 rounded-lg border-2 border-collapse"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary mb-1">
                Description
            </h3>
            <p className="text-secondary">
                {project.desc}
            </p>
          </div>

        </div>

        <div className="relative">
          <img
            src={images[index]}
            className="rounded-2xl w-full h-[520px] object-cover shadow-md transition-all duration-300"
          />

          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4">
              <button
                onClick={prevImage}
                className="bg-black/60 text-white p-2 rounded-full backdrop-blur-md hover:bg-black/80 hover:scale-110 transition"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex gap-2">
                {images.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition ${
                      i === index ? "bg-white" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextImage}
                className="bg-black/60 text-white p-2 rounded-full backdrop-blur-md hover:bg-black/80 hover:scale-110 transition"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 space-y-5">
        <div>
          <h3 className="font-semibold text-primary mb-1">
            Problème
          </h3>
          <p className="text-gray-600">
            {project.problem}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-primary mb-1">
            Solution
          </h3>
          <p className="text-gray-600">
            {project.solution}
          </p>
        </div>

        <div className="pt-2">
          <a
            href={project.github}
            className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 w-fit hover:opacity-80 transition"
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
)
}

export default ProjectDetails