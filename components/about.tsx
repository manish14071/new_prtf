"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] mx-auto lg:mx-0">
            {/* Background Pattern */}
            <div className="absolute -left-2 sm:-left-3 -top-2 sm:-top-3 w-full h-full 
              bg-[#333] opacity-10 pattern-dots pattern-bg-white pattern-size-4 pattern-spacing-4" 
            />
            
            {/* Orange Border Frame */}
            <div className="relative">
              <div className="absolute -left-2 -top-2 w-[calc(100%+16px)] h-[calc(100%+16px)] 
                border-4 border-[#FF7043]" 
              />
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/about-image.jpg"
                  alt="About Me"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 280px, 
                         (max-width: 768px) 320px,
                         (max-width: 1024px) 360px,
                         400px"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-4 sm:space-y-5 lg:space-y-6 max-w-xl mx-auto lg:mx-0">
            {/* Section Title */}
            <div className="space-y-2">
              <div className="w-8 sm:w-10 h-1 bg-[#FF7043]" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#333]">
                About Myself
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-3 sm:space-y-4 text-gray-600">
              <p className="text-sm sm:text-base lg:text-lg">
                inappropriate behavior is often laughed off as "boys will be boys," women face higher
                conduct standards especially in the workplace. That's why it's crucial that, as women,
                our behavior on the job is beyond reproach. inappropriate behavior is often laughed.
                inappropriate behavior is often laughed off as "boys will be boys," women face higher.
              </p>
              <p className="text-sm sm:text-base lg:text-lg">
                That's why it's crucial that, as women, our behavior on the job is beyond reproach.
                inappropriate behavior is often laughed.
              </p>
            </div>

            {/* CTA Button */}
            <Button 
              className="bg-[#FF7043] hover:bg-[#E64A19] text-white transition-colors 
                px-5 sm:px-6 py-1.5 sm:py-2 rounded-full text-sm sm:text-base mt-2 sm:mt-4"
            >
              More Info
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 