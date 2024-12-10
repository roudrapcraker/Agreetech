from flask import Flask, request, jsonify
import pickle
import numpy as np

# Load the saved model
with open('gradient_boost_model.pkl', 'rb') as file:
    gb_model = pickle.load(file)

# Crop mapping (Ensure this matches your crop labels)
crop_mapping = {
    0: 'apple',
    1: 'banana',
    2: 'blackgram',
    3: 'chickpea',
    4: 'coconut',
    5: 'coffee',
    6: 'cotton',
    7: 'grapes',
    8: 'jute',
    9: 'kidneybeans',
    10: 'lentil',
    11: 'maize',
    12: 'mango',
    13: 'mothbeans',
    14: 'mungbean',
    15: 'muskmelon',
    16: 'orange',
    17: 'papaya',
    18: 'pigeonpeas',
    19: 'pomegranate',
    20: 'rice',
    21: 'watermelon'
}

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    # Get data from request
    data = request.json['input']

    # Convert input to numpy array for prediction
    prediction = gb_model.predict([data])

    # Get the crop name
    crop_name = crop_mapping.get(prediction[0], 'Unknown')

    return jsonify({'crop': crop_name})

if __name__ == '__main__':
    app.run(debug=True)
