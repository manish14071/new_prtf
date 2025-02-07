"use client"
import type React from "react"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
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

export const ThreeCardSpotlight = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const techStack = [
    {
      title: "Frontend",
      icon: FaReact,
      skills: [
        { name: "React", icon: FaReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Tailwind CSS", icon: SiTailwindcss },
      ],
    },
    {
      title: "Backend",
      icon: FaNodeJs,
      skills: [
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express", icon: SiExpress },
        { name: "GraphQL", icon: SiGraphql },
        { name: "MongoDB", icon: SiMongodb },
        { name: "PostgreSQL", icon: SiPostgresql },
      ],
    },
    {
      title: "DevOps",
      icon: FaDocker,
      skills: [
        { name: "Docker", icon: FaDocker },
        { name: "Kubernetes", icon: SiKubernetes },
        { name: "AWS", icon: SiAmazonwebservices },
      ],
    },
  ]

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative flex flex-wrap items-center justify-center w-full min-h-[450px] overflow-hidden gap-8 p-8"
    >
      <div className="absolute inset-0 bg-grid-white/[0.2] bg-grid-white/[0.2]" />
      <div className="absolute inset-0 flex items-center justify-center bg-dot-white/[0.2]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      {techStack.map((category, idx) => (
        <motion.div
          key={idx}
          className="relative w-full sm:w-72 h-96 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl shadow-xl overflow-hidden cursor-pointer"
          style={{
            transformStyle: "preserve-3d",
            transform: "perspective(800px)",
          }}
          whileHover={{
            scale: 1.05,
            rotateY: ((idx - 1) * 10).toString() + "deg",
          }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-500/50 to-purple-500/50 opacity-0"
            style={{
              background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`,
            }}
          />
          <div className="p-6 flex flex-col justify-between h-full">
            <div>
              <category.icon className="w-12 h-12 text-white mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
              <ul className="text-gray-200 space-y-2">
                {category.skills.map((skill, skillIdx) => (
                  <li key={skillIdx} className="flex items-center">
                    <skill.icon className="w-5 h-5 mr-2" />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

