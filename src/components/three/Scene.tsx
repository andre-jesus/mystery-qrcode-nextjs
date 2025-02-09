'use client'

import { Canvas } from '@react-three/fiber'
import { Preload, Loader } from '@react-three/drei'
import QRCodeModel from './QRCodeModel'
import { Suspense } from 'react'
import LoadingScreen from '../ui/LoadingScreen'

export default function Scene() {
  return (
    <>
      <div className="fixed inset-0 bg-black before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[45%] before:bg-gradient-to-b before:from-black/70 before:to-transparent before:z-[1] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[45%] after:bg-gradient-to-t after:from-black/90 after:to-transparent after:z-[1]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000
          }}
        >
          <Suspense fallback={null}>
            <QRCodeModel />
            <Preload all />
          </Suspense>
        </Canvas>
      </div>
      <Loader
        containerStyles={{
          background: 'transparent',
          zIndex: 1000
        }}
        innerStyles={{
          backgroundColor: 'rgba(0,0,0,0.8)',
          borderRadius: '8px',
          padding: '12px 24px'
        }}
        barStyles={{
          backgroundColor: '#14F195'
        }}
        dataInterpolation={(p) => `Loading ${p.toFixed(0)}%`}
        dataStyles={{
          color: '#14F195',
          fontSize: '14px',
          fontFamily: 'Orbitron'
        }}
      />
    </>
  )
}