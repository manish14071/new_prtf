"use client"

import { motion } from "framer-motion"

const skills = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "CSS/Sass", level: 95 },
  { name: "Node.js", level: 75 },
  { name: "GraphQL", level: 70 },
]

export default function Skills() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">My Skills</h2>
      <div className="max-w-3xl mx-auto">
        {skills.map((skill) => (
          <div key={skill.name} className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-lg font-semibold">{skill.name}</span>
              <span className="text-lg font-semibold">{skill.level}%</span>
            </div>
            <div className="h-4 bg-secondary rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

