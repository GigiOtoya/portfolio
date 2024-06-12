import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    EyeLeft: THREE.SkinnedMesh;
    EyeRight: THREE.SkinnedMesh;
    Wolf3D_Body: THREE.SkinnedMesh;
    Wolf3D_Hair: THREE.SkinnedMesh;
    Wolf3D_Head: THREE.SkinnedMesh;
    Wolf3D_Outfit_Bottom: THREE.SkinnedMesh;
    Wolf3D_Outfit_Footwear: THREE.SkinnedMesh;
    Wolf3D_Outfit_Top: THREE.SkinnedMesh;
    Wolf3D_Teeth: THREE.SkinnedMesh;
    Bin_Bin_Metal_0: THREE.Mesh;
    Bin_Bin_Shader_0: THREE.Mesh;
    Computer_Chair_Black_Plastic_0: THREE.Mesh;
    Computer_Chair_Chair_Seat_0: THREE.Mesh;
    Computer_Chair_Chrome_0: THREE.Mesh;
    Object_19: THREE.Mesh;
    Object_21: THREE.Mesh;
    Object_15: THREE.Mesh;
    Object_17: THREE.Mesh;
    Object_13: THREE.Mesh;
    ["Desk_#2_Desk_Oak_0"]: THREE.Mesh;
    ["Desk_#2_Metal_Black_0"]: THREE.Mesh;
    Desk_Mat_Mat_Black_0: THREE.Mesh;
    Keyboard_iMac_Grey_Aluminium_0: THREE.Mesh;
    Keyboard_iMac_White_Glass_0: THREE.Mesh;
    Keyboard_Keyboard_Keys_0: THREE.Mesh;
    Large_Plant_Plant_Leaf_Shader_0: THREE.Mesh;
    Large_Plant_Pot_Shader_0_1: THREE.Mesh;
    Large_Plant_Pot_Shader_0_2: THREE.Mesh;
    Monitor_Riser_Desk_Black_0: THREE.Mesh;
    Monitor_Riser_Desk_Oak_0: THREE.Mesh;
    Object_7: THREE.Mesh;
    Object_9: THREE.Mesh;
    Object_11: THREE.Mesh;
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
    Small_Plant_Plant_Shader_0001_1: THREE.Mesh;
    Small_Plant_Plant_Shader_0001_2: THREE.Mesh;
    Small_Plant_Plant_Shader_0001_3: THREE.Mesh;
    Studio_Speaker_Speaker_Black_0: THREE.Mesh;
    Studio_Speaker_Speaker_White_0: THREE.Mesh;
    Studio_Speaker002_Speaker_Black_0: THREE.Mesh;
    Studio_Speaker002_Speaker_White_0: THREE.Mesh;
    Trackpad_iMac_Grey_Aluminium_0: THREE.Mesh;
    Trackpad_iMac_White_Glass001_0: THREE.Mesh;
    Hips: THREE.Bone;
  };
  materials: {
    ["Wolf3D_Eye.001"]: THREE.MeshStandardMaterial;
    ["Wolf3D_Body.001"]: THREE.MeshBasicMaterial;
    ["Wolf3D_Hair.001"]: THREE.MeshBasicMaterial;
    ["Wolf3D_Skin.001"]: THREE.MeshBasicMaterial;
    ["Wolf3D_Outfit_Bottom.001"]: THREE.MeshBasicMaterial;
    ["Wolf3D_Outfit_Footwear.001"]: THREE.MeshBasicMaterial;
    ["Wolf3D_Outfit_Top.001"]: THREE.MeshBasicMaterial;
    ["Wolf3D_Teeth.001"]: THREE.MeshStandardMaterial;
    Bin_Metal: THREE.MeshStandardMaterial;
    Bin_Shader: THREE.MeshBasicMaterial;
    Black_Plastic: THREE.MeshBasicMaterial;
    Chair_Seat: THREE.MeshBasicMaterial;
    Chrome: THREE.MeshBasicMaterial;
    Plastic: THREE.MeshBasicMaterial;
    Rough_Black_Texture: THREE.MeshBasicMaterial;
    Scratched_Plastic: THREE.MeshBasicMaterial;
    Desk_Oak: THREE.MeshBasicMaterial;
    Metal_Black: THREE.MeshBasicMaterial;
    Mat_Black: THREE.MeshBasicMaterial;
    iMac_Grey_Aluminium: THREE.MeshStandardMaterial;
    iMac_White_Glass: THREE.MeshStandardMaterial;
    Keyboard_Keys: THREE.MeshStandardMaterial;
    Plant_Leaf_Shader: THREE.MeshBasicMaterial;
    Pot_Shader: THREE.MeshBasicMaterial;
    Material: THREE.MeshBasicMaterial;
    Desk_Black: THREE.MeshBasicMaterial;
    Wallpaper: THREE.MeshBasicMaterial;
    Plant_Shader: THREE.MeshBasicMaterial;
    Leaf_Shader: THREE.MeshBasicMaterial;
    Soil_Shader: THREE.MeshBasicMaterial;
    Speaker_Black: THREE.MeshBasicMaterial;
    Speaker_White: THREE.MeshBasicMaterial;
    ["iMac_White_Glass.001"]: THREE.MeshStandardMaterial;
  };
};

type ActionName = "Armature.001|mixamo.com|Layer0" | "Sitting_Idle";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF("models/Scene.glb") as GLTFResult;
  // const { actions } = useAnimations<GLTFActions>(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <skinnedMesh
            name="EyeLeft"
            geometry={nodes.EyeLeft.geometry}
            material={materials["Wolf3D_Eye.001"]}
            skeleton={nodes.EyeLeft.skeleton}
            morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
          />
          <skinnedMesh
            name="EyeRight"
            geometry={nodes.EyeRight.geometry}
            material={materials["Wolf3D_Eye.001"]}
            skeleton={nodes.EyeRight.skeleton}
            morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Body"
            geometry={nodes.Wolf3D_Body.geometry}
            material={materials["Wolf3D_Body.001"]}
            skeleton={nodes.Wolf3D_Body.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Hair"
            geometry={nodes.Wolf3D_Hair.geometry}
            material={materials["Wolf3D_Hair.001"]}
            skeleton={nodes.Wolf3D_Hair.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Head"
            geometry={nodes.Wolf3D_Head.geometry}
            material={materials["Wolf3D_Skin.001"]}
            skeleton={nodes.Wolf3D_Head.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom"
            geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
            material={materials["Wolf3D_Outfit_Bottom.001"]}
            skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear"
            geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
            material={materials["Wolf3D_Outfit_Footwear.001"]}
            skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top"
            geometry={nodes.Wolf3D_Outfit_Top.geometry}
            material={materials["Wolf3D_Outfit_Top.001"]}
            skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Teeth"
            geometry={nodes.Wolf3D_Teeth.geometry}
            material={materials["Wolf3D_Teeth.001"]}
            skeleton={nodes.Wolf3D_Teeth.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
          />
          <primitive object={nodes.Hips} />
        </group>
        <group
          name="GLTF_SceneRootNode"
          position={[0.009, 0.929, 0.667]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <group
            name="Bin"
            position={[0.24, -0.919, 0.95]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={[0.123, 0.123, 0.008]}
          >
            <mesh
              name="Bin_Bin_Metal_0"
              castShadow
              receiveShadow
              geometry={nodes.Bin_Bin_Metal_0.geometry}
              material={materials.Bin_Metal}
            />
            <mesh
              name="Bin_Bin_Shader_0"
              castShadow
              receiveShadow
              geometry={nodes.Bin_Bin_Shader_0.geometry}
              material={materials.Bin_Shader}
            />
          </group>
          <group
            name="Computer_Chair"
            position={[0.668, -0.931, -0.093]}
            rotation={[-1.567, -0.006, -1.075]}
            scale={[0.426, 0.426, 0.359]}
          >
            <mesh
              name="Computer_Chair_Black_Plastic_0"
              castShadow
              receiveShadow
              geometry={nodes.Computer_Chair_Black_Plastic_0.geometry}
              material={materials.Black_Plastic}
            />
            <mesh
              name="Computer_Chair_Chair_Seat_0"
              castShadow
              receiveShadow
              geometry={nodes.Computer_Chair_Chair_Seat_0.geometry}
              material={materials.Chair_Seat}
            />
            <mesh
              name="Computer_Chair_Chrome_0"
              castShadow
              receiveShadow
              geometry={nodes.Computer_Chair_Chrome_0.geometry}
              material={materials.Chrome}
            />
          </group>
          <group name="Cube001_10" position={[-0.323, -0.205, 0]}>
            <mesh
              name="Object_19"
              castShadow
              receiveShadow
              geometry={nodes.Object_19.geometry}
              material={materials.Plastic}
            />
          </group>
          <group name="Cube002_11" position={[-0.323, -0.185, 0]}>
            <mesh
              name="Object_21"
              castShadow
              receiveShadow
              geometry={nodes.Object_21.geometry}
              material={materials.Rough_Black_Texture}
            />
          </group>
          <group name="Cube_8" position={[-0.163, 0.113, 0]}>
            <mesh
              name="Object_15"
              castShadow
              receiveShadow
              geometry={nodes.Object_15.geometry}
              material={materials.Scratched_Plastic}
              position={[-0.1, 0, 0]}
              rotation={[0, 0, -0.005]}
              scale={[0.353, 1, 1]}
            />
          </group>
          <group name="Cylinder001_9" position={[-0.317, 0.102, 0]}>
            <mesh
              name="Object_17"
              castShadow
              receiveShadow
              geometry={nodes.Object_17.geometry}
              material={materials.Rough_Black_Texture}
              position={[0, -0.078, 0]}
              scale={[1, 0.709, 1]}
            />
          </group>
          <group name="Cylinder_7" position={[-0.248, 0.115, 0]}>
            <mesh
              name="Object_13"
              castShadow
              receiveShadow
              geometry={nodes.Object_13.geometry}
              material={materials.Scratched_Plastic}
              rotation={[Math.PI / 2, 0, 0]}
            />
          </group>
          <group
            name="Desk_#2"
            position={[0.02, -0.941, -0.676]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={1.02}
          >
            <mesh
              name="Desk_#2_Desk_Oak_0"
              castShadow
              receiveShadow
              geometry={nodes["Desk_#2_Desk_Oak_0"].geometry}
              material={materials.Desk_Oak}
            />
            <mesh
              name="Desk_#2_Metal_Black_0"
              castShadow
              receiveShadow
              geometry={nodes["Desk_#2_Metal_Black_0"].geometry}
              material={materials.Metal_Black}
            />
          </group>
          <group
            name="Desk_Mat"
            position={[0.123, -0.212, -0.004]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={1.084}
          >
            <mesh
              name="Desk_Mat_Mat_Black_0"
              castShadow
              receiveShadow
              geometry={nodes.Desk_Mat_Mat_Black_0.geometry}
              material={materials.Mat_Black}
              position={[0, 0.075, 0]}
            />
          </group>
          <group
            name="iMac_Silver"
            position={[-0.198, -0.128, 0]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={1.049}
          />
          <group
            name="Keyboard"
            position={[0.128, -0.199, 0.093]}
            rotation={[-1.575, 0.042, 1.663]}
            scale={1.02}
          >
            <mesh
              name="Keyboard_iMac_Grey_Aluminium_0"
              castShadow
              receiveShadow
              geometry={nodes.Keyboard_iMac_Grey_Aluminium_0.geometry}
              material={materials.iMac_Grey_Aluminium}
              position={[0.007, 0.079, -0.003]}
            />
            <mesh
              name="Keyboard_iMac_White_Glass_0"
              castShadow
              receiveShadow
              geometry={nodes.Keyboard_iMac_White_Glass_0.geometry}
              material={materials.iMac_White_Glass}
              position={[0.007, 0.079, -0.003]}
            />
            <mesh
              name="Keyboard_Keyboard_Keys_0"
              castShadow
              receiveShadow
              geometry={nodes.Keyboard_Keyboard_Keys_0.geometry}
              material={materials.Keyboard_Keys}
              position={[0.007, 0.079, -0.003]}
            />
          </group>
          <group
            name="Large_Plant"
            position={[-0.15, -0.328, 1.026]}
            rotation={[-Math.PI / 2, 0, 1.053]}
            scale={0.652}
          >
            <mesh
              name="Large_Plant_Plant_Leaf_Shader_0"
              castShadow
              receiveShadow
              geometry={nodes.Large_Plant_Plant_Leaf_Shader_0.geometry}
              material={materials.Plant_Leaf_Shader}
            />
            <group name="Large_Plant_Pot_Shader_0">
              <mesh
                name="Large_Plant_Pot_Shader_0_1"
                castShadow
                receiveShadow
                geometry={nodes.Large_Plant_Pot_Shader_0_1.geometry}
                material={materials.Pot_Shader}
              />
              <mesh
                name="Large_Plant_Pot_Shader_0_2"
                castShadow
                receiveShadow
                geometry={nodes.Large_Plant_Pot_Shader_0_2.geometry}
                material={materials.Material}
              />
            </group>
          </group>
          <group
            name="Monitor_Riser"
            position={[-0.194, -0.213, -0.009]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={[0.451, 0.092, 0.014]}
          >
            <mesh
              name="Monitor_Riser_Desk_Black_0"
              castShadow
              receiveShadow
              geometry={nodes.Monitor_Riser_Desk_Black_0.geometry}
              material={materials.Desk_Black}
            />
            <mesh
              name="Monitor_Riser_Desk_Oak_0"
              castShadow
              receiveShadow
              geometry={nodes.Monitor_Riser_Desk_Oak_0.geometry}
              material={materials.Desk_Oak}
            />
          </group>
          <group name="Plane001_4" position={[-0.188, 0.17, 0]}>
            <mesh
              name="Object_7"
              castShadow
              receiveShadow
              geometry={nodes.Object_7.geometry}
              material={materials.Scratched_Plastic}
              rotation={[0, 0, Math.PI / 2]}
            />
          </group>
          <group name="Plane002_5" position={[-0.209, 0.17, 0]}>
            <mesh
              name="Object_9"
              castShadow
              receiveShadow
              geometry={nodes.Object_9.geometry}
              material={materials.Scratched_Plastic}
              rotation={[0, 0, Math.PI / 2]}
            />
          </group>
          <group name="Plane003_6" position={[-0.143, 0.234, 0]}>
            <mesh
              name="Object_11"
              castShadow
              receiveShadow
              geometry={nodes.Object_11.geometry}
              material={materials.Scratched_Plastic}
              rotation={[0, 0, Math.PI / 2]}
            />
          </group>
          <group name="Plane_2" position={[-0.11, 0, 0]}>
            <mesh
              name="Object_4"
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.Scratched_Plastic}
            />
            <mesh
              name="Object_5"
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials.Wallpaper}
            />
          </group>
          <group
            name="Small_Plant001"
            position={[-0.212, -0.126, -0.425]}
            rotation={[-Math.PI / 2, 0, 3.034]}
            scale={[0.021, 0.01, 0.026]}
          >
            <group name="Small_Plant_Plant_Shader_0001">
              <mesh
                name="Small_Plant_Plant_Shader_0001_1"
                castShadow
                receiveShadow
                geometry={nodes.Small_Plant_Plant_Shader_0001_1.geometry}
                material={materials.Plant_Shader}
              />
              <mesh
                name="Small_Plant_Plant_Shader_0001_2"
                castShadow
                receiveShadow
                geometry={nodes.Small_Plant_Plant_Shader_0001_2.geometry}
                material={materials.Leaf_Shader}
              />
              <mesh
                name="Small_Plant_Plant_Shader_0001_3"
                castShadow
                receiveShadow
                geometry={nodes.Small_Plant_Plant_Shader_0001_3.geometry}
                material={materials.Soil_Shader}
              />
            </group>
          </group>
          <group
            name="Studio_Speaker"
            position={[-0.157, 0.014, -0.559]}
            rotation={[-Math.PI / 2, 0, 1.339]}
            scale={[0.013, 0.013, 0.003]}
          >
            <mesh
              name="Studio_Speaker_Speaker_Black_0"
              castShadow
              receiveShadow
              geometry={nodes.Studio_Speaker_Speaker_Black_0.geometry}
              material={materials.Speaker_Black}
            />
            <mesh
              name="Studio_Speaker_Speaker_White_0"
              castShadow
              receiveShadow
              geometry={nodes.Studio_Speaker_Speaker_White_0.geometry}
              material={materials.Speaker_White}
            />
          </group>
          <group
            name="Studio_Speaker002"
            position={[-0.157, 0.017, 0.558]}
            rotation={[-Math.PI / 2, 0, 1.872]}
            scale={[0.013, 0.013, 0.003]}
          >
            <mesh
              name="Studio_Speaker002_Speaker_Black_0"
              castShadow
              receiveShadow
              geometry={nodes.Studio_Speaker002_Speaker_Black_0.geometry}
              material={materials.Speaker_Black}
            />
            <mesh
              name="Studio_Speaker002_Speaker_White_0"
              castShadow
              receiveShadow
              geometry={nodes.Studio_Speaker002_Speaker_White_0.geometry}
              material={materials.Speaker_White}
            />
          </group>
          <group
            name="Trackpad"
            position={[0.125, -0.203, -0.205]}
            rotation={[-Math.PI / 2, 0, 1.471]}
            scale={1.02}
          >
            <mesh
              name="Trackpad_iMac_Grey_Aluminium_0"
              castShadow
              receiveShadow
              geometry={nodes.Trackpad_iMac_Grey_Aluminium_0.geometry}
              material={materials.iMac_Grey_Aluminium}
            />
            <mesh
              name="Trackpad_iMac_White_Glass001_0"
              castShadow
              receiveShadow
              geometry={nodes.Trackpad_iMac_White_Glass001_0.geometry}
              material={materials["iMac_White_Glass.001"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Scene.glb");
