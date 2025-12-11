/**
 * CaseNotes Component
 * 
 * Displays evolving case notes from player choices
 */

export default function CaseNotes({ notes }) {
  if (notes.length === 0) return null

  return (
    <div className="case-notes">
      <h3 className="case-notes-title">Case Notes</h3>
      <div className="case-notes-list">
        {notes.map((note, index) => (
          <div key={index} className="case-note-item">
            <div className="case-note-header">
              <span className="case-note-tab">{note.tab}</span>
              <span className="case-note-time">{note.timestamp}</span>
            </div>
            <div className="case-note-text">{note.interpretation}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
