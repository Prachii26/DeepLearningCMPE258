# CMPE 258 — Basic Neural Networks (NumPy / PyTorch / TensorFlow-Keras)

This repository contains my submission for the assignment **“Write basic neural network using numpy, keras, pytorch”**.  
It includes **five Google Colab notebooks (A–E)** implementing a **3-layer deep neural network for non-linear regression** using multiple frameworks and abstraction levels, along with **mandatory video walkthroughs**.

---

## ✅ Mandatory Requirement: Video Walkthroughs (MOST IMPORTANT)

All walkthrough videos are included in this repo:

- **Video links:** see **`VideoURL.txt`** (root directory)

Each video shows:
- the notebook checked into GitHub
- a section-by-section code walkthrough
- executed results (training loss/epochs and final output)

---

## Repository Structure

**Root**
- `README.md` — this documentation  
- `VideoURL.txt` — video walkthrough links (mandatory)
- `.gitignore`

**Notebooks**
- `Colabs/`
  - `Colab (A) Deep Learning.ipynb`
  - `Colab (B) Deep Learning.ipynb`
  - `Colab (C) Deep Learning.ipynb`
  - `Colab (D) Deep Learning.ipynb`
  - `Colab (E) Deep Learning.ipynb`

---

## Assignment Tasks Covered (A–E)

### Colab (A) — NumPy-Only From Scratch (Manual Backprop)
**File:** `Colabs/Colab (A) Deep Learning.ipynb`

**What this notebook contains**
- 3-layer deep neural network for **non-linear regression**
- **Forward pass + manual backpropagation** using **chain rule**
- Uses **non-linear activation functions** and tuned hidden layer sizes
- Generates **synthetic data using a 3-variable non-linear equation**
- Trains for multiple epochs and shows:
  - loss vs epochs
  - final predictions/output
- Includes visualization of the synthetic function using dimensionality reduction + a 4D-style plot

**Special requirement**
- Uses **TensorFlow `einsum`** (instead of standard matrix multiply) where applicable.

---

### Colab (B) — PyTorch From Scratch (No Built-in Layers)
**File:** `Colabs/Colab (B) Deep Learning.ipynb`

**What this notebook contains**
- 3-layer deep neural network for **non-linear regression**
- Implemented in PyTorch **without using built-in layer modules** (e.g., no `nn.Linear`)
- Uses explicit parameters (weights/bias) and manual forward computation
- Computes loss and gradients at a low level (no high-level layer abstraction)
- Shows training loss/epochs and final output

---

### Colab (C) — PyTorch Class-Based Using Built-in Modules
**File:** `Colabs/Colab (C) Deep Learning.ipynb`

**What this notebook contains**
- 3-layer deep neural network using:
  - `torch.nn.Module`
  - built-in layers (e.g., `nn.Linear`)
  - built-in optimizers and autograd backprop
- Clear class design for model definition
- Training loop with loss vs epochs and final predictions/output

---

### Colab (D) — PyTorch Lightning Version
**File:** `Colabs/Colab (D) Deep Learning.ipynb`

**What this notebook contains**
- Same non-linear regression model implemented using **PyTorch Lightning**
- Organized training with:
  - `LightningModule`
  - `training_step`, `configure_optimizers`, etc.
- Shows training progress and final output

---

### Colab (E) — TensorFlow / Keras Variants (Low → High Level)
**File:** `Colabs/Colab (E) Deep Learning.ipynb`

**What this notebook contains**
Builds the same model using TensorFlow across variants:

1. **TensorFlow low-level (from scratch)**  
   - manual forward computation and training loop (no high-level API)

2. **TensorFlow with built-in layers**  
   - uses `tf.keras.layers` with a training loop or compiled model

3. **Functional API**  
   - model defined using `tf.keras.Model(inputs, outputs)`

4. **High-level API**  
   - compiled Keras model with `.fit()` for training

Each variant demonstrates training loss and final output.

---

## How to Run

1. Open any notebook inside the `Colabs/` folder.
2. Upload to Google Colab (or open in Colab if you already have access).
3. Run all cells top-to-bottom to reproduce:
   - data generation
   - model training
   - loss/epoch curves
   - final predictions/output

---

## Notes for Grading

- All notebooks are separated by part **A–E**.
- Required **video walkthrough links** are included in `VideoURL.txt`.
- Each notebook includes training outputs (loss vs epochs) and final results.

---

## Author

**Prachi**

