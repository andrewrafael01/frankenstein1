/**
 * Guilt Meter Component
 * 
 * Displays animated guilt bars for Victor and Creature,
 * along with a dynamic status line that updates based on
 * the relative guilt distribution.
 */

export default function GuiltMeter({ victorGuilt, creatureGuilt }) {
  const getStatusText = () => {
    const diff = victorGuilt - creatureGuilt
    
    if (Math.abs(diff) < 10) {
      return "You're reading this as shared responsibility / networked guilt."
    } else if (diff > 20) {
      return "You're leaning toward Victor as the architect of this tragedy."
    } else if (diff < -20) {
      return "You're holding the Creature more responsible for the violence."
    } else if (diff > 0) {
      return "You're seeing Victor as primarily responsible, though the Creature bears some blame."
    } else {
      return "You're seeing the Creature as primarily responsible, though Victor's actions contributed."
    }
  }

  return (
    <div className="guilt-meter-container">
      <div className="guilt-meter">
        <div className="meter-header">
          <span className="meter-label">Victor Guilt</span>
          <span className="meter-value">{Math.round(victorGuilt)}%</span>
        </div>
        <div className="meter-bar-container">
          <div 
            className="meter-bar victor-bar" 
            style={{ width: `${victorGuilt}%` }}
          ></div>
        </div>
      </div>

      <div className="guilt-meter">
        <div className="meter-header">
          <span className="meter-label">Creature Guilt</span>
          <span className="meter-value">{Math.round(creatureGuilt)}%</span>
        </div>
        <div className="meter-bar-container">
          <div 
            className="meter-bar creature-bar" 
            style={{ width: `${creatureGuilt}%` }}
          ></div>
        </div>
      </div>

      <div className="status-line">
        {getStatusText()}
      </div>
    </div>
  )
}
