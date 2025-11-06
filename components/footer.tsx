"use client"

import { Heart } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">Nikhil Dubey</h3>
            <p className="text-muted-foreground">Full Stack Developer crafting scalable digital experiences.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-muted-foreground text-sm">
              <a href="#about" className="hover:text-primary transition-colors">
                About
              </a>
              <a href="#experience" className="block hover:text-primary transition-colors">
                Experience
              </a>
              <a href="#projects" className="block hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#contact" className="block hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-2 text-muted-foreground text-sm">
              <a
                href="https://www.linkedin.com/in/nikhil-dubey-b4b471243/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/nikhilgit630"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://leetcode.com/u/critical_16/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-primary transition-colors"
              >
                LeetCode
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Nikhil Dubey. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Crafted with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> and Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
