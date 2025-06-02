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
    <Container className="px-4 md:px-8 lg:px-12">
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
              className="sm:text-4xl text-[27px] md:text-5xl lg:text-6xl font-bold md:leading-normal"
              delay={0.2}
              highlight={true}
            />

            <motion.p
              className="md:text-xl sm:text-lg text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Full-stack developer & club leader building impactful web apps
              with React & Node.js, crafting open-source UI tools, and guiding
              aspiring devs.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Button className="relative overflow-hidden group sm:h-10 sm:px-4 sm:py-2 h-9 rounded-md px-3">
                <Link href="#projects" className="flex  items-center">
                  <span className="relative z-10 font-semibold tracking-wide">
                    Explore Projects
                  </span>
                  <motion.span
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <ArrowRight className="sm:ml-2 ml-1 sm:h-4 h-3 sm:w-4 w-3 relative z-10" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-primary/30 hover:bg-primary/10 sm:h-10 sm:px-4 sm:py-2 h-9 rounded-md px-3"
              >
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  className="flex items-center font-medium"
                >
                  <Download className="mr-2 h-4 w-4" /> Resume PDF
                </Link>
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors hover:drop-shadow-md"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  title={link.label} // Tooltip
                >
                  <link.icon className="h-5 w-5" />
                </motion.a>
              ))}
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
            <div className="relative w-full h-full mx-auto my-auto">
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 shadow-[0_0_30px_rgba(109,40,217,0.2)] z-10" />
              <Image
                src={profile}
                alt="Mohammad Arif Picture"
                fill
                className="object-contain rounded-full w-full h-full "
                priority
              />
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
