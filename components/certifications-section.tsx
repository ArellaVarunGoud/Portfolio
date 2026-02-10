"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "./section-wrapper"
import { Award } from "lucide-react"

interface Certification {
  name: string
  issuer: string
  year: string
}

const certifications: Certification[] = [
  {
    name: "Social Networks NPTEL",
    issuer: "IIT Madras",
    year: "2025",
  },
  {
    name: "ChatGPT-4 Prompt Engineering: ChatGPT",
    issuer: "Infosys",
    year: "2025",
  },
  {
    name: "The Bits and Bytes of Computer Networking",
    issuer: "Coursera",
    year: "2024",
  },
  {
    name: " Data structures Algorithms",
    issuer: "Cipherschools",
    year: "2023",
  },

]

export function CertificationsSection() {
  return (
    <SectionWrapper
      id="certifications"
      title="Certifications"
      subtitle="Professional certifications validating expertise in cloud and software development."
    >
      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-accent/20 to-transparent" />

        {certifications.map((cert, index) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex items-center mb-8 last:mb-0 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Dot */}
            <div className="absolute left-6 md:left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background z-10 shadow-[0_0_10px_rgba(132,204,22,0.4)]" />

            {/* Card */}
            <div
              className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? "md:pr-0 md:mr-auto" : "md:pl-0 md:ml-auto"
              }`}
            >
              <div className="rounded-xl bg-card border border-border p-5 shadow-sm hover:shadow-md hover:border-primary/20 transition-all">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {cert.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {cert.issuer}
                    </p>
                    <span className="inline-block mt-2 px-2 py-0.5 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20">
                      {cert.year}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
