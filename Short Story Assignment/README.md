# 🧠 Deep Think with Confidence (DeepConf)

**CMPE 258 — Deep Learning | Short Story Assignment | Spring 2026**  
**San Jose State University**        
**Medium Article:** [Link to Medium Article](https://medium.com/@prachigupta2610/when-your-llm-already-knows-which-answers-to-trust-its-just-not-telling-you-394990015aa5)

![Course](https://img.shields.io/badge/Course-CMPE%20258%20Deep%20Learning-4A6FA5?style=flat-square)
![University](https://img.shields.io/badge/University-San%20Jose%20State-0055A2?style=flat-square)
![Semester](https://img.shields.io/badge/Semester-Spring%202026-6B8CBA?style=flat-square)
![Status](https://img.shields.io/badge/Status-Submitted-4A8C6F?style=flat-square)
![Paper](https://img.shields.io/badge/arXiv-2508.15260-B3522A?style=flat-square)

---

## 👩‍💻 Student Information

| | |
|---|---|
| **Name** | Prachi Gupta |
| **SJSU ID** | 019106594 |
| **Course** | CMPE 258 — Deep Learning |
| **Assignment** | Short Story Presentation |
| **Semester** | Spring 2026 |

---

## 📄 Paper Reference

| | |
|---|---|
| **Title** | Deep Think with Confidence (DeepConf) |
| **Authors** | Yichao Fu, Xuewei Wang, Yuandong Tian, Jiawei Zhao |
| **Institution** | Meta AI Research (FAIR) & UC San Diego |
| **Published** | August 2025 |
| **arXiv** | [arXiv:2508.15260](https://arxiv.org/abs/2508.15260) |
---

## 🎬 Video Presentation

[![Watch the Presentation](https://img.youtube.com/vi/xxay1l5LpnQ/hqdefault.jpg)](https://youtu.be/xxay1l5LpnQ)

▶️ [Watch on YouTube — https://youtu.be/xxay1l5LpnQ](https://youtu.be/xxay1l5LpnQ)

---

## 📁 Repository Contents

```
Short Story Assignment/
├── DeepConf_Presentation.pptx    Slide deck (17 slides)
├── DeepConf_Report.pdf           Written summary report
├── VideoURL.txt                  YouTube presentation link
└── README.md                     This file
```

---

## 🔍 Overview

**DeepConf** addresses a core inefficiency in test-time LLM reasoning. The standard approach — self-consistency with majority voting — runs the model N times and picks the most common answer. It works, but it is expensive and treats every reasoning trace equally regardless of quality.

To push Qwen3-8B from 68% to 82% accuracy on AIME 2025 using standard majority voting requires **511 extra traces**, consuming over 100 million tokens for a single benchmark. Performance also plateaus past a certain budget — more traces stop helping.

DeepConf's key observation: at every token position during generation, the model produces a probability distribution over its vocabulary. These distributions contain a quality signal — **correct traces are measurably more confident than incorrect ones** — and nobody was using it.

---

## ⚙️ How It Works

### 📊 Confidence Metrics

DeepConf extracts four measurements from the model's existing token log-probabilities:

| Metric | Description |
|--------|-------------|
| **Average Trace Confidence** | Global mean of token confidence across the full trace |
| **Group Confidence** | Sliding window over ~1K tokens — captures local dips mid-trace |
| **Bottom-10% Confidence** | Average of the worst-scoring group windows — sustained low confidence flags a bad trace |
| **Tail Confidence** | Average over the last 2,048 tokens — high confidence at the conclusion indicates a clean answer |

### 🗂️ Offline Mode

All traces are already generated. DeepConf filters or re-weights before voting:

- **Confidence-Weighted Voting** — each trace's vote is weighted by its confidence score
- **Top-90% Filtering** — discard the bottom 10% of traces (conservative, safe default)
- **Top-10% Filtering** — keep only the most confident traces (aggressive, larger gains)

### ⚡ Online Mode

Confidence is monitored continuously during generation. Bad traces are stopped before they finish:

1. **Warmup** — run 16 complete traces to establish a stopping threshold `s`
2. **Early Stopping** — for each new trace, halt generation the moment the sliding-window confidence drops below `s`
3. **Consensus Check** — if the leading answer reaches 95% of surviving vote weight, stop generating new traces entirely

---

## 📊 Results

### Accuracy — Offline Mode

| Model | pass@1 | cons@512 | DeepConf-low |
|-------|--------|----------|--------------|
| GPT-OSS-120B / AIME 2025 | 91.8% | 97.0% | **99.9%** |
| GPT-OSS-120B / AIME 2024 | 91.9% | 96.7% | **97.0%** |
| DeepSeek-R1-8B / AIME 2025 | 76.9% | 82.3% | **86.4%** |
| DeepSeek-R1-8B / AIME 2024 | 83.0% | 86.7% | **92.5%** |
| Qwen3-32B / AIME 2025 | 71.7% | 80.1% | **80.2%** |

### Token Efficiency — Online Mode (GPT-OSS-120B)

| Task | Token Reduction | Accuracy |
|------|-----------------|----------|
| AIME 2025 | **−84.7%** | 97.9% ↑ (up from 97.1%) |
| AIME 2024 | **−79.9%** | No accuracy loss |
| BRUMO 2025 | **−72.8%** | No accuracy loss |
| HMMT 2025 | **−76.2%** | No accuracy loss |

> 💡 On AIME 2025, DeepConf-low reduces tokens by 84.7% while simultaneously improving accuracy — not a tradeoff, a strict improvement on both dimensions.

---

## 🎓 Connections to Course Material

| CMPE 258 Concept | Connection |
|------------------|------------|
| **Uncertainty Quantification** | Token entropy operationalizes epistemic uncertainty off the softmax — same concept as MC Dropout, zero extra overhead |
| **Ensemble Methods** | N-trace majority voting is an N-forward-pass ensemble; confidence weighting is quality-aware aggregation, analogous to boosting |
| **Adaptive Computation** | Consensus stopping is adaptive computation depth — allocate more compute to hard problems, stop early on easy ones |
| **Inference vs. Training Tradeoff** | Test-time scaling: spend inference compute rather than training compute to push accuracy |

---

## 🔬 Analysis

### ✅ Strengths

**Zero overhead.** Log-probabilities are computed in every generation pass. DeepConf reads them at no additional cost — no extra model, no labels, no retraining required.

**Local beats global.** The sliding window catches the exact moments reasoning breaks down. Global averaging masks these failures; local metrics do not.

**Dual benefit.** Offline mode improves accuracy. Online mode reduces tokens. Both gains are available simultaneously.

**No retraining.** The method plugs into any existing LLM serving stack without modification.

### ⚠️ Limitations

**Overconfidence failure.** Confidence correlates with correctness but is not equivalent to it. When the model is confidently wrong, Top-10% filtering concentrates votes on the incorrect answer. This is a fundamental calibration problem with no solution within the current framework.

**Warmup cost.** Online mode requires 16 complete warmup traces before early stopping activates. At small total budgets (e.g., B = 32), this consumes half the compute before any efficiency gains appear.

**Math benchmarks only.** All evaluations use math competition problems (AIME, HMMT, BRUMO, GPQA). Transfer to code generation or open-ended tasks where correctness is not binary remains untested.

**Task-sensitive hyperparameter.** The optimal retention ratio η varies by model and dataset. There is no universal default — tuning requires a labeled validation set.

---

## 💡 Key Takeaways

**The signal was always there.** Token log-probabilities are computed during every forward pass. DeepConf requires no additional computation — it reads information that already existed.

**Local confidence beats global average.** A rough patch mid-trace is a meaningful warning sign, even if the trace recovers. Metrics that smooth over local failures lose the most useful signal.

**Confidence is not correctness.** The overconfidence failure mode is real, acknowledged by the authors, and not resolved within this paper. Improving confidence calibration is the most important open problem in this line of work.

---

## 📚 References

- Fu, Y., Wang, X., Tian, Y., & Zhao, J. (2025). *Deep Think with Confidence*. arXiv:2508.15260.
- Wang, X. et al. (2023). *Self-Consistency Improves Chain of Thought Reasoning in Language Models*. arXiv:2203.11171.
- Kang et al. (2025). *Scalable Best-of-N Selection for Large Language Models via Self-Certainty*. arXiv:2502.18581.
- Chen et al. (2024). *Are More LLM Calls All You Need? Towards Scaling Laws of Compound Inference Systems*. arXiv:2403.02419.

---

*CMPE 258 — Deep Learning | San Jose State University | Spring 2026*  
*Prachi Gupta | SJSU ID: 019106594*
