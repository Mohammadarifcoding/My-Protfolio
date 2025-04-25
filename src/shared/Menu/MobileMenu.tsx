import { Button } from '@/src/components/ui/button';
import { AnimatePresence , motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import ThemeToggole from '../Theme/ThemeToggole';
import { navItems } from '@/src/data/NavItems';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)
    const closeMenu = () => setIsOpen(false)
  
    return (
      <div className="md:hidden">
        <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menu">
          <Menu className="h-6 w-6" />
        </Button>
  
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="font-bold text-xl" onClick={closeMenu}>
                  <span className="gradient-text">Portfolio</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Close menu">
                  <X className="h-6 w-6" />
                </Button>
              </div>
  
              <motion.nav
                className="container flex flex-col items-center justify-center space-y-6 py-8"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: { transition: { staggerChildren: 0.1 } },
                  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                }}
              >
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={{
                      open: { y: 0, opacity: 1 },
                      closed: { y: 20, opacity: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className="text-2xl font-medium hover:text-primary transition-colors"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  variants={{
                    open: { y: 0, opacity: 1 },
                    closed: { y: 20, opacity: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="pt-4"
                >
                  <ThemeToggole />
                </motion.div>
                <motion.div
                  variants={{
                    open: { y: 0, opacity: 1 },
                    closed: { y: 20, opacity: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Button asChild>
                    <Link href="#contact" onClick={closeMenu}>
                      Get in Touch
                    </Link>
                  </Button>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>)
};

export default MobileMenu;