from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
from flask_cors import CORS  # Import CORS
import os
from ultralytics import YOLO
import cv2

app = Flask(__name__)

# Enable CORS for the specified origins
CORS(app, origins=["http://localhost:3000"])  # Allow requests only from this origin

UPLOAD_FOLDER = 'static/uploads/'
ANNOTATED_FOLDER = 'static/annotated/'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['ANNOTATED_FOLDER'] = ANNOTATED_FOLDER

model = YOLO('model/best.pt')

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    filename = secure_filename(file.filename)
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(file_path)

    # Perform prediction using YOLO
    results = model(file_path)

    # Save annotated image
    annotated_image_path = os.path.join(app.config['ANNOTATED_FOLDER'], filename)
    annotated_img = results[0].plot()
    cv2.imwrite(annotated_image_path, annotated_img)

    # Extract prediction
    predictions = results[0].boxes
    if len(predictions) > 0:
        predicted_class_id = int(predictions.cls[0].item())
        predicted_class_name = results[0].names[predicted_class_id]

        uploaded_image_url = request.host_url + "static/uploads/" + filename
        annotated_image_url = request.host_url + "static/annotated/" + filename

        return jsonify({
    "class_name": predicted_class_name,
    "uploaded_image": uploaded_image_url,
    "annotated_image": annotated_image_url,
    "plant_name": predicted_class_name
}), 200
    else:
        return jsonify({"error": "No objects detected"}), 200

if __name__ == '__main__':
    app.run(debug=True)
