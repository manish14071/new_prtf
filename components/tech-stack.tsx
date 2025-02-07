"use client"

import { ThreeDCardDemo } from "@/components/ui/3d-card"
import { FaReact, FaNodeJs, FaDocker } from "react-icons/fa"
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiKubernetes,
  SiAmazonwebservices,
} from "react-icons/si"

const techStack = [
  {
    title: "Frontend",
    description: "React, Next.js, TypeScript, Tailwind CSS",
    icon: <FaReact className="text-4xl text-blue-500" />,
    technologies: [
      { name: "React", icon: <FaReact className="text-2xl text-blue-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-2xl text-black" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-2xl text-blue-600" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-2xl text-teal-500" /> },
    ],
  },
  {
    title: "Backend",
    description: "Node.js, Express, GraphQL, MongoDB, PostgreSQL",
    icon: <FaNodeJs className="text-4xl text-green-500" />,
    technologies: [
      { name: "Node.js", icon: <FaNodeJs className="text-2xl text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-2xl text-gray-500" /> },
      { name: "GraphQL", icon: <SiGraphql className="text-2xl text-pink-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-2xl text-green-600" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-2xl text-blue-400" /> },
    ],
  },
  {
    title: "DevOps",
    description: "Docker, Kubernetes, AWS",
    icon: <FaDocker className="text-4xl text-blue-600" />,
    technologies: [
      { name: "Docker", icon: <FaDocker className="text-2xl text-blue-600" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-2xl text-blue-500" /> },
      { name: "AWS", icon: <SiAmazonwebservices className="text-2xl text-orange-500" /> },
    ],
  },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="w-full py-20 tech-stack-gradient">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white">
          My Tech Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((tech, index) => (
            <div key={index} className="h-full">
              <ThreeDCardDemo {...tech} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

