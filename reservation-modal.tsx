"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface MenuCtaSectionProps {
  onReserveClick: () => void
}

export function MenuCtaSection({ onReserveClick }: MenuCtaSectionProps) {
  const scrollToMenu = () => {
    const element = document.querySelector("#dishes")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-24 px-6 bg-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
          Explore Our Offerings
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-secondary-foreground mb-6 text-balance">
          Ready to Explore the Menu?
        </h2>
        <p className="text-secondary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          From sizzling tandoor dishes to creamy slow-cooked curries — there&apos;s something for everyone.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="lg" 
              onClick={scrollToMenu}
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 font-medium"
            >
              View Full Menu
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={onReserveClick}
              className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 text-base px-8 py-6"
            >
              Reserve a Table
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
