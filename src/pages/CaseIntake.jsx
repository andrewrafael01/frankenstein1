/**
 * CaseIntake Page
 * 
 * Landing page with detective-office vibe and parallax effect
 */

import { useNavigate } from 'react-router-dom'
import MagnifyingGlassIcon from '../components/MagnifyingGlassIcon'

export default function CaseIntake() {
  const navigate = useNavigate()

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
            <h1 className="case-intake-title">Frankenstein: Psychological Case Evaluation Simulator</h1>
            <p className="case-intake-subtitle">
              A forensic case study of responsibility, trauma, and systemic failure.
            </p>
            <p className="case-intake-description-line">
              You are reviewing the evidence to determine who bears responsibility: Victor, the Creature, or both.
            </p>

            <button 
              className="open-case-button"
              onClick={() => navigate('/evidence')}
            >
              <MagnifyingGlassIcon size={18} color="currentColor" />
              <span>Open Case File</span>
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
    </div>
  )
}
