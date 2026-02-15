# CMPE 258 - Deep Learning - Assignment 1: AI Coding Tools

**Course:** CMPE 258 - Deep Learning  
**Semester:** Spring 2025  
**Assignment:** Assignment 1 - Exploring AI Coding Tools  
**Student:** Prachii26  
**Repository:** [DeepLearningCMPE258/AI Coding Tools](https://github.com/Prachii26/DeepLearningCMPE258/tree/main/AI%20Coding%20Tools)

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/Prachii26/DeepLearningCMPE258)
[![License](https://img.shields.io/badge/License-Educational-green)](LICENSE)

---

## 🚀 Quick Navigation

| Task | Project | Description | Status | Video Demo |
|------|---------|-------------|--------|------------|
| **A** | [Multimodal AI Demo](#a-multimodal-ai-with-gemini-pro) | Image/Video generation with Gemini Pro | ✅ Complete | [📹 Demo](https://youtu.be/G6181IqBKb8) |
| **B** | [NotesApp](#b-full-stack-web-application) | Full-stack web application | ✅ Complete | [📹 Demo](https://youtu.be/kw36wvQIkiI) |
| **C** | [StepsTracker](#c-cross-platform-mobile-app) | Flutter mobile app | ✅ Complete | [📹 Demo](https://youtu.be/KuEb77ZYFB4) |
| **D** | [MNIST Classifier](#d-mnist-neural-network-classifier) | Neural network with Keras | ✅ Complete | [📹 Demo](https://youtu.be/RwuZi9rcA84) |

---

## 📋 Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Video Demonstrations](#video-demonstrations)
- [Assignments](#assignments)
  - [Task A: Multimodal AI with Gemini Pro](#a-multimodal-ai-with-gemini-pro)
  - [Task B: Full Stack Web Application - NotesApp](#b-full-stack-web-application)
  - [Task C: Cross-Platform Mobile App - StepsTracker](#c-cross-platform-mobile-app)
  - [Task D: MNIST Neural Network Classifier](#d-mnist-neural-network-classifier)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Video Walkthroughs](#video-walkthroughs)
- [References and Resources](#references-and-resources)
- [Acknowledgments](#acknowledgments)

---

## 🎯 Overview

This repository contains comprehensive implementations for CMPE 258 Assignment 1, demonstrating proficiency with cutting-edge AI coding tools and frameworks. The assignment explores four major areas of modern AI development:

1. **Multimodal AI** - Leveraging Google Gemini Pro for image/video generation and analysis
2. **Agentic Web Development** - Building full-stack applications with AI assistance
3. **Mobile Development** - Creating cross-platform apps using Flutter
4. **Deep Learning** - Implementing neural networks for image classification

**Key Highlights:**
- ✅ All projects include complete source code
- ✅ Video walkthroughs for every task
- ✅ Deployed applications with live demos
- ✅ Comprehensive documentation
- ✅ Working implementations with outputs

---

## 📁 Project Structure

```
AI Coding Tools/
│
├── 📂 multimodal-latest-model-demo/     # Task A: Gemini Pro Multimodal AI
│   ├── multimodal_use_cases.ipynb      # Main Colab notebook
│   └── outputs/                         # Generated images, videos, results
│      ├── image_generations/
│      ├── video_outputs/
│      └── conversation_examples/
│   
├── 📂 NotesApp/                         # Task B: Full-Stack Web Application
│   ├── src/                             # Source code
│   │   ├── components/                  # React/UI components
│   │   ├── pages/                       # Application pages
│   │   ├── utils/                       # Utility functions
│   │   └── styles/                      # CSS/styling
│   ├── public/                          # Static assets
│   ├── firebase.json                    # Firebase configuration
│   ├── package.json                     # Node dependencies
│   ├── README.md                        # Setup and deployment guide
│   └── screenshots/                     # App screenshots
│
├── 📂 StepsTracker/                     # Task C: Flutter Mobile Application
│   ├── lib/                             # Dart source code
│   │   ├── main.dart                    # App entry point
│   │   ├── screens/                     # UI screens
│   │   ├── widgets/                     # Reusable widgets
│   │   ├── models/                      # Data models
│   │   └── services/                    # Business logic
│   ├── android/                         # Android configuration
│   ├── ios/                             # iOS configuration
│   ├── pubspec.yaml                     # Flutter dependencies
│   ├── README.md                        # App documentation
│   └── screenshots/                     # App screenshots
│
├── 📂 mnist-keras-classifier/           # Task D: MNIST Neural Network
│   └── mnist_classifier.py              # Main training script
├── 📄 README.md                         # This file - Main documentation
└── 📄 VideoURL.txt                      # All video demonstration links
```

---

## 🎥 Video Demonstrations

All video demonstrations are hosted and linked in **`VideoURL.txt`** at the root of this repository.

**What's Included:**
- Complete walkthrough of each project
- Code explanations and implementation details
- Live demonstrations of working applications
- Key features and functionality showcases
- Deployment process (where applicable)

**Access:** Open [`VideoURL.txt`](VideoURL.txt) to view all video links.

---

## 📚 Assignments

### A. Multimodal AI with Gemini Pro

**📂 Directory:** `/multimodal-latest-model-demo/`

**Objective:**  
Explore and implement multimodal AI capabilities using Google Gemini Pro API, including image generation, video processing, image analysis, and conversational AI.

#### Features Implemented

🖼️ **Image Generation**
- Text-to-image generation with creative prompts
- Style variations and artistic interpretations
- High-quality output images

🎥 **Video Generation** 
- Text-to-video capabilities (if available via API)
- Video analysis and processing

🔍 **Image Analysis**
- Upload images and extract detailed information
- Object detection and scene understanding
- Visual question answering

💬 **Text-to-Text Conversations**
- Advanced conversational AI using latest models
- Integration with Janus Pro/DeepSeek R1 capabilities
- Multi-turn dialogue examples

#### Technologies Used
```
- Google Gemini Pro API
- Google Colab (Jupyter Notebook)
- Python 3.10+
- PIL/Pillow for image processing
- Requests for API calls
- Matplotlib for visualizations
```

#### Key Outputs
1. Generated images from creative prompts
2. Image analysis results with detailed descriptions
3. Conversation examples demonstrating model capabilities
4. Comparative analysis of different model configurations

#### How to Run
```bash
# Open the Colab notebook
# Click: multimodal_use_cases.ipynb

# Set your API key:
export GEMINI_API_KEY='your-api-key-here'
```

#### Sample Prompts Used
- "Create a futuristic cityscape with flying cars at sunset"
- "Generate an image of a cozy coffee shop in cyberpunk style"
- "Analyze this image and describe all objects you see"

**📹 Video Walkthrough:** See [📹Demo Video](https://youtu.be/G6181IqBKb8) for complete demonstration

---

### B. Full Stack Web Application

**📂 Directory:** `/NotesApp/`

**Project Name:** NotesApp - Modern Note-Taking Application

**Objective:**  
Build a complete full-stack web application using Google Antigravity or other agentic AI coding tools, demonstrating modern web development practices.

#### Features

✏️ **Core Functionality**
- Create, Read, Update, Delete (CRUD) notes
- Rich text formatting support
- Markdown support
- Tags and categories

🎨 **User Interface**
- Clean, modern design
- Responsive layout (mobile, tablet, desktop)
- Dark/light mode toggle
- Intuitive navigation

🔍 **Advanced Features**
- Search functionality across all notes
- Filter by tags/categories
- Sort by date, title, or custom order
- Export notes (PDF, Markdown)

💾 **Data Management**
- Real-time data synchronization
- Cloud storage integration
- Auto-save functionality
- Data persistence
```

#### Setup Instructions

```bash
# Clone the repository
cd NotesApp

# Install dependencies
npm install

# Run development server
npm run dev

```

**📹 Video Demo:** See [📹Demo Video](https://youtu.be/kw36wvQIkiI) for full application walkthrough

---

### C. Cross-Platform Mobile App

**📂 Directory:** `/StepsTracker/`

**Project Name:** StepsTracker - Fitness Tracking Mobile Application

**Objective:**  
Develop a cross-platform mobile application using Flutter framework with assistance from AI coding tools, demonstrating modern mobile development practices.

#### Features

📊 **Activity Tracking**
- Daily step counting


🎯 **Goal Management**
- Set daily step goals
- Goal progress tracking

💪 **User Experience**
- Beautiful Material Design UI
- Smooth animations
- Intuitive navigation

#### Tech Stack

```dart
Flutter SDK: 3.16+
Dart: 3.2+

Key Packages:
- pedometer: ^4.0.0              // Step counting
- fl_chart: ^0.65.0              // Charts and graphs
- provider: ^6.1.0               // State management
- sqflite: ^2.3.0                // Local database
- shared_preferences: ^2.2.0     // Settings storage
```

#### Setup & Installation

**Prerequisites:**
```bash
# Install Flutter SDK
# https://docs.flutter.dev/get-started/install

# Verify installation
flutter doctor
```

**Running the App:**
```bash
# Navigate to project directory
cd StepsTracker

# Install dependencies
flutter pub get

# Run on connected device/emulator
flutter run

# Build APK for Android
flutter build apk --release

# Build for iOS (requires macOS)
flutter build ios --release
```

**📹 Video Walkthrough:** See [📹Demo Video](https://youtu.be/KuEb77ZYFB4) for complete app demonstration

---

### D. MNIST Neural Network Classifier

**📂 Directory:** `/mnist-keras-classifier/`
# MNIST Digit Classifier (TensorFlow Keras)

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

---

## 🛠️ Technologies Used

### Programming Languages
| Language | Usage |
|----------|-------|
| Python | ML/AI, Backend scripting, Data processing |
| JavaScript/TypeScript | Web frontend development |
| Dart | Flutter mobile development |
| HTML/CSS | Web markup and styling |

### Frameworks & Libraries

**AI/ML:**
- TensorFlow 2.15+
- Keras
- NumPy, Pandas
- Matplotlib, Seaborn
- Scikit-learn

**Web Development:**
- React.js 18+ / Vue.js 3+
- Tailwind CSS / Bootstrap
- Axios

**Mobile Development:**
- Flutter 3.16+
- Material Design
- Provider (State Management)
- SQLite (Local Storage)


### AI Coding Tools
| Tool | Purpose |
|------|---------|
| Google Gemini Pro | Multimodal AI, Image/Video generation |
| Google Antigravity | Full-stack web development |
| Claude Code | Neural network design, Code optimization |
| GitHub Copilot | Code completion, Documentation |
| Janus Pro | Advanced AI conversations |
| DeepSeek R1 | Text generation, Analysis |

---

## 🚀 Getting Started

### Prerequisites

**System Requirements:**
```
- Python 3.8 or higher
- Node.js 16+ and npm
- Flutter SDK 3.16+
- Git
- 8GB RAM minimum
- 20GB free disk space
```

**API Keys Required:**
```
- Google Gemini Pro API key
```

## 🎬 Video Walkthroughs

All video demonstrations are available in **[`VideoURL.txt`](VideoURL.txt)**

### What Each Video Covers:

**Task A - Multimodal AI Demo:**
- Setting up Gemini Pro API
- Running image generation examples
- Image analysis demonstrations
- Conversation AI examples
- Output review and discussion

**Task B - NotesApp:**
- Application architecture overview
- Feature demonstrations
- Code walkthrough
- Firebase integration
- Deployment process
- Live demo

**Task C - StepsTracker:**
- Flutter project setup
- App UI/UX walkthrough
- Features demonstration
- Running on emulator/device
- Build process for Android/iOS

**Task D - MNIST Classifier:**
- Code structure explanation
- Model architecture breakdown
- Training process
- Metrics and evaluation
- Visualization review
- Results discussion

**Total Duration:** ~45-60 minutes across all videos

---

## 📖 References and Resources

### Official Documentation
- [Google Gemini Pro API Documentation](https://ai.google.dev/tutorials/python_quickstart)
- [Google Antigravity Platform](https://antigravity.google/)
- [Flutter Official Docs](https://flutter.dev/docs)
- [TensorFlow/Keras Documentation](https://www.tensorflow.org/guide/keras)
- [Firebase Documentation](https://firebase.google.com/docs)

### Tutorials & Guides

**Multimodal AI:**
- [Gemini Multimodal Capabilities](https://developers.googleblog.com/en/7-examples-of-geminis-multimodal-capabilities-in-action/)
- [Google Colab Notebooks](https://colab.google/notebooks/)
- [DataCamp: Janus Pro Guide](https://www.datacamp.com/blog/janus-pro)
- [DataCamp: DeepSeek R1](https://www.datacamp.com/blog/deepseek-r1)

**Web Development:**
- [Antigravity Full Stack Tutorial](https://www.youtube.com/watch?v=ebefCYTOAlo)
- [Antigravity Use Cases](https://antigravity.google/use-cases/fullstack)
- [Building with Antigravity - Medium](https://medium.com/@phoenixarjun007/weightless-code-my-7-day-experiment-with-google-antigravity-373a82af6639)
- [Pixiee Todo App Example](https://github.com/mihikajadhav02/pixiee)

**Mobile Development:**
- [Flutter AI App with Antigravity](https://www.freecodecamp.org/news/build-an-ai-powered-flutter-app-with-google-antigravity/)
- [Flutter Tutorial - Official](https://docs.flutter.dev/get-started/codelab)

**Deep Learning:**
- [MNIST Dataset](http://yann.lecun.com/exdb/mnist/)
- [Keras Sequential Model Guide](https://keras.io/guides/sequential_model/)
- [CNN for Image Classification](https://www.tensorflow.org/tutorials/images/cnn)

### Additional Resources
- [wshobson GitHub Skills Repository](https://github.com/wshobson)
- [FreeCodeCamp: AI Overview](https://www.freecodecamp.org/news/how-to-not-be-overwhelmed-by-ai/)
- [Firebase Free Tier Hosting](https://firebase.google.com/pricing)

### Research Papers
- "Attention Is All You Need" - Transformer Architecture
- "Deep Residual Learning for Image Recognition" - ResNet
- "ImageNet Classification with Deep CNNs" - AlexNet

---

## 📋 Assignment Requirements Checklist

- ✅ All artifacts include video walkthroughs
- ✅ All code checked into GitHub
- ✅ Proper README.md documentation
- ✅ **Task A:** Multimodal AI with Gemini Pro - Complete with outputs
- ✅ **Task B:** Full-stack web app deployed on Firebase
- ✅ **Task C:** Cross-platform Flutter mobile app with APK
- ✅ **Task D:** MNIST classifier with complete metrics and visualizations
- ✅ Video demonstrations uploaded and linked
- ✅ All outputs and artifacts documented
- ✅ Each project has individual README
- ✅ Code is well-commented and organized

---

## 👨‍💻 Development Notes

### Challenges Faced & Solutions

**Task A - Gemini Pro:**
- **Challenge:** API rate limiting during testing
- **Solution:** Implemented exponential backoff and request queuing

**Task B - NotesApp:**
- **Challenge:** Firebase authentication setup
- **Solution:** Used Firebase console for proper configuration

**Task C - StepsTracker:**
- **Challenge:** Permission handling across Android/iOS
- **Solution:** Platform-specific permission requests with proper error handling

**Task D - MNIST:**
- **Challenge:** Overfitting on training data
- **Solution:** Added dropout layers, batch normalization, and data augmentation
---

## 🙏 Acknowledgments

**AI Tools & Platforms:**
- Google AI Team - Gemini Pro, Antigravity
- Anthropic - Claude Code
- GitHub - Copilot
- wshobson - Claude Code Skills Package

**Open Source Community:**
- TensorFlow/Keras contributors
- Flutter team
- Firebase team
- React community

---

## 📄 License

This project is created for educational purposes as part of CMPE 258 coursework at San Jose State University.

**Academic Integrity:**
This work represents original implementation and learning. While AI tools were used as assistants, all code was reviewed, understood, and customized for the specific requirements.

---

## 📞 Contact & Support

**Student:** Prachii26  
**Course:** CMPE 258 - Deep Learning  
**Institution:** San Jose State University  
**Semester:** Spring 2025

**Repository:** [github.com/Prachii26/DeepLearningCMPE258](https://github.com/Prachii26/DeepLearningCMPE258)
---


<div align="center">

### ⭐ If you find this repository helpful, please consider giving it a star!

**Repository:** https://github.com/Prachii26/DeepLearningCMPE258

Made with 💻 and ☕ for CMPE 258 - Spring 2026

</div>
