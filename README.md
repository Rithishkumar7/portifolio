# 📐 Rithish Janjeerapu | Developer Portfolio

A high-performance, responsive developer portfolio featuring a premium **Blueprint Grid Aesthetic**. Built with a technical, engineering-inspired light-grey style, this portfolio showcases full-stack web development projects, machine learning models, achievements, and professional certifications.

---

## 🌊 Premium Features

### 1. Scroll-Driven Fluid-Flow Timeline
The vertical timeline in the **Education & Certifications** section has been enhanced with a dynamic, scroll-synchronized fluid energy stream:
- **Interactive Energy Flow**: A glowing orange stream line grow downwards as the user scrolls, capped by a pulsing, rotating square liquid head.
- **Blueprint-Aligned Visual Effects**: When the stream reaches each milestone dot, it triggers a square $45^\circ$ outline ripple that rotates $90^\circ$ and dissolves outwards (simulating a scanning sonar sweep).
- **Fade & Scale Card Reveal**: Milestone cards start semi-transparent (`opacity: 0.15`) and slightly scaled down, transitioning to active highlighted status with custom shadow effects as they cross the trigger threshold.
- **Dual-Engine Architecture**: 
  - *Engine A*: Leverages hardware-accelerated **GSAP ScrollTrigger** for micro-scrubbed easing.
  - *Engine B*: Implements a high-performance **Vanilla JS fallback** using `requestAnimationFrame` and passive scroll listeners to guarantee smooth 60fps performance offline or if CDNs are blocked.
  - *Precision Sync*: Calibrated to trigger precisely when elements cross **60% of the viewport height** on both desktop and mobile layouts.

### 📄 2. Dedicated PDF Resume Page
Includes an embedded Resume page (`resume.html`) mapped directly to your latest CV:
- **Desktop Iframe Viewer**: Displays the PDF (`resume_full_stack.pdf`) centered inside a blueprint card container.
- **Mobile Fallback**: To ensure a premium UX (since mobile browsers block PDF iframe previews), mobile viewports automatically render a custom dashed-border warning card featuring a direct, highly-visible orange action button to download/view the resume.
- **Static Assets Packaging**: Setup to copy files inside the `public/` directory directly to the build output root, securing asset paths.

### 🎨 3. Elegant Technical Color Palette
The portfolio rejects default backgrounds and dark glassmorphism for a calibrated blueprint grid:
- **Primary Headings**: Saturated Pine Green (`#094726`)
- **Subtexts & Dates**: Deep Emerald Green (`#116135`)
- **Paragraphs & Body**: Highly-readable Dark Sage Green (`#1d4d33`)
- **Accents**: High-contrast Technical Orange (`#ff7a20`)
- **Background**: Light Grey (`#e6e6e6`) with a repeating grid pattern overlay.

---

## 🛠️ Project Catalog

- **AI-Powered Blog Platform**: Full-stack application utilizing React, Node.js, Express, and MongoDB. Integrates OpenAI and Eden AI APIs for automated writing assistance and blog generation.
- **Multi-Format Document RAG System**: Retrieval-Augmented Generation platform built with Python, LangChain, FAISS vector database, sentence-transformer embeddings, and Groq/LLaMA 3.1 for context-aware responses.
- **Multiple Disease Prediction and Recommendation System**: Machine learning model stack built using Scikit-learn to forecast Parkinson's, heart disease, and diabetes with severity-based recommendation paths.
- **Student Management System**: Responsive client-server application with complete CRUD functionalities for record keeping.

---

## ⚙️ Tech Stack & Dependencies

- **Core**: HTML5, Vanilla CSS3 (Custom properties), Vanilla ES Modules.
- **Animation**: GSAP 3 (GreenSock Animation Platform) & ScrollTrigger CDN.
- **Bundler & Dev Server**: Vite (hot-module replacement enabled).
- **Fonts**: Space Mono (Google Fonts) & Space Grotesk (Google Fonts).

---

## 🚀 Setup & Local Development

To run, preview, or build the portfolio project locally, follow these steps:

### 1. Prerequisites
Make sure [Node.js](https://nodejs.org/) (version 18+) is installed on your computer.

### 2. Install Dependencies
Clone the repository and install the development server packages:
```bash
npm install
```

### 3. Run Development Server
Start the local server with hot reloading:
```bash
npm start
```
The site will spin up at **`http://localhost:5173/`**.

### 4. Build for Production
Bundle and optimize all static assets (HTML, CSS, JS, and PDF documents) for server hosting:
```bash
npm run build
```
This generates a fully self-contained folder under **`dist/`** which you can deploy to hosting services like Vercel, Netlify, Render, or GitHub Pages.

### 5. Preview Production Build
Run a local preview server on the compiled production files:
```bash
npm run preview
```
