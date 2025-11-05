"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const ExperienceSection = () => {
  const experiences = [
    {
      company: "SmartOnline Exam (Vision InfoTech)",
      role: "Software Development Engineer",
      period: "2023 - Present",
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
      period: "2022 - 2023",
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
      period: "2021 - 2022",
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
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h2 className="text-4xl sm:text-5xl font-bold">
          Professional <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
          My journey through various roles and technologies in the industry.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-8"
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="glass border border-border rounded-xl p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex justify-between items-start mb-4 gap-4 flex-wrap">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                <p className="text-primary font-semibold text-lg">{exp.company}</p>
              </div>
              <span className="text-sm font-medium text-muted-foreground bg-secondary/80 px-4 py-2 rounded-full">
                {exp.period}
              </span>
            </div>

            <p className="text-muted-foreground mb-6">{exp.description}</p>

            {/* Highlights */}
            <div className="mb-6 space-y-3">
              {exp.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80">{highlight}</p>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {exp.tech.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default ExperienceSection
