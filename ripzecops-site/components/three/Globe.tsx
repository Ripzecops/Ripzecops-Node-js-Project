"use client";

import * as THREE from "three";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { usePageVisibility } from "@/lib/hooks/usePageVisibility";

function randomPointOnSphere(r: number) {
  const u = Math.random();
  const v = Math.random();
  const theta = 2 * Math.PI * u;
  const phi = Math.acos(2 * v - 1);
  const x = r * Math.sin(phi) * Math.cos(theta);
  const y = r * Math.cos(phi);
  const z = r * Math.sin(phi) * Math.sin(theta);
  return new THREE.Vector3(x, y, z);
}

export default function Globe({
  radius = 1.05,
  points = 1600,
}: {
  radius?: number;
  points?: number;
}) {
  const group = useRef<THREE.Group>(null);
  const visible = usePageVisibility();

  const positions = useMemo(() => {
    const arr = new Float32Array(points * 3);
    for (let i = 0; i < points; i++) {
      const p = randomPointOnSphere(radius);
      arr[i * 3 + 0] = p.x;
      arr[i * 3 + 1] = p.y;
      arr[i * 3 + 2] = p.z;
    }
    return arr;
  }, [points, radius]);

  const geom = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, [positions]);

  useFrame((state, dt) => {
    if (!visible) return;
    if (!group.current) return;

    // slow premium rotation
    group.current.rotation.y += dt * 0.22;
    group.current.rotation.x += dt * 0.045;

    // subtle parallax (desktop only)
    const x = state.pointer.x; // [-1..1]
    const y = state.pointer.y;
    group.current.rotation.y += x * dt * 0.06;
    group.current.rotation.x += -y * dt * 0.04;
  });

  return (
    <group ref={group}>
      {/* wireframe */}
      <mesh>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshBasicMaterial color="#00d2ff" wireframe transparent opacity={0.15} />
      </mesh>

      {/* inner core */}
      <mesh>
        <sphereGeometry args={[radius * 0.9, 32, 32]} />
        <meshBasicMaterial color="#050B14" />
      </mesh>

      {/* glowing points */}
      <points geometry={geom}>
        <pointsMaterial
          size={0.015}
          color="#e62429"
          transparent
          opacity={0.9}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}
