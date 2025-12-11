/**
 * DomainDetail Component
 * 
 * Domain Dossier modal with 3 simple verdict options
 */

import { useState } from 'react'
import { useCase } from '../context/CaseContext'

export default function DomainDetail({ domain, data, onClose }) {
  const { applyChoice } = useCase()
  const [selectedOption, setSelectedOption] = useState(null)
  const [verdictRecorded, setVerdictRecorded] = useState(false)

  if (!data) return null

  const handleChoice = (option, index) => {
    setSelectedOption(index)
    setVerdictRecorded(true)
    
    applyChoice({
      ...option.effects,
      domainKey: domain.key,
      interpretation: `${data.title}: ${option.label}`,
      summaryLine: option.summaryLine,
      verdictType: option.verdictType
    })
    
    // Close after a delay
    setTimeout(() => {
      onClose()
    }, 2000)
  }

  const getVerdictDescription = () => {
    if (!selectedOption && selectedOption !== 0) return ''
    const option = data.options[selectedOption]
    if (option.verdictType === 'victor') return 'Victor primarily responsible'
    if (option.verdictType === 'creature') return 'Creature primarily responsible'
    return 'Shared responsibility'
  }

  return (
    <div className="domain-detail-overlay" onClick={onClose}>
      <div className="domain-detail-modal" onClick={(e) => e.stopPropagation()}>
        <div className="case-note-label">DOMAIN DOSSIER</div>
        <button className="domain-detail-close" onClick={onClose}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 4L4 12M4 4l8 8"/>
          </svg>
        </button>
        
        <div className="domain-detail-header">
          <h2 className="domain-detail-title">{data.title}</h2>
          {data.question && (
            <p className="domain-question">{data.question}</p>
          )}
        </div>

        <div className="case-evidence-section">
          <div className="case-evidence-label">CASE EVIDENCE</div>
          <ul className="case-evidence-list">
            {data.caseEvidence && data.caseEvidence.map((evidence, index) => (
              <li key={index} className="case-evidence-item">{evidence}</li>
            ))}
          </ul>
        </div>

        <div className="choices-container">
          {data.options.map((option, index) => (
            <button
              key={index}
              className={`choice-button ${selectedOption === index ? 'selected' : ''}`}
              onClick={() => handleChoice(option, index)}
              disabled={selectedOption !== null}
            >
              <div className="choice-label">{option.label}</div>
              <div className="choice-reasoning">{option.reasoning}</div>
            </button>
          ))}
        </div>

        {verdictRecorded && (
          <div className="verdict-confirmation">
            Verdict recorded: {getVerdictDescription()}.
          </div>
        )}
      </div>
    </div>
  )
}
