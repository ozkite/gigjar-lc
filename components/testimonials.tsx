"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Maria delivered our Celo dApp ahead of schedule. Payment released in cUSD the moment I approved—no delays, no fees.",
    author: "Alex Thompson",
    role: "Founder, BlockStart",
    gig: "Smart Contract Development",
    avatar: "/professional-avatar.png",
  },
  {
    quote: "GigJar made it so easy to find verified talent. The escrow system gave me complete peace of mind.",
    author: "Sarah Chen",
    role: "Product Manager, Web3 Studio",
    gig: "UI/UX Design",
    avatar: "/professional-avatar.png",
  },
  {
    quote:
      "As a freelancer, I love getting paid instantly in stablecoins. No waiting, no conversion fees. Pure efficiency.",
    author: "James Rodriguez",
    role: "Full-Stack Developer",
    gig: "Web Development",
    avatar: "/professional-avatar.png",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-celo-dark/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Real Results from Real Users</h2>
          <p className="text-lg text-muted-foreground">See what clients and freelancers are saying about GigJar</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-card rounded-2xl p-8 border border-border hover:border-celo-green/50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-celo-green text-celo-green" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-border">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              {/* Gig */}
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">Gig: {testimonial.gig}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
