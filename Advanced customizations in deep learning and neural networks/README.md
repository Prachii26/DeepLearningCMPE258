# 🧠 Advanced Customizations in Deep Learning and Neural Networks

**Course**: CMPE 258 — Deep Learning  
**Student**: Prachi Gupta  
**Frameworks**: TensorFlow 2.19.0 (Keras) + PyTorch 2.10.0  
**Dataset**: Fashion-MNIST (28×28 grayscale, 10 classes)  
**Platform**: Google Colab (CPU)

---

## 📁 Repository Structure

```
Advanced_customizations_in_deep_learning_and_neural_networks/
│
├── Colabs/
│   ├── Advanced_customizations_in_DL_and_NN_Part1.ipynb       ← Part 1
│   ├── Advanced_customizations_in_DL_and_NN_Part2.ipynb       ← Part 2 (main)
│   └── Advanced_customizations_in_DL_and_NN_Part2(WANDB).ipynb ← Part 2 W&B
│
├── Videos/
│   └── VideoURL.txt                                            ← YouTube recording URL
│
└── README.md
```

---

## 🎬 Video Walkthrough

The full code walkthrough video is available on YouTube.  
📺 See [`Videos/VideoURL.txt`](Videos/VideoURL.txt) for the link or click below:

[`Advanced_customizations_in_DL_and_NN_Part1`](https://youtu.be/RSstZTX3cP8)

[`Advanced_customizations_in_DL_and_NN_Part2`](https://youtu.be/iGIrp6olgPs)

The video covers:
- Line-by-line explanation of all notebook cells
- Live demonstration of outputs (plots, metrics, TensorBoard, W&B dashboard)
- Explanation of key concepts for each section

---

## 📓 Part 1 — Data Augmentation & Generalization Techniques

**File**: `Colabs/Advanced_customizations_in_DL_and_NN_Part1.ipynb`

Covers all augmentation and regularization techniques with A/B tests in both TensorFlow and PyTorch:

| Section | Topic |
|---------|-------|
| A | L1 & L2 Regularization |
| B | Dropout |
| C | Early Stopping |
| D | Monte Carlo Dropout |
| E | Weight Initializations (Zeros, Normal, Xavier, He) |
| F | Batch Normalization |
| G | Custom Dropout & Custom Regularization |
| H | Callbacks & TensorBoard |
| I | Keras Tuner (Hyperparameter Search) |
| J | KerasCV Data Augmentation |
| K | Domain-Specific Augmentation — Image, Video, Text (nlpaug), Time Series, Tabular, Speech, Document |

**Key Results:**
- Early stopping: best val acc **0.887** with fewer epochs
- He initialization: best test acc **0.878** (correct choice for ReLU)
- Keras Tuner: found optimal units=192, dropout=0.2 → **0.873** test acc
- AugLy + nlpaug used for multi-domain augmentation (image, text, speech, tabular, video, document)

---

## 📓 Part 2 — Advanced Keras & PyTorch Constructs

**File**: `Colabs/Advanced_customizations_in_DL_and_NN_Part2.ipynb`

Demonstrates advanced deep learning constructs built from scratch in both TensorFlow and PyTorch:

| Cell | Section | Technique | TF Val Acc | PT Val Acc |
|------|---------|-----------|-----------|-----------|
| 2–3  | i   | Custom LR Scheduler (OneCycle) | 0.840 | ~0.80 |
| 4–5  | ii  | Custom MC Alpha Dropout | ✅ Class 4 | ✅ Class 4 |
| 6–7  | iii | Custom MaxNorm Normalization | 0.813 | 0.786 |
| 8–9  | iv  | TensorBoard Integration | 0.800+ | 0.799 |
| 10–11| v   | Custom Huber Loss Function | MAE=0.105 | ~0.000 |
| 12–13| vi  | Custom Activation + Initializer + Regularizer + Constraint | 0.761 | 0.709 |
| 14–15| vii | Custom Huber Metric | 1.13→0.00 | 0.001→0.00 |
| 16–17| viii| Custom Layers (MyDense, GaussianNoise, LayerNorm, Exponential) | 0.827 | 0.812 |
| 18–19| ix  | Custom Residual Model (ResidualBlock + ResidualRegressor) | — | 0.803 |
| 20–21| x   | Custom Momentum Optimizer | 0.815 | 0.816 |
| 22–23| xi  | Custom Training Loop (GradientTape + grad clipping) | 0.828 | 0.812 |

**Key Highlights:**
- OneCycle LR achieved highest TF val accuracy: **0.840**
- Custom Momentum outperformed plain SGD by **+8.4%** (0.815 vs 0.731)
- Residual model loss dropped smoothly **0.707 → 0.342** across 5 epochs
- All custom components verified correct (weight norms, constraints, uncertainty estimates)

---

## 📓 Part 2 (W&B) — Weights & Biases Experiment Tracking

**File**: `Colabs/Advanced_customizations_in_DL_and_NN_Part2(WANDB).ipynb`

Demonstrates experiment tracking using [Weights & Biases](https://wandb.ai):

| Cell | Framework | Project Name | Metrics Logged |
|------|-----------|-------------|----------------|
| TF   | TensorFlow | `fashion-mnist-demo` | train_loss, train_acc, val_acc |
| PT   | PyTorch | `fashion-mnist-pytorch` | train_loss, val_acc |

- Live dashboard at: `https://wandb.ai/prachigupta2610-student`
- Config tracking: lr, epochs, batch_size stored per run
- Each run gets unique ID (e.g. `summer-terrain-3`) for easy comparison
- `wandb.log()` called per epoch; `wandb.finish()` closes each run cleanly

---

## ▶️ How to Run

### Option 1 — Google Colab (Recommended)
1. Open any `.ipynb` file in [Google Colab](https://colab.research.google.com)
2. Click **Runtime → Run All**
3. All dependencies install automatically via `!pip install` in Cell 0

### Option 2 — Run Sequentially
1. Run **Cell 0** — installs libraries (`wandb`, `keras-tuner`, etc.)
2. Run **Cell 1** — loads and preprocesses Fashion-MNIST
3. Run remaining cells **top to bottom** — each section is self-contained

### View TensorBoard (Part 2, Cells 8–9)
```python
%load_ext tensorboard
%tensorboard --logdir tb_logs      # TensorFlow logs
%tensorboard --logdir tb_logs_pt   # PyTorch logs
```

### W&B Setup (Part 2 WANDB notebook)
```python
import wandb
wandb.login(key="YOUR_API_KEY")    # get free key at wandb.ai
```

---

## 📦 Dependencies

```
tensorflow >= 2.19.0
torch >= 2.10.0
wandb >= 0.25.0
keras-tuner
keras-cv
augly
nlpaug
scikit-learn
matplotlib
numpy
```

All installed automatically in Colab via Cell 0.

---

## 📊 Overall Results Summary

| Technique | Best Val Accuracy | Framework |
|-----------|------------------|-----------|
| OneCycle LR Scheduler | **0.840** | TensorFlow |
| Custom Training Loop | **0.828** | TensorFlow |
| Custom Layers (MyDense+LayerNorm) | **0.827** | TensorFlow |
| Custom Momentum Optimizer | **0.815** | TensorFlow |
| MaxNorm Normalization | **0.813** | TensorFlow |
| Residual Model | **0.803** | PyTorch |
| Custom Momentum Optimizer | **0.816** | PyTorch |
| Custom Training Loop | **0.812** | PyTorch |

---

## 📚 References

- [Hands-On ML3 — Chapter 10 (Keras)](https://github.com/ageron/handson-ml3/blob/main/10_neural_nets_with_keras.ipynb)
- [Hands-On ML3 — Chapter 11 (Training DNNs)](https://github.com/ageron/handson-ml3/blob/main/11_training_deep_neural_networks.ipynb)
- [Hands-On ML2 — Chapter 12 (Custom Models)](https://github.com/ageron/handson-ml2/blob/master/12_custom_models_and_training_with_tensorflow.ipynb)
- [Hands-On ML PyTorch](https://github.com/ageron/handson-mlp)
- [TensorFlow Docs](https://tensorflow.org)
- [KerasCV Docs](https://keras.io/keras_cv)
- [AugLy (Facebook)](https://github.com/facebookresearch/AugLy)
- [nlpaug](https://github.com/makcedward/nlpaug)
- [Weights & Biases](https://wandb.ai)
