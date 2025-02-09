import * as THREE from 'three'

export function useQRCodeAnimation() {
  const maxRotation = Math.PI / 5 // 36 degrees
  const zRotationRange = Math.PI / 2 // 90 degrees
  const smoothness = 0.04

  function update(group: THREE.Group, mouse: THREE.Vector2) {
    const bigQrcode = group.children.find((child) => child.name === 'big_qrcode')
    if (!bigQrcode) return

    // Base rotation to keep QR code oriented correctly
    const baseRotationX = Math.PI / 2
    const baseRotationY = -Math.PI / 2

    // Calculate rotation offsets based on mouse position
    const rotationX = baseRotationX + mouse.y * maxRotation
    const rotationY = baseRotationY + mouse.x * maxRotation
    const rotationZ = mouse.x * mouse.y * zRotationRange * 2

    // Smoothly apply rotations
    bigQrcode.rotation.x = THREE.MathUtils.lerp(
      bigQrcode.rotation.x,
      rotationX,
      smoothness
    )
    
    bigQrcode.rotation.y = THREE.MathUtils.lerp(
      bigQrcode.rotation.y,
      rotationY,
      smoothness
    )
    
    bigQrcode.rotation.z = THREE.MathUtils.lerp(
      bigQrcode.rotation.z,
      rotationZ,
      smoothness
    )
  }

  return { update }
}