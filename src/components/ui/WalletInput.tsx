'use client'

import { useState } from 'react'

export default function WalletInput() {
  const [walletAddress, setWalletAddress] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Verifying wallet:', walletAddress)
  }

  return (
    <div className="flex flex-col items-center mt-6">
      <p className="text-qr-green text-lg md:text-xl font-bold uppercase text-center whitespace-nowrap
        animate-[glow_2s_infinite_alternate] tracking-wide">
        Those who hold the key shall witness the revelation.
      </p>
      <div className="w-full max-w-lg mt-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            placeholder="Enter your Solana wallet address"
            className="custom-input w-full px-4 py-3.5 text-sm uppercase rounded-lg font-orbitron tracking-wide"
          />
          <button
            type="submit"
            className="nav-button w-full py-3.5 text-sm uppercase text-qr-green font-orbitron tracking-wide"
          >
            Verify Ownership
          </button>
        </form>
      </div>
    </div>
  )
}