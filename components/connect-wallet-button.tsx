"use client"

import { ConnectButton } from "thirdweb/react"
import { inAppWallet, createWallet } from "thirdweb/wallets"
import { client } from "@/lib/client"

export function ConnectWalletButton() {
  const wallets = [
    inAppWallet({
      auth: {
        options: [
          "email",
          "phone",
          "passkey",
          "google",
          "apple",
          "discord",
          "telegram",
          "github",
          "tiktok",
          "facebook",
          "x",
          "farcaster",
          "guest",
        ],
      },
    }),
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    createWallet("me.rainbow"),
    createWallet("io.rabby"),
    createWallet("com.okex.wallet"),
  ]

  return (
    <ConnectButton
      client={client}
      connectModal={{ size: "compact" }}
      wallets={wallets}
      theme="light"
      connectButton={{
        label: "Connect Wallet",
        className:
          "!px-6 !py-2.5 !bg-[#36B37E] !text-white !rounded-lg !font-semibold hover:!bg-[#2d9a6a] !transition-all !shadow-sm",
      }}
    />
  )
}
