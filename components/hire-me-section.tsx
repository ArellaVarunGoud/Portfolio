"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "./section-wrapper"
import { Sparkles, ArrowRight, CheckCircle } from "lucide-react"

const highlights = [
  "Cloud Architecture & AWS",
  "CI/CD & Automation",
  "Scalable Infrastructure",
]

export function HireMeSection() {
  return (
    <SectionWrapper
      id="hire"
      title="Work With Me"
      subtitle="Looking for a cloud engineer who can build and scale? Let's talk."
    >
      <div className="flex items-center justify-center">
        {/* 3D perspective card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="group relative w-full max-w-md [perspective:1000px]"
        >
          {/* Glow effect behind card */}
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />

          <motion.div
            whileHover={{ rotateY: 4, rotateX: -3, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative rounded-2xl bg-card/80 backdrop-blur-xl border border-border p-8 shadow-2xl [transform-style:preserve-3d]"
          >
            {/* VG icon */}
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-2xl font-bold text-background shadow-[0_0_30px_rgba(163,230,53,0.3)]">
              VG
            </div>

            <h3 className="text-center text-xl font-bold text-foreground mb-2">
              Varun Goud
            </h3>
            <p className="text-center text-sm text-muted-foreground mb-6">
              Cloud Computing Engineer & Software Developer
            </p>

            {/* Highlights */}
            <div className="flex flex-col gap-3 mb-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 text-sm text-secondary-foreground"
                >
                  <CheckCircle size={16} className="text-primary flex-shrink-0" />
                  {item}
                </motion.div>
              ))}
            </div>

            {/* Status badge */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-xs font-medium text-green-400">
                Available for opportunities
              </span>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-background font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-[1.02]"
              >
                <Sparkles size={16} />
                Hire Me
                <ArrowRight size={16} />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl border border-border text-foreground font-medium text-sm hover:bg-secondary hover:border-primary/30 transition-all"
              >
                View My Work
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
