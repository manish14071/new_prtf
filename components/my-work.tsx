"use client"

import React from "react"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store built with Next.js and Stripe",
    content:
      "This project demonstrates my ability to create complex, scalable web applications. It features a responsive design, user authentication, product management, and secure checkout process.",
  },
  {
    title: "Social Media Dashboard",
    description: "Real-time analytics dashboard for social media platforms",
    content:
      "This dashboard provides insights into social media performance across multiple platforms. It showcases my skills in data visualization and real-time data processing.",
  },
  {
    title: "Task Management App",
    description: "A Trello-like application with drag-and-drop functionality",
    content:
      "This project highlights my expertise in creating intuitive user interfaces and implementing complex interactions. It includes features like task organization, team collaboration, and progress tracking.",
  },
  {
    title: "AI-Powered Chatbot",
    description: "An intelligent chatbot leveraging OpenAI's GPT-3",
    content:
      "This chatbot showcases my ability to work with cutting-edge AI technologies and integrate them into practical applications. It features natural language processing, context-aware responses, and seamless handoff to human agents when needed.",
  },
]

export default function MyWork() {
  return (
    <section id="my-work" className="w-full py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-800">My Work</h2>
        <StickyScroll content={projects} />
      </div>
    </section>
  )
}

