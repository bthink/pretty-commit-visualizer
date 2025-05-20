'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Suspense } from 'react';
import Globe from './Globe';

export default function GlobeContainer() {
  return (
    <Canvas 
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ width: '100%', height: '100%', position: 'absolute' }}
    >
      <color attach="background" args={['#050816']} />
      
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      <Suspense fallback={null}>
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        <Globe />
      </Suspense>
      
      <OrbitControls 
        enableZoom={true}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        zoomSpeed={0.8}
      />
    </Canvas>
  );
} 