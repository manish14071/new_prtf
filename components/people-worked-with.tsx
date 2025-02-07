"use client"

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"

const users = [
  {
    name: "Manu Arora",
    designation: "Founder, Algochurn",
    image: "/placeholder.svg?height=100&width=100",
    badge: "Mentor",
  },
  {
    name: "Sarah Singh",
    designation: "Founder, Sarah's Kitchen",
    image: "/placeholder.svg?height=100&width=100",
    badge: "Mentor",
  },
  {
    name: "John Doe",
    designation: "Software Engineer, Tech Corp",
    image: "/placeholder.svg?height=100&width=100",
    badge: "Mentor",
  },
  {
    name: "Jane Smith",
    designation: "Product Manager, Innovate Inc",
    image: "/placeholder.svg?height=100&width=100",
    badge: "Mentor",
  },
  {
    name: "Robert Johnson",
    designation: "Data Scientist, Data Insights",
    image: "/placeholder.svg?height=100&width=100",
    badge: "Mentor",
  },
]

export default function PeopleWorkedWith() {
  return (
    <section id="people-worked-with" className="w-full py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8">
          People I've <span className="text-purple-500">worked</span> with
        </h2>
        <InfiniteMovingCards items={users} direction="right" speed="slow" />
      </div>
    </section>
  )
}

