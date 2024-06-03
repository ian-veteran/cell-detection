import tensorflowjs as tfjs
import tensorflow as tf

# Define the paths
model_path = '/home/monster/Desktop/cell-detection-module/model.h5'
output_path = '/home/monster/Desktop/cell-detection-module/tfjs_models'

# Load the Keras model
model = tf.keras.models.load_model(model_path)

# Convert and save the model to TensorFlow.js format
tfjs.converters.save_keras_model(model, output_path)

print(f'Model converted and saved to {output_path}')
