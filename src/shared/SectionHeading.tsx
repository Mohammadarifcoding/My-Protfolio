import React from 'react';
import AnimatedText from './AnimatedText';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { Badge } from '../components/ui/badge';
interface SectionHeadingProps {
    badge: string
    title: string
    description?: string
    align?: "left" | "center"
    className?:string
  }
const SectionHeading = ({ badge, title, description, align = "left", className}: SectionHeadingProps) => {
    return (
        <div className={`space-y-4 ${align === "center" ? "text-center" : ""}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Badge className="mb-2 bg-primary/20 hover:bg-primary/30 text-primary-foreground border-none">{badge}</Badge>
        </motion.div>
  
        <AnimatedText text={title} className={cn("text-3xl font-bold tracking-tight",className)} highlight={true} />
  
        {description && (
          <motion.p
            className={"text-muted-foreground max-w-3xl"}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {description}
          </motion.p>
        )}
      </div>
    );
};

export default SectionHeading;