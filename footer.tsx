"use client"

import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

function AnimatedStat({ value, label, delay }: { value: string; label: string; delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      <p className="font-serif text-4xl text-primary">{value}</p>
      <p className="text-muted-foreground text-sm mt-1">{label}</p>
    </motion.div>
  )
}

export function AtmosphereSection() {
  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">
              A Hidden Gem on the Batumi Coast
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                Nestled along the seafront promenade, Spice Garden has been winning hearts since day one. Guests travel from across Georgia — and the world — for our slow-cooked curries, fresh tandoor breads, and warm hospitality.
              </p>
              <p>
                Whether you&apos;re watching the sunset over the Black Sea or sharing a feast with family, every visit becomes a memory.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-10 pt-10 border-t border-border">
              <AnimatedStat value="500+" label="5-Star Reviews" delay={0} />
              <AnimatedStat value="2019" label="Est." delay={0.1} />
              <AnimatedStat value="50+" label="Signature Dishes" delay={0.2} />
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/restaurant-interior.jpg"
                alt="Spice Garden restaurant interior with beachfront view"
                fill
                className="object-cover"
              />
            </motion.div>
            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-lg -z-10"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/30 rounded-lg -z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
