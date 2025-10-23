import { NextResponse } from "next/server"
import { SelfBackendVerifier, AllIds, DefaultConfigStore } from "@selfxyz/core"

const verifier = new SelfBackendVerifier(
  "gigjar",
  "https://verifier.self.xyz",
  false,
  AllIds,
  new DefaultConfigStore({
    human: true,
  }),
  "hex",
)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    if (!body.proof || !body.publicSignals || !body.attestationId || !body.userContextData) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const proof = Array.isArray(body.proof) ? body.proof : []
    const publicSignals = Array.isArray(body.publicSignals) ? body.publicSignals : []

    const result = await verifier.verify(body.attestationId, proof, publicSignals, body.userContextData)

    if (result.isValidDetails.isValid) {
      return NextResponse.json({ success: true, credentialSubject: result.discloseOutput })
    } else {
      return NextResponse.json({ success: false, error: "Verification failed" }, { status: 400 })
    }
  } catch (error) {
    console.error("Backend verification error:", error)
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 })
  }
}
