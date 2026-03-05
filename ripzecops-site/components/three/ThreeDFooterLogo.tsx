"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import { Text, Float, PerspectiveCamera } from "@react-three/drei";

function FloatingBrand() {
    const meshRef = useRef<THREE.Group>(null);
    const [hovered, setHovered] = useState(false);

    useFrame((state) => {
        if (!meshRef.current) return;
        const t = state.clock.getElapsedTime();

        // Zoom in/out pulse effect
        const scale = 1 + Math.sin(t * 1.5) * 0.1;
        meshRef.current.scale.setScalar(hovered ? scale * 1.2 : scale);

        // Rotation
        meshRef.current.rotation.y = Math.sin(t * 0.5) * 0.2;
        meshRef.current.rotation.x = Math.cos(t * 0.3) * 0.1;
    });

    return (
        <group
            ref={meshRef}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <Text
                    font="/fonts/Outfit-Bold.ttf" // Fallback to system font if not found, but we'll try to use a good one
                    fontSize={0.8}
                    color="#ffffff"
                    anchorX="center"
                    anchorY="middle"
                    maxWidth={10}
                >
                    RIPZECOPS
                </Text>
                <Text
                    position={[0, -0.6, 0]}
                    fontSize={0.2}
                    color="#00d2ff"
                    anchorX="center"
                    anchorY="middle"
                >
                    INDUSTRIES
                </Text>
            </Float>

            {/* Decorative Glow */}
            <mesh position={[0, 0, -0.5]}>
                <planeGeometry args={[6, 2]} />
                <meshBasicMaterial color="#00d2ff" transparent opacity={0.05} blending={THREE.AdditiveBlending} />
            </mesh>
        </group>
    );
}

export default function ThreeDFooterLogo() {
    return (
        <div className="h-40 w-full max-w-md">
            <Canvas gl={{ antialias: true, alpha: true }}>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#00d2ff" />
                <FloatingBrand />
            </Canvas>
        </div>
    );
}
