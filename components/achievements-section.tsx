"use client"

import { motion } from "framer-motion"
import { Award, Trophy, Code2, Shield } from "lucide-react"

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Code2,
      title: "700+ DSA Problems Solved",
      description: "Solved over 700 Data Structures and Algorithms problems across multiple platforms.",
      category: "Competitive Programming",
    },
    {
      icon: Shield,
      title: "Cybersecurity Certification",
      description: "Government of India certified in Cybersecurity from C-DAC with expertise in penetration testing.",
      category: "Security",
    },
    {
      icon: Trophy,
      title: "Python Specialization",
      description: "Completed advanced Python course with focus on backend development and automation.",
      category: "Programming",
    },
    {
      icon: Award,
      title: "Top Performer",
      description: "Recognized as top performer in multiple organizations for technical excellence and innovation.",
      category: "Achievement",
    },
  ]

  const platformLinks = [
    {
      name: "LeetCode",
      description: "Advanced problem solver with 700+ solutions",
      url: "https://leetcode.com/u/critical_16/",
    },
    {
      name: "GeeksforGeeks",
      description: "Active contributor and problem solver",
      url: "https://www.geeksforgeeks.org/user/nikhil565dubey/",
    },
    {
      name: "Coding Ninjas",
      description: "Participated in coding contests",
      url: "https://www.naukri.com/code360/profile/5fe6b08c-6e81-4547-9a8b-0ba0c7530408",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="achievements" className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h2 className="text-4xl sm:text-5xl font-bold">
          Achievements & <span className="gradient-text">Recognition</span>
        </h2>
        <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
          Milestones and accomplishments throughout my career journey.
        </p>
      </motion.div>

      {/* Achievement Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid md:grid-cols-2 gap-6 mb-16"
      >
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass border border-border rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-semibold text-accent mt-1">{achievement.category}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
              <p className="text-muted-foreground">{achievement.description}</p>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Competitive Programming Platforms */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold mb-6">Competitive Programming Profiles</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {platformLinks.map((platform, index) => (
            <a
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300 group"
            >
              <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{platform.name}</h4>
              <p className="text-muted-foreground text-sm">{platform.description}</p>
              <div className="mt-4 flex items-center text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Visit Profile →
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default AchievementsSection
