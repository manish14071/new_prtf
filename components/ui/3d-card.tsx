"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import React, { createContext, useState, useContext, useRef, useEffect } from "react"

interface Tech {
  name: string
  icon: React.ReactNode
}

interface CardProps {
  title: string
  description: string
  icon: React.ReactNode
  technologies: Tech[]
}

export const ThreeDCardDemo = ({ title, description, icon, technologies }: CardProps) => {
  return (
    <div className="relative h-full w-full">
      <div className="relative h-full w-full rounded-xl border border-[#ffffff30] bg-[#131313] p-6 transition-all hover:scale-[1.02]">
        <div className="relative z-10 flex h-full flex-col">
          <div className="flex items-center gap-4 mb-4">
            {icon}
            <h3 className="text-2xl font-bold text-white">{title}</h3>
          </div>
          
          <div className="mt-auto">
            <h4 className="text-lg font-semibold text-white mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-lg bg-[#232323] px-3 py-2"
                >
                  {tech.icon}
                  <span className="text-sm text-white">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

