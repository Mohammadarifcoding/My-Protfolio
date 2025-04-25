import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
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
import profile from "/src/assets/user_image.png";
import Container from "@/src/shared/Container";
import AnimatedSection from "./../../shared/Animation/AnimatedSection";
import { socialLinks } from "@/src/data/SocialMedia";
import { Badge } from "@/src/components/ui/badge";

const Hero = () => {
  return (
    <Container>
      <AnimatedSection className="relative">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16">
          <div className="flex flex-col md:gap-y-6 gap-y-4 max-w-xl">
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
              text="Building Impactful Software Leading with Vision"
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-normal"
              delay={0.2}
              highlight={true}
            />

            <motion.p
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              I lead Khulna Polytechnic programming club, build web apps with
              React and Node.js, create open-source UI tools, and mentor fellow
              developers.
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
              {socialLinks.map((link, index) => {
                const Icon = link.icon; // Assuming socialLinks provides the icon component
                return (
                  <Link
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-primary/10 hover:text-primary"
                    >
                      <Icon className="h-5 w-5" />
                      <span className="sr-only">{link.label}</span>
                    </Button>
                  </Link>
                );
              })}
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
            <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse z-0" />
            <div className="relative w-32 h-32 mx-auto my-auto">
              <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-primary/30 glow z-10">
                <Image
                  src={profile}
                  alt="Mohammad Arif Picture"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </div>
            </div>
            <motion.div
              className="absolute -inset-1 rounded-full z-0"
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