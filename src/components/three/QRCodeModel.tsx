'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { useQRCodeAnimation } from '@/lib/three/useQRCodeAnimation'

export default function QRCodeModel() {
  const group = useRef<THREE.Group>(null)
  const { nodes } = useGLTF('/assets/mystery_qrcode.glb')
  const animation = useQRCodeAnimation()

  useFrame((state) => {
    if (!group.current) return
    animation.update(group.current, state.mouse)
  })

  return (
    <group ref={group}>
      <mesh
        name="big_qrcode"
        position={[-0.66, 9.03, -0.026]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        scale={[90.551, 17.002, 90.551]}
      >
        {/* Add mesh geometry and material here */}
      </mesh>
      <mesh
        name="small_qrcode"
        position={[-0.67, 8.99, -0.009]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={[20, 1, 20]}
      >
        {/* Add mesh geometry and material here */}
      </mesh>
    </group>
  )
}