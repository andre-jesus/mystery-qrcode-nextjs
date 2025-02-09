'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/layout/Navbar'
import WalletInput from '@/components/ui/WalletInput'
import MessageDisplay from '@/components/ui/MessageDisplay'

// Dynamically import the Scene component with SSR disabled
const Scene = dynamic(() => import('@/components/three/Scene'), { ssr: false })

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Scene />
      <div className="relative z-10">
        <Navbar />
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center min-h-screen">
            <MessageDisplay />
            <WalletInput />
          </div>
        </div>
      </div>
    </main>
  )
}