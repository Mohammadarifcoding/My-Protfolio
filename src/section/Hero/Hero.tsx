import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Badge,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import AnimatedText from "@/src/shared/AnimatedText";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import profile from "@/src/assets/user_image.png";
import Container from "@/src/shared/Container";
import AnimatedSection from './../../shared/Animation/AnimatedSection';

const Hero = () => {
  return (
    <Container>
          <AnimatedSection className="py-8 md:py-16">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16 py-8 md:py-16">
        <div className="space-y-6 md:space-y-8 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="px-3 py-1 text-sm bg-primary/20 hover:bg-primary/30 text-primary-foreground border-none">
              Available for hire
            </Badge>
          </motion.div>

          <AnimatedText
            text="Building digital experiences with code and creativity"
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            delay={0.2}
            highlight={true}
          />

          <motion.p
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Full-stack developer specializing in creating elegant solutions to
            complex problems.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Button asChild className="relative overflow-hidden group">
              <Link href="#projects">
                <span className="relative z-10">View Projects</span>
                <motion.span
                  className="absolute inset-0 bg-white/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <ArrowRight className="ml-2 h-4 w-4 relative z-10" />
              </Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-primary/30 hover:bg-primary/10"
            >
              <Link href="/resume.pdf" target="_blank">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Link>
            </Button>
          </motion.div>

          <motion.div
            className="flex items-center gap-4 pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10 hover:text-primary"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10 hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link
              href="https://codeforces.com/profile/dev_master"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10 hover:text-primary"
              >
                <Code2 className="h-5 w-5" />
                <span className="sr-only">Codeforces</span>
              </Button>
            </Link>
            <Link
              href="https://www.hackerrank.com/problem_solver"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10 hover:text-primary"
              >
                <Award className="h-5 w-5" />
                <span className="sr-only">HackerRank</span>
              </Button>
            </Link>
            <Link href="mailto:your.email@example.com">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10 hover:text-primary"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" />
          <div className="absolute inset-[6px] rounded-full overflow-hidden border-2 border-primary/30 glow">
            <Image
              src={profile}
              alt="Mohammad Arif Picture"
              fill
              className="object-cover"
              priority
            />
          </div>
          <motion.div
            className="absolute -inset-1 rounded-full"
            animate={{
              background: [
                "linear-gradient(0deg, rgba(109,40,217,0.3) 0%, rgba(79,70,229,0) 70%)",
                "linear-gradient(90deg, rgba(109,40,217,0.3) 0%, rgba(79,70,229,0) 70%)",
                "linear-gradient(180deg, rgba(109,40,217,0.3) 0%, rgba(79,70,229,0) 70%)",
                "linear-gradient(270deg, rgba(109,40,217,0.3) 0%, rgba(79,70,229,0) 70%)",
                "linear-gradient(0deg, rgba(109,40,217,0.3) 0%, rgba(79,70,229,0) 70%)",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </motion.div>
      </div>
          </AnimatedSection>
 
    </Container>
  );
};

export default Hero;
