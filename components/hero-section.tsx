"use client"

import { Download, ArrowRight } from "lucide-react"
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"
import { motion } from "framer-motion"
import TypeWritter from "typewriter-effect"

const HeroSection = () => {
  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/nikhil-dubey-b4b471243/",
      label: "LinkedIn",
    },
    {
      icon: FaGithub,
      href: "https://github.com/",
      label: "GitHub",
    },
    {
      icon: SiLeetcode,
      href: "https://leetcode.com/u/critical_16/",
      label: "LeetCode",
    },
    {
      icon: FaCode,
      href: "https://www.geeksforgeeks.org/user/nikhil565dubey/",
      label: "GeeksforGeeks",
    },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Top-left blob */}
        <div
          className="absolute -top-24 -left-10 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-purple-500/40 via-pink-500/35 to-amber-400/40 rounded-full blur-3xl sm:blur-[90px] opacity-70 mix-blend-screen animate-blob"
        />
        {/* Center-right blob */}
        <div
          className="absolute top-1/3 -right-20 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tr from-sky-400/40 via-cyan-400/35 to-emerald-400/40 rounded-full blur-3xl sm:blur-[90px] opacity-70 mix-blend-screen animate-blob animation-delay-2000"
        />

        {/* Bottom blob */}
        <div
          className="absolute -bottom-24 left-1/4 w-80 h-80 sm:w-[26rem] sm:h-[26rem] bg-gradient-to-tl from-indigo-500/40 via-purple-500/35 to-pink-500/40 rounded-full blur-3xl sm:blur-[100px] opacity-70 mix-blend-screen animate-blob animation-delay-4000"
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Glassmorphism Card */}
        <div className="text-center rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 via-background/60 to-background/80 backdrop-blur-xl shadow-[0_0_40px_rgba(168,85,247,0.35)] px-4 sm:px-8 py-10 sm:py-14 lg:py-16">

          {/* Name + Intro Typewriter */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-5 
          bg-gradient-to-r from-purple-500 via-pink-500 to-amber-400 
          bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(244,114,182,0.55)]"
          >
            <TypeWritter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hi, I'm Nikhil Dubey from IIIT-Allahabad")
                  .start()
              }}
              options={{
                autoStart: true,
                loop: false,
                delay: 55,
                cursor: "▋",
              }}
            />
          </motion.h1>

          {/* Title / Roles Typewriter */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg sm:text-2xl lg:text-3xl font-semibold mb-4
          bg-gradient-to-r from-cyan-400 via-sky-500 to-purple-500
          bg-clip-text text-transparent tracking-wide"
          >
            <TypeWritter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "Software Developer | MERN Stack | Data Structures & Algorithms | Ethical Hacker"
                  )
                  .pauseFor(3500)
                  .deleteAll()
                  .start()
              }}
              options={{
                autoStart: true,
                loop: true,
                delay: 30,
                deleteSpeed: 30,
              }}
            />
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-9 max-w-2xl mx-auto leading-relaxed"
          >
            Turning bold ideas into fast, secure & scalable digital experiences —
            with clean code, sharp logic, and a bit of{' '}
            <span className="text-primary font-semibold">ethical hacking</span> flair.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
          >
            {/* Primary CTA */}
            <a
              href="https://drive.google.com/file/d/1FhqNbA7Ys7l1VPjWZdFAMrbalPx2gowC/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center justify-center gap-2 px-8 py-3
            rounded-xl font-semibold text-sm sm:text-base
            bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400
            text-white shadow-lg shadow-purple-500/30
            hover:shadow-[0_0_30px_rgba(236,72,153,0.8)]
            transition-all duration-200 hover:-translate-y-[1px]"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>

            {/* Secondary CTA with gradient border */}
            <div className="p-[1.5px] rounded-xl bg-gradient-to-r from-purple-500/70 via-pink-500/70 to-cyan-400/70">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3
              rounded-[11px] font-semibold text-sm sm:text-base
              bg-background/90 text-primary
              hover:bg-primary/10 transition-all duration-200 hover:-translate-y-[1px]"
              >
                Hire Me
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center gap-5 sm:gap-7"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-3.5 rounded-2xl
                bg-gradient-to-br from-background/40 via-background/10 to-background/60
                border border-white/10
                hover:border-primary/60 hover:shadow-[0_0_25px_rgba(129,140,248,0.8)]
                text-foreground/80 hover:text-primary
                transition-all duration-200 transform hover:-translate-y-1 hover:scale-110"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              )
            })}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute -bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <div className="text-primary/60 text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase">
            Scroll to explore
          </div>

          {/* Mouse-style indicator */}
          <div className="h-10 w-6 sm:h-11 sm:w-7 rounded-full border border-primary/40 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.4, repeat: Number.POSITIVE_INFINITY }}
              className="h-2 w-2 rounded-full bg-primary/80"
            />
          </div>
        </motion.div>
      </div>

    </section>
  )
}

export default HeroSection
