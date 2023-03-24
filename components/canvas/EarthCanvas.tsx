import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useInView } from "react-intersection-observer";

import CanvasLoader from "../CanvasLoader";

function Earth() {
  const earth = useGLTF("/planet/scene.gltf");

  return <primitive object={earth.scene} scale={2.5} position-y={0} />;
}

export default function EarthCanvas() {
  const { ref, inView } = useInView({ threshold: 0.0 });

  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
      ref={ref}
    >
      {inView && (
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
        </Suspense>
      )}
      <Preload all />
    </Canvas>
  );
}
