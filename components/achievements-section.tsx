"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "./section-wrapper"
import { Trophy, Users, Zap, Star } from "lucide-react"
import type { ReactNode } from "react"

interface Achievement {
  icon: ReactNode
  title: string
  description: string
  iconColor: string
}

const achievements: Achievement[] = [
  {
    icon: <Trophy size={28} />,
    title: "Hackathon Quarter Finalist",
    description:
      "6st place at Web Innovation Hackathon 2024 for building an AI-powered infrastructure optimizer.",
    iconColor: "bg-primary/15 text-primary",
  },
  {
    icon: <Zap size={28} />,
    title: "60% Deployment Speedup",
    description:
      "Architected CI/CD pipelines that reduced deployment time from 45 minutes to under 18 minutes.",
    iconColor: "bg-accent/15 text-accent",
  },
  {
    icon: <Users size={28} />,
    title: "Open Source Contributor",
    description:
      "Active contributor to Terraform and Docker community projects in Girl's Script Summer of Code",
    iconColor: "bg-stone-400/15 text-stone-400",
  },
  {
    icon: <Star size={28} />,
    title: "AWS Cloud Practitioner",
    description:
      "Inprogress AWS Cloud Practitioner certification",
    iconColor: "bg-primary/15 text-primary",
  },
]

export function AchievementsSection() {
  return (
    <SectionWrapper
      id="achievements"
      title="Achievements"
      subtitle="Key milestones and recognitions throughout my career."
      className="bg-secondary/30"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="text-center rounded-2xl bg-card border border-border p-8 shadow-sm hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all"
          >
            <div
              className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${item.iconColor} mb-5`}
            >
              {item.icon}
            </div>
            <h3 className="text-base font-semibold text-foreground mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
