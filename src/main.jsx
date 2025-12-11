/**
 * Frankenstein: Guilt Simulator – Courtroom Edition
 * 
 * HOW TO RUN LOCALLY:
 * 1. Install dependencies: npm install
 * 2. Start development server: npm run dev
 * 3. Open the URL shown in terminal (usually http://localhost:5173)
 * 
 * This is an interactive literary analysis experience that transforms
 * Mary Shelley's Frankenstein into a courtroom-style guilt simulator.
 * Players make ethical evaluations through interactive choices, adjusting
 * guilt scores for Victor and the Creature based on key scenes from the novel.
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
