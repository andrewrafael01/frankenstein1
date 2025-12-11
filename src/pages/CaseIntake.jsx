/**
 * CaseIntake Page
 * 
 * Landing page with detective-office vibe and parallax effect
 */

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MagnifyingGlassIcon from '../components/MagnifyingGlassIcon'

export default function CaseIntake() {
  const navigate = useNavigate()
  const [showAboutModal, setShowAboutModal] = useState(false)

  return (
    <div className="case-intake">
      <div className="case-intake-background-image">
        <img 
          src="/detective.png" 
          alt="Detective case file" 
          className="detective-bg-image"
          onError={(e) => {
            e.target.src = '/detective.jpg';
            e.target.onerror = () => {
              e.target.src = '/detective.jpeg';
            };
          }}
        />
        <div className="detective-bg-overlay"></div>
        <div className="spotlight-effect"></div>
      </div>
      
      <div className="case-intake-content">
        <div className="case-intake-layout">
          <div className="case-intake-left">
            <h1 className="case-intake-title">
              <span className="title-line-1">The Trial of Frankenstein:</span>
              <br />
              <span className="title-indent">Who is Truly</span>
              <br />
              <span className="title-indent">Guilty?</span>
            </h1>
            <p className="case-intake-subtitle">
              A forensic game where players analyze evidence to decide who is truly guilty in the Frankenstein tragedies.
            </p>

            <button 
              className="open-case-button"
              onClick={() => navigate('/evidence')}
            >
              <MagnifyingGlassIcon size={18} color="currentColor" />
              <span>Open Case File</span>
            </button>
            
            <button 
              className="about-link"
              onClick={() => setShowAboutModal(true)}
            >
              What is this investigation?
            </button>
          </div>

          <div className="case-intake-right">
            <div className="case-label-box">
              <div className="case-label-text">CASE: FRK-001</div>
              <div className="case-label-subtext">Victor Frankenstein v. The Creature</div>
            </div>
          </div>
        </div>
      </div>

      {showAboutModal && (
        <div 
          className="about-modal-overlay"
          onClick={() => setShowAboutModal(false)}
        >
          <div 
            className="about-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="about-modal-close"
              onClick={() => setShowAboutModal(false)}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 5L5 15M5 5l10 10"/>
              </svg>
            </button>
            <div className="about-modal-text">
              <p>You are stepping into the role of a forensic evaluator assigned to Case FRK-001.</p>
              <p>Your task is to:</p>
              <ul className="about-modal-list">
                <li>Review testimony</li>
                <li>Examine psychological profiles</li>
                <li>Analyze trauma histories</li>
                <li>Identify missed opportunities</li>
                <li>Determine responsibility in the Frankenstein tragedy</li>
              </ul>
              <p>Your decisions affect the case results and your final report becomes the official judgment.</p>
              <p className="about-modal-goodluck">Good luck</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
