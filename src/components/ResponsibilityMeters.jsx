/**
 * ResponsibilityMeters Component
 * 
 * Displays three animated responsibility meters:
 * - Victor Responsibility Index
 * - Creature Responsibility Index
 * - System/Society Responsibility Index
 */

export default function ResponsibilityMeters({ victorResponsibility, creatureResponsibility, systemResponsibility }) {
  return (
    <div className="responsibility-meters">
      <div className="meter-item">
        <div className="meter-variable-label">Victor — Creator</div>
        <div className="meter-header">
          <span className="meter-label">Victor Responsibility</span>
          <span className="meter-value">{Math.round(victorResponsibility)}%</span>
        </div>
        <div className="meter-bar-container">
          <div 
            className="meter-bar victor-bar" 
            style={{ width: `${victorResponsibility}%` }}
          ></div>
        </div>
      </div>

      <div className="meter-item">
        <div className="meter-variable-label">Creature — Subject</div>
        <div className="meter-header">
          <span className="meter-label">Creature Responsibility</span>
          <span className="meter-value">{Math.round(creatureResponsibility)}%</span>
        </div>
        <div className="meter-bar-container">
          <div 
            className="meter-bar creature-bar" 
            style={{ width: `${creatureResponsibility}%` }}
          ></div>
        </div>
      </div>

      <div className="meter-item">
        <div className="meter-variable-label">System / Environment</div>
        <div className="meter-header">
          <span className="meter-label">System/Society Responsibility</span>
          <span className="meter-value">{Math.round(systemResponsibility)}%</span>
        </div>
        <div className="meter-bar-container">
          <div 
            className="meter-bar system-bar" 
            style={{ width: `${systemResponsibility}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}
