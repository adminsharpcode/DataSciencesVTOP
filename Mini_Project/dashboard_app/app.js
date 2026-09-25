/**
 * Applied Data Science Interactive Intelligence Cockpit
 * Student: VEDANT NIMKAR (26MML0045) | Faculty: Dr. Rajasekhara Babu M
 * MACSE502 - Programming for Data Science Lab
 */

// ==========================================
// 1. COMPREHENSIVE MULTI-DOMAIN DATASETS
// ==========================================

const W1_PRODUCTS = [
  { id: "P001", name: "Ultra HD 4K Smart TV", cat: "Electronics", sales: 72000, units: 48, rating: 4.6, q: "Q1" },
  { id: "P002", name: "Designer Italian Leather Jacket", cat: "Fashion", sales: 45000, units: 62, rating: 4.2, q: "Q1" },
  { id: "P003", name: "French Door Smart Refrigerator", cat: "Home Appliances", sales: 88000, units: 31, rating: 4.7, q: "Q1" },
  { id: "P004", name: "Organic Arabica Coffee Hamper", cat: "Grocery", sales: 32000, units: 140, rating: 4.5, q: "Q2" },
  { id: "P005", name: "Pro Running Carbon Fiber Shoes", cat: "Footwear", sales: 95000, units: 55, rating: 4.8, q: "Q2" },
  { id: "P006", name: "Active Noise-Cancelling Headphones", cat: "Electronics", sales: 51000, units: 92, rating: 4.4, q: "Q2" },
  { id: "P007", name: "Pure Cashmere Winter Coat", cat: "Fashion", sales: 28000, units: 38, rating: 4.1, q: "Q3" },
  { id: "P008", name: "Front-Load Inverter Washing Machine", cat: "Home Appliances", sales: 67000, units: 44, rating: 4.5, q: "Q3" },
  { id: "P009", name: "Artisanal Olive Oil Gourmet Box", cat: "Grocery", sales: 41000, units: 115, rating: 4.3, q: "Q3" },
  { id: "P010", name: "Orthopedic Ergonomic Leather Shoes", cat: "Footwear", sales: 79000, units: 51, rating: 4.6, q: "Q4" },
  { id: "P011", name: "Curved Ultrawide Gaming Monitor", cat: "Electronics", sales: 56000, units: 64, rating: 4.7, q: "Q4" },
  { id: "P012", name: "Handcrafted Silk Evening Saree", cat: "Fashion", sales: 34000, units: 49, rating: 4.3, q: "Q4" },
  { id: "P013", name: "Built-In Convection Oven & Grill", cat: "Home Appliances", sales: 91000, units: 27, rating: 4.9, q: "Q1" },
  { id: "P014", name: "Imported Belgian Chocolate Assortment", cat: "Grocery", sales: 47000, units: 130, rating: 4.6, q: "Q2" },
  { id: "P015", name: "Trail Running All-Weather Boots", cat: "Footwear", sales: 62000, units: 58, rating: 4.4, q: "Q3" },
  { id: "P016", name: "Wireless Ergonomic Mechanical Keyboard", cat: "Electronics", sales: 38000, units: 85, rating: 4.5, q: "Q1" },
  { id: "P017", name: "Tailored Woolen Business Suit", cat: "Fashion", sales: 84000, units: 33, rating: 4.8, q: "Q4" },
  { id: "P018", name: "Intelligent Robotic Vacuum Cleaner", cat: "Home Appliances", sales: 53000, units: 68, rating: 4.3, q: "Q2" },
  { id: "P019", name: "Organic Superfood Breakfast Cereal", cat: "Grocery", sales: 29000, units: 160, rating: 4.2, q: "Q3" },
  { id: "P020", name: "Waterproof Trekking Hiking Boots", cat: "Footwear", sales: 76000, units: 46, rating: 4.7, q: "Q4" },
  { id: "P021", name: "Next-Gen Flagship Smartphone 256GB", cat: "Electronics", sales: 98000, units: 75, rating: 4.9, q: "Q1" },
  { id: "P022", name: "Premium Slim-Fit Denim Jeans", cat: "Fashion", sales: 39000, units: 82, rating: 4.1, q: "Q2" },
  { id: "P023", name: "Countertop Digital Air Fryer XL", cat: "Home Appliances", sales: 42000, units: 95, rating: 4.6, q: "Q3" },
  { id: "P024", name: "Gluten-Free Almond & Seed Flour", cat: "Grocery", sales: 24000, units: 180, rating: 4.4, q: "Q4" },
  { id: "P025", name: "Memory Foam Lightweight Sneakers", cat: "Footwear", sales: 58000, units: 70, rating: 4.5, q: "Q1" }
];

const W2_FLEET = [
  { id: "TRK-100", route: "Route-West", fuel: 38.6, eh: 82.4, dist: 3850 },
  { id: "TRK-101", route: "Route-South", fuel: 31.7, eh: 58.2, dist: 2900 },
  { id: "TRK-102", route: "Route-West", fuel: 33.3, eh: 64.1, dist: 3120 },
  { id: "TRK-103", route: "Route-South", fuel: 27.4, eh: 45.0, dist: 2400 },
  { id: "TRK-105", route: "Corridor-Express", fuel: 42.5, eh: 98.6, dist: 4920 },
  { id: "TRK-106", route: "Route-North", fuel: 40.9, eh: 89.2, dist: 4350 },
  { id: "TRK-108", route: "Route-East", fuel: 29.5, eh: 52.3, dist: 2600 },
  { id: "TRK-109", route: "Route-North", fuel: 32.1, eh: 61.0, dist: 3100 },
  { id: "TRK-110", route: "Corridor-Express", fuel: 37.0, eh: 77.5, dist: 3950 },
  { id: "TRK-112", route: "Route-West", fuel: 33.3, eh: 69.4, dist: 3450 },
  { id: "TRK-113", route: "Route-South", fuel: 30.8, eh: 56.1, dist: 2800 },
  { id: "TRK-114", route: "Route-East", fuel: 31.4, eh: 62.0, dist: 3150 },
  { id: "TRK-116", route: "Route-West", fuel: 37.4, eh: 81.3, dist: 4100 },
  { id: "TRK-117", route: "Corridor-Express", fuel: 34.2, eh: 71.0, dist: 3600 },
  { id: "TRK-119", route: "Route-North", fuel: 33.3, eh: 65.2, dist: 3250 },
  { id: "TRK-120", route: "Route-West", fuel: 32.8, eh: 63.4, dist: 3180 },
  { id: "TRK-122", route: "Route-South", fuel: 30.3, eh: 54.0, dist: 2700 },
  { id: "TRK-123", route: "Route-North", fuel: 28.9, eh: 49.5, dist: 2500 },
  { id: "TRK-124", route: "Route-East", fuel: 34.3, eh: 73.2, dist: 3700 },
  { id: "TRK-125", route: "Corridor-Express", fuel: 33.3, eh: 68.0, dist: 3400 },
  { id: "TRK-126", route: "Route-West", fuel: 35.1, eh: 74.5, dist: 3750 },
  { id: "TRK-127", route: "Route-North", fuel: 30.4, eh: 55.0, dist: 2750 },
  { id: "TRK-128", route: "Corridor-Express", fuel: 29.8, eh: 51.2, dist: 2550 },
  { id: "TRK-129", route: "Route-West", fuel: 33.8, eh: 67.0, dist: 3350 }
];

const W3_DATA = {
  lines: ["Line A (Assembly)", "Line B (Machining)", "Line C (Fabrication)", "Line D (Packaging)"],
  shifts: ["Shift 1", "Shift 2", "Shift 3", "Shift 4", "Shift 5"],
  matrix: [
    [145, 152, 138, 120, 110],
    [168, 175, 160, 142, 125],
    [130, 135, 128, 115,  98],
    [185, 190, 178, 165, 150]
  ],
  efficiency: [
    [0.92, 0.89, 0.96, 0.87, 0.83],
    [0.88, 0.94, 0.90, 0.84, 0.86],
    [0.95, 0.86, 0.92, 0.90, 0.81],
    [0.91, 0.93, 0.85, 0.95, 0.89]
  ]
};

// Full 25-Student Cohort Dataset matching Table MP.5 of the Mini Project Report
const W4_COHORT_STUDENTS = [
  { id: "STU-101", sh: 14.5, quiz: 85, att: 92, lms: 142, completed: 1 },
  { id: "STU-102", sh: 4.2,  quiz: 42, att: 60, lms: 38,  completed: 0 },
  { id: "STU-103", sh: 18.0, quiz: 94, att: 98, lms: 185, completed: 1 },
  { id: "STU-104", sh: 6.5,  quiz: 55, att: 72, lms: 65,  completed: 0 },
  { id: "STU-105", sh: 12.0, quiz: 78, att: 88, lms: 120, completed: 1 },
  { id: "STU-106", sh: 3.8,  quiz: 38, att: 55, lms: 30,  completed: 0 },
  { id: "STU-107", sh: 16.2, quiz: 91, att: 95, lms: 168, completed: 1 },
  { id: "STU-108", sh: 8.0,  quiz: 64, att: 78, lms: 82,  completed: 0 },
  { id: "STU-109", sh: 11.5, quiz: 74, att: 85, lms: 112, completed: 1 },
  { id: "STU-110", sh: 5.1,  quiz: 48, att: 65, lms: 49,  completed: 0 },
  { id: "STU-111", sh: 15.0, quiz: 89, att: 94, lms: 155, completed: 1 },
  { id: "STU-112", sh: 7.2,  quiz: 58, att: 75, lms: 74,  completed: 0 },
  { id: "STU-113", sh: 13.8, quiz: 82, att: 90, lms: 135, completed: 1 },
  { id: "STU-114", sh: 4.5,  quiz: 45, att: 62, lms: 42,  completed: 0 },
  { id: "STU-115", sh: 19.5, quiz: 96, att: 99, lms: 198, completed: 1 },
  { id: "STU-116", sh: 9.0,  quiz: 68, att: 80, lms: 95,  completed: 1 },
  { id: "STU-117", sh: 6.0,  quiz: 52, att: 70, lms: 58,  completed: 0 },
  { id: "STU-118", sh: 12.5, quiz: 80, att: 89, lms: 128, completed: 1 },
  { id: "STU-119", sh: 3.2,  quiz: 35, att: 50, lms: 25,  completed: 0 },
  { id: "STU-120", sh: 17.0, quiz: 93, att: 96, lms: 175, completed: 1 },
  { id: "STU-121", sh: 10.5, quiz: 72, att: 84, lms: 105, completed: 1 },
  { id: "STU-122", sh: 5.8,  quiz: 50, att: 68, lms: 56,  completed: 0 },
  { id: "STU-123", sh: 14.0, quiz: 86, att: 91, lms: 140, completed: 1 },
  { id: "STU-124", sh: 7.8,  quiz: 62, att: 76, lms: 79,  completed: 0 },
  { id: "STU-125", sh: 16.5, quiz: 90, att: 95, lms: 165, completed: 1 }
];

// ==========================================
// 2. THEME & TABS CONTROLLERS
// ==========================================

const themeToggleBtn = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeText = document.getElementById("themeText");
let currentTheme = "dark";

themeToggleBtn.addEventListener("click", () => {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  themeIcon.textContent = currentTheme === "dark" ? "☀️" : "🌙";
  themeText.textContent = currentTheme === "dark" ? "Light" : "Dark";
  updateAllChartThemes();
});

const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.tab;
    tabBtns.forEach(b => b.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));
    btn.classList.add("active");
    const activeContent = document.getElementById(target);
    if (activeContent) activeContent.classList.add("active");
    
    // Explicit dynamic trigger & resize for target tab
    setTimeout(() => {
      if (target === "tab-overview") {
        if (charts.ovProg) { charts.ovProg.resize(); charts.ovProg.update(); }
        if (charts.ovStack) { charts.ovStack.resize(); charts.ovStack.update(); }
      } else if (target === "tab-w1") {
        updateW1View();
      } else if (target === "tab-w2") {
        updateW2View();
      } else if (target === "tab-w3") {
        updateW3View();
      } else if (target === "tab-w4") {
        updateStudentSimulator();
        updateW4CohortView();
      }
      window.dispatchEvent(new Event('resize'));
    }, 60);
  });
});

function getChartColors() {
  const isDark = currentTheme === "dark";
  return {
    text: isDark ? "#94a3b8" : "#475569",
    grid: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)",
    border: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
  };
}

let charts = {};

// ==========================================
// 3. TAB 0: MASTER OVERVIEW CHARTS
// ==========================================

function initOverviewCharts() {
  const colors = getChartColors();
  
  const ctxProg = document.getElementById("ovProgressionChart").getContext("2d");
  charts.ovProg = new Chart(ctxProg, {
    type: "bar",
    data: {
      labels: ["Week 1: Pandas BI", "Week 2: Fleet Clean", "Week 3: NumPy SPC", "Week 4: EdTech ML"],
      datasets: [
        {
          label: "Analytical Rigor (Points)",
          data: [94, 96, 98, 97],
          backgroundColor: "rgba(56, 189, 248, 0.8)",
          borderRadius: 6
        },
        {
          label: "Mini Project Extension Scope",
          data: [90, 92, 95, 96],
          backgroundColor: "rgba(16, 185, 129, 0.8)",
          borderRadius: 6
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { grid: { color: colors.grid }, ticks: { color: colors.text } },
        y: { min: 80, max: 100, grid: { color: colors.grid }, ticks: { color: colors.text } }
      },
      plugins: { legend: { labels: { color: colors.text } } }
    }
  });

  const ctxStack = document.getElementById("ovStackChart").getContext("2d");
  charts.ovStack = new Chart(ctxStack, {
    type: "pie",
    data: {
      labels: ["Pandas Tabular & BI (W1)", "Data Cleaning & Normalization (W2)", "NumPy Linear Algebra (W3)", "EDA & Predictive Analytics (W4)"],
      datasets: [{
        data: [25, 25, 25, 25],
        backgroundColor: ["#38bdf8", "#10b981", "#f59e0b", "#8b5cf6"],
        borderWidth: 2,
        borderColor: currentTheme === "dark" ? "#111827" : "#ffffff"
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: "right", labels: { color: colors.text } } }
    }
  });
}

// ==========================================
// 4. TAB 1: WEEK 1 - E-COMMERCE SALES BI
// ==========================================

function filterW1Data() {
  const cat = document.getElementById("w1-cat-select").value;
  const minPrice = parseInt(document.getElementById("w1-min-price").value, 10);
  const sortBy = document.getElementById("w1-sort-select").value;

  let filtered = W1_PRODUCTS.filter(p => {
    const matchCat = cat === "ALL" || p.cat === cat;
    const matchPrice = p.sales >= minPrice;
    return matchCat && matchPrice;
  });

  if (sortBy === "sales-desc") filtered.sort((a, b) => b.sales - a.sales);
  else if (sortBy === "sales-asc") filtered.sort((a, b) => a.sales - b.sales);
  else if (sortBy === "units-desc") filtered.sort((a, b) => b.units - a.units);
  else if (sortBy === "rating-desc") filtered.sort((a, b) => b.rating - a.rating);

  return filtered;
}

function updateW1View() {
  const data = filterW1Data();
  const totalRev = data.reduce((acc, p) => acc + p.sales, 0);
  const totalUnits = data.reduce((acc, p) => acc + p.units, 0);
  const avgSales = data.length > 0 ? Math.round(totalRev / data.length) : 0;
  const premCount = data.filter(p => p.sales >= 75000).length;

  document.getElementById("w1-kpi-rev").textContent = `₹${totalRev.toLocaleString()}`;
  document.getElementById("w1-kpi-units").textContent = totalUnits.toLocaleString();
  document.getElementById("w1-kpi-avg").textContent = `₹${avgSales.toLocaleString()}`;
  document.getElementById("w1-kpi-prem").textContent = premCount;
  document.getElementById("w1-table-count").textContent = `${data.length} Products`;

  // Render Table
  const tbody = document.querySelector("#w1-table tbody");
  tbody.innerHTML = "";
  data.forEach(p => {
    const tr = document.createElement("tr");
    const tierBadge = p.sales >= 75000 ? '<span class="badge success">Premium</span>' : (p.sales >= 50000 ? '<span class="badge info">High Value</span>' : '<span class="badge warning">Standard</span>');
    tr.innerHTML = `
      <td><b>${p.id}</b></td>
      <td>${p.name}</td>
      <td>${p.cat}</td>
      <td>₹${p.sales.toLocaleString()}</td>
      <td>${p.units}</td>
      <td>⭐ ${p.rating}</td>
      <td>${p.q}</td>
      <td>${tierBadge}</td>
    `;
    tbody.appendChild(tr);
  });

  // Top 10 Chart
  if (charts.w1Top) {
    const top10 = [...data].sort((a, b) => b.sales - a.sales).slice(0, 10);
    charts.w1Top.data.labels = top10.map(p => p.name.length > 20 ? p.name.substring(0, 18) + '...' : p.name);
    charts.w1Top.data.datasets[0].data = top10.map(p => p.sales / 1000);
    charts.w1Top.resize();
    charts.w1Top.update();
  }

  // Category Share
  if (charts.w1Cat) {
    const catMap = {};
    data.forEach(p => { catMap[p.cat] = (catMap[p.cat] || 0) + p.sales; });
    charts.w1Cat.data.labels = Object.keys(catMap);
    charts.w1Cat.data.datasets[0].data = Object.values(catMap);
    charts.w1Cat.resize();
    charts.w1Cat.update();
  }

  // Scatter
  if (charts.w1Scatter) {
    charts.w1Scatter.data.datasets[0].data = data.map(p => ({ x: p.rating, y: p.sales / 1000, r: p.units / 12 }));
    charts.w1Scatter.resize();
    charts.w1Scatter.update();
  }
}

function initW1Charts() {
  const colors = getChartColors();

  const ctxTop = document.getElementById("w1TopProductsChart").getContext("2d");
  charts.w1Top = new Chart(ctxTop, {
    type: "bar",
    data: {
      labels: [],
      datasets: [{ label: "Sales (₹ '000)", data: [], backgroundColor: "rgba(56, 189, 248, 0.8)", borderRadius: 4 }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { grid: { color: colors.grid }, ticks: { color: colors.text } },
        y: { grid: { display: false }, ticks: { color: colors.text, font: { size: 10 } } }
      },
      plugins: { legend: { display: false } }
    }
  });

  const ctxCat = document.getElementById("w1CategoryShareChart").getContext("2d");
  charts.w1Cat = new Chart(ctxCat, {
    type: "doughnut",
    data: {
      labels: [],
      datasets: [{ data: [], backgroundColor: ["#38bdf8", "#10b981", "#f59e0b", "#ec4899", "#8b5cf6"] }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: "bottom", labels: { color: colors.text, boxWidth: 12 } } }
    }
  });

  const ctxQ = document.getElementById("w1QuarterlyChart").getContext("2d");
  charts.w1Q = new Chart(ctxQ, {
    type: "bar",
    data: {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      datasets: [
        { label: "Electronics", data: [208, 51, 0, 56], backgroundColor: "#38bdf8" },
        { label: "Home Appliances", data: [179, 53, 109, 0], backgroundColor: "#10b981" },
        { label: "Footwear", data: [58, 95, 62, 155], backgroundColor: "#f59e0b" },
        { label: "Fashion", data: [45, 39, 28, 118], backgroundColor: "#ec4899" },
        { label: "Grocery", data: [0, 79, 70, 24], backgroundColor: "#8b5cf6" }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { stacked: true, grid: { color: colors.grid }, ticks: { color: colors.text } },
        y: { stacked: true, grid: { color: colors.grid }, ticks: { color: colors.text } }
      },
      plugins: { legend: { position: "top", labels: { color: colors.text, boxWidth: 10, font: { size: 9 } } } }
    }
  });

  const ctxScat = document.getElementById("w1RatingScatterChart").getContext("2d");
  charts.w1Scatter = new Chart(ctxScat, {
    type: "bubble",
    data: {
      datasets: [{ label: "Products", data: [], backgroundColor: "rgba(244, 63, 94, 0.75)", borderColor: "rgba(244, 63, 94, 1)" }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { min: 4.0, max: 5.0, title: { display: true, text: "Customer Rating (Stars)", color: colors.text }, grid: { color: colors.grid }, ticks: { color: colors.text } },
        y: { title: { display: true, text: "Sales (₹ '000)", color: colors.text }, grid: { color: colors.grid }, ticks: { color: colors.text } }
      },
      plugins: { legend: { display: false } }
    }
  });

  document.getElementById("w1-cat-select").addEventListener("change", updateW1View);
  document.getElementById("w1-sort-select").addEventListener("change", updateW1View);
  document.getElementById("w1-min-price").addEventListener("input", (e) => {
    document.getElementById("w1-min-price-val").textContent = `₹${parseInt(e.target.value).toLocaleString()}`;
    updateW1View();
  });
  document.getElementById("w1-reset-btn").addEventListener("click", () => {
    document.getElementById("w1-cat-select").value = "ALL";
    document.getElementById("w1-sort-select").value = "sales-desc";
    document.getElementById("w1-min-price").value = 20000;
    document.getElementById("w1-min-price-val").textContent = "₹20,000";
    updateW1View();
  });

  updateW1View();
}

// ==========================================
// 5. TAB 2: WEEK 2 - FLEET PERFORMANCE & TELEMATICS (100% DYNAMIC)
// ==========================================

function updateW2View() {
  const selectedRoute = document.getElementById("w2-route-select").value;
  const ineffThreshold = parseFloat(document.getElementById("w2-ineff-slider").value);

  const minF = Math.min(...W2_FLEET.map(v => v.fuel));
  const maxF = Math.max(...W2_FLEET.map(v => v.fuel));
  const minEh = Math.min(...W2_FLEET.map(v => v.eh));
  const maxEh = Math.max(...W2_FLEET.map(v => v.eh));
  const minD = Math.min(...W2_FLEET.map(v => v.dist));
  const maxD = Math.max(...W2_FLEET.map(v => v.dist));

  const enriched = W2_FLEET.map(v => {
    const normF = (v.fuel - minF) / (maxF - minF);
    const normEh = (v.eh - minEh) / (maxEh - minEh);
    const normD = (v.dist - minD) / (maxD - minD);
    const risk = 0.50 * normF + 0.30 * normEh + 0.20 * normD;
    
    // Live threshold classification driven by slider!
    let status = "Optimal Health";
    let badgeClass = "success";
    if (risk >= ineffThreshold) {
      status = "Immediate Overhaul";
      badgeClass = "danger";
    } else if (risk >= ineffThreshold * 0.65) {
      status = "Scheduled Service";
      badgeClass = "warning";
    }

    return { ...v, normF, risk, status, badgeClass };
  });

  const filtered = enriched.filter(v => selectedRoute === "ALL" || v.route === selectedRoute);

  // Dynamic KPI updates
  const avgFuel = filtered.length > 0 ? (filtered.reduce((a, b) => a + b.fuel, 0) / filtered.length).toFixed(1) : "0.0";
  const totalCost = filtered.length > 0 ? (filtered.reduce((a, b) => a + (b.dist * b.fuel / 100 * 96.5), 0) / 100000).toFixed(2) : "0.00";
  const alertCount = filtered.filter(v => v.risk >= ineffThreshold).length;

  document.getElementById("w2-kpi-count").textContent = `${filtered.length} Units`;
  document.getElementById("w2-kpi-fuel").textContent = `${avgFuel} L/100km`;
  document.getElementById("w2-kpi-cost").textContent = `₹${totalCost}L`;
  document.getElementById("w2-kpi-alerts").textContent = `${alertCount} Trucks`;
  document.getElementById("w2-table-count").textContent = `${filtered.length} Trucks`;

  // Render Table
  const tbody = document.querySelector("#w2-table tbody");
  tbody.innerHTML = "";
  filtered.forEach(v => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><b>${v.id}</b></td>
      <td>${v.route}</td>
      <td>${v.fuel.toFixed(1)}</td>
      <td>${v.normF.toFixed(2)}</td>
      <td>${v.eh} hrs</td>
      <td>${v.dist.toLocaleString()} km</td>
      <td><b>${v.risk.toFixed(2)}</b></td>
      <td><span class="badge ${v.badgeClass}">${v.status}</span></td>
    `;
    tbody.appendChild(tr);
  });

  // Dynamic Fuel Histogram Bins
  if (charts.w2Dist) {
    const bins = [0, 0, 0, 0, 0];
    filtered.forEach(v => {
      if (v.fuel < 29) bins[0]++;
      else if (v.fuel < 33) bins[1]++;
      else if (v.fuel < 37) bins[2]++;
      else if (v.fuel < 41) bins[3]++;
      else bins[4]++;
    });
    charts.w2Dist.data.datasets[0].data = bins;
    charts.w2Dist.resize();
    charts.w2Dist.update();
  }

  // Dynamic Route Fuel Comparison
  if (charts.w2Route) {
    const routes = ["Route-West", "Corridor-Express", "Route-North", "Route-East", "Route-South"];
    const routeAvgs = routes.map(r => {
      const match = W2_FLEET.filter(v => v.route === r);
      return match.length > 0 ? (match.reduce((a, b) => a + b.fuel, 0) / match.length).toFixed(1) : 0;
    });
    charts.w2Route.data.datasets[0].data = routeAvgs;
    charts.w2Route.resize();
    charts.w2Route.update();
  }

  // Dynamic Risk Scatter
  if (charts.w2Scatter) {
    charts.w2Scatter.data.datasets[0].data = filtered.map(v => ({ x: v.fuel, y: v.risk }));
    charts.w2Scatter.resize();
    charts.w2Scatter.update();
  }

  // Dynamic Triage Donut
  if (charts.w2Donut) {
    const overhaul = filtered.filter(v => v.status === "Immediate Overhaul").length;
    const service = filtered.filter(v => v.status === "Scheduled Service").length;
    const optimal = filtered.filter(v => v.status === "Optimal Health").length;
    charts.w2Donut.data.datasets[0].data = [overhaul, service, optimal];
    charts.w2Donut.resize();
    charts.w2Donut.update();
  }
}

function initW2Charts() {
  const colors = getChartColors();

  const ctxDist = document.getElementById("w2FuelDistChart").getContext("2d");
  charts.w2Dist = new Chart(ctxDist, {
    type: "bar",
    data: {
      labels: ["26-29 L", "30-33 L", "34-37 L", "38-40 L", "41-43 L"],
      datasets: [{ label: "Trucks Count", data: [], backgroundColor: "rgba(56, 189, 248, 0.75)", borderRadius: 4 }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { grid: { color: colors.grid }, ticks: { color: colors.text } },
        y: { grid: { color: colors.grid }, ticks: { color: colors.text } }
      },
      plugins: { legend: { display: false } }
    }
  });

  const ctxRoute = document.getElementById("w2RouteBarChart").getContext("2d");
  charts.w2Route = new Chart(ctxRoute, {
    type: "bar",
    data: {
      labels: ["Route-West", "Corridor-Express", "Route-North", "Route-East", "Route-South"],
      datasets: [{ label: "Avg Fuel (L/100km)", data: [], backgroundColor: ["#f43f5e", "#f59e0b", "#38bdf8", "#8b5cf6", "#10b981"], borderRadius: 4 }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { grid: { display: false }, ticks: { color: colors.text, font: { size: 10 } } },
        y: { min: 25, max: 40, grid: { color: colors.grid }, ticks: { color: colors.text } }
      },
      plugins: { legend: { display: false } }
    }
  });

  const ctxScat = document.getElementById("w2RiskScatterChart").getContext("2d");
  charts.w2Scatter = new Chart(ctxScat, {
    type: "scatter",
    data: {
      datasets: [{ label: "Truck Risk Index", data: [], backgroundColor: "rgba(245, 158, 11, 0.8)", pointRadius: 6 }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { title: { display: true, text: "Fuel Consumption (L/100km)", color: colors.text }, grid: { color: colors.grid }, ticks: { color: colors.text } },
        y: { min: 0.0, max: 1.0, title: { display: true, text: "Maintenance Risk (0-1)", color: colors.text }, grid: { color: colors.grid }, ticks: { color: colors.text } }
      },
      plugins: { legend: { display: false } }
    }
  });

  const ctxDonut = document.getElementById("w2TriageDonutChart").getContext("2d");
  charts.w2Donut = new Chart(ctxDonut, {
    type: "doughnut",
    data: {
      labels: ["Immediate Overhaul", "Scheduled Service", "Optimal Health"],
      datasets: [{ data: [], backgroundColor: ["#f43f5e", "#f59e0b", "#10b981"] }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: "bottom", labels: { color: colors.text, boxWidth: 12 } } }
    }
  });

  document.getElementById("w2-route-select").addEventListener("change", updateW2View);
  document.getElementById("w2-ineff-slider").addEventListener("input", (e) => {
    document.getElementById("w2-ineff-slider-val").textContent = parseFloat(e.target.value).toFixed(2);
    updateW2View();
  });
  document.getElementById("w2-simulate-diag-btn").addEventListener("click", () => {
    W2_FLEET.forEach(v => {
      v.fuel = Math.max(25, Math.min(45, v.fuel + (Math.random() * 1.2 - 0.6)));
    });
    updateW2View();
  });

  updateW2View();
}

// ==========================================
// 6. TAB 3: WEEK 3 - FACTORY PRODUCTION & SPC (100% DYNAMIC)
// ==========================================

function updateW3View() {
  const selectedLine = document.getElementById("w3-line-select").value;
  const targetUSL = parseFloat(document.getElementById("w3-target-slider").value);
  const targetLSL = 105.0;

  const tbody = document.querySelector("#w3-table tbody");
  tbody.innerHTML = "";

  const grossTotals = [];
  const effTotals = [];
  const lineMeans = [];
  const lineStds = [];
  const cpList = [];

  W3_DATA.lines.forEach((lineName, i) => {
    const grossRow = W3_DATA.matrix[i];
    const effRow = grossRow.map((val, sIdx) => val * W3_DATA.efficiency[i][sIdx]);

    const grossSum = grossRow.reduce((a, b) => a + b, 0);
    const effSum = effRow.reduce((a, b) => a + b, 0);
    const mean = grossSum / grossRow.length;
    
    const variance = grossRow.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / grossRow.length;
    const std = Math.sqrt(variance);
    const cp = (targetUSL - targetLSL) / (6 * std);

    grossTotals.push(grossSum);
    effTotals.push(Math.round(effSum * 10) / 10);
    lineMeans.push(mean);
    lineStds.push(std);
    cpList.push(cp);

    // Filter table by selected line
    if (selectedLine === "ALL" || selectedLine === String(i)) {
      const isCapable = cp >= 1.0;
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><b>${lineName}</b></td>
        <td>${grossSum}</td>
        <td>${effSum.toFixed(1)}</td>
        <td>${(grossSum - effSum).toFixed(1)}</td>
        <td>${mean.toFixed(1)}</td>
        <td>${std.toFixed(2)}</td>
        <td><b>${cp.toFixed(2)}</b></td>
        <td><span class="badge ${isCapable ? 'success' : 'warning'}">${isCapable ? 'Capable' : 'High Variance'}</span></td>
      `;
      tbody.appendChild(tr);
    }
  });

  // Dynamic KPI calculations based on line inspection
  if (selectedLine !== "ALL") {
    const idx = parseInt(selectedLine, 10);
    document.getElementById("w3-kpi-mean").textContent = lineMeans[idx].toFixed(1);
    document.getElementById("w3-kpi-cp").textContent = `Cp ${cpList[idx].toFixed(2)}`;
    document.getElementById("w3-kpi-eff").textContent = effTotals[idx].toLocaleString();
  } else {
    const grandMean = lineMeans.reduce((a, b) => a + b, 0) / lineMeans.length;
    const avgCp = cpList.reduce((a, b) => a + b, 0) / cpList.length;
    const grandEff = effTotals.reduce((a, b) => a + b, 0);
    document.getElementById("w3-kpi-mean").textContent = grandMean.toFixed(1);
    document.getElementById("w3-kpi-cp").textContent = `Cp ${avgCp.toFixed(2)}`;
    document.getElementById("w3-kpi-eff").textContent = grandEff.toFixed(1);
  }

  // Update Gross vs Eff chart
  if (charts.w3GrossVsEff) {
    charts.w3GrossVsEff.data.datasets[0].data = grossTotals;
    charts.w3GrossVsEff.data.datasets[1].data = effTotals;
    charts.w3GrossVsEff.resize();
    charts.w3GrossVsEff.update();
  }

  // Update Heatmap Shift Stack
  if (charts.w3Heat) {
    charts.w3Heat.data.datasets.forEach((ds, i) => {
      ds.data = [...W3_DATA.matrix[i]];
    });
    charts.w3Heat.resize();
    charts.w3Heat.update();
  }

  // Update SPC Chart
  if (charts.w3Spc) {
    charts.w3Spc.data.datasets[0].data = lineMeans;
    charts.w3Spc.data.datasets[1].data = [targetUSL * 0.75, targetUSL * 0.75, targetUSL * 0.75, targetUSL * 0.75];
    charts.w3Spc.data.datasets[2].data = lineMeans.map((m, idx) => m + 2 * lineStds[idx]);
    charts.w3Spc.data.datasets[3].data = lineMeans.map((m, idx) => m - 2 * lineStds[idx]);
    charts.w3Spc.resize();
    charts.w3Spc.update();
  }
}

function initW3Charts() {
  const colors = getChartColors();

  const ctxHeat = document.getElementById("w3HeatmapChart").getContext("2d");
  charts.w3Heat = new Chart(ctxHeat, {
    type: "bar",
    data: {
      labels: ["Shift 1", "Shift 2", "Shift 3", "Shift 4", "Shift 5"],
      datasets: [
        { label: "Line A", data: [145, 152, 138, 120, 110], backgroundColor: "#38bdf8" },
        { label: "Line B", data: [168, 175, 160, 142, 125], backgroundColor: "#10b981" },
        { label: "Line C", data: [130, 135, 128, 115, 98], backgroundColor: "#f59e0b" },
        { label: "Line D", data: [185, 190, 178, 165, 150], backgroundColor: "#ec4899" }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { grid: { color: colors.grid }, ticks: { color: colors.text } },
        y: { min: 80, max: 200, grid: { color: colors.grid }, ticks: { color: colors.text } }
      },
      plugins: { legend: { position: "top", labels: { color: colors.text, boxWidth: 10 } } }
    }
  });

  const ctxGvE = document.getElementById("w3GrossVsEffChart").getContext("2d");
  charts.w3GrossVsEff = new Chart(ctxGvE, {
    type: "bar",
    data: {
      labels: ["Line A", "Line B", "Line C", "Line D"],
      datasets: [
        { label: "Gross Nominal Output", data: [], backgroundColor: "rgba(56, 189, 248, 0.8)", borderRadius: 4 },
        { label: "Effective Adjusted Output", data: [], backgroundColor: "rgba(244, 63, 94, 0.8)", borderRadius: 4 }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { grid: { display: false }, ticks: { color: colors.text } },
        y: { grid: { color: colors.grid }, ticks: { color: colors.text } }
      },
      plugins: { legend: { labels: { color: colors.text } } }
    }
  });

  const ctxSpc = document.getElementById("w3SpcChart").getContext("2d");
  charts.w3Spc = new Chart(ctxSpc, {
    type: "line",
    data: {
      labels: ["Line A", "Line B", "Line C", "Line D"],
      datasets: [
        { label: "Line Mean Output", data: [], borderColor: "#38bdf8", backgroundColor: "#38bdf8", borderWidth: 2 },
        { label: "Factory Target", data: [], borderColor: "#10b981", borderDash: [5, 5], fill: false },
        { label: "Upper Control Limit (+2σ)", data: [], borderColor: "#f43f5e", borderDash: [2, 2], fill: false },
        { label: "Lower Control Limit (-2σ)", data: [], borderColor: "#f43f5e", borderDash: [2, 2], fill: false }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { grid: { color: colors.grid }, ticks: { color: colors.text } },
        y: { grid: { color: colors.grid }, ticks: { color: colors.text } }
      },
      plugins: { legend: { position: "bottom", labels: { color: colors.text, boxWidth: 10, font: { size: 9 } } } }
    }
  });

  const ctxStr = document.getElementById("w3StrainChart").getContext("2d");
  charts.w3Strain = new Chart(ctxStr, {
    type: "radar",
    data: {
      labels: ["Shift 1", "Shift 2", "Shift 3", "Shift 4", "Shift 5"],
      datasets: [
        { label: "Line A Strain", data: [0.35, 0.42, 0.28, 0.31, 0.25], borderColor: "#38bdf8" },
        { label: "Line B Strain", data: [0.65, 0.72, 0.58, 0.52, 0.44], borderColor: "#10b981" },
        { label: "Line D Peak Strain", data: [0.85, 0.92, 0.78, 0.74, 0.62], borderColor: "#f43f5e" }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: { grid: { color: colors.grid }, angleLines: { color: colors.grid }, ticks: { display: false } }
      },
      plugins: { legend: { position: "bottom", labels: { color: colors.text, boxWidth: 10 } } }
    }
  });

  document.getElementById("w3-line-select").addEventListener("change", updateW3View);
  document.getElementById("w3-target-slider").addEventListener("input", (e) => {
    document.getElementById("w3-target-slider-val").textContent = `${e.target.value} Units`;
    updateW3View();
  });

  document.getElementById("w3-shift-sim-btn").addEventListener("click", () => {
    W3_DATA.matrix.forEach(row => {
      row.forEach((val, idx) => {
        row[idx] = Math.max(90, Math.min(200, val + Math.floor(Math.random() * 9 - 4)));
      });
    });
    updateW3View();
  });

  updateW3View();
}

// ==========================================
// 7. TAB 4: WEEK 4 - EDTECH PREDICTOR (100% DYNAMIC)
// ==========================================

function calculateStudentRisk(sh, quiz, att, lms) {
  const normSh = Math.min(1.0, Math.max(0.0, (sh - 2.0) / (25.0 - 2.0)));
  const normQuiz = Math.min(1.0, Math.max(0.0, (quiz - 20.0) / (100.0 - 20.0)));
  const normAtt = Math.min(1.0, Math.max(0.0, (att - 40.0) / (100.0 - 40.0)));
  const normLms = Math.min(1.0, Math.max(0.0, (lms - 10.0) / (200.0 - 10.0)));

  const clei = (0.30 * normSh + 0.30 * normQuiz + 0.25 * normAtt + 0.15 * normLms) * 100;
  const z = (clei - 50.0) / 10.0;
  const prob = 1 / (1 + Math.exp(-z));

  let riskTier = "Low Risk (On Track)";
  let action = "Eligible for Advanced Honors Projects & Peer Mentoring";
  if (prob < 0.40) {
    riskTier = "High Risk (Critical)";
    action = "Mandatory enrollment in Remedial Problem-Solving Labs + Attendance SMS alerts";
  } else if (prob < 0.70) {
    riskTier = "Moderate Risk (Monitor)";
    action = "Weekly mentor check-in + Increase active study by 3.5 hrs";
  }

  return { clei, prob, riskTier, action };
}

function updateStudentSimulator() {
  const sh = parseFloat(document.getElementById("sim-sh").value);
  const quiz = parseFloat(document.getElementById("sim-quiz").value);
  const att = parseFloat(document.getElementById("sim-att").value);
  const lms = parseFloat(document.getElementById("sim-int").value);

  document.getElementById("sim-sh-val").textContent = `${sh.toFixed(1)} hrs`;
  document.getElementById("sim-quiz-val").textContent = `${quiz.toFixed(0)}%`;
  document.getElementById("sim-att-val").textContent = `${att.toFixed(0)}%`;
  document.getElementById("sim-int-val").textContent = `${lms.toFixed(0)} actions`;

  const res = calculateStudentRisk(sh, quiz, att, lms);

  document.getElementById("sim-clei-res").textContent = `${res.clei.toFixed(1)} / 100`;
  document.getElementById("sim-prob-res").textContent = `${(res.prob * 100).toFixed(1)}%`;
  document.getElementById("sim-action-res").textContent = res.action;

  if (charts.w4Logistic) {
    charts.w4Logistic.data.datasets[1].data = [{ x: res.clei, y: res.prob }];
    charts.w4Logistic.resize();
    charts.w4Logistic.update();
  }
}

function updateW4CohortView() {
  const riskFilter = document.getElementById("w4-risk-select") ? document.getElementById("w4-risk-select").value : "ALL";
  const minStudy = document.getElementById("w4-min-study") ? parseFloat(document.getElementById("w4-min-study").value) : 0;
  const sortBy = document.getElementById("w4-sort-select") ? document.getElementById("w4-sort-select").value : "clei-desc";

  // Score each student in the cohort
  const scoredCohort = W4_COHORT_STUDENTS.map(s => {
    const calc = calculateStudentRisk(s.sh, s.quiz, s.att, s.lms);
    return { ...s, ...calc };
  });

  let filtered = scoredCohort.filter(s => {
    const matchRisk = riskFilter === "ALL" || s.riskTier.includes(riskFilter);
    const matchStudy = s.sh >= minStudy;
    return matchRisk && matchStudy;
  });

  if (sortBy === "clei-desc") filtered.sort((a, b) => b.clei - a.clei);
  else if (sortBy === "clei-asc") filtered.sort((a, b) => a.clei - b.clei);
  else if (sortBy === "quiz-desc") filtered.sort((a, b) => b.quiz - a.quiz);
  else if (sortBy === "study-desc") filtered.sort((a, b) => b.sh - a.sh);
  else if (sortBy === "att-desc") filtered.sort((a, b) => b.att - a.att);

  // Dynamic KPI updates
  const compRate = filtered.length > 0 ? (filtered.filter(s => s.completed === 1).length / filtered.length * 100).toFixed(1) : "0.0";
  const highRiskCount = filtered.filter(s => s.prob < 0.40).length;

  document.getElementById("w4-kpi-n").textContent = `${filtered.length} Learners`;
  document.getElementById("w4-kpi-comp").textContent = `${compRate}%`;
  document.getElementById("w4-kpi-risk").textContent = `${highRiskCount} Students`;

  // Render Table
  const tbody = document.querySelector("#w4-table tbody");
  if (tbody) {
    tbody.innerHTML = "";
    filtered.forEach(s => {
      const tr = document.createElement("tr");
      const badge = s.riskTier.includes("Low") ? '<span class="badge success">Low Risk</span>' : (s.riskTier.includes("Moderate") ? '<span class="badge warning">Moderate</span>' : '<span class="badge danger">Critical</span>');
      tr.innerHTML = `
        <td><b>${s.id}</b></td>
        <td>${s.sh} hrs</td>
        <td>${s.quiz}%</td>
        <td>${s.att}%</td>
        <td>${s.clei.toFixed(1)}</td>
        <td><b>${(s.prob * 100).toFixed(1)}%</b></td>
        <td>${badge}</td>
        <td>${s.action}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  // Dynamic Risk Donut Chart
  if (charts.w4Risk) {
    const high = filtered.filter(s => s.prob < 0.40).length;
    const mod = filtered.filter(s => s.prob >= 0.40 && s.prob < 0.70).length;
    const low = filtered.filter(s => s.prob >= 0.70).length;
    charts.w4Risk.data.datasets[0].data = [high, mod, low];
    charts.w4Risk.resize();
    charts.w4Risk.update();
  }

  // Dynamic Grade Violin / Bar
  if (charts.w4Violin) {
    const failing = [filtered.filter(s => s.completed === 0 && s.quiz < 45).length, filtered.filter(s => s.completed === 1 && s.quiz < 45).length];
    const borderline = [filtered.filter(s => s.completed === 0 && s.quiz >= 45 && s.quiz <= 60).length, filtered.filter(s => s.completed === 1 && s.quiz >= 45 && s.quiz <= 60).length];
    const passing = [filtered.filter(s => s.completed === 0 && s.quiz > 60 && s.quiz <= 75).length, filtered.filter(s => s.completed === 1 && s.quiz > 60 && s.quiz <= 75).length];
    const good = [filtered.filter(s => s.completed === 0 && s.quiz > 75 && s.quiz <= 90).length, filtered.filter(s => s.completed === 1 && s.quiz > 75 && s.quiz <= 90).length];
    const distinction = [filtered.filter(s => s.completed === 0 && s.quiz > 90).length, filtered.filter(s => s.completed === 1 && s.quiz > 90).length];

    charts.w4Violin.data.datasets[0].data = [failing[0], borderline[0], passing[0], good[0], distinction[0]];
    charts.w4Violin.data.datasets[1].data = [failing[1], borderline[1], passing[1], good[1], distinction[1]];
    charts.w4Violin.resize();
    charts.w4Violin.update();
  }
}

function initW4Charts() {
  const colors = getChartColors();

  // 1. Correlation Rankings
  const ctxCorr = document.getElementById("w4CorrChart").getContext("2d");
  charts.w4Corr = new Chart(ctxCorr, {
    type: "bar",
    data: {
      labels: ["Attendance Rate", "Quiz Score", "Interaction Count", "Assignment Score", "Log_StudyHours", "Study Hours"],
      datasets: [{
        label: "Pearson Correlation (r)",
        data: [0.636, 0.584, 0.535, 0.521, 0.478, 0.448],
        backgroundColor: "rgba(56, 189, 248, 0.8)",
        borderRadius: 4
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { min: 0, max: 0.8, grid: { color: colors.grid }, ticks: { color: colors.text } },
        y: { grid: { display: false }, ticks: { color: colors.text, font: { size: 10 } } }
      },
      plugins: { legend: { display: false } }
    }
  });

  // 2. Score Violin / Distribution
  const ctxViolin = document.getElementById("w4ViolinChart").getContext("2d");
  charts.w4Violin = new Chart(ctxViolin, {
    type: "bar",
    data: {
      labels: ["<45% (Failing)", "45-60% (Borderline)", "61-75% (Passing)", "76-90% (Good)", ">90% (Distinction)"],
      datasets: [
        { label: "Non-Completers (0)", data: [], backgroundColor: "#f43f5e" },
        { label: "Completers (1)", data: [], backgroundColor: "#10b981" }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { grid: { color: colors.grid }, ticks: { color: colors.text, font: { size: 9 } } },
        y: { grid: { color: colors.grid }, ticks: { color: colors.text } }
      },
      plugins: { legend: { labels: { color: colors.text } } }
    }
  });

  // 3. Logistic Curve
  const xVals = [];
  const yVals = [];
  for (let x = 10; x <= 90; x += 2) {
    xVals.push(x);
    const z = (x - 50.0) / 10.0;
    yVals.push({ x: x, y: 1 / (1 + Math.exp(-z)) });
  }

  const ctxLog = document.getElementById("w4LogisticChart").getContext("2d");
  charts.w4Logistic = new Chart(ctxLog, {
    type: "scatter",
    data: {
      datasets: [
        {
          type: "line",
          label: "Logistic Decision Curve",
          data: yVals,
          borderColor: "#38bdf8",
          borderWidth: 2,
          pointRadius: 0,
          fill: false
        },
        {
          label: "Simulated Learner Dot",
          data: [{ x: 54.2, y: 0.65 }],
          backgroundColor: "#f59e0b",
          borderColor: "#ffffff",
          borderWidth: 2,
          pointRadius: 8
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { min: 10, max: 90, title: { display: true, text: "Composite Engagement (CLEI 0-100)", color: colors.text }, grid: { color: colors.grid }, ticks: { color: colors.text } },
        y: { min: 0, max: 1.0, title: { display: true, text: "Completion Probability", color: colors.text }, grid: { color: colors.grid }, ticks: { color: colors.text } }
      },
      plugins: { legend: { labels: { color: colors.text } } }
    }
  });

  // 4. Risk Triage Donut
  const ctxRisk = document.getElementById("w4RiskDonutChart").getContext("2d");
  charts.w4Risk = new Chart(ctxRisk, {
    type: "doughnut",
    data: {
      labels: ["High Risk (Critical)", "Moderate Risk", "Low Risk (On Track)"],
      datasets: [{
        data: [11, 7, 7],
        backgroundColor: ["#f43f5e", "#f59e0b", "#10b981"]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: "bottom", labels: { color: colors.text, boxWidth: 12 } } }
    }
  });

  // Simulator slider listeners
  ["sim-sh", "sim-quiz", "sim-att", "sim-int"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("input", updateStudentSimulator);
  });

  // Cohort toolbar listeners
  const riskSelect = document.getElementById("w4-risk-select");
  if (riskSelect) riskSelect.addEventListener("change", updateW4CohortView);

  const studySlider = document.getElementById("w4-min-study");
  if (studySlider) {
    studySlider.addEventListener("input", (e) => {
      document.getElementById("w4-min-study-val").textContent = `${e.target.value} hrs`;
      updateW4CohortView();
    });
  }

  const sortSelect = document.getElementById("w4-sort-select");
  if (sortSelect) sortSelect.addEventListener("change", updateW4CohortView);

  const resetBtn = document.getElementById("w4-reset-btn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (riskSelect) riskSelect.value = "ALL";
      if (studySlider) { studySlider.value = 0; document.getElementById("w4-min-study-val").textContent = "0 hrs"; }
      if (sortSelect) sortSelect.value = "clei-desc";
      updateW4CohortView();
    });
  }

  updateStudentSimulator();
  updateW4CohortView();
}

// ==========================================
// 8. THEME UPDATE FOR CHARTS
// ==========================================

function updateAllChartThemes() {
  const colors = getChartColors();
  Object.values(charts).forEach(ch => {
    if (!ch) return;
    if (ch.options.scales) {
      if (ch.options.scales.x) {
        if (ch.options.scales.x.ticks) ch.options.scales.x.ticks.color = colors.text;
        if (ch.options.scales.x.grid) ch.options.scales.x.grid.color = colors.grid;
      }
      if (ch.options.scales.y) {
        if (ch.options.scales.y.ticks) ch.options.scales.y.ticks.color = colors.text;
        if (ch.options.scales.y.grid) ch.options.scales.y.grid.color = colors.grid;
      }
    }
    if (ch.options.plugins && ch.options.plugins.legend) {
      if (ch.options.plugins.legend.labels) ch.options.plugins.legend.labels.color = colors.text;
    }
    ch.update();
  });
}

// ==========================================
// 9. INITIALIZATION
// ==========================================

window.addEventListener("DOMContentLoaded", () => {
  initOverviewCharts();
  initW1Charts();
  initW2Charts();
  initW3Charts();
  initW4Charts();
  console.log("Intelligence Cockpit Initialized successfully across all 4 weeks!");
});
