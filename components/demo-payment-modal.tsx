"use client"

import { useState } from "react"
import { useSendTransaction, useActiveAccount } from "thirdweb/react"
import { prepareContractCall, toWei } from "thirdweb"
import { celo } from "thirdweb/chains"
import { getContract } from "thirdweb"
import { client } from "@/lib/client"

interface DemoPaymentModalProps {
  isOpen: boolean
  onClose: () => void
}

// cUSD token contract on Celo
const cUSDContract = getContract({
  client,
  chain: celo,
  address: "0x765de816845861e75a25fca122bb6898b8b1282a",
})

export default function DemoPaymentModal({ isOpen, onClose }: DemoPaymentModalProps) {
  const [step, setStep] = useState(1)
  const [confirmed, setConfirmed] = useState(false)
  const [txHash, setTxHash] = useState<string>("")
  const account = useActiveAccount()
  const { mutate: sendTransaction, isPending } = useSendTransaction()

  // Demo platform wallet (replace with your actual wallet address)
  const DEMO_PLATFORM_WALLET = "0x0000000000000000000000000000000000000000"

  const handleConfirmDelivery = () => {
    setConfirmed(true)
    setStep(2)
  }

  const handleSendPayment = async () => {
    if (!account) {
      alert("Please connect your wallet first")
      return
    }

    try {
      setStep(3)

      // Prepare the cUSD transfer transaction
      const transaction = prepareContractCall({
        contract: cUSDContract,
        method: "function transfer(address to, uint256 amount) returns (bool)",
        params: [DEMO_PLATFORM_WALLET, toWei("0.1")],
      })

      // Send the transaction
      sendTransaction(transaction, {
        onSuccess: (result) => {
          console.log("[v0] Transaction successful:", result)
          setTxHash(result.transactionHash)
          setStep(4)
        },
        onError: (error) => {
          console.error("[v0] Transaction failed:", error)
          alert("Transaction failed. Please try again.")
          setStep(2)
        },
      })
    } catch (error) {
      console.error("[v0] Error preparing transaction:", error)
      alert("Error preparing transaction. Please try again.")
      setStep(2)
    }
  }

  const handleClose = () => {
    setStep(1)
    setConfirmed(false)
    setTxHash("")
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-black mb-2">Demo Payment Flow</h2>
          <p className="text-gray-600 text-sm">Experience real cUSD transactions on Celo</p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${
                  step >= num ? "bg-[#36B37E] text-white" : "bg-gray-200 text-gray-500"
                }`}
              >
                {num}
              </div>
              {num < 4 && <div className={`w-12 h-1 ${step > num ? "bg-[#36B37E]" : "bg-gray-200"}`} />}
            </div>
          ))}
        </div>

        {/* Step 1: Review Gig */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-black mb-2">Demo Gig: Test Payment Flow</h3>
              <p className="text-gray-600 text-sm mb-4">
                This is a demo gig to showcase real cUSD payments on the Celo network.
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-gray-600">Amount:</span>
                <span className="text-[#36B37E] font-bold text-xl">0.1 cUSD</span>
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full px-6 py-3 bg-[#36B37E] text-white rounded-lg font-semibold hover:bg-[#2d9a6a] transition-all"
            >
              Continue
            </button>
          </div>
        )}

        {/* Step 2: Confirm Delivery */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-black mb-4">Confirm Delivery</h3>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={confirmed}
                  onChange={(e) => setConfirmed(e.target.checked)}
                  className="mt-1 w-5 h-5 text-[#36B37E] rounded focus:ring-[#36B37E]"
                />
                <span className="text-gray-700 text-sm">
                  I confirm that I want to send 0.1 cUSD as a demo payment. This is a real transaction on the Celo
                  network.
                </span>
              </label>
            </div>

            <button
              onClick={handleSendPayment}
              disabled={!confirmed || !account}
              className="w-full px-6 py-3 bg-[#36B37E] text-white rounded-lg font-semibold hover:bg-[#2d9a6a] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {!account ? "Connect Wallet First" : "Send Payment"}
            </button>
          </div>
        )}

        {/* Step 3: Processing */}
        {step === 3 && (
          <div className="space-y-6 text-center">
            <div className="flex justify-center">
              <div className="w-16 h-16 border-4 border-[#36B37E] border-t-transparent rounded-full animate-spin" />
            </div>
            <div>
              <h3 className="font-bold text-black mb-2">Processing Payment...</h3>
              <p className="text-gray-600 text-sm">Please confirm the transaction in your wallet</p>
            </div>
          </div>
        )}

        {/* Step 4: Success */}
        {step === 4 && (
          <div className="space-y-6 text-center">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-[#36B37E] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-black text-xl mb-2">Payment Successful!</h3>
              <p className="text-gray-600 text-sm mb-4">Your demo payment of 0.1 cUSD has been sent</p>

              {txHash && (
                <a
                  href={`https://celoscan.io/tx/${txHash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#36B37E] hover:text-[#2d9a6a] text-sm font-semibold"
                >
                  View on Celoscan
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
            </div>

            <button
              onClick={handleClose}
              className="w-full px-6 py-3 bg-[#36B37E] text-white rounded-lg font-semibold hover:bg-[#2d9a6a] transition-all"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
