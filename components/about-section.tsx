"use client"

import { motion } from "framer-motion"
import { MapPin, Briefcase, Code } from "lucide-react"

const AboutSection = () => {
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
    <section id="about" className="section-container">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid lg:grid-cols-2 gap-12 items-center"
      >
        {/* Left Column - Image */}
        <motion.div variants={itemVariants} className="relative">
          <div className="w-full aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden">
            <img src="/developer-avatar.jpg" alt="Nikhil Dubey" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Right Column - Content */}
        <motion.div variants={itemVariants} className="space-y-6">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Software Developer with a B.Tech degree in Information Technology from IIIT Allahabad.
              Specialized in building scalable web systems using modern technologies like React, Next.js, and Node.js. I
              combine my expertise in full-stack development with a strong foundation in ethical hacking and
              cybersecurity.
            </p>
          </div>

          {/* Quick Facts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
              <Briefcase className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-sm">Experience</h3>
                <p className="text-muted-foreground text-sm">3+ years in full-stack development</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
              <Code className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-sm">Specialization</h3>
                <p className="text-muted-foreground text-sm">MERN Stack & Next.js</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
              <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-sm">Location</h3>
                <p className="text-muted-foreground text-sm">Allahabad, India</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
              <Code className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-sm">Interest</h3>
                <p className="text-muted-foreground text-sm">Cybersecurity & Web3</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AboutSection
