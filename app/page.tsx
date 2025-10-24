"use client"

import { useState, useEffect, useRef } from "react"
import GigCarousel from "@/components/gig-carousel"
import DualSection from "@/components/dual-section"
import HowItWorks from "@/components/how-it-works"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"
import { ConnectWalletButton, type ConnectWalletButtonRef } from "@/components/connect-wallet-button"
import SelfVerifyButton from "@/components/identity/SelfVerifyButton"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const walletButtonRef = useRef<ConnectWalletButtonRef>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleOpenWallet = () => {
    walletButtonRef.current?.openModal()
  }

  return (
    <main className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-black">GigJar</div>
          <ConnectWalletButton ref={walletButtonRef} />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white px-4 py-20 pt-32">
        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight text-balance">
              The Marketplace for Tech Gigs That Runs on <span className="text-[#36B37E]">Stablecoins</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-xl">
              Instant Payment Settlement, Using Stablecoins with Ultra-Low Fees and Complete Security.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <SelfVerifyButton />
              <button
                onClick={handleOpenWallet}
                className="px-8 py-4 bg-[#36B37E] text-white rounded-lg font-semibold hover:bg-[#2d9a6a] transition-all shadow-lg hover:shadow-xl"
              >
                Post a Gig
              </button>
              <button
                onClick={handleOpenWallet}
                className="px-8 py-4 bg-[#36B37E] text-white rounded-lg font-semibold hover:bg-[#2d9a6a] transition-all shadow-lg hover:shadow-xl"
              >
                Browse Gigs
              </button>
            </div>

            {/* Platform Advantages */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200">
                <div className="w-10 h-10 rounded-full bg-[#36B37E]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#36B37E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-black text-sm mb-1">Instant Payments</h3>
                  <p className="text-xs text-gray-600">Get paid in stablecoins instantly</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200">
                <div className="w-10 h-10 rounded-full bg-[#36B37E]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#36B37E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-black text-sm mb-1">Ultra-Low Fees</h3>
                  <p className="text-xs text-gray-600">Save more with minimal transaction costs</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200">
                <div className="w-10 h-10 rounded-full bg-[#36B37E]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#36B37E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-black text-sm mb-1">Secure Escrow</h3>
                  <p className="text-xs text-gray-600">Protected with multi-signature security</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Co-working Space Illustration */}
          <div className="relative">
            <img
              src="/vector-illustration-of-diverse-people-working-toge.jpg"
              alt="Co-working space"
              className="w-full h-auto rounded-2xl cursor-pointer hover:opacity-90 transition-opacity"
              onClick={handleOpenWallet}
            />

            <div className="mt-8 text-center">
              <div className="flex items-center justify-center gap-8 mb-3">
                <img src="https://www.digipaga.com/cl1.png" alt="Celo" className="h-10 object-contain" />
                <img src="https://www.digipaga.com/mento.png" alt="Mento" className="h-10 object-contain" />
                <img src="https://www.digipaga.com/cl4.png" alt="Self Protocol" className="h-10 object-contain" />
              </div>
              <p className="text-sm text-gray-600">
                Powered by Celo, Mento & Self — for fast, cheap, secure transactions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Identity Verification Section */}
      <section className="py-20 px-4 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">🛡️ Verify Your Identity Privately</h2>

          <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
            Prove you're a real human using zero-knowledge, privacy-preserving verification. No personal data is ever
            stored or shared.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="flex items-start gap-3 p-6 rounded-xl bg-gray-50 border border-gray-200 text-left">
              <div className="text-[#36B37E] text-2xl flex-shrink-0">✅</div>
              <div>
                <h3 className="font-semibold text-black mb-1">Zero-knowledge proof of humanity</h3>
              </div>
            </div>

            <div className="flex items-start gap-3 p-6 rounded-xl bg-gray-50 border border-gray-200 text-left">
              <div className="text-[#36B37E] text-2xl flex-shrink-0">✅</div>
              <div>
                <h3 className="font-semibold text-black mb-1">Sybil-resistant freelance marketplace</h3>
              </div>
            </div>

            <div className="flex items-start gap-3 p-6 rounded-xl bg-gray-50 border border-gray-200 text-left">
              <div className="text-[#36B37E] text-2xl flex-shrink-0">✅</div>
              <div>
                <h3 className="font-semibold text-black mb-1">Compliant with global privacy standards</h3>
              </div>
            </div>

            <div className="flex items-start gap-3 p-6 rounded-xl bg-gray-50 border border-gray-200 text-left">
              <div className="text-[#36B37E] text-2xl flex-shrink-0">✅</div>
              <div>
                <h3 className="font-semibold text-black mb-1">One verification, lifetime access</h3>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <SelfVerifyButton />
          </div>
        </div>
      </section>

      {/* Gig Carousel Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Browse Verified Gigs</h2>
            <p className="text-lg text-gray-700">Select and complete the gig and get paid instantly</p>
          </div>
          <GigCarousel onCardClick={handleOpenWallet} />
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
