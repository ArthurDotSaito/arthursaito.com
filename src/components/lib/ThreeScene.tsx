import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Model from './Model';
import { OrbitControls } from '@react-three/drei';
import { AmbientLight, DirectionalLight } from 'three';

function ThreeJsScene() {
  const ambientLight = new AmbientLight(0xffffff, 0.5);
  const directionalLight = new DirectionalLight(0xffffff, 1);
  const minZoom = 0.95;
  const maxZoom = 4;
  const cameraPosition: [x: number, y: number, z: number] = [1, 2, 2];

  return (
    <Canvas camera={{ position: cameraPosition, fov: 50 }}>
      <Suspense fallback={null}>
        <ambientLight />
        <directionalLight />
        <Model />
        <OrbitControls minDistance={minZoom} maxDistance={maxZoom} autoRotate autoRotateSpeed={3} />
      </Suspense>
    </Canvas>
  );
}

export default ThreeJsScene;
