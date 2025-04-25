"use client"

import { useTheme } from "next-themes"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/src/components/ui/button"

const ThemeToggole = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
  
    // Avoid hydration mismatch by only rendering after component is mounted
    useEffect(() => {
      setMounted(true)
    }, [])
  
    if (!mounted) {
      return (
        <Button variant="ghost" size="icon" disabled className="w-9 px-0">
          <div className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      )
    }
  
    const isDark = theme === "dark"
  
    return (
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="w-9 px-0 relative"
        aria-label="Toggle theme"
      >
        <motion.div
          initial={false}
          animate={{
            rotate: isDark ? 45 : 0,
            scale: isDark ? 0 : 1,
            opacity: isDark ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            rotate: isDark ? 0 : -45,
            scale: isDark ? 1 : 0,
            opacity: isDark ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        </motion.div>
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
};

export default ThemeToggole;