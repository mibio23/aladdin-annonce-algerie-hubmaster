import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Mesh, Color } from 'three';

interface SimpleModelProps {
  color: string;
  scale?: number;
  modelType: 'cube' | 'sphere' | 'cone' | 'torus';
  rotationSpeed?: number;
}

const SimpleModel = ({ color, modelType, scale = 1, rotationSpeed = 0.01 }: SimpleModelProps) => {
  const meshRef = useRef<Mesh>(null);
  
  useEffect(() => {
    if (meshRef.current) {
      // Initial setup if any
    }
  }, []);

  useFrame((_state, _delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed;
      meshRef.current.rotation.y += rotationSpeed * 1.5;
    }
  });

  const renderGeometry = () => {
    switch (modelType) {
      case 'cube':
        return <boxGeometry args={[1.5, 1.5, 1.5]} />;
      case 'sphere':
        return <sphereGeometry args={[1, 32, 32]} />;
      case 'cone':
        return <coneGeometry args={[1, 2, 32]} />;
      case 'torus':
        return <torusGeometry args={[1, 0.4, 16, 32]} />;
      default:
        return <boxGeometry args={[1.5, 1.5, 1.5]} />;
    }
  };

  return (
    <mesh
      ref={meshRef}
      scale={scale}
    >
      {renderGeometry()}
      <meshStandardMaterial
        args={[{ 
          color: new Color(color),
          metalness: 0.8,
          roughness: 0.2
        }]}
      />
    </mesh>
  );
};

interface Icon3DProps {
  type: 'cube' | 'sphere' | 'cone' | 'torus';
  color?: string;
  hoverColor?: string; 
  height?: number;
  width?: number;
  className?: string;
}

const Icon3D: React.FC<Icon3DProps> = ({
  type,
  color = '#9b87f5',
  height = 60,
  width = 60,
  className = '',
}) => {
  return (
    <div className={`relative ${className}`} style={{ height, width }}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.7} />
        <SimpleModel 
          color={color} 
          modelType={type} 
        />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          minPolarAngle={Math.PI / 2 - 0.5} 
          maxPolarAngle={Math.PI / 2 + 0.5}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
};

export default Icon3D;
