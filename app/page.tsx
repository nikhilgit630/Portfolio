"use client"

import { ThemeProvider } from "next-themes"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import EducationSection from "@/components/EducationSection"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import AchievementsSection from "@/components/achievements-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
