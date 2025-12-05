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
        { name: "DSA", level: 92 },
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
    <section
      id="skills"
      className="section-container bg-secondary/10 backdrop-blur-xl rounded-3xl border border-white/10 py-16 sm:py-20"
    >

      {/* Soft gradient background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
        <div className="absolute -top-24 left-0 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-sky-500/25 via-blue-500/20 to-indigo-500/25 rounded-full blur-3xl sm:blur-[90px]" />
        <div className="absolute bottom-0 right-4 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-tl from-purple-500/25 via-pink-500/20 to-amber-400/25 rounded-full blur-3xl sm:blur-[90px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h2 className="text-4xl sm:text-5xl font-bold">
          Technical{" "}
          <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
        <div className="mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500" />
        <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
          A comprehensive overview of my technical expertise and proficiency levels
          across frontend, backend, DevOps and security.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid md:grid-cols-2 gap-8 lg:gap-10 relative z-10"
      >
        {skillCategories.map((category, catIndex) => (
          <motion.div key={catIndex} variants={itemVariants}>
            {/* Category card with gradient border */}
            <div className="p-[1.5px] rounded-2xl bg-gradient-to-br from-sky-500/60 via-blue-500/70 to-indigo-500/70 shadow-[0_0_30px_rgba(37,99,235,0.25)]">
              <div className="h-full rounded-[1rem] bg-background/95 dark:bg-background/80 border border-blue-500/10 p-5 sm:p-6">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="group"
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-sm sm:text-base text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-200">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="w-full bg-muted/60 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 shadow-[0_0_12px_rgba(59,130,246,0.7)]"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ duration: 1.4, delay: skillIndex * 0.08 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default SkillsSection
