# Programming for Data Science Lab (MACSE502) - Mini Project & Lab Suite
### School of Computer Science and Engineering (SCOPE), Vellore Institute of Technology (VIT), Vellore
**Academic Semester**: Fall Semester 2026  
**Student Name**: VEDANT NIMKAR  
**Registration Number**: `26MML0045`  
**Faculty / Evaluator**: Dr. M Rajasekhara Babu, Professor  

---

## 📌 Executive Summary

This repository hosts the official laboratory submissions, data science pipelines, datasets, Jupyter notebooks, and the **Comprehensive 75-Page Mini Project Master Dossier** for **Programming for Data Science Lab (MACSE502)**.

The project encompasses four fundamental industrial and scientific domains developed over Weeks 1 to 4:
1. **Week 1 (Pandas)**: Multi-Region E-Commerce Sales Intelligence Engine & Margin Concentration Analysis
2. **Week 2 (Pandas)**: IoT Commercial Fleet Logistics Telemetry Preprocessing & Preventive Overhaul System
3. **Week 3 (NumPy)**: Smart Factory Manufacturing Line Yield Optimization & Workstation Bottleneck Diagnosis
4. **Week 4 (Pandas & Seaborn)**: Higher-Ed Student Retention Prediction & Learning Analytics Diagnostic Suite
5. **Integrated Master System**: Unified Multi-Domain Enterprise Architecture & Analytical Synthesizer

---

## 📑 Official Academic Documentation (75 Pages)

The primary submission document is an exhaustive, 75-page publication-quality dossier strictly adhering to the university's official **22-Row Table Format**:
* **Official Cover Page**: Features the student portrait cleanly clipped inside the circular SmartArt shape, faculty credentials, and VIT emblem.
* **Official Index Table**: Pre-computed start page numbers automatically hyperlinked across all 5 operational modules:
  * Module 1 (E-Commerce Sales): **Page 3**
  * Module 2 (Logistics Fleet): **Page 20**
  * Module 3 (Smart Factory): **Page 35**
  * Module 4 (EdTech Learning Analytics): **Page 48**
  * Module 5 (Master Mini Project Suite): **Page 62**
* **Direct File Links**:
  * [Master Report (PDF, 75 Pages)](Mini_Project/docs/26MML0045_PDS_Lab_MiniProject_W1_to_W4_Covered.pdf)
  * [Master Report (DOCX)](Mini_Project/docs/26MML0045_PDS_Lab_MiniProject_W1_to_W4_Covered.docx)
  * [Google Drive Cloud Backup](https://drive.google.com/drive/folders/1W5HRJYRECn4RC9DEbIkF0nfPf6csRZCd?usp=sharing)

---

## 📂 Repository Structure

```
├── Mini_Project/
│   ├── notebooks/
│   │   ├── Master_MiniProject_Comprehensive_Suite.ipynb    <-- Unified Master Notebook (All 4 Weeks)
│   │   ├── Week1_Sales_Analytics_MiniProject.ipynb         <-- Week 1: E-Commerce Analytics
│   │   ├── Week2_Fleet_Monitoring_MiniProject.ipynb        <-- Week 2: Fleet Preprocessing Pipeline
│   │   ├── Week3_Factory_Production_MiniProject.ipynb      <-- Week 3: Factory Yield NumPy Engine
│   │   └── Week4_Learning_Analytics_MiniProject.ipynb      <-- Week 4: EdTech Retention Modeling
│   ├── data/
│   │   ├── w1_ecommerce_sales_data.csv                     <-- 30-SKU retail catalog with margin %
│   │   ├── w2_transport_fleet_data.csv                     <-- 30-truck raw telemetry with nulls
│   │   ├── w2_cleaned_fleet_data.csv                       <-- Imputed, pruned, and normalized fleet
│   │   ├── w3_factory_production_matrix.csv                <-- 4x5 industrial production tensor
│   │   ├── w4_edtech_learner_engagement.csv                <-- 30-student behavioral telemetry
│   │   └── w4_learner_analytics_enriched.csv               <-- Enriched risk and tier classifications
│   └── docs/
│       ├── 26MML0045_PDS_Lab_MiniProject_W1_to_W4_Covered.pdf   <-- 75-Page Official Dossier (Cover+Index)
│       └── 26MML0045_PDS_Lab_MiniProject_W1_to_W4_Covered.docx
├── W1_SlNo01_PP.ipynb to W8_SlNo17_EP.ipynb                <-- Complete Weekly Laboratory Notebooks (17 files)
└── README.md
```

---

## 🔬 Domain-by-Domain Technical Breakdown

### 1. Week 1: Multi-Region E-Commerce Sales Intelligence Engine (Pandas)
* **Dataset**: 30 distinct commercial SKUs across Electronics, Fashion, Home Appliances, Grocery, and Footwear.
* **Core Methods**: Column projection, vectorized boolean masking (`SalesAmount > ₹50,000`), scalar regional broadcasting (`South India`), and multi-level descending sort ranking.
* **Mini Project Innovations**:
  * **Pareto 80/20 Validation**: Empirical cumulative revenue curve proving top 20% of SKUs generate 31.8% of turnover.
  * **Category Margin Decomposition**: Fashion achieves highest profitability margin (45.5%), while Footwear generates volume anchor (₹491k).
  * **Bivariate Price Elasticity**: Volume velocity vs revenue density scatter plot with margin bubble scaling.

### 2. Week 2: IoT Commercial Fleet Telemetry Preprocessing & Anomaly Detection (Pandas)
* **Dataset**: 30 commercial heavy freight vehicles operating across four transport corridors with sensor dropouts.
* **Core Methods**: Statistical mean imputation ($29.51\text{ L/100km}$), corrupted row pruning, `int64` casting, and Min-Max normalization ($x' = \frac{x - x_{min}}{x_{max} - x_{min}}$).
* **Mini Project Innovations**:
  * **Composite Mechanical Wear Scoring**: Weighted formulation ($0.5 \times \text{Fuel}_{\text{norm}} + 0.5 \times \frac{\text{Hours}}{3000}$) isolating 7 units exceeding the $0.70$ overhaul threshold.
  * **Corridor Cost Modeling**: Route-West (mountainous) incurs $51.3\%$ higher fuel outlay (₹28.45 Lakhs) than highway routes.
  * **Dispatcher Alert Feed**: Real-time triage flags for preventive maintenance before inter-state deployment.

### 3. Week 3: Factory Production Analysis & Yield Optimization System (NumPy)
* **Dataset**: $4 \times 5$ multi-dimensional production tensor capturing daily yields across 4 manufacturing lines and 5 operating shifts.
* **Core Methods**: Grand mean ($131.75$ units), standard deviation ($16.32$ units), directional axis evaluation, sub-matrix slicing (`[:3, -2:]`), and continuous memory reshaping to $(5, 4)$.
* **Mini Project Innovations**:
  * **Hadamard Matrix Multiplication**: Element-wise multiplication with machine efficiency coefficients determining $90.70\%$ plant OEE.
  * **Bottleneck Diagnosis**: Line 2 (Machining) identified as primary constraint lagging $20.75$ units below plant baseline.
  * **Asymptotic SIMD Speedup**: Vectorized NumPy operations outperform native Python loops by $>42\times$ on large arrays.

### 4. Week 4: Higher-Ed Student Retention & Learning Analytics Suite (Pandas & Seaborn)
* **Dataset**: 30 undergraduate learner digital traces across study hours, attendance, quizzes, and LMS interactions.
* **Core Methods**: Positive skewness compression using $\text{log1p}(x) = \ln(1 + x)$, pedagogical tier discretization (`pd.cut()`), and Pearson correlation matrices ($r > 0.90$).
* **Mini Project Innovations**:
  * **Bimodal Violin Density**: Clear distribution separation between failing students ($35-62$ marks) and completers ($78-98$ marks).
  * **Logistic Sigmoid Risk Modeling**: Empirical retention curve ($P(Y=1) = \frac{1}{1 + e^{-(-7.5 + 0.85x)}}$) identifying $8.82\text{ hrs/week}$ as the critical retention threshold.
  * **Proactive Advisor Roster**: Automated triage flagging 12 learners for personalized diagnostic tutoring.

---

## 🛠️ Verification & Replication

To replicate all analyses and generate the figures:

```bash
# Clone the repository
git clone https://github.com/adminsharpcode/DataSciencesVTOP.git
cd DataSciencesVTOP/Mini_Project

# Run the master notebook via Jupyter
jupyter notebook notebooks/Master_MiniProject_Comprehensive_Suite.ipynb
```

---

## 👨‍💻 Student Author
* **Vedant Nimkar** (Reg. No: `26MML0045`)
* M.Tech Integrated Data Science / Computer Science & Engineering
* Vellore Institute of Technology (VIT), Vellore
