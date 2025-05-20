'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, SphereGeometry, MeshStandardMaterial } from 'three';
import { MeshWobbleMaterial } from '@react-three/drei';

// W przyszłości będziemy tutaj przyjmować dane commitów jako props
export default function Globe() {
  const meshRef = useRef<Mesh>(null);
  
  // Symulowane punkty commitów - docelowo będą pochodzić z rzeczywistych danych
  const dummyCommits = useMemo(() => {
    return Array(50).fill(0).map(() => ({
      position: [
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      ],
      size: Math.random() * 0.06 + 0.01
    }));
  }, []);
  
  // Animacja rotacji kuli (będzie zastąpiona przez OrbitControls)
  useFrame(() => {
    if (meshRef.current) {
      // Minimalna rotacja dla efektu "życia"
      meshRef.current.rotation.y += 0.001;
    }
  });
  
  return (
    <group>
      {/* Główna kula */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshWobbleMaterial
          color="#3078cb"
          factor={0.05}
          speed={1}
          emissive="#072956"
          emissiveIntensity={0.3}
          transparent
          opacity={0.9}
          wireframe={false}
        />
      </mesh>
      
      {/* Punkty symbolizujące commity */}
      {dummyCommits.map((commit, index) => (
        <mesh 
          key={index}
          position={[
            commit.position[0] * 1.05,
            commit.position[1] * 1.05,
            commit.position[2] * 1.05
          ]}
        >
          <sphereGeometry args={[commit.size, 8, 8]} />
          <meshStandardMaterial 
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={1}
          />
        </mesh>
      ))}
    </group>
  );
} 