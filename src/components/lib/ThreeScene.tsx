import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Model from './Model';
import { OrbitControls } from '@react-three/drei';
import { AmbientLight, DirectionalLight } from 'three';

function ThreeJsScene() {
  const ambientLight = new AmbientLight(0xffffff, 0.5);
  const directionalLight = new DirectionalLight(0xffffff, 1);

  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight />
        <directionalLight />
        <Model />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}

export default ThreeJsScene;
