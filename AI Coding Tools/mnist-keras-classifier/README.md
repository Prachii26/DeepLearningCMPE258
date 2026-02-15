# MNIST Neural Network Classifier

**📂 Directory:** `/mnist-keras-classifier/`
## MNIST Digit Classifier (TensorFlow Keras)

A high-performance convolutional neural network (CNN) for classifying hand-written digits from the MNIST dataset. This project includes professional-grade monitoring, callbacks, and visualization metrics.

## 🚀 Features

- **CNN Architecture**: Optimized for image classification with Conv2D, MaxPooling, and Dropout layers.
- **Advanced Callbacks**:
  - `EarlyStopping`: Halts training when validation loss stops improving (restores best weights).
  - `ModelCheckpoint`: Saves the best model based on validation accuracy.
  - `ReduceLROnPlateau`: Dynamically adjusts learning rate to refine training.
- **Rich Analytics**:
  - Accuracy and Loss history plots.
  - Confusion Matrix heatmap for error analysis.
  - Per-digit accuracy summary table.
  - 5x5 grid visualization of sample predictions.

## 🛠️ Environment Setup

Python 3.11 and all required dependencies have been pre-installed for this project.

### Core Dependencies
- `tensorflow`
- `numpy`
- `matplotlib`
- `seaborn`
- `scikit-learn`
- `pandas`
- `notebook` (Jupyter)

## 📖 How to Run

1. **Open Terminal**: Navigate to the project directory.
2. **Start Jupyter Server**:
   ```powershell
   py -m notebook mnist_classifier.ipynb
   ```
3. **Run All Cells**: Execute the notebook from start to finish to train the model and view metrics.

## 📹 Video Guide
For a narrated walkthrough of the code and architecture, refer to:
[📹Demo Video](https://youtu.be/RwuZi9rcA84)

## 📊 Model Metadata
- **Dataset**: MNIST (60,000 training images, 10,000 test images)
- **Input Shape**: 28x28x1
- **Optimizer**: Adam
- **Loss Function**: Categorical Crossentropy

**📹 Code Walkthrough:** See [📹Demo Video](https://youtu.be/RwuZi9rcA84) for detailed code explanation and training process
