"use client"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const controls = useAnimation()
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
      controls.start("visible")
    } else {
      setIsVisible(false)
      controls.start("hidden")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
    >
      {isVisible && (
        <motion.div
          className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-teal-500"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1 }}
        />
      )}
      <div className="ml-4">{children}</div>
    </motion.div>
  )
}

