"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import GigCarousel from "@/components/gig-carousel"
import DualSection from "@/components/dual-section"
import HowItWorks from "@/components/how-it-works"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-celo-dark via-background to-celo-dark/50 px-4">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-celo-green/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-celo-green/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 rounded-full bg-celo-green/10 border border-celo-green/30 text-celo-green text-sm font-medium">
              ✨ Powered by Celo Network
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Hire Talent.
            <br />
            <span className="bg-gradient-to-r from-celo-green to-celo-green/70 bg-clip-text text-transparent">
              Pay in Stablecoins.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Connect with verified freelancers worldwide. All payments in stablecoins. All identities verified with Self
            Protocol.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-celo-green text-white rounded-full font-semibold hover:bg-celo-green/90 transition-all transform hover:scale-105 shadow-lg">
              Post a Gig
            </button>
            <button className="px-8 py-4 border-2 border-celo-green text-celo-green rounded-full font-semibold hover:bg-celo-green/10 transition-all">
              List Your Skills
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-celo-green" />
          </div>
        </div>
      </section>

      {/* Gig Carousel Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Browse Available Gigs</h2>
            <p className="text-lg text-muted-foreground">
              Explore thousands of opportunities from verified freelancers
            </p>
          </div>
          <GigCarousel />
        </div>
      </section>

      {/* Dual Section - Freelancers vs Buyers */}
      <DualSection />

      {/* How It Works */}
      <HowItWorks />

      {/* Testimonials */}
      <Testimonials />

      {/* Footer */}
      <Footer />
    </main>
  )
}
