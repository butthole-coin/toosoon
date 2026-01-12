'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const ref = useRef<THREE.Points>(null)
  
  const particleCount = 2000
  
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return pos
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.02
      ref.current.rotation.y = state.clock.elapsedTime * 0.03
      
      // Subtle floating motion
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#f5f5f0"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  )
}

function FloatingCross({ position, scale }: { position: [number, number, number], scale: number }) {
  const ref = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.1
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.3 + position[2]) * 0.3
    }
  })

  return (
    <group ref={ref} position={position} scale={scale}>
      {/* Vertical bar */}
      <mesh>
        <boxGeometry args={[0.05, 0.4, 0.02]} />
        <meshBasicMaterial color="#f5f5f0" transparent opacity={0.1} />
      </mesh>
      {/* Horizontal bar */}
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[0.2, 0.05, 0.02]} />
        <meshBasicMaterial color="#f5f5f0" transparent opacity={0.1} />
      </mesh>
    </group>
  )
}

function FloatingElements() {
  const crosses = useMemo(() => {
    const elements: { position: [number, number, number], scale: number }[] = []
    for (let i = 0; i < 8; i++) {
      elements.push({
        position: [
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10 - 5
        ],
        scale: 0.5 + Math.random() * 1.5
      })
    }
    return elements
  }, [])

  return (
    <>
      {crosses.map((cross, i) => (
        <FloatingCross key={i} position={cross.position} scale={cross.scale} />
      ))}
    </>
  )
}

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#0a0a0a']} />
        <fog attach="fog" args={['#0a0a0a', 5, 20]} />
        <ambientLight intensity={0.5} />
        <ParticleField />
        <FloatingElements />
      </Canvas>
    </div>
  )
}
