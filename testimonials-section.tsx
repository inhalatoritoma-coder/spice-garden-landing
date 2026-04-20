"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const dishes = [
  {
    name: "Butter Chicken",
    description: "Velvety, fragrant, and deeply satisfying. Our guests can't stop ordering it.",
    image: "/images/butter-chicken.jpg"
  },
  {
    name: "Chicken Biryani",
    description: "Aromatic long-grain rice, slow-cooked spices, tender chicken. A true classic.",
    image: "/images/biryani.jpg"
  },
  {
    name: "Chicken Tikka Masala",
    description: "Rich tomato-cream sauce with tandoor-charred chicken. Perfection on a plate.",
    image: "/images/tikka-masala.jpg"
  },
  {
    name: "Garlic Naan",
    description: "Pillowy, golden, fresh from the tandoor. Order two.",
    image: "/images/garlic-naan.jpg"
  },
  {
    name: "Chicken Kadhai",
    description: "Smoky wok-tossed chicken with bold whole spices. A staff favourite.",
    image: "/images/chicken-kadhai.jpg"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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

export function SignatureDishes() {
  return (
    <section id="dishes" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Our Signature Selection
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground text-balance">
            Food That Stays With You
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {dishes.slice(0, 3).map((dish, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card 
                className="group overflow-hidden border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-[4/3] overflow-hidden"
                >
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </motion.div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl text-card-foreground mb-2">{dish.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{dish.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto"
        >
          {dishes.slice(3).map((dish, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card 
                className="group overflow-hidden border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-[4/3] overflow-hidden"
                >
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </motion.div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl text-card-foreground mb-2">{dish.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{dish.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
