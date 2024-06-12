"use client";
import { Canvas } from "@react-three/fiber";
import { Model } from "./model";

export default function AboutScene() {
  return (
    <Canvas camera={{ position: [0, 0, 2.5] }}>
      <ambientLight color={"lightgreen"} />
      <pointLight position={[1.5, 1, 1]} color={"blue"} intensity={30} />
      <Model />
    </Canvas>
  );
}
