"use client"

import { useState, useEffect } from "react"

const gigs = [
  {
    id: 1,
    title: "Deploy Smart Contracts on Celo main net and Alfajores",
    price: "800 cUSD",
    verified: true,
    image: "/smart-contract-code.png",
    skills: ["Solidity", "Celo", "Smart Contracts"],
  },
  {
    id: 2,
    title: "Deploy a miniapp on Farcaster on Celo L2",
    price: "500 cUSD",
    verified: true,
    image: "/design-mockup.jpg",
    skills: ["Farcaster", "Celo L2", "React"],
  },
  {
    id: 3,
    title: "Help a project with UI/UX design",
    price: "800 cUSD",
    verified: true,
    image: "/web-development-concept.png",
    skills: ["Figma", "UI/UX", "Design"],
  },
  {
    id: 4,
    title: "Write a guide on IPFS for beginners",
    price: "60 cUSD",
    verified: true,
    image: "/mobile-app-showcase.png",
    skills: ["Writing", "IPFS", "Technical"],
  },
  {
    id: 5,
    title: "Create an article about Mento stablecoins",
    price: "40 cUSD",
    verified: true,
    image: "/data-analytics-visualization.png",
    skills: ["Writing", "Research", "Crypto"],
  },
]

interface GigCarouselProps {
  onCardClick?: () => void
}

export default function GigCarousel({ onCardClick }: GigCarouselProps) {
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
          className="absolute left-0 z-20 p-2 rounded-full bg-[#36B37E]/20 hover:bg-[#36B37E]/40 transition-all"
          aria-label="Previous gig"
        >
          <svg className="w-6 h-6 text-[#36B37E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
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
                <div
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 w-72 h-96 flex flex-col group cursor-pointer border border-gray-200"
                  onClick={onCardClick}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#36B37E]/20 to-[#36B37E]/5">
                    <img
                      src={gig.image || "/placeholder.svg"}
                      alt={gig.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {gig.verified && (
                      <div className="absolute top-3 right-3 bg-[#36B37E] text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm font-semibold">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Verified
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-5 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-black mb-2 line-clamp-2">{gig.title}</h3>

                      {/* Skills */}
                      <div className="flex gap-2 mb-4 flex-wrap">
                        {gig.skills.map((skill) => (
                          <span key={skill} className="text-xs bg-[#36B37E]/10 text-[#36B37E] px-2 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2 text-[#36B37E] font-bold text-lg">{gig.price}</div>
                      <button
                        className="px-4 py-2 bg-[#36B37E] text-white rounded-lg text-sm font-semibold hover:bg-[#2d9a6a] transition-all"
                        onClick={(e) => {
                          e.stopPropagation()
                          onCardClick?.()
                        }}
                      >
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
          className="absolute right-0 z-20 p-2 rounded-full bg-[#36B37E]/20 hover:bg-[#36B37E]/40 transition-all"
          aria-label="Next gig"
        >
          <svg className="w-6 h-6 text-[#36B37E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
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
              idx === activeIndex ? "bg-[#36B37E] w-8" : "bg-[#36B37E]/30"
            }`}
            aria-label={`Go to gig ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
