"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SectionWrapperProps {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
}

export function SectionWrapper({
  id,
  title,
  subtitle,
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-24 px-6 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-stone-50 via-slate-100 to-neutral-400 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          {subtitle && (
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary to-accent" />
        </motion.div>
        {children}
      </div>
    </section>
  )
}
