'use client'

import { useState } from 'react'

export default function WalletInput() {
  const [walletAddress, setWalletAddress] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add wallet verification logic here
    console.log('Verifying wallet:', walletAddress)
  }

  return (
    <div className="fixed top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[80%] w-full max-w-lg px-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          placeholder="Enter your Solana wallet address"
          className="w-full px-4 py-3 text-sm uppercase bg-black/10 backdrop-blur-sm
            border border-qr-green/30 rounded text-white font-orbitron
            focus:border-qr-green focus:outline-none focus:ring-1 focus:ring-qr-green
            placeholder:text-white/50"
        />
        <button
          type="submit"
          className="w-full px-4 py-3 text-sm uppercase bg-qr-green/10 backdrop-blur-sm
            border border-qr-green text-qr-green font-orbitron rounded
            hover:bg-qr-green/20 transition-colors duration-300
            active:bg-qr-green/30"
        >
          Verify Ownership
        </button>
      </form>
    </div>
  )
}