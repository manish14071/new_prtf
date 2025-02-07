"use client"

import type React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface LampSectionHeaderProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const LampSectionHeader = ({
  children,
  className,
  id,
}: LampSectionHeaderProps) => {
  return (
    <section id={id} className={cn("relative flex flex-col items-center justify-center overflow-hidden w-full", className)}>
      <div className="relative flex flex-col items-center justify-center z-10">
        {children}
      </div>
      <motion.div
        initial={{ opacity: 0.5, width: "15rem" }}
        whileInView={{ opacity: 1, width: "30rem" }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        style={{
          backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
        }}
        className="absolute inset-auto z-0 h-56 w-[30rem] bg-gradient-conic from-purple-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
      >
        <div className="absolute inset-0 bg-background [mask-image:radial-gradient(farthest-side_at_top,transparent,white)]"></div>
      </motion.div>
    </section>
  )
}

