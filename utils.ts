"use client"

import { motion } from "framer-motion"
import { Waves, ShieldCheck, Flame } from "lucide-react"

const features = [
  {
    icon: Waves,
    title: "Beachfront Views",
    description: "Dine steps from the Black Sea with a breathtaking sea-view terrace"
  },
  {
    icon: ShieldCheck,
    title: "100% Halal Certified",
    description: "Every dish prepared to authentic halal standards"
  },
  {
    icon: Flame,
    title: "Authentic Indian Flavours",
    description: "Recipes rooted in tradition, spiced with passion"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
}

export function WhySpiceGarden() {
  return (
    <section className="py-24 px-6 bg-muted">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            The Spice Garden Experience
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground text-balance">
            More Than a Meal
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center group"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors duration-300"
              >
                <feature.icon className="w-10 h-10 text-secondary-foreground group-hover:text-primary-foreground transition-colors duration-300" />
              </motion.div>
              <h3 className="font-serif text-2xl text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
