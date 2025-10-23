"use client"

import { ConnectButton } from "thirdweb/react"
import { inAppWallet, createWallet } from "thirdweb/wallets"
import { client } from "@/lib/client"
import { forwardRef, useImperativeHandle, useRef } from "react"

export interface ConnectWalletButtonRef {
  openModal: () => void
}

export const ConnectWalletButton = forwardRef<ConnectWalletButtonRef>((props, ref) => {
  const buttonRef = useRef<HTMLDivElement>(null)

  useImperativeHandle(ref, () => ({
    openModal: () => {
      // Trigger click on the connect button
      const button = buttonRef.current?.querySelector("button")
      button?.click()
    },
  }))

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
    <div ref={buttonRef}>
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
    </div>
  )
})

ConnectWalletButton.displayName = "ConnectWalletButton"
