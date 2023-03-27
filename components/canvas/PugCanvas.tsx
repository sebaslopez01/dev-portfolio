import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { useInView } from "react-intersection-observer";

import CanvasLoader from "../CanvasLoader";

interface ComputersProps {
  isMobile: boolean;
}

function Pug({ isMobile }: ComputersProps) {
  // const computer = useGLTF("/desktop_pc/scene.gltf");
  const pug = useGLTF("/pug/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.35} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={pug.scene}
        scale={isMobile ? 0.02 : 0.03}
        position={isMobile ? [0, -2, 0] : [0, -3.25, 0]}
        rotation={[-0.01, 1.8, 0]}
      />
    </mesh>
  );
}

export default function PugCanvas() {
  const [isMobile, setIsMobile] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.0 });

  const handleMediaQueryChange = (event: MediaQueryListEvent) => {
    setIsMobile(event.matches);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      ref={ref}
    >
      {inView && (
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Pug isMobile={isMobile} />
        </Suspense>
      )}
      <Preload all />
    </Canvas>
  );
}
