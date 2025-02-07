"use client"

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { FaBriefcase, FaGraduationCap } from "react-icons/fa"

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovators Inc.",
    location: "San Francisco, CA",
    description: "Led the development of cutting-edge web applications using React and Next.js.",
    date: "2021 - Present",
    icon: <FaBriefcase />,
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions Ltd.",
    location: "New York, NY",
    description: "Developed responsive and accessible user interfaces for various client projects.",
    date: "2018 - 2021",
    icon: <FaBriefcase />,
  },
  {
    title: "Junior Web Developer",
    company: "WebCraft Agency",
    location: "Boston, MA",
    description: "Assisted in the creation of websites and web applications using HTML, CSS, and JavaScript.",
    date: "2016 - 2018",
    icon: <FaBriefcase />,
  },
  {
    title: "Computer Science Degree",
    school: "Tech University",
    location: "Boston, MA",
    description: "Bachelor's degree in Computer Science with a focus on web technologies.",
    date: "2012 - 2016",
    icon: <FaGraduationCap />,
  },
]

export default function Experience() {
  return (
    <section id="experience" className="w-full py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white">My Experience</h2>
        <VerticalTimeline animate={true} lineColor="rgba(255,255,255,0.2)">
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ 
                background: "rgba(255, 255, 255, 0.05)", 
                color: "#fff",
                boxShadow: "none",
                border: "1px solid rgba(255,255,255,0.1)"
              }}
              contentArrowStyle={{ borderRight: "7px solid rgba(255, 255, 255, 0.05)" }}
              date={exp.date}
              dateClassName="text-gray-300"
              iconStyle={{ 
                background: "rgb(124, 58, 237)", 
                color: "#fff",
                boxShadow: "0 0 0 4px rgba(124, 58, 237, 0.2)"
              }}
              icon={exp.icon}
              visible={true}
            >
              <h3 className="vertical-timeline-element-title text-xl font-semibold">{exp.title}</h3>
              <h4 className="vertical-timeline-element-subtitle text-md mt-2 text-purple-300">{exp.company || exp.school}</h4>
              <p className="text-gray-300 mt-2">{exp.location}</p>
              <p className="text-gray-400 mt-4">{exp.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  )
}

