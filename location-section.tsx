"use client"

import { motion } from "framer-motion"
import { Instagram, Facebook, MapPin } from "lucide-react"

const socialLinks = [
  { href: "https://instagram.com/spicegarden.batumi", icon: Instagram, label: "Instagram" },
  { href: "https://facebook.com/spicegarden.batumi", icon: Facebook, label: "Facebook" },
  { href: "https://maps.google.com", icon: MapPin, label: "Google Maps" },
]

const quickLinks = [
  { href: "#dishes", label: "Menu" },
  { href: "#about", label: "About Us" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#location", label: "Find Us" },
]

export function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-secondary py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-4 gap-12 mb-12"
        >
          {/* Logo & Tagline */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-3xl text-secondary-foreground mb-3">Spice Garden</h3>
            <p className="text-secondary-foreground/70 leading-relaxed max-w-md">
              Authentic Indian & Halal Cuisine — Batumi, Georgia. Where the Black Sea meets the Spice Route.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors group"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5 text-secondary-foreground group-hover:text-primary-foreground transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-secondary-foreground mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  whileHover={{ x: 4 }}
                  className="text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-secondary-foreground mb-4">Contact</h4>
            <div className="space-y-3 text-secondary-foreground/70">
              <p>Beachfront Promenade</p>
              <p>Batumi, Georgia</p>
              <motion.a
                href="tel:+995555123456"
                whileHover={{ x: 4 }}
                className="block hover:text-primary transition-colors"
              >
                +995 555 123 456
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-secondary-foreground/50 text-sm">
            © {new Date().getFullYear()} Spice Garden. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-secondary-foreground/50">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
