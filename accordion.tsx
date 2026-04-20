"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    text: "A delightful culinary experience. The spices were perfectly balanced and every dish was full of flavour. Not easy to find authentic Indian food in this region, but this place truly delivers.",
    author: "Jemal S.",
    location: "Batumi"
  },
  {
    text: "Very delicious food — we stayed in Batumi two weeks and came here five times. The food is so good, service is great, staff are very friendly.",
    author: "Ghassan D.",
    location: "Tourist"
  },
  {
    text: "The food was amazing. Authentic flavours, perfectly spiced, clearly made with fresh ingredients. Highly recommended!",
    author: "Elliot",
    location: "Visitor"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
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

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-muted">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Testimonials
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground text-balance">
            What Our Guests Say
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card 
                  className="bg-card border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <CardContent className="p-8">
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Quote className="w-10 h-10 text-primary/30 mb-4" />
                    </motion.div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                        >
                          <Star className="w-4 h-4 fill-primary text-primary" />
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-foreground leading-relaxed mb-6">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="pt-4 border-t border-border">
                      <p className="font-medium text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
