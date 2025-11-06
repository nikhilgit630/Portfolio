"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { usePathname } from "next/navigation"

const ProjectsSection = () => {
  const pathname = usePathname()
  const isGithubHost = pathname.startsWith("/Portfolio/")
  
  console.log("pathname Project Section:", pathname)
  console.log("isGithubHost:", isGithubHost)
  
  const projects = [
    {
      title: "Chat Web App",
      description:
        "Real-time chat application with messaging, file sharing, and user presence. Built with full-stack MERN architecture featuring WebSocket integration for instant communication.",
      image: isGithubHost ? "/Portfolio/chat-app.jpg" :"/chat-application-dashboard.jpg",
      tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "PostgreSQL", "Redis"],
      demo: "#",
      code: "https://github.com/nikhilgit630",
    },
    {
      title: "AI Face Generation System",
      description:
        "Automatic face generation from text descriptions using BERT embeddings and GAN architecture. Interactive Streamlit interface for real-time image generation and customization.",
      image: isGithubHost ? "/Portfolio/ai-generated-faces.jpg" :"/ai-generated-faces.jpg",
      tech: ["Python", "BERT", "GAN", "Streamlit", "TensorFlow", "PyTorch"],
      demo: "#",
      code: "https://github.com/nikhilgit630",
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h2 className="text-4xl sm:text-5xl font-bold">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
          Showcasing my best work and innovative solutions built with modern technologies.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid md:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group glass border border-border rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Image */}
            <div className="relative overflow-hidden h-64 bg-gradient-to-br from-primary/20 to-accent/20">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-4">
                <a
                  href={project.demo}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default ProjectsSection
