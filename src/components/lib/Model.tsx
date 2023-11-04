import { useGLTF } from '@react-three/drei';

export default function Model() {
  const glb = useGLTF('glb/computer__desk.glb');

  return <primitive object={glb.scene} />;
}
