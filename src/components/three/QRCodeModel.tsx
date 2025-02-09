'use client'

import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export default function QRCodeModel() {
  const group = useRef<THREE.Group>(null)
  const bigQRCodeRef = useRef<THREE.Mesh>()
  const { scene } = useGLTF('/assets/mystery_qrcode.glb', true)
  const { camera } = useThree()
  const time = useRef(0)
  
  // Animation constants
  const originalZ = -0.026
  const movementRange = 2.3
  const movementSpeed = 0.05
  const maxRotation = Math.PI / 5
  const zRotationRange = Math.PI / 2
  const smoothness = 0.04

  useEffect(() => {
    if (scene) {
      scene.traverse((node) => {
        if (node.isMesh && node.name === 'big_qrcode') {
          bigQRCodeRef.current = node
          node.position.set(-0.660, 9.030, originalZ)
          node.rotation.set(
            90.00 * Math.PI / 180,
            -90.00 * Math.PI / 180,
            0.00 * Math.PI / 180
          )
          node.scale.set(90.551, 17.002, 90.551)
        }

        if (node.isMesh && node.name === 'small_qrcode') {
          node.position.set(-0.670, 8.990, -0.009)
          node.rotation.set(
            90.11 * Math.PI / 180,
            -0.00 * Math.PI / 180,
            -180.00 * Math.PI / 180
          )
          node.scale.set(20.000, 1.000, 20.000)
        }
      })

      scene.rotation.y = Math.PI

      // Center the model
      const box = new THREE.Box3().setFromObject(scene)
      const center = box.getCenter(new THREE.Vector3())
      scene.position.sub(center)

      // Adjust camera to fit model
      const size = box.getSize(new THREE.Vector3())
      const maxDim = Math.max(size.x, size.y, size.z)
      const fov = camera.fov * (Math.PI / 180)
      let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2))
      camera.position.z = cameraZ * 1
      camera.position.y = 0
      camera.lookAt(0, 0, 0)
    }
  }, [scene, camera])

  useFrame((state) => {
    if (!bigQRCodeRef.current) return
    
    const bigQRCode = bigQRCodeRef.current

    // Base rotation to keep QR code oriented correctly
    const baseRotationX = Math.PI / 2
    const baseRotationY = -Math.PI / 2

    // Calculate rotation offsets based on mouse position
    const rotationX = baseRotationX + state.mouse.y * maxRotation
    const rotationY = baseRotationY + state.mouse.x * maxRotation
    const rotationZ = state.mouse.x * state.mouse.y * zRotationRange * 2

    // Smoothly apply rotations
    bigQRCode.rotation.x = THREE.MathUtils.lerp(
      bigQRCode.rotation.x,
      rotationX,
      smoothness
    )
    
    bigQRCode.rotation.y = THREE.MathUtils.lerp(
      bigQRCode.rotation.y,
      rotationY,
      smoothness
    )
    
    bigQRCode.rotation.z = THREE.MathUtils.lerp(
      bigQRCode.rotation.z,
      rotationZ,
      smoothness
    )

    // Update forward/backward movement
    time.current += movementSpeed
    const newZ = originalZ + Math.sin(time.current) * movementRange
    bigQRCode.position.z = THREE.MathUtils.lerp(
      bigQRCode.position.z,
      newZ,
      smoothness
    )
  })

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  )
}

// Preload the model
useGLTF.preload('/assets/mystery_qrcode.glb')