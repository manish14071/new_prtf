"use client"

import React, { useRef } from "react"
import { useMotionValueEvent, useScroll } from "framer-motion"
import { motion } from "framer-motion"

export const StickyScroll = ({
  content,
}: {
  content: {
    title: string
    description: string
    content?: string
  }[]
}) => {
  const [activeCard, setActiveCard] = React.useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  })
  const cardLength = content.length

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength)
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint)
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index
      }
      return acc
    }, 0)
    setActiveCard(closestBreakpointIndex)
  })

  const backgroundColors = ["var(--slate-900)", "var(--black)", "var(--neutral-900)", "var(--stone-900)"]
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
    "linear-gradient(to bottom right, var(--blue-500), var(--purple-500))",
  ]

  return (
    <motion.div ref={ref} className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10">
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-black"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-black max-w-sm mt-10"
              >
                {item.content}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        animate={{
          background: backgroundColors[activeCard % backgroundColors.length],
        }}
        className="hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden"
      >
        <motion.div
          animate={{
            background: linearGradients[activeCard % linearGradients.length],
          }}
          className="absolute inset-0 h-full w-full"
        />
        <span className="relative z-20 text-white text-2xl font-bold p-4 block">{content[activeCard].title}</span>
        <p className="relative z-20 text-white p-4">{content[activeCard].description}</p>
      </motion.div>
    </motion.div>
  )
}

