"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function StrataCore() {
  const group = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.12;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.22) * 0.08;
    }
  });
  const bands = ["#d9a16f", "#8ba39b", "#e7dfc9", "#b86f4e", "#59766f"];
  return (
    <group ref={group}>
      {bands.map((color, i) => (
        <mesh key={color} position={[0, (i - 2) * 0.36, 0]} scale={[1 - i * 0.035, 0.34, 1 - i * 0.035]}>
          <sphereGeometry args={[1, 64, 32]} />
          <meshStandardMaterial color={color} roughness={0.82} metalness={0.04} />
        </mesh>
      ))}
      <mesh position={[0.95, 0.25, 0.2]} rotation={[0.2, 0.3, 0.5]}>
        <torusGeometry args={[0.42, 0.018, 8, 90]} />
        <meshStandardMaterial color="#e66d3e" emissive="#7e321b" />
      </mesh>
    </group>
  );
}

export default function GeoScene() {
  return (
    <div className="scene-wrap" aria-label="Interactive three-dimensional geological strata model">
      <div className="scene-label"><span>FIG. 01</span><span>STRATIGRAPHIC MODEL</span></div>
      <Canvas camera={{ position: [0, 0, 4.8], fov: 38 }}>
        <ambientLight intensity={1.3} />
        <directionalLight position={[3, 4, 5]} intensity={2.2} />
        <pointLight position={[-3, -2, 2]} intensity={1.1} color="#e66d3e" />
        <Float speed={1.1} rotationIntensity={0.15} floatIntensity={0.3}>
          <StrataCore />
        </Float>
        <Sparkles count={55} scale={5.5} size={1.5} speed={0.25} color="#e6b18b" />
        <OrbitControls enablePan={false} minDistance={3.8} maxDistance={6} />
      </Canvas>
      <div className="scene-hint">DRAG TO EXPLORE ↗</div>
    </div>
  );
}
