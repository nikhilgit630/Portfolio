"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const ExperienceSection = () => {
  const experiences = [
    {
      company: "SmartOnline Exam (Vision InfoTech)",
      role: "Software Development Engineer",
      period: "Sept 2024 - Nov 2025",
      description:
        "Developed and maintained scalable web applications using Next.js and Redux-Saga for state management.",
      highlights: [
        "Built responsive UI components with React and Tailwind CSS",
        "Implemented complex state management patterns",
        "Optimized performance achieving 95+ Lighthouse scores",
        "Collaborated with cross-functional teams",
      ],
      tech: ["Next.js", "React", "Redux-Saga", "Tailwind CSS", "TypeScript"],
    },
    {
      company: "WYWID Zone Pvt. Ltd.",
      role: "Full Stack Developer",
      period: "June 2024 - Sept 2024",
      description:
        "Built full-stack applications with Node.js backend and React frontend, utilizing Redis and Socket.io for real-time features.",
      highlights: [
        "Designed and implemented RESTful APIs with Node.js and Express",
        "Implemented real-time communication using Socket.io",
        "Optimized database queries and caching with Redis",
        "Deployed applications on cloud platforms",
      ],
      tech: ["Node.js", "Express", "React", "MongoDB", "Redis", "Socket.io"],
    },
    {
      company: "C-DAC, Govt. of India",
      role: "Ethical Hacking & Penetration Testing Intern",
      period: "April 2024 - June 2024",
      description:
        "Interned in cybersecurity division focusing on ethical hacking, network security, and penetration testing.",
      highlights: [
        "Conducted vulnerability assessments on web applications",
        "Performed penetration testing and security audits",
        "Documented security findings and provided remediation strategies",
        "Obtained Govt. of India Certificate in Cybersecurity",
      ],
      tech: ["Burp Suite", "Metasploit", "Wireshark", "Kali Linux", "Network Security"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="experience" className="section-container">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mb-10 sm:mb-12"
      >
        <h2 className="text-4xl sm:text-5xl font-bold flex items-center gap-3 flex-wrap">
          Professional{" "}
          <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        {/* Blue underline */}
        <div className="mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500" />

        <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
          A snapshot of my journey across{" "}
          <span className="font-medium text-blue-700 dark:text-blue-300">
            product engineering
          </span>
          ,{" "}
          <span className="font-medium text-blue-700 dark:text-blue-300">
            full-stack development
          </span>{" "}
          and{" "}
          <span className="font-medium text-blue-700 dark:text-blue-200">
            cybersecurity.
          </span>
        </p>
      </motion.div>

      {/* Timeline + Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative space-y-8 lg:space-y-10"
      >
        {/* Vertical blue timeline line (large screens only) */}
        <div className="hidden lg:block absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/70 via-blue-500/20 to-transparent" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative lg:pl-12"
          >
            {/* Timeline dot (desktop) */}
            <div className="hidden lg:flex absolute left-0 top-6 h-3 w-3 rounded-full bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-500 shadow-[0_0_12px_rgba(59,130,246,0.9)]" />

            {/* Gradient border wrapper - blue theme */}
            <div className="p-[1.5px] rounded-2xl bg-gradient-to-r from-sky-500/60 via-blue-500/70 to-indigo-500/70">
              <div className="glass rounded-[1rem] border border-blue-500/10 bg-background/90 p-6 sm:p-8 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.45)] transition-all duration-300">
                {/* Top row */}
                <div className="flex justify-between items-start mb-5 gap-4 flex-wrap">
                  <div className="flex-1 min-w-[200px]">
                    <h3 className="text-2xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="font-semibold text-lg text-blue-700 dark:text-blue-300">
                      {exp.company}
                    </p>
                  </div>

                  {/* Period pill */}
                  <span
                    className="
                      text-xs sm:text-sm font-medium
                      bg-blue-50 text-blue-700 border border-blue-200
                      dark:bg-blue-500/10 dark:text-blue-100 dark:border-blue-400/40
                      px-4 py-2 rounded-full shadow-sm
                    "
                  >
                    {exp.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div className="mb-6 space-y-3">
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-500/10">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-sky-300" />
                      </div>
                      <p className="text-foreground/85 text-sm sm:text-base">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack chips */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="
                        px-3 py-1 rounded-full text-xs sm:text-sm font-medium
                        bg-blue-50 text-blue-700 border border-blue-200
                        dark:bg-blue-500/10 dark:text-sky-200 dark:border-blue-500/40
                        shadow-[0_0_10px_rgba(59,130,246,0.15)] dark:shadow-[0_0_12px_rgba(37,99,235,0.35)]
                      "
                    >
                      {tech}
                    </span>
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

export default ExperienceSection