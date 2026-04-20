"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Clock, Instagram } from "lucide-react"
import { ContactForm } from "./contact-form"

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: (
      <>
        Beachfront Promenade<br />
        Batumi, Georgia
      </>
    )
  },
  {
    icon: Phone,
    title: "Phone",
    content: (
      <a href="tel:+995555123456" className="hover:text-primary transition-colors">
        +995 555 123 456
      </a>
    )
  },
  {
    icon: Clock,
    title: "Opening Hours",
    content: (
      <>
        Monday — Sunday<br />
        12:00 PM — 11:00 PM
      </>
    )
  },
  {
    icon: Instagram,
    title: "Follow Us",
    content: (
      <a href="https://instagram.com/spicegarden.batumi" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
        @spicegarden.batumi
      </a>
    )
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
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5 }
  }
}

export function LocationSection() {
  return (
    <section id="location" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Visit Us
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground text-balance">
            Find Us on the Batumi Beachfront
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-1"
          >
            <div className="relative aspect-square lg:aspect-auto lg:h-full min-h-[350px] rounded-lg overflow-hidden bg-muted shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.7!2d41.64!3d41.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDM5JzAwLjAiTiA0McKwMzgnMjQuMCJF!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Spice Garden Location"
                className="absolute inset-0"
              />
            </div>

            {/* Contact Info */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="mt-8 space-y-6"
            >
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0"
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
