import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { StaticImageData } from "next/image";
import { useInView } from "react-intersection-observer";

import CanvasLoader from "../CanvasLoader";

interface BallCanvasProps {
  icon: StaticImageData;
}

interface BallProps {
  imgUrl: StaticImageData;
}

function Ball({ imgUrl }: BallProps) {
  const [decal] = useTexture([imgUrl.src]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
}

export default function BallCanvas({ icon }: BallCanvasProps) {
  const { ref, inView } = useInView({ threshold: 0.0 });

  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      ref={ref}
    >
      {inView && (
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} />
          <Ball imgUrl={icon} />
        </Suspense>
      )}
      <Preload all />
    </Canvas>
  );
}
