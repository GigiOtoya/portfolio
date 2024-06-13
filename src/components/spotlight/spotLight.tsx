import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_2: THREE.Mesh;
    Object_2_1: THREE.Mesh;
  };
  materials: {
    ["MI_MovingHead.001"]: THREE.MeshStandardMaterial;
    ["MI_MovingHead.003"]: THREE.MeshStandardMaterial;
    ["MI_MovingHead.002"]: THREE.MeshStandardMaterial;
    ["M_LensDefault_Master.001"]: THREE.MeshStandardMaterial;
  };
};

export function SpotLight(props: JSX.IntrinsicElements["group"]) {
  const baseRef = useRef<THREE.Group>(null);
  const lampRef = useRef<THREE.Group>(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame(() => {
    if (lampRef.current && baseRef.current) {
      const mouseX = mousePositionRef.current.x;
      const mouseY = mousePositionRef.current.y;

      const horizontalAngle = Math.atan2(mouseX - window.innerWidth / 2, window.innerWidth / 2);
      const verticalAngle = Math.atan2(mouseY - window.innerHeight / 6, window.innerHeight / 6);

      baseRef.current.rotation.y = -horizontalAngle;
      lampRef.current.rotation.x = verticalAngle;
    }
  });

  const { nodes, materials } = useGLTF("models/SpotLight.glb") as GLTFResult;
  return (
    <group {...props} dispose={null} rotation={[Math.PI, 0, 0]}>
      <group scale={0.03} position={[0, -0.75, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials["MI_MovingHead.001"]}
        />
        <group ref={baseRef}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials["MI_MovingHead.003"]}
            position={[-0.013, 0, -0.005]}
          />
          <group ref={lampRef} position={[0, 28.685, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_2.geometry}
              material={materials["MI_MovingHead.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_2_1.geometry}
              material={materials["M_LensDefault_Master.001"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("models/SpotLight.glb");
