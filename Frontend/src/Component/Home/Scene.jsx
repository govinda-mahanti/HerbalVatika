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
        child.castShadow = false;
        child.receiveShadow = true;
      }
    });
  });
  const ratioScale = Math.min(2, Math.max(50, window.innerWidth / 1920));

  return (
    <>
      <color attach="background" args={["#192116"]} /> {/* Background color change */}
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
        <primitive object={scene} scale={ratioScale * 0.9} /> {/* Adjust scale */}

        <ambientLight intensity={0.2} color="#ffffff" /> {/* Ambient light to illuminate white objects */}
        
        {/* Moon 1 (Primary) */}
        <directionalLight
          position={[10, 20, 10]} // Adjust position
          intensity={0.4} // Main moonlight effect
          color="#d1e7ff" // Moonlight color
          castShadow
        />
        
        {/* Moon 2 (Secondary) */}
        <directionalLight
          position={[-15, 30, -10]} // Different position for the second moon
          intensity={0.2} // Softer light for the second moon
          color="#a9c4ff" // Softer bluish color
        />
        
        <AccumulativeShadows
          frames={100}
          alphaTest={0.9}
          scale={30}
          position={[0, -0.005, 0]}
          color="pink"
          opacity={0.8}
        >
          <directionalLight
            position={[5, 5, 5]}
            intensity={0.3}
            color="#ffffff"
            castShadow
          />
        </AccumulativeShadows>

        {/* Adjusting the environment and sphere to the new lighting */}
        <Environment>
          <Sphere scale={15}>
            <meshBasicMaterial color={mainColor} side={THREE.BackSide} />
          </Sphere>
        </Environment>
      </group>
    </>
  );
};

useGLTF.preload("/models/SIHGarden1.glb");
