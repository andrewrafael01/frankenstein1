/**
 * EvaluationLab Page
 * 
 * Case Findings Board - Detective case dashboard
 */

import { useNavigate } from 'react-router-dom'
import { useCase } from '../context/CaseContext'

export default function EvaluationLab() {
  const navigate = useNavigate()
  const { 
    victorResponsibility, 
    creatureResponsibility, 
    systemResponsibility,
    domains,
    allAssessed
  } = useCase()

  const getCaseSummary = () => {
    const max = Math.max(victorResponsibility, creatureResponsibility, systemResponsibility)
    
    if (systemResponsibility === max) {
      return 'Your evaluation emphasizes systemic and societal structures as bearing primary responsibility. The tragedy emerges from social conditions that create harm, refuse recognition, and prevent repair.'
    } else if (victorResponsibility === max) {
      return 'Your evaluation places primary responsibility upon Victor Frankenstein. His abandonment, broken promises, and refusal to acknowledge responsibility establish the conditions for tragedy.'
    } else if (creatureResponsibility === max) {
      return 'Your evaluation places primary responsibility upon the Creature. Despite trauma and rejection, his capacity for agency and conscious choices to commit violence indicate individual responsibility.'
    } else {
      return 'Your evaluation identifies networked responsibility across all parties. The tragedy emerges from a network of failures: Victor\'s abandonment, the Creature\'s choices, and systemic rejection of difference.'
    }
  }

  const assessedDomains = domains.filter(d => d.isAssessed)

  const getVerdictBadgeClass = (verdictType) => {
    if (verdictType === 'victor') return 'verdict-badge victor-badge'
    if (verdictType === 'creature') return 'verdict-badge creature-badge'
    return 'verdict-badge shared-badge'
  }

  const getVerdictText = (verdictType) => {
    if (verdictType === 'victor') return 'Blame Victor'
    if (verdictType === 'creature') return 'Blame Creature'
    return 'Shared Responsibility'
  }

  return (
    <div className="evaluation-lab">
      <div className="evaluation-lab-background-image">
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

      <div className="evaluation-lab-content">
        <div className="evaluation-lab-header">
          <h1 className="evaluation-lab-title">Case Findings Board</h1>
          <p className="evaluation-lab-subtitle">SYNTHESIS OF EVIDENCE & RESPONSIBILITY</p>
        </div>

        <div className="evaluation-lab-main-panel">
          <div className="case-meta-strip">
            <span className="meta-label">CASE:</span>
            <span className="meta-value">FRK-001</span>
            <span className="meta-divider">·</span>
            <span className="meta-label">SUBJECT:</span>
            <span className="meta-value">Victor Frankenstein v. The Creature</span>
            <span className="meta-divider">·</span>
            <span className="meta-label">STATUS:</span>
            <span className="meta-value">FINDINGS DRAFT</span>
          </div>

          <div className="evaluation-lab-layout">
            <div className="evaluation-lab-left">
              <div className="responsibility-breakdown-card">
                <h2 className="card-title">Responsibility Breakdown</h2>
                <p className="card-subtitle">Relative weight assigned to each party</p>
                
                <div className="responsibility-bars">
                  <div className="responsibility-bar-item">
                    <div className="bar-label-row">
                      <span className="bar-main-label">VICTOR — CREATOR</span>
                      <span className="bar-sub-label">RESPONSIBILITY</span>
                    </div>
                    <div className="bar-container">
                      <div 
                        className="bar-fill victor-fill" 
                        style={{ width: `${victorResponsibility}%` }}
                      ></div>
                      <span className="bar-percentage">{Math.round(victorResponsibility)}%</span>
                    </div>
                  </div>

                  <div className="responsibility-bar-item">
                    <div className="bar-label-row">
                      <span className="bar-main-label">CREATURE — SUBJECT</span>
                      <span className="bar-sub-label">RESPONSIBILITY</span>
                    </div>
                    <div className="bar-container">
                      <div 
                        className="bar-fill creature-fill" 
                        style={{ width: `${creatureResponsibility}%` }}
                      ></div>
                      <span className="bar-percentage">{Math.round(creatureResponsibility)}%</span>
                    </div>
                  </div>

                  <div className="responsibility-bar-item">
                    <div className="bar-label-row">
                      <span className="bar-main-label">SYSTEM / ENVIRONMENT</span>
                      <span className="bar-sub-label">RESPONSIBILITY</span>
                    </div>
                    <div className="bar-container">
                      <div 
                        className="bar-fill system-fill" 
                        style={{ width: `${systemResponsibility}%` }}
                      ></div>
                      <span className="bar-percentage">{Math.round(systemResponsibility)}%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="investigator-note-card">
                <h2 className="card-title">Investigator's Note</h2>
                <p className="investigator-note-text">{getCaseSummary()}</p>
              </div>
            </div>

            <div className="evaluation-lab-right">
              <div className="case-files-card">
                <h2 className="card-title">Case Files Reviewed</h2>
                <div className="case-files-list">
                  {assessedDomains.map((domain) => (
                    <div key={domain.id} className="case-file-item">
                      <div className="case-file-name">{domain.label}</div>
                      <div className={getVerdictBadgeClass(domain.verdictType)}>
                        {getVerdictText(domain.verdictType)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="evaluation-lab-actions">
            <button 
              className="back-to-evidence-button"
              onClick={() => navigate('/evidence')}
            >
              Back to Evidence Board
            </button>
            <button 
              className="generate-report-button"
              onClick={() => navigate('/report')}
              disabled={!allAssessed}
            >
              {allAssessed ? 'Generate Case Report →' : `Complete ${6 - assessedDomains.length} more file${6 - assessedDomains.length !== 1 ? 's' : ''} to generate report`}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
