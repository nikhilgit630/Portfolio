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
    <section
      id="about"
      className="section-container relative py-16 sm:py-20 lg:py-24"
    >
      {/* Soft gradient blobs in background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-10 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-purple-500/25 via-pink-500/20 to-amber-400/25 rounded-full blur-3xl sm:blur-[90px] opacity-70" />
        <div className="absolute -bottom-24 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tl from-sky-400/25 via-cyan-400/20 to-emerald-400/25 rounded-full blur-3xl sm:blur-[90px] opacity-70" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center"
      >
        {/* Left Column - Image / Card */}
        <motion.div variants={itemVariants} className="relative">
          {/* Outer glow frame */}
          <div className="relative mx-auto w-64 h-64 sm:w-72 sm:h-72 lg:w-120 lg:h-120">
            <div className="absolute -inset-[3px] rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-400 opacity-80 blur-[6px]" />
            <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-background/80 via-background/60 to-background/90 border border-white/10 overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.45)]">
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/developer-avatar.jpg`}
                alt="Nikhil Dubey"
                className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 sm:left-auto sm:right-4 sm:bottom-2"
          >
            <div className="flex items-center gap-3 rounded-2xl px-4 py-3 bg-background/90 border border-white/10 shadow-lg shadow-purple-500/30 backdrop-blur">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-500 to-pink-500">
                <Code className="w-5 h-5 text-white" />
              </div>
              <div className="text-xs sm:text-sm text-left">
                <p className="font-semibold text-foreground/90">
                  Full-Stack Developer
                </p>
                <p className="text-[11px] sm:text-xs text-muted-foreground">
                  MERN • DSA • Security Mindset
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Content */}
        <motion.div variants={itemVariants} className="space-y-7">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
              <span className="mr-2">About</span>
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-amber-400 bg-clip-text text-transparent">
                Me
              </span>
            </h2>

            {/* Small colorful underline */}
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 rounded-full mb-4" />

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              I&apos;m a{" "}
              <span className="font-semibold text-foreground">
                Software Developer
              </span>{" "}
              with a B.Tech in{" "}
              <span className="font-semibold text-purple-400">
                Information Technology
              </span>{" "}
              from{" "}
              <span className="font-semibold text-pink-400">
                IIIT Allahabad
              </span>
              . I love building{" "}
              <span className="font-semibold text-sky-400">
                scalable web apps
              </span>{" "}
              using modern stacks like{" "}
              <span className="font-semibold text-emerald-400">
                React, Next.js, Node.js
              </span>
              , and combining it with strong{" "}
              <span className="font-semibold text-indigo-400">
                DSA fundamentals
              </span>{" "}
              and an{" "}
              <span className="font-semibold text-rose-400">
                ethical hacking
              </span>{" "}
              mindset to keep systems fast, reliable, and secure.
            </p>
          </div>

          {/* Quick Facts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Experience */}
            <motion.div
              variants={itemVariants}
              className="p-[1.5px] rounded-2xl bg-gradient-to-br from-purple-500/70 via-pink-500/70 to-amber-400/70"
            >
              <div className="flex items-start gap-3 p-4 rounded-[1rem] bg-background/90 hover:bg-background transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(236,72,153,0.35)]">
                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">
                    Experience
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    1.5+ years in{" "}
                    <span className="font-medium text-foreground">
                      full-stack development
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Specialization */}
            <motion.div
              variants={itemVariants}
              className="p-[1.5px] rounded-2xl bg-gradient-to-br from-cyan-400/70 via-sky-500/70 to-emerald-400/70"
            >
              <div className="flex items-start gap-3 p-4 rounded-[1rem] bg-background/90 hover:bg-background transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(56,189,248,0.35)]">
                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-sky-500">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">
                    Specialization
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    <span className="font-medium text-foreground">
                      MERN Stack
                    </span>{" "}
                    &amp;{" "}
                    <span className="font-medium text-foreground">
                      DSA problem-solving
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              variants={itemVariants}
              className="p-[1.5px] rounded-2xl bg-gradient-to-br from-indigo-500/70 via-purple-500/70 to-pink-500/70"
            >
              <div className="flex items-start gap-3 p-4 rounded-[1rem] bg-background/90 hover:bg-background transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(129,140,248,0.35)]">
                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">
                    Location
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Based in{" "}
                    <span className="font-medium text-foreground">
                      Varanasi, India
                    </span>
                    , available for{" "}
                    <span className="font-medium text-foreground">
                      remote &amp; on-site/Hybrid roles
                    </span>
                    .
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Interest */}
            <motion.div
              variants={itemVariants}
              className="p-[1.5px] rounded-2xl bg-gradient-to-br from-rose-500/70 via-orange-400/70 to-amber-300/70"
            >
              <div className="flex items-start gap-3 p-4 rounded-[1rem] bg-background/90 hover:bg-background transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(248,113,113,0.35)]">
                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-orange-400">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">
                    Interests
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    <span className="font-medium text-foreground">
                      Cybersecurity
                    </span>{" "}
                    &amp; exploring{" "}
                    <span className="font-medium text-foreground">Machine Learning</span>{" "}
                    and modern internet security concepts.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AboutSection
