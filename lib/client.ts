import { createThirdwebClient } from "thirdweb"

export const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "bb440899ac2738b7c526cf8dbc7d1d2b",
})
