'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import QRCodeModel from './QRCodeModel'
import { Suspense } from 'react'

export default function Scene() {
  return (
    <div className="fixed inset-0 bg-black">
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 75,
        }}
      >
        <Suspense fallback={null}>
          <QRCodeModel />
          <OrbitControls enableDamping dampingFactor={0.05} />
        </Suspense>
      </Canvas>
    </div>
  )
}