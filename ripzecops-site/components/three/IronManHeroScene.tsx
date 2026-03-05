"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera, useTexture } from "@react-three/drei";
import * as THREE from "three";

// Intense "Slash" Lights crossing the screen
function SlashLights() {
    const count = 30;
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const dummy = useMemo(() => new THREE.Object3D(), []);

    // Random speeds and positions
    const slashes = useMemo(() => {
        return new Array(count).fill(0).map(() => ({
            position: new THREE.Vector3(
                (Math.random() - 0.5) * 30,
                (Math.random() - 0.5) * 30,
                (Math.random() - 0.5) * 15 - 5 // Behind and slightly in front
            ),
            rotation: Math.random() > 0.5 ? Math.PI / 4 : -Math.PI / 4,
            speed: 5 + Math.random() * 10,
            scale: new THREE.Vector3(0.1, 4 + Math.random() * 8, 1),
            color: Math.random() > 0.4 ? new THREE.Color("#00f0ff") : new THREE.Color("#ff003c"),
        }));
    }, [count]);

    useFrame((state, delta) => {
        if (!meshRef.current) return;
        slashes.forEach((slash, i) => {
            // Move diagonally
            const dir = slash.rotation > 0 ? 1 : -1;
            slash.position.y -= slash.speed * delta;
            slash.position.x -= slash.speed * dir * delta;

            // Reset condition
            if (slash.position.y < -15 || Math.abs(slash.position.x) > 15) {
                slash.position.set(
                    (Math.random() - 0.5) * 30,
                    15 + Math.random() * 5,
                    (Math.random() - 0.5) * 15 - 5
                );
            }

            dummy.position.copy(slash.position);
            dummy.rotation.z = slash.rotation;
            dummy.scale.copy(slash.scale);
            dummy.updateMatrix();
            meshRef.current!.setMatrixAt(i, dummy.matrix);
            meshRef.current!.setColorAt(i, slash.color);
        });
        meshRef.current.instanceMatrix.needsUpdate = true;
        if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
            <planeGeometry args={[1, 1]} />
            <meshBasicMaterial transparent opacity={0.6} blending={THREE.AdditiveBlending} depthWrite={false} color="#ffffff" />
        </instancedMesh>
    );
}

// Emitting sparks from bottom up
function Sparks() {
    const pointsRef = useRef<THREE.Points>(null);
    const count = 300;

    const [positions, phases] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const ph = new Float32Array(count);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 20;
            pos[i * 3 + 1] = -10 + Math.random() * 20;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
            ph[i] = Math.random() * 100;
        }
        return [pos, ph];
    }, []);

    useFrame((_, delta) => {
        if (!pointsRef.current) return;
        const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < count; i++) {
            pos[i * 3 + 1] += (2 + Math.random() * 2) * delta; // move up
            pos[i * 3] += Math.sin(phases[i] + pos[i * 3 + 1]) * 0.05; // sway
            if (pos[i * 3 + 1] > 10) {
                pos[i * 3 + 1] = -10;
            }
        }
        pointsRef.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial size={0.1} color="#ffaa00" transparent opacity={0.8} blending={THREE.AdditiveBlending} depthWrite={false} />
        </points>
    );
}

// 3D Video Character 
function TechCharacter() {
    const techTexture = useTexture("/brand/tech-boy.png");
    const meshRef = useRef<THREE.Mesh>(null);
    const glowRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current || !glowRef.current) return;
        const t = state.clock.getElapsedTime();

        // Cinematic floating and subtle breathing
        meshRef.current.position.y = Math.sin(t * 1.5) * 0.12;
        meshRef.current.position.x = Math.cos(t * 1.0) * 0.08;

        // Parallax depth based on mouse
        meshRef.current.rotation.y = (state.pointer.x * Math.PI) / 10;
        meshRef.current.rotation.x = -(state.pointer.y * Math.PI) / 20;

        // Pulse glow
        glowRef.current.scale.setScalar(1 + Math.sin(t * 2) * 0.05);
        glowRef.current.position.copy(meshRef.current.position);
    });

    return (
        <group position={[0, -0.5, 0]}>
            {/* Background Glow Pulse */}
            <mesh ref={glowRef} position={[0, 0, -0.5]}>
                <circleGeometry args={[4, 32]} />
                <meshBasicMaterial color="#00d2ff" transparent opacity={0.15} blending={THREE.AdditiveBlending} />
            </mesh>

            <mesh ref={meshRef}>
                <planeGeometry args={[7, 7]} />
                <meshBasicMaterial map={techTexture} transparent opacity={1} depthWrite={false} />
            </mesh>

            {/* Glow matching brand color */}
            <pointLight position={[0, 0.5, 1]} distance={8} intensity={3} color="#00d2ff" />
        </group>
    );
}

function FloatingLogo() {
    const logoTex = useTexture("/brand/logo.png");
    const logoRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!logoRef.current) return;
        const t = state.clock.getElapsedTime();
        // Small 3D logo floating off to top-right
        logoRef.current.position.y = 2.5 + Math.sin(t * 2) * 0.05;
        logoRef.current.rotation.y = state.pointer.x * 0.5;
    });

    return (
        <mesh ref={logoRef} position={[2.5, 2.5, 1]} scale={1.2}>
            <planeGeometry args={[1, 1]} />
            <meshBasicMaterial map={logoTex} transparent depthWrite={false} blending={THREE.AdditiveBlending} />
        </mesh>
    );
}

export default function IronManHeroScene() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <div className="absolute inset-0 z-0 bg-[#02050A]">
            <Canvas dpr={[1, 1.5]} gl={{ antialias: false, alpha: false }}>
                <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={60} />
                <ambientLight intensity={0.5} />

                <SlashLights />
                <Sparks />
                <TechCharacter />
                <FloatingLogo />
            </Canvas>
        </div>
    );
}
