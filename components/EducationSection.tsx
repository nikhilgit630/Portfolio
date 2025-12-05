"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"

const EducationSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
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
        <section id="education" className="section-container py-16 sm:py-20 lg:py-24">
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="mb-10 sm:mb-14"
            >
                <h2 className="text-4xl sm:text-5xl font-bold">
                    My{" "}
                    <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        Education
                    </span>
                </h2>

                {/* Blue underline */}
                <div className="mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500" />

                <p className="text-lg max-w-2xl text-muted-foreground mt-4">
                    A strong academic foundation powering my work in{" "}
                    <span className="font-medium text-blue-700 dark:text-blue-300">
                        software development
                    </span>{" "}
                    and{" "}
                    <span className="font-medium text-blue-700 dark:text-blue-300">
                        Machine Learning
                    </span>
                    .
                </p>
            </motion.div>

            {/* Timeline Card */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="relative"
            >
                {/* Vertical timeline line on desktop */}
                <div className="hidden lg:block absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/60 via-blue-500/25 to-transparent" />

                <motion.div variants={itemVariants} className="relative lg:pl-12">
                    {/* Glowing timeline dot */}
                    <div className="hidden lg:flex absolute left-0 top-6 h-4 w-4 rounded-full bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-500 shadow-[0_0_18px_rgba(59,130,246,1)]" />

                    {/* Card with gradient border */}
                    <div className="p-[1.5px] rounded-2xl bg-gradient-to-r from-sky-500/60 via-blue-500/70 to-indigo-500/70">
                        <div className="rounded-[1rem] border border-blue-500/20 bg-background/90 p-7 sm:p-9 shadow-[0_0_35px_rgba(59,130,246,0.18)] hover:shadow-[0_0_45px_rgba(59,130,246,0.35)] transition-all duration-300">
                            {/* Row */}
                            <div className="flex gap-4 items-start mb-5">
                                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600">
                                    <GraduationCap className="w-6 h-6 text-white" />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold">
                                        B.Tech — Information Technology
                                    </h3>
                                    <p className="text-lg font-medium text-blue-700 dark:text-blue-300">
                                        Indian Institute of Information Technology Allahabad, India 🇮🇳
                                    </p>
                                </div>
                            </div>

                            {/* Period pill */}
                            <span
                                className="
                  text-xs sm:text-sm font-medium
                  bg-blue-50 text-blue-700 border border-blue-200
                  dark:bg-blue-500/10 dark:text-blue-100 dark:border-blue-400/40
                  px-4 py-2 rounded-full shadow-sm mb-6 inline-block
                "
                            >
                                2020 — 2024
                            </span>

                            {/* Desc */}
                            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                                Focused on core computer science fundamentals, Machine Learning, and web development — blending{" "}
                                <span className="font-medium text-blue-700 dark:text-blue-300">
                                    theory
                                </span>{" "}
                                with{" "}
                                <span className="font-medium text-blue-700 dark:text-blue-300">
                                    hands-on projects
                                </span>
                                .
                            </p>

                            {/* Optional CGPA */}
                            <p className="mt-3 text-sm sm:text-base font-semibold text-blue-800 dark:text-blue-300">
                                CGPA: <span className="text-blue-900 dark:text-blue-50">7.84 / 10</span>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default EducationSection
