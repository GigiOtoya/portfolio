"use client";
import { Canvas } from "@react-three/fiber";
import { SpotLight } from "../spotlight/spotLight";

export default function SpotLightScene() {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <pointLight position={[0, -0.75, 0]} color={"cyan"} intensity={10} />
      <pointLight position={[1, 0, 0.5]} color={"cyan"} intensity={10} />
      <pointLight position={[-1, 0, 0.5]} color={"cyan"} intensity={10} />
      <pointLight power={100} position={[0, 1, 0]} color={"rgb(74, 222, 160)"} />

      <SpotLight />
    </Canvas>
  );
}
