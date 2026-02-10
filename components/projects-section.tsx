"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "./section-wrapper"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  title: string
  description: string
  techStack: string[]
  github: string
  demo: string
}

const projects: Project[] = [
  {
    title: "Static Website Hosting on AWS Using S3 and CloudFront",
    description:
      "This project focuses on deploying a static website on AWS using Amazon S3 and CloudFront. The website files are hosted in an S3 bucket configured for static website hosting, while CloudFront is used to improve performance and reduce latency through global content delivery. Basic security and access control are managed using AWS IAM. The project demonstrates hands-on experience with cloud storage, content delivery, and deployment using AWS Free Tier services.",
    techStack: ["AWSIAM", "Amazon CloudFront", "Html", "CSS", "JavaScript"],
    github: "#",
    demo: "#",
  },
  {
    title: "AI-Driven Real-Time Traffic Management System|",
    description:
      "This intelligent real-time traffic monitoring system utilizes advanced computer vision and embedded sensors to instantly detect traffic violations, issuing automated, immediate alerts for improved compliance. It enhances night-time safety through AI-driven high-beam detection and automatic dimming control. Furthermore, the system promotes driver education by generating personalized, context-aware, corrective video feedback for each infraction.",
    techStack: ["Python", "Machine learning", "Computer Vision", "AI video generation"],
    github: "#",
    demo: "#",
  },
  {
    title: "Cloud Based File Storage System Using AWS",
    description:
      "Designed a cloud-based file storage system using AWS S3 with IAM-based access control to manage secure file storage and permissions. Implemented a user-friendly interface for uploading, organizing, and sharing files, leveraging AWS Lambda for serverless processing and AWS API Gateway for secure API endpoints.",
    techStack: ["React", "Docker", "Prometheus", "Grafana"],
    github: "#",
    demo: "#",
  },
  {
    title: "Arduino-Based Temperature & Humidity Monitor|",
    description:
      "Developed a real-time environmental monitoring system using Arduino UNO and a DHT22 sensor, achieving precise temperature and humidity data acquisition. The system provides stable hardware-software integration with continuous live output via the Serial Monitor, delivering reliable, calibrated readings for immediate observation and long-term stability in environmental analysis.",
    techStack: ["Arduino UNO,", "Embedded C", "DHT22 Sensor,", "Real-Time Monitoring Systems", "Serial Communication"],
    github: "#",
    demo: "#",
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group rounded-2xl bg-card border border-border p-8 shadow-sm hover:shadow-lg hover:shadow-primary/5 transition-all hover:border-primary/20"
    >
      <h3 className="text-lg font-semibold text-foreground mb-3">
        {project.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-5">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-secondary hover:border-primary/20 transition-all"
          aria-label={`GitHub repository for ${project.title}`}
        >
          <Github size={16} />
          Code
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-background text-sm font-semibold hover:opacity-90 transition-opacity"
          aria-label={`Live demo for ${project.title}`}
        >
          <ExternalLink size={16} />
          Live Demo
        </a>
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      subtitle="A selection of projects showcasing cloud architecture, automation, and full-stack development."
      className="bg-secondary/30"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  )
}
