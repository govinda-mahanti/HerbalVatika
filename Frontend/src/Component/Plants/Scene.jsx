import {
  AccumulativeShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Sphere,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";
import React, { useEffect } from "react";
import { DEG2RAD } from "three/src/math/MathUtils";

export const Scene = ({ mainColor, path, ...props }) => {
  const { nodes, materials, scene } = useGLTF(path);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true; // Enable shadows for realism
        child.receiveShadow = true;
        // Ensure the plant material remains green (overriding if necessary)
        if (child.material) {
          child.material.color = new THREE.Color("#228B22"); // Plant green color
        }
      }
    });
  });

  const ratioScale = Math.min(2, Math.max(50, window.innerWidth / 1920));

  return (
    <>
      {/* Darker background for night effect */}
      <color attach="background" args={["#0a0a0a"]} />
      <group {...props} dispose={null}>
        <PerspectiveCamera makeDefault position={[3, 3, 18]} near={0.5} />
        <OrbitControls
          autoRotate
          enablePan={false}
          maxPolarAngle={DEG2RAD * 75}
          minDistance={6}
          maxDistance={10}
          autoRotateSpeed={0.5}
        />
        <primitive object={scene} scale={ratioScale * 0.9} />

        {/* Ambient light for soft overall lighting */}
        <ambientLight intensity={0.1} color="white" />

        <AccumulativeShadows
          frames={100}
          alphaTest={0.9}
          scale={30}
          position={[0, -0.005, 0]}
          color="pink"
          opacity={0.8}
        >
          {/* First moonlight effect for shadows */}
          <directionalLight
            position={[10, 15, 5]}  // Higher position for soft moonlight shadows
            intensity={0.5}
            color="#b0c4de"
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-bias={-0.0001}
          />
          
          {/* Second moonlight for texture visibility */}
          <directionalLight
            position={[-10, 10, 5]}  // Different angle to enhance texture
            intensity={0.4}
            color="#b0c4de"
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-bias={-0.0001}
          />
        </AccumulativeShadows>

        {/* Environment for subtle HDR reflections */}
        <Environment file={"./spree_bank_1k.hdr"} blur={0.8} background>
          <Sphere scale={15}>
            <meshBasicMaterial color={mainColor} side={THREE.BackSide} />
          </Sphere>
        </Environment>
      </group>
    </>
  );
};

useGLTF.preload("/models/alovera.glb");
