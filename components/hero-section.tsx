"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ParticleField } from "./particle-field"
import { ArrowDown } from "lucide-react"

const roles = ["Cloud Computing Engineer", "Software Developer"]

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticleField />

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/30 to-background pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl w-full px-6 py-24 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-shrink-0"
        >
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden ring-2 ring-primary/30 shadow-2xl shadow-primary/20">
            <Image
              src="./Varun.jpeg"
              alt="Varun Goud - Cloud Engineer"
              fill
              className="object-cover"
              priority
            />
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full ring-2 ring-accent/20" />
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4"
          >
            Welcome to my portfolio
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-4 justify-center md:justify-start flex-wrap"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
              <span className="bg-gradient-to-r from-stone-400 via-primary to-accent bg-clip-text text-transparent">
                Varun Goud
              </span>
            </h1>
            {/* Green glowing badge */}
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6, type: "spring" }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-500/15 text-green-400 border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.25)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Ready to Hire
            </motion.span>
          </motion.div>

          <div className="mt-4 h-10 flex items-center justify-center md:justify-start">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-xl md:text-2xl font-medium bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 text-muted-foreground leading-relaxed max-w-lg mx-auto md:mx-0"
          >
            I am an aspiring Cloud and DevOps Engineer with practical exposure to cloud services, 
            virtual infrastructure, and deployment workflows. My interests include cloud security, 
            automation, and scalable system design. Through academic projects and self-learning, 
            I focus on applying cloud concepts to solve real-world problems and improve system 
            reliability and performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex items-center gap-4 justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-background font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary hover:border-primary/30 transition-all"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="text-muted-foreground" size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
