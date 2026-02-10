"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "./section-wrapper"
import { Eye, Download } from "lucide-react"

export function ResumeSection() {
  return (
    <SectionWrapper
      id="resume"
      title="Resume"
      subtitle="A snapshot of my professional experience, education, and technical skills."
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <div className="rounded-2xl bg-card border border-border p-10 shadow-sm">
          <p className="text-muted-foreground leading-relaxed mb-8">
            Cloud Computing Engineer with hands-on experience in AWS, Docker,
            and CI/CD automation. Skilled in Python and JavaScript with a strong
            foundation in building scalable, reliable systems. Passionate about
            cloud architecture and continuous improvement.
          </p>

          <div className="flex items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="https://drive.google.com/file/d/1IhyhSoyIqAw0gQ2eccvjlJhWpu7dUfQm/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-background font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-xl transition-all"
            >
              <Eye size={18} />
              View Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="https://drive.google.com/file/d/1IhyhSoyIqAw0gQ2eccvjlJhWpu7dUfQm/view?usp=sharing"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary hover:border-primary/20 transition-all"
            >
              <Download size={18} />
              Download PDF
            </motion.a>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
