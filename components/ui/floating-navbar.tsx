"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

const FloatingNav = ({
  navItems,
}: {
  navItems: {
    name: string
    link: string
  }[]
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-4 inset-x-0 max-w-fit mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center flex justify-center space-x-4"
    >
      {navItems.map((item, index) => (
        <Link key={item.name} href={item.link}>
          <motion.div
            className="relative px-4 py-2 cursor-pointer text-sm font-medium"
            onHoverStart={() => setActiveIndex(index)}
            onHoverEnd={() => setActiveIndex(null)}
          >
            <span>{item.name}</span>
            {activeIndex === index && (
              <motion.div
                layoutId="pill"
                className="absolute inset-0 rounded-full bg-gray-200 dark:bg-gray-800 z-[-1]"
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
          </motion.div>
        </Link>
      ))}
    </motion.div>
  )
}

export default FloatingNav

