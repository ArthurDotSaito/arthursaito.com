import { useGLTF } from '@react-three/drei';

export default function Model() {
  const glb = useGLTF('glb/coffe.glb');

  return <primitive object={glb.scene} />;
}
