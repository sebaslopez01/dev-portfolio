import { useState, useRef, Suspense, Ref } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// import { Mesh } from "three";
import { inSphere } from "maath/random";

// type PointsType = typeof Points;

function Stars() {
  const pointRef = useRef<any>(null);

  const [sphere] = useState(() =>
    inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((_state, delta) => {
    if (pointRef.current) {
      pointRef.current.rotation.x -= delta / 10;
      pointRef.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={pointRef}
        positions={sphere as Float32Array}
        stride={3}
        frustumCulled
      >
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function StarsCanvas() {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}
