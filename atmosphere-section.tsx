"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { SocialProofBar } from "@/components/social-proof-bar"
import { SignatureDishes } from "@/components/signature-dishes"
import { WhySpiceGarden } from "@/components/why-spice-garden"
import { AtmosphereSection } from "@/components/atmosphere-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { MenuCtaSection } from "@/components/menu-cta-section"
import { LocationSection } from "@/components/location-section"
import { Footer } from "@/components/footer"
import { ReservationModal } from "@/components/reservation-modal"

export default function Home() {
  const [isReservationOpen, setIsReservationOpen] = useState(false)

  const openReservation = () => setIsReservationOpen(true)
  const closeReservation = () => setIsReservationOpen(false)

  return (
    <>
      <Navigation onReserveClick={openReservation} />
      <main>
        <HeroSection onReserveClick={openReservation} />
        <SocialProofBar />
        <SignatureDishes />
        <WhySpiceGarden />
        <AtmosphereSection />
        <TestimonialsSection />
        <MenuCtaSection onReserveClick={openReservation} />
        <LocationSection />
        <Footer />
      </main>
      <ReservationModal isOpen={isReservationOpen} onClose={closeReservation} />
    </>
  )
}
