"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section 
      id="home"
      className="min-h-screen w-full relative overflow-hidden bg-[#FF7043]"
    >
      {/* Diagonal Yellow Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[200%] h-full bg-[#FFD700] transform -rotate-12 translate-x-[-20%] translate-y-[-50%]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-4 md:p-6 w-full">
        <div className="container max-w-6xl mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <Link href="/">
            <div className="text-2xl font-bold">
              <div className="w-10 h-10 border-2 border-black flex items-center justify-center">
                <span>H</span>
              </div>
            </div>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-black font-medium">
            <Link href="/" className="hover:opacity-75 transition-opacity">
              Home
            </Link>
            <Link href="/about" className="hover:opacity-75 transition-opacity">
              About
            </Link>
            <Link href="/portfolio" className="hover:opacity-75 transition-opacity">
              Portfolio
            </Link>
            <Link href="/pages" className="hover:opacity-75 transition-opacity">
              Pages
            </Link>
            <Link href="/blog" className="hover:opacity-75 transition-opacity">
              Blog
            </Link>
            <Link href="/contact" className="hover:opacity-75 transition-opacity">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 container max-w-6xl mx-auto px-4 h-[calc(100vh-80px)] flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="text-8xl font-bold">02</div>
            <h1 className="text-5xl md:text-7xl font-bold">
            Manish Dehraj
            </h1>
            <p className="text-xl md:text-2xl">
              Personal portfolio Website
            </p>
            <Button 
              className="bg-[#E64A19] text-white hover:bg-[#D84315] transition-colors 
                px-8 py-3 rounded-full text-lg"
            >
              Hire Me
            </Button>
          </div>

          {/* Right Content - Image */}
          <div className="relative h-[500px] hidden md:block">
            <Image
              src="/profile.jpg" // Make sure to add your profile image
              alt="Steve Henriques"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

