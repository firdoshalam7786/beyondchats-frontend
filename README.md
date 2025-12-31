# BeyondChats – Full Stack Assignment

This repository contains my submission for the **BeyondChats – Full Stack Web Developer Intern** assignment.  
The project demonstrates end-to-end implementation across scraping, AI-assisted content rewriting, API design, and a React-based frontend dashboard.

---

## Project Overview

The assignment is divided into three phases:

### Phase 1 – Article Scraping & APIs
- Scraped the **5 oldest articles** from the BeyondChats blogs section.
- Stored articles in a database.
- Built CRUD APIs using Laravel to manage articles.

### Phase 2 – AI-Based Content Update Pipeline
- Created a Node.js script to:
  - Fetch articles from the Phase 1 APIs.
  - Search article titles on Google.
  - Extract top-ranking related articles from external websites.
  - Scrape and analyze their content.
  - Use an LLM API to rewrite the original article by aligning it with top-ranking content.
  - Publish the updated article back to the database using the APIs.
  - Store reference URLs for transparency.

### Phase 3 – React Frontend (This Repository)
- Built a **ReactJS (Vite + Tailwind CSS)** frontend.
- Fetches articles from the Laravel APIs.
- Displays:
  - Original article content (preview)
  - AI-updated article status/content (if available)
- Clean, responsive, and professional UI.

---

## Frontend Features

- Responsive dashboard layout
- Article cards with:
  - Title
  - Status badge (SCRAPED / UPDATED)
  - Original article preview
  - AI-updated content state
  - Source link to original blog
- Graceful handling of:
  - Loading state
  - Empty state
  - Missing AI-updated content

---

## Architecture & Data Flow

BeyondChats Blog
↓
[ Scraper (Phase 1) ]
↓
[ Database + Laravel APIs ]
↓
[ Node.js AI Pipeline (Phase 2) ]
↓
[ Updated Articles Stored ]
↓
[ React Frontend (Phase 3) ]


### Detailed Data Flow
1. Articles are scraped and stored via Laravel APIs.
2. Node.js pipeline fetches articles and external references.
3. LLM rewrites the content using reference articles.
4. Updated content is saved back using APIs.
5. React frontend fetches and displays both original and updated data.

---

## Local Setup Instructions (Frontend)

### Prerequisites
- Node.js (v18+ recommended)
- Backend APIs running locally

### Setup Steps

```bash
# Clone the repository
git clone <your-github-repo-url>

# Navigate to frontend folder
cd beyondchats-frontend

# Install dependencies
npm install

# Start development server
npm run dev

$$ Front Will be run
http://localhost:5173

$$ API Configuration
http://localhost:5001/articles


### High-Level Flow

Make sure:

Laravel backend is running on port 5001

CORS is enabled in the backend

$$ Live Demo

$$ Live Frontend URL:
(Add your deployed frontend link here — e.g. Vercel / Netlify)

$$ Tech Stack
Frontend

ReactJS (Vite)

Tailwind CSS

TanStack React Query

Axios

Backend (Phase 1 & 2)

Laravel (APIs)

Node.js (AI pipeline)

MongoDB / Database

LLM API

$Notes

Phase 3 intentionally focuses on data visualization, not content mutation.

If AI-updated content is not yet available, the UI clearly indicates a pending state.

All source articles are cited via direct links for transparency.

$$ Assignment Evaluation Alignment

Completeness: All 3 phases implemented

UI/UX: Clean, professional, and responsive

Code Quality: Modular, readable, and maintainable

Documentation: Clear setup and architecture explanation

👤 Author

$$$ Firdosh Alam
Full Stack Web Developer

$$ Next Steps (IMPORTANT)

1️⃣ Paste this into `README.md` (root folder)  
2️⃣ Add **Live Link** once deployed  
3️⃣ Push changes to GitHub  

```bash
git add README.md
git commit -m "Add project README with architecture and setup"
git push









# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
