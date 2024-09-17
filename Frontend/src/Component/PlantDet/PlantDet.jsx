import React, { useState } from "react";
import axios from "axios";
import "./PlantDet.css";
const PlantDet = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onFileUpload = async () => {
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setResult(response.data);
      setError(null);
    } catch (error) {
      setError("Error uploading file");
      setResult(null);
    }
  };

  return (
    <div className="plantdet">
      <h1>AI Plant Identification</h1>
      <div className="plndimgUpload">
      <h4>Upload an Image for Classification</h4>

      <div>
      <input type="file" onChange={onFileChange} />
      <button onClick={onFileUpload}>Upload</button>
      </div>
      {result && (
        <div className="plndImage">
          <div>
            <h3>Predicted Plant Name: {result.plant_name}</h3>
            <img src={result.uploaded_image} alt="Uploaded" width="400px" />
          </div>
          <div>
            <h3>Annotated Image (with Bounding Boxes):</h3>
            <img src={result.annotated_image} alt="Annotated" width="400px" />
          </div>
        </div>
      )}
      {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default PlantDet;
