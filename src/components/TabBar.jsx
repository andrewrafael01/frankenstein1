/**
 * TabBar Component
 * 
 * Displays the 6 diagnostic tabs with active/completed states
 */

export default function TabBar({ tabs, activeTab, completedTabs, onTabChange }) {
  return (
    <div className="tab-bar">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab-button ${activeTab === tab.id ? 'active' : ''} ${completedTabs.has(tab.id) ? 'completed' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          <span className="tab-label">{tab.label}</span>
          {completedTabs.has(tab.id) && (
            <span className="tab-check">✓</span>
          )}
        </button>
      ))}
    </div>
  )
}
