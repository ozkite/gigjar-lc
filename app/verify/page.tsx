import SelfVerifyButton from "@/components/identity/SelfVerifyButton"

export default function VerifyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Verify Your Identity</h1>
          <p className="text-lg text-gray-600">Use Self Protocol to verify your identity privately and securely</p>
        </div>

        <SelfVerifyButton />

        <div className="pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">Powered by Self Protocol - Zero-knowledge identity verification</p>
        </div>
      </div>
    </div>
  )
}
