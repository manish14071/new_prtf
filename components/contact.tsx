"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      })

      if (response.ok) {
        setSubmitMessage("Thank you for your message! I'll get back to you soon.")
        setFormState({ name: "", email: "", message: "" })
      } else {
        setSubmitMessage("Oops! Something went wrong. Please try again later.")
      }
    } catch (error) {
      setSubmitMessage("Oops! Something went wrong. Please try again later.")
    }

    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="w-full py-20 contact-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white">Get in Touch</h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 bg-opacity-50 p-8 rounded-xl shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                id="name"
                placeholder="Your Name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                required
              />
            </div>
            <div>
              <Input
                type="email"
                id="email"
                placeholder="Your Email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                required
              />
            </div>
            <div>
              <Textarea
                id="message"
                placeholder="Your Message"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                required
              />
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
          {submitMessage && <p className="mt-4 text-center text-sm font-medium text-gray-300">{submitMessage}</p>}
        </motion.div>
      </div>
    </section>
  )
}

