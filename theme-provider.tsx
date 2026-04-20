"use client"

import { Star } from "lucide-react"

const reviews = [
  {
    text: "Best halal Indian restaurant in Batumi — will definitely come back.",
    author: "Basel A.",
    badge: "Local Guide"
  },
  {
    text: "An unforgettable culinary experience. Perfectly balanced spices.",
    author: "Jemal S.",
    badge: null
  },
  {
    text: "Absolutely delicious — we visited 5 times in two weeks.",
    author: "Ghassan D.",
    badge: null
  },
  {
    text: "The butter chicken and garlic naan were outstanding.",
    author: "Gogita S.",
    badge: null
  },
  {
    text: "I'd give 10 stars if I could. Every single item was perfection.",
    author: "Nichole P.",
    badge: "Local Guide"
  }
]

export function SocialProofBar() {
  return (
    <section className="bg-secondary py-6 overflow-hidden">
      <div className="flex animate-marquee">
        {[...reviews, ...reviews].map((review, index) => (
          <div 
            key={index} 
            className="flex items-center gap-8 px-8 border-r border-white/10 whitespace-nowrap"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-secondary-foreground/90 text-sm">
              &ldquo;{review.text}&rdquo;
            </p>
            <span className="text-secondary-foreground/70 text-sm">
              — {review.author}
              {review.badge && (
                <span className="ml-2 text-primary text-xs">{review.badge}</span>
              )}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
