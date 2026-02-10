"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "./section-wrapper"
import {
  Cloud,
  Code,
  Container,
  Database,
  Globe,
  ShieldCheck,
  GitBranch,
  Terminal,
  Server,
  Layers,
  Cpu,
  FileCode,
  Palette,
  Boxes,
  Lock,
  Network,
  HardDrive,
  Monitor,
} from "lucide-react"
import type { ReactNode } from "react"

interface Skill {
  name: string
  icon: ReactNode
}

interface SkillCategory {
  title: string
  icon: ReactNode
  skills: Skill[]
  gradientFrom: string
  gradientTo: string
  iconBg: string
}

const skillCategories: SkillCategory[] = [
  {
    title: "Cloud & Infrastructure",
    icon: <Cloud size={24} />,
    skills: [
      { name: "AWS", icon: <Server size={14} /> },
      { name: "EC2", icon: <Monitor size={14} /> },
      { name: "S3", icon: <HardDrive size={14} /> },
      { name: "IAM", icon: <ShieldCheck size={14} /> },
      { name: "VPC", icon: <Network size={14} /> },
      { name: "Lambda", icon: <Cpu size={14} /> },
      { name: "CloudFormation", icon: <Layers size={14} /> },
      { name: "Route 53", icon: <Globe size={14} /> },
    ],
    gradientFrom: "from-primary/15",
    gradientTo: "to-accent/5",
    iconBg: "bg-primary/15 text-primary",
  },
  {
    title: "Programming Languages",
    icon: <Code size={24} />,
    skills: [
      { name: "Python", icon: <FileCode size={14} /> },
      { name: "JavaScript", icon: <FileCode size={14} /> },
      { name: "Java", icon: <FileCode size={14} /> },
      { name: "C++", icon: <Terminal size={14} /> },
      { name: "SQL", icon: <Database size={14} /> },
    ],
    gradientFrom: "from-accent/15",
    gradientTo: "to-primary/5",
    iconBg: "bg-accent/15 text-accent",
  },
  {
    title: "Frontend & Frameworks",
    icon: <Palette size={24} />,
    skills: [
      { name: "Tailwind CSS", icon: <Palette size={14} /> },
      { name: "HTML/CSS", icon: <Code size={14} /> },
    ],
    gradientFrom: "from-stone-400/15",
    gradientTo: "to-accent/5",
    iconBg: "bg-stone-400/15 text-stone-400",
  },
  {
    title: "DevOps & CI/CD",
    icon: <Container size={24} />,
    skills: [
      { name: "Docker", icon: <Container size={14} /> },
      { name: "Kubernetes", icon: <Boxes size={14} /> },
    ],
    gradientFrom: "from-primary/15",
    gradientTo: "to-stone-400/5",
    iconBg: "bg-primary/15 text-primary",
  },
  {
    title: "Databases & Storage",
    icon: <Database size={24} />,
    skills: [
      { name: "MySQL", icon: <Database size={14} /> },
    ],
    gradientFrom: "from-accent/15",
    gradientTo: "to-stone-400/5",
    iconBg: "bg-accent/15 text-accent",
  },
  {
    title: "Security & Monitoring",
    icon: <ShieldCheck size={24} />,
    skills: [
      { name: "CloudWatch", icon: <Monitor size={14} /> },
      { name: "Linux", icon: <Terminal size={14} /> },
    ],
    gradientFrom: "from-stone-400/15",
    gradientTo: "to-primary/5",
    iconBg: "bg-stone-400/15 text-stone-400",
  },
]

function SkillCard({
  category,
  index,
}: {
  category: SkillCategory
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className={`rounded-2xl bg-gradient-to-br ${category.gradientFrom} ${category.gradientTo} border border-border p-6 shadow-sm hover:shadow-lg hover:shadow-primary/5 transition-all hover:border-primary/20`}
    >
      <div
        className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${category.iconBg} mb-5`}
      >
        {category.icon}
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-4">
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill.name}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-secondary/80 text-secondary-foreground border border-border hover:border-primary/30 hover:bg-primary/10 hover:text-primary transition-all cursor-default"
          >
            {skill.icon}
            {skill.name}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export function SkillsSection() {
  return (
    <SectionWrapper
      id="skills"
      title="Skills & Expertise"
      subtitle="Technologies and tools I work with to build scalable cloud infrastructure and modern applications."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <SkillCard key={category.title} category={category} index={index} />
        ))}
      </div>
    </SectionWrapper>
  )
}
