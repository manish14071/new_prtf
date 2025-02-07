import Hero from "@/components/hero"
import TechStack from "@/components/tech-stack"
import MyWork from "@/components/my-work"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import 'react-vertical-timeline-component/style.min.css';
import  Footer  from "@/components/Footer"
import About from "@/components/about"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <TechStack />
      <About />
      <MyWork />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}

