/**
 * Main App Component
 * 
 * Frankenstein Psychological Case Evaluation Simulator
 * Multi-page detective case file experience
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CaseProvider } from './context/CaseContext'
import CaseIntake from './pages/CaseIntake'
import EvidenceBoard from './pages/EvidenceBoard'
import EvaluationLab from './pages/EvaluationLab'
import CaseReport from './pages/CaseReport'

function App() {
  return (
    <CaseProvider>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" element={<CaseIntake />} />
            <Route path="/evidence" element={<EvidenceBoard />} />
            <Route path="/evaluation" element={<EvaluationLab />} />
            <Route path="/report" element={<CaseReport />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CaseProvider>
  )
}

export default App