import React from 'react'
import { Experience } from "./Experience";
import { Canvas } from "@react-three/fiber";
import './Garden.css'

function Garden() {
  return (
    <div className="tModel">
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 30 }}>
          <color attach="background" args={["#232323"]} />
          <Experience />
        </Canvas>
      </div>
  )
}

export default Garden