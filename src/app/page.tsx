'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/layout/Navbar'
import WalletInput from '@/components/ui/WalletInput'
import MessageDisplay from '@/components/ui/MessageDisplay'

const Scene = dynamic(() => import('@/components/three/Scene'), { ssr: false })

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Scene />
      <div className="relative z-10">
        <Navbar />
        <div className="container mx-auto px-4 pt-20"> {/* Added padding top */}
          <div className="flex flex-col items-center gap-72"> {/* Adjusted gap */}
            <MessageDisplay />
            <WalletInput />
          </div>
        </div>
      </div>
    </main>
  )
}