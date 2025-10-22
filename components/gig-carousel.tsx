"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, CheckCircle2, DollarSign } from "lucide-react"

const gigs = [
  {
    id: 1,
    title: "Smart Contract Audit",
    freelancer: "Alex Chen",
    rate: "150 cUSD/hr",
    verified: true,
    image: "/smart-contract-code.png",
    skills: ["Solidity", "Security"],
  },
  {
    id: 2,
    title: "UI/UX Design",
    freelancer: "Maria Garcia",
    rate: "80 cUSD/hr",
    verified: true,
    image: "/design-mockup.jpg",
    skills: ["Figma", "Design"],
  },
  {
    id: 3,
    title: "Web Development",
    freelancer: "James Wilson",
    rate: "120 cUSD/hr",
    verified: true,
    image: "/web-development-concept.png",
    skills: ["React", "Next.js"],
  },
  {
    id: 4,
    title: "Mobile App Dev",
    freelancer: "Sofia Rodriguez",
    rate: "110 cUSD/hr",
    verified: true,
    image: "/mobile-app-showcase.png",
    skills: ["React Native", "iOS"],
  },
  {
    id: 5,
    title: "Data Analysis",
    freelancer: "Priya Patel",
    rate: "95 cUSD/hr",
    verified: true,
    image: "/data-analytics-visualization.png",
    skills: ["Python", "Analytics"],
  },
]

export default function GigCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % gigs.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const getVisibleGigs = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      visible.push(gigs[(activeIndex + i) % gigs.length])
    }
    return visible
  }

  const handlePrev = () => {
    setIsAutoPlay(false)
    setActiveIndex((prev) => (prev - 1 + gigs.length) % gigs.length)
  }

  const handleNext = () => {
    setIsAutoPlay(false)
    setActiveIndex((prev) => (prev + 1) % gigs.length)
  }

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="flex items-center justify-center gap-4 md:gap-6 perspective">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-0 z-20 p-2 rounded-full bg-celo-green/20 hover:bg-celo-green/40 transition-all"
          aria-label="Previous gig"
        >
          <ChevronLeft className="w-6 h-6 text-celo-green" />
        </button>

        {/* Gig Cards */}
        <div className="flex gap-4 md:gap-6 justify-center items-center w-full px-16">
          {getVisibleGigs().map((gig, idx) => {
            const isCenter = idx === 1
            const scale = isCenter ? 1 : 0.85
            const opacity = isCenter ? 1 : 0.6

            return (
              <div
                key={gig.id}
                className="transition-all duration-500 ease-out"
                style={{
                  transform: `scale(${scale})`,
                  opacity: opacity,
                }}
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 w-72 h-96 flex flex-col group cursor-pointer">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-celo-green/20 to-celo-green/5">
                    <img
                      src={gig.image || "/placeholder.svg"}
                      alt={gig.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {gig.verified && (
                      <div className="absolute top-3 right-3 bg-celo-green text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm font-semibold">
                        <CheckCircle2 className="w-4 h-4" />
                        Verified
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-5 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">{gig.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{gig.freelancer}</p>

                      {/* Skills */}
                      <div className="flex gap-2 mb-4">
                        {gig.skills.map((skill) => (
                          <span key={skill} className="text-xs bg-celo-green/10 text-celo-green px-2 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Rate */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-2 text-celo-green font-semibold">
                        <DollarSign className="w-4 h-4" />
                        {gig.rate}
                      </div>
                      <button className="px-4 py-2 bg-celo-green text-white rounded-lg text-sm font-semibold hover:bg-celo-green/90 transition-all">
                        Hire
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-0 z-20 p-2 rounded-full bg-celo-green/20 hover:bg-celo-green/40 transition-all"
          aria-label="Next gig"
        >
          <ChevronRight className="w-6 h-6 text-celo-green" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {gigs.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setIsAutoPlay(false)
              setActiveIndex(idx)
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === activeIndex ? "bg-celo-green w-8" : "bg-celo-green/30"
            }`}
            aria-label={`Go to gig ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
