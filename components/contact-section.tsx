"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Loader, PhoneCallIcon } from "lucide-react"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    try {
      // Using EmailJS directly in the client
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSuccess(true)
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setSuccess(false), 3000)
      } else {
        setError("Failed to send message. Please try again.")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-bold">
          Let's Work <span className="gradient-text">Together</span>
        </h2>
        <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
          Have an exciting project or opportunity? I'd love to hear from you. Reach out and let's create something
          amazing.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm always open to new opportunities and interesting projects. Whether you have a question or just want to
              say hello, feel free to reach out!
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 mt-1">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <a
                  href="mailto:nik16dube@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  nik16dube@gmail.com
                </a>
              </div>
            </div>
          </div>
          {/* phone call */}
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10 mt-1">
              <PhoneCallIcon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Phone</h4>
              <a
                href="tel:+919415926758"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +91 9415926758
              </a>
            </div>
          </div>

          <div className="space-y-3 pt-4">
            <h4 className="font-semibold">Connect With Me</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/nikhil-dubey-b4b471243/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/nikhilgit630"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="glass border border-border rounded-xl p-8 space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:outline-none focus:border-primary transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:outline-none focus:border-primary transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Your message..."
            />
          </div>

          {success && (
            <div className="p-4 bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-200 rounded-lg text-sm">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {error && (
            <div className="p-4 bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-200 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader className="w-4 h-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </motion.form>
      </div>
    </section>
  )
}

export default ContactSection
