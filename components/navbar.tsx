"use client"

import FloatingNav from "./ui/floating-navbar"

const navItems = [
  { name: "Home", link: "#home" },
  { name: "Tech Stack", link: "#tech-stack" },
  { name: "My Work", link: "#my-work" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
]

export default function Navbar() {
  return <FloatingNav navItems={navItems} />
}

