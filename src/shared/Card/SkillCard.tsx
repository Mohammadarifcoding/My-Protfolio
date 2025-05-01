"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { cn } from "@/src/lib/utils"



interface SkillCardProps {
  category: string
  skills: Array<{ name: string; level: number }>
  icon: React.ReactNode
  delay?: number
}
const SkillCard = ({ category, skills, icon, delay = 0 }: SkillCardProps) => {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
   
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, amount: 0.2 }}
      className="h-full"
    >
      <Card className="h-full border border-primary/20 bg-secondary/10 hover:border-primary/40 transition-all duration-300 hover:skill-badge-glow">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-md bg-primary/20 text-primary">{icon}</div>
            <h3 className="text-xl font-medium">{category}</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                whileHover={{
                  scale: 1.08,
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge
                  className={cn(
                    "px-3 py-1 text-sm cursor-pointer transition-all duration-300 border-primary/30 relative overflow-hidden",
                    hoveredSkill === skill.name
                      ? "bg-primary/20 text-white shadow-[0_0_10px_rgba(124,58,237,0.5)]"
                      : "bg-secondary/50",
                  )}
                >
                  {skill.name}
                  {hoveredSkill === skill.name && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-primary to-violet-400"
                    />
                  )}
                  {hoveredSkill === skill.name && (
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                    >
                      {skill.level}%
                    </motion.span>
                  )}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>)
};

export default SkillCard;