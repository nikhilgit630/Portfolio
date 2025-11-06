"use client"

import { motion } from "framer-motion"

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Framer Motion", level: 80 },
        { name: "Redux", level: 85 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Redis", level: 75 },
        { name: "REST APIs", level: 90 },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", level: 80 },
        { name: "Git", level: 95 },
        { name: "CI/CD", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Linux", level: 85 },
        { name: "Nginx", level: 75 },
      ],
    },
    {
      title: "Security & Other",
      skills: [
        { name: "Ethical Hacking", level: 85 },
        { name: "Burp Suite", level: 80 },
        { name: "Wireshark", level: 75 },
        {name: "DSA", level: 92 },
        { name: "C++", level: 95 },
        { name: "Python", level: 75 },
        { name: "Socket.io", level: 85 },
        { name: "Penetration Testing", level: 75 },
      ],
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
    <section id="skills" className="section-container bg-secondary/20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h2 className="text-4xl sm:text-5xl font-bold">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
          A comprehensive overview of my technical expertise and proficiency levels.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid md:grid-cols-2 gap-8"
      >
        {skillCategories.map((category, catIndex) => (
          <motion.div key={catIndex} variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 text-primary">{category.title}</h3>
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div key={skillIndex} className="group" whileHover={{ x: 4 }}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-foreground">{skill.name}</span>
                    <span className="text-muted-foreground text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: skillIndex * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default SkillsSection
