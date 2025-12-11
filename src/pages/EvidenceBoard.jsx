/**
 * EvidenceBoard Page
 * 
 * Detective wall with 6 clickable evidence cards
 */

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCase, DIAGNOSTIC_DOMAINS } from '../context/CaseContext'
import DomainDetail from '../components/DomainDetail'
import { DIAGNOSTIC_DATA } from '../data/diagnosticData'

export default function EvidenceBoard() {
  const navigate = useNavigate()
  const { domains, assessedCount, allAssessed } = useCase()
  const [selectedDomain, setSelectedDomain] = useState(null)

  const handleCardClick = (domain) => {
    setSelectedDomain(domain)
  }

  const handleCloseDetail = () => {
    setSelectedDomain(null)
  }

  return (
    <div className="evidence-board">
      <div className="evidence-board-header">
        <h1 className="evidence-board-title">Evidence Board</h1>
        <p className="evidence-board-subtitle">Evaluate each domain to build your case</p>
      </div>

      <div className="evidence-cards-grid">
        {domains.map((domain) => {
          const isAssessed = domain.isAssessed
          return (
            <div
              key={domain.id}
              className={`evidence-card ${isAssessed ? 'assessed' : ''}`}
              onClick={() => handleCardClick(domain)}
            >
              <div className="evidence-card-pin"></div>
              {isAssessed && <div className="verdict-stamp">VERDICT SET</div>}
              <div className="evidence-card-content">
                <h3 className="evidence-card-title">{domain.label}</h3>
                <div className="evidence-card-status">
                  {isAssessed ? (
                    <span className="status-reviewed">REVIEWED</span>
                  ) : (
                    <span className="status-unassessed">UNASSESSED</span>
                  )}
                </div>
                {isAssessed && domain.summaryLine && (
                  <div className="evidence-card-verdict">
                    {domain.summaryLine}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      <div className="evidence-board-footer">
        <div className="case-progress">
          <span className="progress-text">
            Case Progress: {assessedCount} of {DIAGNOSTIC_DOMAINS.length} domains evaluated
          </span>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${(assessedCount / DIAGNOSTIC_DOMAINS.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {allAssessed && (
          <button 
            className="proceed-button"
            onClick={() => navigate('/evaluation')}
          >
            Proceed to Forensic Analysis →
          </button>
        )}
      </div>

      {selectedDomain && (
        <DomainDetail
          domain={selectedDomain}
          data={DIAGNOSTIC_DATA[selectedDomain.key]}
          onClose={handleCloseDetail}
        />
      )}
    </div>
  )
}
