"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="bg-card rounded-xl shadow-lg p-8">
      <h3 className="font-serif text-2xl text-card-foreground mb-2">Send Us a Message</h3>
      <p className="text-muted-foreground mb-6">Questions, feedback, or catering inquiries</p>

      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-center py-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 15, stiffness: 300, delay: 0.1 }}
            >
              <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
            </motion.div>
            <h4 className="font-serif text-xl text-card-foreground mb-2">
              Message Sent!
            </h4>
            <p className="text-muted-foreground mb-6">
              Thank you for reaching out. We&apos;ll get back to you within 24 hours.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)} 
              variant="outline"
              className="border-border text-foreground hover:bg-muted"
            >
              Send Another Message
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="contact-name" className="text-card-foreground">Name</Label>
                <Input
                  id="contact-name"
                  placeholder="Your name"
                  required
                  className="bg-background border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-email" className="text-card-foreground">Email</Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="bg-background border-border"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-subject" className="text-card-foreground">Subject</Label>
              <Input
                id="contact-subject"
                placeholder="What is this regarding?"
                required
                className="bg-background border-border"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-message" className="text-card-foreground">Message</Label>
              <textarea
                id="contact-message"
                rows={4}
                placeholder="Your message..."
                required
                className="w-full px-3 py-2 rounded-md bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base font-medium"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                  />
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </motion.div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
