/**
 * CaseReport Component
 * 
 * Displays the final case report with:
 * - Responsibility distribution
 * - Synthesis paragraph
 * - Clinical Closing Statement (Rap Form)
 */

import { useState } from 'react'

export default function CaseReport({ victorResponsibility, creatureResponsibility, systemResponsibility, caseNotes }) {
  const [isPlaying, setIsPlaying] = useState(false)

  const getSynthesis = () => {
    const total = victorResponsibility + creatureResponsibility + systemResponsibility
    const victorPct = (victorResponsibility / total * 100).toFixed(1)
    const creaturePct = (creatureResponsibility / total * 100).toFixed(1)
    const systemPct = (systemResponsibility / total * 100).toFixed(1)

    const max = Math.max(victorResponsibility, creatureResponsibility, systemResponsibility)
    
    if (systemResponsibility === max) {
      return `This case evaluation identifies systemic and societal structures as bearing primary responsibility (${systemPct}%). The tragedy emerges from social conditions—fear of difference, rejection of deviation, and institutional failures to accommodate those who differ. Victor's hubris and the Creature's violence are shaped by these systemic forces. The real failure lies in social structures that create conditions for harm, refuse recognition, and prevent repair. This reading emphasizes that monstrosity is constructed through social rejection and systemic neglect, not inherent in individuals.`
    } else if (victorResponsibility === max) {
      return `This case evaluation places primary responsibility upon Victor Frankenstein (${victorPct}%). His immediate abandonment, broken promises, and refusal to acknowledge responsibility for his creation establish the conditions for tragedy. While the Creature makes choices and the system contributes, Victor's hubris and neglect are the foundational failures. This reading emphasizes creator responsibility: the act of creation without care, knowledge without wisdom, and ambition without accountability.`
    } else if (creatureResponsibility === max) {
      return `This case evaluation places primary responsibility upon the Creature (${creaturePct}%). Despite trauma, abandonment, and social rejection, the Creature demonstrates agency in his choices. His capacity for learning, moral reasoning, and conscious decisions to commit violence indicate individual responsibility. While Victor's abandonment and systemic factors contribute, the Creature's choices—particularly his deliberate murders—represent agency that cannot be fully attributed to external conditions.`
    } else {
      return `This case evaluation identifies networked responsibility across all parties. Victor (${victorPct}%), the Creature (${creaturePct}%), and systemic structures (${systemPct}%) all contribute significantly. The tragedy emerges from a network of failures: Victor's abandonment, the Creature's choices, and systemic rejection of difference. No single party bears exclusive responsibility; instead, responsibility is distributed across individuals and systems that mutually shape outcomes.`
    }
  }

  const toggleAudio = () => {
    setIsPlaying(!isPlaying)
    const audio = document.getElementById('rap-beat')
    if (audio) {
      if (isPlaying) {
        audio.pause()
      } else {
        audio.play()
      }
    }
  }

  const total = victorResponsibility + creatureResponsibility + systemResponsibility
  const victorPct = total > 0 ? (victorResponsibility / total * 100).toFixed(1) : 33.3
  const creaturePct = total > 0 ? (creatureResponsibility / total * 100).toFixed(1) : 33.3
  const systemPct = total > 0 ? (systemResponsibility / total * 100).toFixed(1) : 33.3

  return (
    <div className="case-report case-report-fade-in">
      <div className="case-report-header">
        <h1 className="case-report-title">CASE REPORT</h1>
        <h2 className="case-report-subtitle">SYSTEMIC RESPONSIBILITY ANALYSIS</h2>
      </div>

      <div className="responsibility-distribution">
        <h3 className="distribution-title">Responsibility Distribution</h3>
        <div className="distribution-bars">
          <div className="distribution-bar-item">
            <div className="distribution-label">Victor: {victorPct}%</div>
            <div className="distribution-bar-container">
              <div className="distribution-bar victor-bar" style={{ width: `${victorPct}%` }}></div>
            </div>
          </div>
          <div className="distribution-bar-item">
            <div className="distribution-label">Creature: {creaturePct}%</div>
            <div className="distribution-bar-container">
              <div className="distribution-bar creature-bar" style={{ width: `${creaturePct}%` }}></div>
            </div>
          </div>
          <div className="distribution-bar-item">
            <div className="distribution-label">System/Society: {systemPct}%</div>
            <div className="distribution-bar-container">
              <div className="distribution-bar system-bar" style={{ width: `${systemPct}%` }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="case-synthesis">
        <h3 className="synthesis-title">Clinical Synthesis</h3>
        <p className="synthesis-text">{getSynthesis()}</p>
      </div>

      <div className="clinical-closing">
        <h3 className="closing-title">Clinical Closing Statement (Rap Form)</h3>
        
        <div className="rap-verses">
          <div className="rap-verse">
            <div className="verse-label">Victor – Verse</div>
            <div className="verse-content">
              <p>I chased the lightning, thought I could play God</p>
              <p>Created life in the lab, but the dream was flawed</p>
              <p>Learn from me, how dangerous is the acquirement of knowledge</p>
              <p>I saw that yellow eye open, felt the horror, felt the damage</p>
              <p>Ran from my creation, left him alone in the dark</p>
              <p>Broke every promise, left my mark</p>
              <p>Now I'm on this ship, dying in the Arctic cold</p>
              <p>Paying for the story that I never should've told</p>
            </div>
          </div>

          <div className="rap-verse">
            <div className="verse-label">Creature – Verse</div>
            <div className="verse-content">
              <p>I ought to be thy Adam, but I'm the fallen angel instead</p>
              <p>You made me, then you left me, left me for dead</p>
              <p>I was benevolent and good, misery made me a fiend</p>
              <p>Every door slammed in my face, every hope unseen</p>
              <p>If I cannot inspire love, I will cause fear</p>
              <p>That's what you taught me, that's what I learned here</p>
              <p>Life is an accumulation of anguish, but it's dear to me</p>
              <p>Now I'll burn on this pyre, finally set free</p>
            </div>
          </div>

          <div className="rap-verse">
            <div className="verse-label">Therapist – Verse</div>
            <div className="verse-content">
              <p>Two broken souls locked in a cycle of pain</p>
              <p>One created, one abandoned, both going insane</p>
              <p>Nothing is so painful as a great and sudden change</p>
              <p>Victor saw his dream die, the Creature felt the range</p>
              <p>Of human cruelty, rejection, the fear of what's different</p>
              <p>Monstrosity's not in the form, it's in how we're distant</p>
              <p>From each other, from empathy, from care</p>
              <p>This is a tragedy of creation without repair</p>
            </div>
          </div>
        </div>

        <div className="audio-controls">
          <p className="audio-note">
            <em>Drop your instrumental as rap_beat.mp3 in the public folder.</em>
          </p>
          <audio id="rap-beat" src="/rap_beat.mp3" loop></audio>
          <button className="play-beat-button" onClick={toggleAudio}>
            {isPlaying ? '⏸ Pause Beat' : '▶ Play Beat While Reading'}
          </button>
        </div>
      </div>
    </div>
  )
}
