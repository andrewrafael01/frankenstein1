/**
 * CaseContext
 * 
 * Global state management for the case evaluation.
 * Ensures state persists across route navigation.
 */

import { createContext, useContext, useState } from 'react'

const CaseContext = createContext()

export const useCase = () => {
  const context = useContext(CaseContext)
  if (!context) {
    throw new Error('useCase must be used within CaseProvider')
  }
  return context
}

const DIAGNOSTIC_DOMAINS = [
  { id: 0, label: 'Trauma History', key: 'trauma' },
  { id: 1, label: 'Abandonment Profile', key: 'abandonment' },
  { id: 2, label: 'Attachment & Recognition Needs', key: 'attachment' },
  { id: 3, label: 'Violence Motivation Assessment', key: 'violence' },
  { id: 4, label: 'Remorse & Moral Repair', key: 'remorse' },
  { id: 5, label: 'External/Societal Conditioning', key: 'societal' }
]

export const CaseProvider = ({ children }) => {
  // Responsibility indices
  const [victorResponsibility, setVictorResponsibility] = useState(33)
  const [creatureResponsibility, setCreatureResponsibility] = useState(33)
  const [systemResponsibility, setSystemResponsibility] = useState(34)
  
  // Domain assessment tracking
  const [domains, setDomains] = useState(
    DIAGNOSTIC_DOMAINS.map(domain => ({
      ...domain,
      isAssessed: false,
      summaryLine: '',
      verdictType: null // 'victor', 'creature', or 'shared'
    }))
  )
  
  const [caseNotes, setCaseNotes] = useState([])
  const [toast, setToast] = useState(null)

  // Apply choice effects to responsibility indices
  const applyChoice = ({ victorDelta = 0, creatureDelta = 0, systemDelta = 0, domainKey, interpretation = '', summaryLine = '', verdictType = null }) => {
    setVictorResponsibility(prev => Math.max(0, Math.min(100, prev + victorDelta)))
    setCreatureResponsibility(prev => Math.max(0, Math.min(100, prev + creatureDelta)))
    setSystemResponsibility(prev => Math.max(0, Math.min(100, prev + systemDelta)))
    
    // Add case note
    if (interpretation) {
      const domain = DIAGNOSTIC_DOMAINS.find(d => d.key === domainKey)
      setCaseNotes(prev => [...prev, {
        domain: domain?.label || domainKey,
        interpretation,
        timestamp: new Date().toLocaleTimeString()
      }])
    }
    
    // Mark domain as assessed and update summary
    if (domainKey) {
      setDomains(prev => prev.map(domain => 
        domain.key === domainKey
          ? { ...domain, isAssessed: true, summaryLine, verdictType }
          : domain
      ))
    }
    
    // Show toast notification
    setToast({
      victorDelta,
      creatureDelta,
      systemDelta
    })
    
    // Clear toast after 3 seconds
    setTimeout(() => setToast(null), 3000)
  }

  // Reset all case data
  const resetCase = () => {
    setVictorResponsibility(33)
    setCreatureResponsibility(33)
    setSystemResponsibility(34)
    setDomains(DIAGNOSTIC_DOMAINS.map(domain => ({
      ...domain,
      isAssessed: false,
      summaryLine: '',
      verdictType: null
    })))
    setCaseNotes([])
    setToast(null)
  }

  const assessedCount = domains.filter(d => d.isAssessed).length
  const allAssessed = assessedCount === DIAGNOSTIC_DOMAINS.length

  const value = {
    // State
    victorResponsibility,
    creatureResponsibility,
    systemResponsibility,
    domains,
    caseNotes,
    toast,
    assessedCount,
    allAssessed,
    // Actions
    applyChoice,
    resetCase
  }

  return <CaseContext.Provider value={value}>{children}</CaseContext.Provider>
}

export { DIAGNOSTIC_DOMAINS }
