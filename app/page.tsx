import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { CertificationsSection } from "@/components/certifications-section"
import { AchievementsSection } from "@/components/achievements-section"
import { ResumeSection } from "@/components/resume-section"
import { HireMeSection } from "@/components/hire-me-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <AchievementsSection />
      <ResumeSection />
      <HireMeSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
