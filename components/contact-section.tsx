"use client"

import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { SectionWrapper } from "./section-wrapper"
import { Send, Github, Linkedin, Mail, Loader2, Phone } from "lucide-react"

const CONTACT_EMAIL = "arellavarungoud@gmail.com"
const GITHUB_URL = "https://github.com/ArellaVarunGoud"
const LINKEDIN_URL = "https://www.linkedin.com/in/arella-varun-goud-86a643297"
const PHONE_NUMBER = "+91-88267386006"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })
      const data = await response.json()
      if (data.success) {
        setSubmitted(true)
      } else {
        setError("Something went wrong. Please try again.")
      }
    } catch {
      setError("Failed to send message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <SectionWrapper
      id="contact"
      title="Get in Touch"
      subtitle="Have a project in mind or want to collaborate? Send me a message."
      className="bg-secondary/30"
    >
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {submitted ? (
            <div className="rounded-2xl bg-card border border-border p-10 text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-green-500/15 text-green-400 flex items-center justify-center mb-4">
                <Send size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Message Sent
              </h3>
              <p className="text-sm text-muted-foreground">
                Thank you for reaching out. I will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input type="hidden" name="from_name" value="Portfolio Contact Form" />
              <input type="hidden" name="subject" value="New Contact from Portfolio" />
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                />
              </div>
              {error && (
                <p className="text-sm text-destructive">{error}</p>
              )}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-background font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-xl transition-all disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center gap-6"
        >
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {"Let's Connect"}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Whether you have a question about cloud architecture, want to
              discuss a project, or just want to say hello, my inbox is always
              open.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-sm hover:shadow-primary/5 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-colors">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Email</p>
                <p className="text-xs text-muted-foreground">{CONTACT_EMAIL}</p>
              </div>
            </a>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/20 hover:shadow-sm hover:shadow-accent/5 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-background transition-colors">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Phone</p>
                <p className="text-xs text-muted-foreground">{PHONE_NUMBER}</p>
              </div>
            </a>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-sm hover:shadow-primary/5 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-colors">
                <Github size={18} />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">GitHub</p>
                <p className="text-xs text-muted-foreground">github.com/varungoud</p>
              </div>
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/20 hover:shadow-sm hover:shadow-accent/5 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-background transition-colors">
                <Linkedin size={18} />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">LinkedIn</p>
                <p className="text-xs text-muted-foreground">linkedin.com/in/varungoud</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
