"use client"

import { Button } from '@/src/components/ui/button'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Menu,
  X,
  ChevronRight,
  Home,
  User,
  Code2,
  Briefcase,
  FolderOpen,
  Users,
  GraduationCap,
  Mail,
  Github,
  Linkedin,
  Download,
} from "lucide-react"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { navCategories, navItems } from '@/src/data/NavItems'
import { cn } from '@/src/lib/utils'
import  ThemeToggole  from '@/src/shared/Theme/ThemeToggole'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const toggleMenu = () => setIsOpen(prev => !prev)
  const closeMenu  = ()  => setIsOpen(false)

  // 🔍 scroll-spy for active link
  useEffect(() => {
    const onScroll = () => {
      const sections = navItems.map(i => i.href.replace("#", "")).filter(Boolean)
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const { top, bottom } = el.getBoundingClientRect()
          if (top <= 100 && bottom >= 100) {
            setActiveSection(id)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", onScroll)
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="md:hidden relative z-50">
      <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
        <Menu className="h-6 w-6" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
className="fixed top-0 left-0 h-full w-[85%] max-w-sm bg-[#09090B] shadow-lg border-r border-primary/10 flex flex-col"
          >
            {/* header */}
            <div className="flex items-center justify-between px-4 h-16 border-b border-primary/10">
              <Link href="/" onClick={closeMenu} className="font-bold text-xl gradient-text">
              <span className="style-text gradient-text ">Arif</span>
              </Link>
              <div className="flex items-center gap-2">
                <ThemeToggole />
                <Button variant="ghost" size="icon" onClick={closeMenu} aria-label="Close menu">
                  <X className="h-6 w-6" />
                </Button>
              </div>
            </div>

            {/* body */}
            <div className="flex-1 !h-full !bg-[#09090B]  h-screen py-6 px-4 space-y-8">
              {/* profile card */}
              <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                  <div className="absolute inset-0 flex items-center justify-center text-primary">
                    <User className="h-8 w-8" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold">Your Name</h3>
                  <p className="text-sm text-muted-foreground">Full Stack Developer</p>
                  <div className="flex gap-2 mt-2">
                    {[ 
                      { icon: Github, url: "https://github.com/yourusername" },
                      { icon: Linkedin, url: "https://linkedin.com/in/yourusername" },
                      { icon: Download, url: "/resume.pdf" }
                    ].map(({ icon: Icon, url }) => (
                      <a
                        key={url}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-md bg-secondary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* nav links */}
              {navCategories.map(cat => (
                <div key={cat.title} className="space-y-3">
                  <h3 className="px-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    {cat.title}
                  </h3>
                  <div className="space-y-1">
                    {cat.items.map(item => {
                      const id = item.href.replace("#", "")
                      const isActive = activeSection === id
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={closeMenu}
                          className={cn(
                            "flex items-center justify-between py-3 px-4 rounded-lg transition-all",
                            isActive
                              ? "bg-primary/20 text-primary font-medium"
                              : "hover:bg-primary/10 text-foreground"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <item.icon
                              className={cn(
                                "p-2 rounded-md",
                                isActive
                                  ? "bg-primary/20 text-primary"
                                  : "bg-secondary/50 text-muted-foreground"
                              )}
                            />
                            <span>{item.name}</span>
                          </div>
                          <ChevronRight
                            className={cn(
                              "h-5 w-5 transition-transform",
                              isActive ? "rotate-90 text-primary" : "text-muted-foreground"
                            )}
                          />
                        </Link>
                      )
                    })}
                  </div>
                </div>
              ))}

              {/* CTA */}
              <div className="mt-8 pt-8 border-t border-primary/10 text-center">
                <p className="text-muted-foreground mb-4">Ready to work together?</p>
                <Button asChild className="w-full relative overflow-hidden group">
                  <Link href="#contact" onClick={closeMenu} className="relative z-10 flex items-center justify-center">
                    Get in Touch <Mail className="ml-2 h-4 w-4" />
                  </Link>
                  <motion.span
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                </Button>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileMenu
