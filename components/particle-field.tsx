"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

/* ──────── Floating particles with lime/cyan glow ──────── */
function CloudParticles({ count = 400 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null)

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const lime = new THREE.Color("#a3e635")
    const cyan = new THREE.Color("#22d3ee")
    const stone = new THREE.Color("#a8a29e")
    const palette = [lime, cyan, stone]

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20
      const c = palette[i % palette.length]
      col[i * 3] = c.r
      col[i * 3 + 1] = c.g
      col[i * 3 + 2] = c.b
    }
    return { positions: pos, colors: col }
  }, [count])

  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.y = state.clock.elapsedTime * 0.012
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.008) * 0.03
    const posArr = mesh.current.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < count; i++) {
      posArr[i * 3 + 1] += Math.sin(state.clock.elapsedTime * 0.4 + i * 0.15) * 0.0008
    }
    mesh.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

/* ──────── Network nodes connected by lines ──────── */
function NetworkMesh() {
  const groupRef = useRef<THREE.Group>(null)

  const { nodes, connections, geometries } = useMemo(() => {
    const n: THREE.Vector3[] = []
    for (let i = 0; i < 30; i++) {
      n.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 14,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 14
        )
      )
    }
    const conn: { start: THREE.Vector3; end: THREE.Vector3 }[] = []
    for (let i = 0; i < n.length; i++) {
      for (let j = i + 1; j < n.length; j++) {
        if (n[i].distanceTo(n[j]) < 4.5) {
          conn.push({ start: n[i], end: n[j] })
        }
      }
    }
    const geoms = conn.map((c) =>
      new THREE.BufferGeometry().setFromPoints([c.start, c.end])
    )
    return { nodes: n, connections: conn, geometries: geoms }
  }, [])

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.018
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.012) * 0.04
  })

  return (
    <group ref={groupRef}>
      {geometries.map((geo, i) => (
        <line key={`line-${i}`} geometry={geo}>
          <lineBasicMaterial
            color="#a3e635"
            transparent
            opacity={0.08}
            blending={THREE.AdditiveBlending}
          />
        </line>
      ))}
      {nodes.map((node, i) => (
        <mesh key={`node-${i}`} position={node}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial
            color={i % 3 === 0 ? "#22d3ee" : i % 3 === 1 ? "#a3e635" : "#a8a29e"}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
    </group>
  )
}

/* ──────── Cloud infrastructure shapes ──────── */
function InfrastructureShapes() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.03
    groupRef.current.children.forEach((child, i) => {
      child.position.y += Math.sin(state.clock.elapsedTime * 0.4 + i * 1.2) * 0.0008
      child.rotation.x = state.clock.elapsedTime * 0.08 * (i % 2 === 0 ? 1 : -1)
      child.rotation.z = state.clock.elapsedTime * 0.06 * (i % 3 === 0 ? 1 : -1)
    })
  })

  const shapes = useMemo(
    () => [
      // Server racks
      { pos: [-5, 2, -3] as const, geo: "box" as const, scale: 0.35, color: "#a3e635" },
      { pos: [4, -1.5, -4] as const, geo: "box" as const, scale: 0.3, color: "#22d3ee" },
      { pos: [-3, -2.5, 2] as const, geo: "box" as const, scale: 0.25, color: "#a3e635" },
      { pos: [2, 3, 2] as const, geo: "box" as const, scale: 0.2, color: "#a8a29e" },
      // Cloud nodes
      { pos: [3, 3, -2] as const, geo: "sphere" as const, scale: 0.25, color: "#22d3ee" },
      { pos: [-4, -1, 3] as const, geo: "sphere" as const, scale: 0.2, color: "#a3e635" },
      { pos: [5, 1, 1.5] as const, geo: "sphere" as const, scale: 0.18, color: "#a8a29e" },
      { pos: [-1, 4, -1] as const, geo: "sphere" as const, scale: 0.15, color: "#22d3ee" },
      // Data packets
      { pos: [0, 3.5, -3] as const, geo: "octahedron" as const, scale: 0.18, color: "#a3e635" },
      { pos: [-2, -3.5, -1.5] as const, geo: "octahedron" as const, scale: 0.14, color: "#a8a29e" },
      { pos: [1.5, 1.5, 4] as const, geo: "octahedron" as const, scale: 0.2, color: "#22d3ee" },
      { pos: [-5, 0.5, -1] as const, geo: "octahedron" as const, scale: 0.12, color: "#a3e635" },
      // Orbital rings
      { pos: [0, 0, 0] as const, geo: "torus" as const, scale: 0.8, color: "#a3e635" },
      { pos: [3, -2, -2.5] as const, geo: "torus" as const, scale: 0.45, color: "#22d3ee" },
      { pos: [-3, 2, 1] as const, geo: "torus" as const, scale: 0.5, color: "#a8a29e" },
    ],
    []
  )

  return (
    <group ref={groupRef}>
      {shapes.map((shape, i) => (
        <mesh key={`infra-${i}`} position={[shape.pos[0], shape.pos[1], shape.pos[2]]}>
          {shape.geo === "box" && (
            <boxGeometry args={[shape.scale, shape.scale * 1.4, shape.scale * 0.6]} />
          )}
          {shape.geo === "sphere" && <sphereGeometry args={[shape.scale, 12, 12]} />}
          {shape.geo === "octahedron" && <octahedronGeometry args={[shape.scale, 0]} />}
          {shape.geo === "torus" && <torusGeometry args={[shape.scale, 0.02, 8, 40]} />}
          <meshBasicMaterial
            color={shape.color}
            transparent
            opacity={shape.geo === "torus" ? 0.12 : 0.18}
            wireframe
          />
        </mesh>
      ))}
    </group>
  )
}

/* ──────── Floating grid floor ──────── */
function FloatingGrid() {
  const gridRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!gridRef.current) return
    gridRef.current.position.y = -4 + Math.sin(state.clock.elapsedTime * 0.15) * 0.3
  })

  return (
    <group ref={gridRef} position={[0, -4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <gridHelper args={[24, 24, "#a3e635", "#a3e635"]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial transparent opacity={0.03} />
      </gridHelper>
    </group>
  )
}

/* ──────── Orbiting data ring ──────── */
function DataOrbit() {
  const ringRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!ringRef.current) return
    ringRef.current.rotation.z = state.clock.elapsedTime * 0.1
    ringRef.current.rotation.x = Math.PI / 6
  })

  const dots = useMemo(() => {
    const arr: { angle: number; radius: number; color: string }[] = []
    for (let i = 0; i < 24; i++) {
      arr.push({
        angle: (i / 24) * Math.PI * 2,
        radius: 5,
        color: i % 2 === 0 ? "#a3e635" : "#22d3ee",
      })
    }
    return arr
  }, [])

  return (
    <group ref={ringRef}>
      {dots.map((dot, i) => (
        <mesh
          key={`orbit-${i}`}
          position={[Math.cos(dot.angle) * dot.radius, Math.sin(dot.angle) * dot.radius, 0]}
        >
          <sphereGeometry args={[0.03, 6, 6]} />
          <meshBasicMaterial color={dot.color} transparent opacity={0.5} />
        </mesh>
      ))}
    </group>
  )
}

export function ParticleField() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <CloudParticles />
        <NetworkMesh />
        <InfrastructureShapes />
        <FloatingGrid />
        <DataOrbit />
      </Canvas>
    </div>
  )
}
