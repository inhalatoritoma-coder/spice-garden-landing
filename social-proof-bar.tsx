"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Calendar, Clock, Users, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface ReservationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
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

  const handleClose = () => {
    onClose()
    // Reset form state after modal closes
    setTimeout(() => setIsSubmitted(false), 300)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg mx-4"
          >
            <div className="bg-card rounded-xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-secondary px-6 py-5 relative">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <h2 className="font-serif text-2xl text-secondary-foreground">Reserve a Table</h2>
                <p className="text-secondary-foreground/70 text-sm mt-1">
                  Book your dining experience at Spice Garden
                </p>
              </div>

              {/* Content */}
              <div className="p-6">
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
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      </motion.div>
                      <h3 className="font-serif text-2xl text-card-foreground mb-2">
                        Reservation Confirmed!
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        We&apos;ve received your booking request. You&apos;ll receive a confirmation call shortly.
                      </p>
                      <Button onClick={handleClose} className="bg-primary text-primary-foreground hover:bg-primary/90">
                        Done
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
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-card-foreground">Name</Label>
                          <Input
                            id="name"
                            placeholder="Your name"
                            required
                            className="bg-background border-border"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-card-foreground">Phone</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+995..."
                            required
                            className="bg-background border-border"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="date" className="text-card-foreground flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            Date
                          </Label>
                          <Input
                            id="date"
                            type="date"
                            required
                            className="bg-background border-border"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="time" className="text-card-foreground flex items-center gap-2">
                            <Clock className="w-4 h-4 text-primary" />
                            Time
                          </Label>
                          <Input
                            id="time"
                            type="time"
                            required
                            className="bg-background border-border"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="guests" className="text-card-foreground flex items-center gap-2">
                          <Users className="w-4 h-4 text-primary" />
                          Number of Guests
                        </Label>
                        <select
                          id="guests"
                          required
                          className="w-full h-10 px-3 rounded-md bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          <option value="">Select guests</option>
                          {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                            <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                          ))}
                          <option value="9+">9+ Guests (Large Party)</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="notes" className="text-card-foreground">Special Requests (Optional)</Label>
                        <textarea
                          id="notes"
                          rows={3}
                          placeholder="Dietary requirements, special occasion, seating preference..."
                          className="w-full px-3 py-2 rounded-md bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                        />
                      </div>

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
                          "Confirm Reservation"
                        )}
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
