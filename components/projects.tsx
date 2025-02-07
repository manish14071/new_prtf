"use client"

import { motion } from "framer-motion"
import { GridCardSpotlight } from "./ui/grid-card-spotlight"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured online store built with Next.js and Stripe",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    title: "Social Media Dashboard",
    description: "Real-time analytics dashboard for social media platforms",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A Trello-like application with drag-and-drop functionality",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function Projects() {
  return (
    <section id="my-work" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div key={project.id} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <GridCardSpotlight className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md"
                />
              </GridCardSpotlight>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

