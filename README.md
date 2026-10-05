# Fermor Homepage Redesign — V3 Motion & Experience Overhaul

A production-grade redesign and frontend implementation of the **Fermor** homepage (`https://fermor.in`), built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Lenis**.

---

## 01. Executive Overview

Fermor is building a clearer, simpler way for people in India to understand, act, and grow financially. 

Rather than presenting finance as another generic SaaS tool with disjointed card walls or random decorative background particles, this redesign turns Fermor into a unified **financial command center and editorial publication**. The entire page communicates movement:

$$\text{DATA} \longrightarrow \text{UNDERSTANDING} \longrightarrow \text{DECISION} \longrightarrow \text{ACTION} \longrightarrow \text{TIME} \longrightarrow \text{OUTCOME}$$

---

## 02. Motion Design & Interaction Architecture (V3)

1. **Clean Hero Financial Command Center**:
   - Deep forest canvas (`#0B2A20`) with clean technical grid lines.
   - Line-by-line editorial headline typography reveal.
   - Interactive `₹53,00,000` wealth command panel scaling ($1.0 \rightarrow 0.94$) and reacting to scroll.
   - Continuous single data line leading directly into Ask Fermor.

2. **Ask Fermor Progressive Dialogue**:
   - Staggered conversation flow: Query $\rightarrow$ Plain language analysis $\rightarrow$ Categorical breakdown $\rightarrow$ Action recommendation.
   - Live interactive suggestion chips with smooth typing and instant re-calculation.

3. **Understand Spending with Data Reveal**:
   - Progressive upward number count ($0 \rightarrow ₹48,320$) as the section enters the viewport.
   - Large horizontal editorial bar composition (*Food & Dining 26%*, *Shopping 17%*, *Transport 14%*, *Others 43%*) growing smoothly from zero.
   - Month comparison toggle (*This Month* vs *Last Month*).

4. **Invest Simply & Live SIP Compounding**:
   - Staggered stock row reveals with animated SVG sparklines.
   - Physical tab sliding indicator (*Stocks*, *Mutual Funds*, *ETFs*).
   - Interactive Monthly SIP slider dynamically driving 10-year compounding projections ($₹5,000/\text{mo} \rightarrow ₹11.6\text{L}$, $₹15,000/\text{mo} \rightarrow ₹34.8\text{L}$).

5. **Cinematic Forecast Horizon (Signature Experience)**:
   - Deep forest timeline terminal where the user can scrub across `Now`, `2Y`, `5Y`, `10Y`, and `15Y`.
   - The SVG compounding line dynamically draws itself based on the selected horizon.
   - Projected wealth transitions smoothly ($₹53\text{L} \rightarrow ₹73.2\text{L} \rightarrow ₹1.14\text{Cr} \rightarrow ₹1.64\text{Cr} \rightarrow ₹3.42\text{Cr}$).
   - Clearly labeled illustrative returns (12% assumed CAGR).

6. **Product Methodology (Active Workflow Story)**:
   - Replaced generic 3-card grids with an active step-by-step product workflow (`01 ANALYZE` $\rightarrow$ `02 PLAN` $\rightarrow$ `03 INVEST`).
   - Large active visual and metric panel that updates as steps advance.

7. **Financial Canvas (Spatial Relationship Map)**:
   - Central Net Worth hub connected to Assets, Investments, Cashflow, Goals, and Debt.
   - On hover, the active node illuminates its connection to Net Worth and dims unrelated pillars.

8. **Calculator Discovery Command Center**:
   - Press `/` keyboard shortcut to immediately focus search across 15+ Indian calculators (SIP, Home Loan EMI, Old vs New Tax Regime FY 2025-26, FIRE, PPF, EPF).

9. **Lenis Controlled Smooth Scroll**:
   - Heavy, smooth, controlled scrolling with a razor-thin 2px mint vertical progress rail on desktop.

---

## 03. Design System & Palette

- **Deep Forest Canvas**: `#0B2A20`, `#12382B`
- **Mineral Paper Canvas**: `#F1F3EE`, `#E9EDE7`, `#E1E7E0`
- **Mint Action Signal**: `#7CFF9B`, `#C7F5CF` (reserved exclusively for growth vectors and primary triggers)
- **Charcoal Ink**: `#101713`
- **Headings**: `Bricolage Grotesque`
- **Body**: `Instrument Sans`
- **Numbers / Metrics**: `IBM Plex Mono` (Tabular numbers for INR formatting like `₹53,00,000` and `₹1,64,60,996`)

---

## 04. Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build Check
```bash
npm run build
npm run start
```
