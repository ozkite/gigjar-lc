"use client"

import { Briefcase, Users, ArrowRight } from "lucide-react"

export default function DualSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-celo-dark/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* For Buyers/Patrons */}
          <div className="group bg-card rounded-3xl p-8 md:p-10 border border-border hover:border-celo-green/50 transition-all duration-300 shadow-lg hover:shadow-2xl">
            <div className="mb-6 inline-block p-3 bg-celo-green/10 rounded-xl">
              <Briefcase className="w-8 h-8 text-celo-green" />
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">For Buyers & Patrons</h3>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Post your project, connect with verified talent, and pay securely in stablecoins. Your funds are protected
              in escrow until you approve the work.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-foreground">
                <div className="w-2 h-2 bg-celo-green rounded-full" />
                <span>Post gigs for free</span>
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <div className="w-2 h-2 bg-celo-green rounded-full" />
                <span>Access verified freelancers</span>
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <div className="w-2 h-2 bg-celo-green rounded-full" />
                <span>Escrow-protected payments</span>
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <div className="w-2 h-2 bg-celo-green rounded-full" />
                <span>Pay only 5% platform fee</span>
              </li>
            </ul>

            <button className="w-full px-6 py-4 bg-celo-green text-white rounded-xl font-semibold hover:bg-celo-green/90 transition-all flex items-center justify-center gap-2 group/btn">
              Post Your First Gig
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* For Freelancers/Talent */}
          <div className="group bg-card rounded-3xl p-8 md:p-10 border border-border hover:border-celo-green/50 transition-all duration-300 shadow-lg hover:shadow-2xl">
            <div className="mb-6 inline-block p-3 bg-celo-green/10 rounded-xl">
              <Users className="w-8 h-8 text-celo-green" />
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">For Freelancers & Talent</h3>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Showcase your skills to global clients. Get paid instantly in stablecoins. Build your reputation with Self
              Protocol verification.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-foreground">
                <div className="w-2 h-2 bg-celo-green rounded-full" />
                <span>Get verified with Self Protocol</span>
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <div className="w-2 h-2 bg-celo-green rounded-full" />
                <span>Instant stablecoin payments</span>
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <div className="w-2 h-2 bg-celo-green rounded-full" />
                <span>Build your portfolio</span>
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <div className="w-2 h-2 bg-celo-green rounded-full" />
                <span>No hidden fees</span>
              </li>
            </ul>

            <button className="w-full px-6 py-4 bg-celo-green text-white rounded-xl font-semibold hover:bg-celo-green/90 transition-all flex items-center justify-center gap-2 group/btn">
              Start Earning Today
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
