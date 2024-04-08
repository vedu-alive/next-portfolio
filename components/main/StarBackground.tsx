"use client";
import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";
const StarBackground = ({ ...props }) => {
  const ref: any = React.useRef();
  const [sphere] = React.useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );
  useFrame((state, delta) => {
    ref.current.rotation.y -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} stride={3} frustumCulled {...props} positions={sphere}>
        <PointMaterial
          transparent
          color={"#fff"}
          size={0.002}
          sizeAttenuation={true}
          dethWrite={false}
        />
      </Points>
    </group>
  );
};
const StarCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-20">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);
export default StarCanvas;
