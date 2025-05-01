"use client";
import React from "react";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import Container from "../Container";
import { navItems } from "@/src/data/NavItems";
import { socialLinks } from "@/src/data/SocialMedia";
const Footer = () => {
  return (
    <Container>
      <footer className="relative border-t border-primary/10  pt-16 overflow-hidden dot-pattern">
        {/* Dot pattern background */}
        <div className="absolute inset-0  opacity-20 pointer-events-none"></div>

        <div className=" mx-auto px-4">
          {/* Main CTA Section */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Let&apos;s Build Something
              <br />
              <span className="gradient-text">Extraordinary</span>
            </motion.h2>

            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I will bring your vision to life with creativity and clarity.
              Let&apos;s make it happen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button
                
                className="group relative overflow-hidden px-6 py-6 text-base"
              >
                <Link
                  target="_blank"
                  href="https://calendar.app.google/JN64o11SZ4ZbgSun7"
                >
                  <span className="relative z-10 flex items-center">
                    Book A Call{" "}
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                  <motion.span
                    className="absolute inset-0 bg-primary/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center mb-12">
            <nav className="flex flex-wrap gap-8 justify-center">
              {navItems.map((item,index) => (
                <Link
                key={index}
                  href={item.href}
                  className="text-sm hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Copyright and Social */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Mohammad Arif. All rights
              reserved.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
