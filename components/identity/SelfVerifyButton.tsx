"use client"

import { useState, useEffect } from "react"
import { SelfQRcodeWrapper, SelfAppBuilder } from "@selfxyz/qrcode"
import type { SelfApp } from "@selfxyz/qrcode"
import { ethers } from "ethers"

export default function SelfVerifyButton() {
  const [selfApp, setSelfApp] = useState<SelfApp | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [showQR, setShowQR] = useState(false)

  useEffect(() => {
    if (showQR) {
      try {
        const endpoint = process.env.NEXT_PUBLIC_VERCEL_URL
          ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/verify`
          : "https://gigjar.xyz/api/verify"

        const app = new SelfAppBuilder({
          version: 2,
          appName: "GigJar",
          scope: "gigjar",
          endpoint: endpoint,
          logoBase64: "https://gigjar.xyz/logo.png",
          userId: ethers.ZeroAddress,
          endpointType: "https",
          userIdType: "hex",
          userDefinedData: "Verify your identity for GigJar",
          disclosures: { human: true },
        }).build()

        console.log("✅ Self app initialized")
        setSelfApp(app)
      } catch (error) {
        console.error("❌ Failed to initialize Self app:", error)
        setError(error instanceof Error ? error.message : "Unknown error")
      }
    }
  }, [showQR])

  const handleSuccess = () => {
    console.log("✅ Identity verified!")
    alert("🎉 Identity verified successfully!")
  }

  const handleError = (err: any) => {
    console.error("❌ Verification failed:", err)
    alert("❌ Verification failed. Please try again.")
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-800 text-sm">Error: {error}</p>
      </div>
    )
  }

  if (!showQR) {
    return (
      <button
        onClick={() => setShowQR(true)}
        className="relative px-8 py-4 bg-gradient-to-r from-black to-gray-800 text-white rounded-lg font-black text-lg hover:from-gray-800 hover:to-black transition-all shadow-2xl hover:shadow-[0_0_40px_rgba(0,0,0,0.6)] hover:scale-105 border-4 border-black animate-pulse-slow"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Verify Identity
        </span>
        <span className="absolute inset-0 rounded-lg bg-black opacity-30 blur-xl animate-pulse"></span>
      </button>
    )
  }

  if (!selfApp) {
    return (
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-blue-800">Loading verification...</p>
      </div>
    )
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-xl max-w-md mx-auto">
      <h3 className="text-lg font-semibold mb-4 text-center">Scan with Self Protocol App</h3>
      <div className="flex justify-center mb-4">
        <SelfQRcodeWrapper selfApp={selfApp} onSuccess={handleSuccess} onError={handleError} />
      </div>
      <p className="text-xs text-gray-600 text-center">Download Self Protocol from App Store or Google Play</p>
      <button
        onClick={() => setShowQR(false)}
        className="mt-4 w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
      >
        Cancel
      </button>
    </div>
  )
}
