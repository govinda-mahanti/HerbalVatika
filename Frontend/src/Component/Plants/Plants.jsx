import React from "react";
import "./Plants.css";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";
const Plants = () => {
  return (
    <div className="plants">
      <h2>Aloe Vera</h2>
      <div className="details">
        <div className="plantsImage">
          <img
            src="https://files.nccih.nih.gov/aloe-vera-steven-foster-square.jpg"
            alt=""
          />
        </div>
        <div className="plantInfo">
          <p>
            <span>Scientific Name: </span>Aloe barbadensis miller
          </p>
          <p>
            <span>Habitat: </span>Tropical & Subtropical
          </p>
          <p>
            <span>Indian Regions Where Found: </span>Rajasthan, Gujarat
          </p>
          <p>
            <span>Part Used: </span>Leaves, Gel
          </p>
        {/* </div> */}
      {/* </div> */}
      {/* <div className="pMoreInfo"> */}
        <p>
          <span>General Description: </span>Aloe Vera is a succulent plant
          species of the genus Aloe, known for its medicinal and soothing
          properties.
        </p>
        <p>
          <span>Uses: </span>Supports digestive health, soothes the gut
        </p>
        <p>
          <span>Precautions: </span>Avoid during pregnancy
        </p>
        <p>
          <span>Mode of Propagation: </span>Offsets
        </p>
        <p>
          <span>Ayurvedic Formulations: </span>Kumari Asava, Aloe Vera Gel
        </p>
      </div>
      </div>
      <div className="plantModela">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 30 }}>
                <color attach="background" args={["#232323"]} />
                <Experience />
              </Canvas>
      </div>

    </div>
  );
};

export default Plants;
