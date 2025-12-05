"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // Fix: prevent SSR mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  const ThemeButton = () => {
    if (!mounted) {
      return (
        <button
          className="p-2 rounded-xl hover:bg-secondary/60 border border-border/60 transition-colors"
          aria-label="Toggle theme"
        >
          <Sun className="w-5 h-5" />
        </button>
      );
    }

    const isDark = theme === "dark";

    return (
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="p-[1.5px] rounded-xl bg-gradient-to-tr from-purple-500 via-pink-500 to-sky-400 hover:shadow-[0_0_18px_rgba(168,85,247,0.6)] transition-all duration-200"
        aria-label="Toggle theme"
      >
        <span className="flex items-center justify-center rounded-[10px] bg-background/95 px-2.5 py-2">
          {isDark ? (
            <Sun className="w-5 h-5 text-amber-300" />
          ) : (
            <Moon className="w-5 h-5 text-sky-500" />
          )}
        </span>
      </button>
    );
  };

  return (
    <nav
      className="
        sticky top-0 z-50 
        border-b border-white/10 
        bg-gradient-to-b from-background/95 via-background/90 to-background/80 
        backdrop-blur-xl
        shadow-[0_0_25px_rgba(15,23,42,0.55)]
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main row */}
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="shrink-0">
            <Link
              href="#home"
              className="inline-flex items-center gap-2 group"
            >
              <div className="h-8 w-8 rounded-2xl bg-gradient-to-tr from-purple-500 via-pink-500 to-amber-400 shadow-[0_0_18px_rgba(236,72,153,0.7)] flex items-center justify-center text-xs font-bold text-white">
                ND
              </div>
              {/* <span
                className="
                  text-xl sm:text-2xl font-bold 
                  bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500 
                  bg-clip-text text-transparent
                  group-hover:brightness-110 transition
                "
              >
                Nikhil.dev
              </span> */}
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  relative text-sm font-medium 
                  text-foreground/80 hover:text-foreground
                  transition-colors duration-200
                  after:absolute after:left-0 after:-bottom-1 
                  after:h-[2px] after:w-0 
                  after:bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500
                  hover:after:w-full after:transition-all after:duration-300
                "
              >
                {link.name}
              </a>
            ))}
            <ThemeButton />
          </div>

          {/* Mobile right side */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeButton />
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="p-2 rounded-xl hover:bg-secondary/70 border border-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div
            className="
              md:hidden pb-4 pt-2 space-y-1 
              border-t border-white/10 
              bg-background/95 backdrop-blur-xl
            "
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  block px-3 py-2 rounded-xl text-sm font-medium
                  text-foreground/85 hover:text-foreground
                  bg-transparent hover:bg-gradient-to-r from-sky-500/10 via-purple-500/10 to-pink-500/10
                  border border-transparent hover:border-white/10
                  transition-all duration-200
                "
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
