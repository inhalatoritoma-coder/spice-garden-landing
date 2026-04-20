"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  onReserveClick: () => void
}

const navLinks = [
  { href: "#dishes", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#location", label: "Find Us" },
]

export function Navigation({ onReserveClick }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 px-6 py-4 transition-all duration-300 ${
          isScrolled 
            ? "bg-secondary/95 backdrop-blur-md shadow-lg" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            whileHover={{ scale: 1.02 }}
            className={`font-serif text-2xl tracking-wide transition-colors ${
              isScrolled ? "text-secondary-foreground" : "text-white"
            }`}
          >
            Spice Garden
          </motion.a>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center gap-8 text-sm tracking-wide ${
            isScrolled ? "text-secondary-foreground/80" : "text-white/90"
          }`}>
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                whileHover={{ y: -2 }}
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Desktop Reserve Button */}
          <div className="hidden md:block">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={onReserveClick}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
              >
                Reserve a Table
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? "text-secondary-foreground" : "text-white"
            }`}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-secondary z-50 md:hidden shadow-2xl"
            >
              <div className="p-6 pt-20">
                <nav className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="block py-4 px-4 text-lg text-secondary-foreground hover:bg-secondary-foreground/10 rounded-lg transition-colors"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </nav>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8"
                >
                  <Button 
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      onReserveClick()
                    }}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium py-6 text-base"
                  >
                    Reserve a Table
                  </Button>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-10 pt-8 border-t border-secondary-foreground/10"
                >
                  <p className="text-secondary-foreground/60 text-sm">Contact Us</p>
                  <a href="tel:+995555123456" className="block text-secondary-foreground mt-2 hover:text-primary transition-colors">
                    +995 555 123 456
                  </a>
                  <p className="text-secondary-foreground/60 text-sm mt-4">Open Daily</p>
                  <p className="text-secondary-foreground">12:00 PM - 11:00 PM</p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
