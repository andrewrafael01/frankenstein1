export default function CourtroomVisual() {
  return (
    <div className="courtroom-visual">
      <div className="courtroom-perspective">
        {/* Background courtroom image */}
        <div className="courtroom-background"></div>
        
        {/* 3D Wooden Table */}
        <div className="courtroom-table-3d">
          <div className="table-top"></div>
          <div className="table-leg-left"></div>
          <div className="table-leg-right"></div>
          <div className="table-shadow"></div>
        </div>

        {/* Character Figures */}
        <div className="characters-container">
          {/* Victor (left side) */}
          <div className="character-figure victor-figure">
            <div className="character-silhouette victor-silhouette">
              <div className="silhouette-head"></div>
              <div className="silhouette-body"></div>
            </div>
            <div className="character-label">
              <div className="character-name">Victor Frankenstein</div>
              <div className="character-subtitle">THE MAKER</div>
            </div>
          </div>

          {/* Creature (right side) */}
          <div className="character-figure creature-figure">
            <div className="character-silhouette creature-silhouette">
              <div className="silhouette-head"></div>
              <div className="silhouette-body"></div>
            </div>
            <div className="character-label">
              <div className="character-name">The Creature</div>
              <div className="character-subtitle">THE MADE</div>
            </div>
          </div>
        </div>

        {/* Overhead light glow */}
        <div className="overhead-light"></div>
      </div>
    </div>
  )
}
