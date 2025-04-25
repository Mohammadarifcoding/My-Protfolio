import { Button } from "@/src/components/ui/button";
import { navItems } from "@/src/data/NavItems";
import MobileMenu from "@/src/shared/Menu/MobileMenu";
import ThemeToggole from "@/src/shared/Theme/ThemeToggole";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-primary/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-3xl">
          <span className="style-text gradient-text ">Arif</span>
        </Link>

        <MobileMenu />

        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <ThemeToggole />
          <Button asChild size="sm" className="relative overflow-hidden group">
            <Link href="#contact">
              <span className="relative z-10">Get in Touch</span>
              <motion.span
                className="absolute inset-0 bg-white/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
