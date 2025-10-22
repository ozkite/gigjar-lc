"use client"

import { FileText, Users, CheckCircle2 } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Post a Gig",
    description: "Create your project with AI assistance or manually. Set your budget in stablecoins and deadline.",
    icon: FileText,
    cta: "Create a Gig",
  },
  {
    number: "2",
    title: "Get Proposals & Hire",
    description:
      "Review verified freelancers, interview via chat, and select your perfect match with on-chain reputation.",
    icon: Users,
    cta: "Explore Experts",
  },
  {
    number: "3",
    title: "Pay When Work is Done",
    description: "Funds held in escrow. Release payment only after you approve deliverables—instantly in stablecoins.",
    icon: CheckCircle2,
    cta: "View How Payments Work",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, secure, and transparent. Get started in three easy steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div key={idx} className="relative">
                {/* Connector Line */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-24 left-1/2 w-full h-1 bg-gradient-to-r from-celo-green/50 to-transparent transform translate-x-1/2" />
                )}

                <div className="bg-card rounded-2xl p-8 border border-border hover:border-celo-green/50 transition-all duration-300 h-full flex flex-col">
                  {/* Step Number */}
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-celo-green to-celo-green/70 text-white font-bold text-xl">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-4 p-3 bg-celo-green/10 rounded-xl w-fit">
                    <Icon className="w-6 h-6 text-celo-green" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>

                  <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">{step.description}</p>

                  <button className="text-celo-green font-semibold hover:text-celo-green/80 transition-colors flex items-center gap-2">
                    {step.cta}
                    <span>→</span>
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
