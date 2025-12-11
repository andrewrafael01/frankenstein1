/**
 * Scene Panel Component
 * 
 * Displays the current scene with:
 * - Scene title and description
 * - Key quote from the novel
 * - Three choice buttons that adjust guilt scores
 * - Judge's note after a choice is made
 * - Next Scene button to progress
 */

import { useState } from 'react'

const scenes = [
  {
    title: "The Night of Creation",
    description: "Victor beholds his creation for the first time. The moment of triumph becomes horror, and he abandons the Creature immediately.",
    quote: "The beauty of the dream vanished, and breathless horror and disgust filled my heart.",
    choices: [
      {
        label: "Blame VICTOR most",
        text: "Victor's immediate abandonment is the root of all tragedy. He bears primary responsibility.",
        effects: { victorDelta: 15, creatureDelta: -5 },
        note: "Note: You're treating Victor's fear and abandonment as the main cause.",
        choiceLabel: "You blamed Victor most in this scene."
      },
      {
        label: "Blame BOTH / shared guilt",
        text: "Victor's reaction is understandable. The pursuit of knowledge itself is the real danger.",
        effects: { victorDelta: 5, creatureDelta: 0 },
        note: "Note: You're focusing on the broader theme of dangerous knowledge.",
        choiceLabel: "You saw shared responsibility in this scene."
      },
      {
        label: "Blame BOTH / shared guilt",
        text: "Victor acted in fear, but the Creature's future choices are still his own.",
        effects: { victorDelta: 8, creatureDelta: 5 },
        note: "Note: You're seeing both parties as having agency in what follows.",
        choiceLabel: "You saw shared responsibility in this scene."
      }
    ]
  },
  {
    title: "The De Lacey Cottage",
    description: "The Creature learns language, philosophy, and human connection through observation. He yearns for acceptance but is violently rejected when he reveals himself.",
    quote: "I was benevolent and good; misery made me a fiend.",
    choices: [
      {
        label: "Blame VICTOR most",
        text: "The Creature is a victim of rejection. His violence stems from isolation, not inherent evil.",
        effects: { victorDelta: 12, creatureDelta: -10 },
        note: "Note: You're emphasizing the Creature's victimhood and the impact of social rejection.",
        choiceLabel: "You blamed Victor most in this scene."
      },
      {
        label: "Blame CREATURE most",
        text: "The Creature's capacity for learning shows he has agency. His later choices are his responsibility.",
        effects: { victorDelta: 5, creatureDelta: 12 },
        note: "Note: You're holding the Creature accountable despite his suffering.",
        choiceLabel: "You blamed the Creature most in this scene."
      },
      {
        label: "Blame BOTH / shared guilt",
        text: "Both are trapped: Victor by his fear, the Creature by society's rejection. Shared blame.",
        effects: { victorDelta: 8, creatureDelta: 8 },
        note: "Note: You're seeing this as a networked tragedy with multiple responsible parties.",
        choiceLabel: "You saw shared responsibility in this scene."
      }
    ]
  },
  {
    title: "\"I Ought to Be Thy Adam\" (Glacier Confrontation)",
    description: "On the Mer de Glace, the Creature confronts Victor, demanding a companion. He frames himself as Adam, but Victor as the one who drove him from joy.",
    quote: "Remember that I am thy creature; I ought to be thy Adam, but I am rather the fallen angel.",
    choices: [
      {
        label: "Blame VICTOR most",
        text: "Victor failed as a 'parent.' His refusal to care for his creation is the core failure.",
        effects: { victorDelta: 18, creatureDelta: -8 },
        note: "Note: You're reading Victor's role through the lens of parental responsibility.",
        choiceLabel: "You blamed Victor most in this scene."
      },
      {
        label: "Blame CREATURE most",
        text: "The Creature chooses the 'fallen angel' path. He has agency despite his origin.",
        effects: { victorDelta: 5, creatureDelta: 15 },
        note: "Note: You're emphasizing the Creature's conscious choice to embrace violence.",
        choiceLabel: "You blamed the Creature most in this scene."
      },
      {
        label: "Blame BOTH / shared guilt",
        text: "Both/and: Victor's neglect and the Creature's choice create a tragic cycle.",
        effects: { victorDelta: 10, creatureDelta: 10 },
        note: "Note: You're seeing mutual responsibility in a complex moral network.",
        choiceLabel: "You saw shared responsibility in this scene."
      }
    ]
  },
  {
    title: "The Wedding Night",
    description: "Elizabeth's death. The Creature's revenge reaches its peak. Victor's world collapses as the Creature fulfills his threat.",
    quote: "If I cannot inspire love, I will cause fear!",
    choices: [
      {
        label: "Blame CREATURE most",
        text: "The Creature's deliberate terror is inexcusable. No suffering justifies these murders.",
        effects: { victorDelta: 5, creatureDelta: 20 },
        note: "Note: You're taking a hard line on the Creature's deliberate violence.",
        choiceLabel: "You blamed the Creature most in this scene."
      },
      {
        label: "Blame BOTH / shared guilt",
        text: "This is tragic escalation caused by rejection. The Creature is trapped in a cycle of violence.",
        effects: { victorDelta: 10, creatureDelta: 8 },
        note: "Note: You're seeing the murders as part of a tragic cycle, not pure evil.",
        choiceLabel: "You saw shared responsibility in this scene."
      },
      {
        label: "Blame VICTOR most",
        text: "Victor ignored the warnings. His inaction and broken promise led directly to these deaths.",
        effects: { victorDelta: 18, creatureDelta: 5 },
        note: "Note: You're blaming Victor for failing to prevent the tragedy he created.",
        choiceLabel: "You blamed Victor most in this scene."
      }
    ]
  },
  {
    title: "Arctic Ending",
    description: "Victor dies on Walton's ship. The Creature appears, mourns, and vows to end his own life. Both are consumed by their conflict.",
    quote: "Life, although it may only be an accumulation of anguish, is dear to me, and I will defend it.",
    choices: [
      {
        label: "Blame VICTOR most",
        text: "The Creature's remorse shows his humanity. His self-destruction is partial redemption.",
        effects: { victorDelta: 8, creatureDelta: -12 },
        note: "Note: You're seeing the Creature's final act as evidence of his underlying humanity.",
        choiceLabel: "You blamed Victor most in this scene."
      },
      {
        label: "Blame CREATURE most",
        text: "Too little, too late. The Creature's remorse doesn't absolve him of the murders.",
        effects: { victorDelta: 5, creatureDelta: 15 },
        note: "Note: You're holding the Creature accountable despite his final remorse.",
        choiceLabel: "You blamed the Creature most in this scene."
      },
      {
        label: "Blame BOTH / shared guilt",
        text: "Everyone lost. This is shared ruin—both creator and creation destroyed by their conflict.",
        effects: { victorDelta: 10, creatureDelta: 10 },
        note: "Note: You're reading the ending as mutual destruction in a tragic network.",
        choiceLabel: "You saw shared responsibility in this scene."
      }
    ]
  }
]

export default function ScenePanel({ currentScene, applyChoice, nextScene, judgeNote, lastDecision, toast }) {
  const scene = scenes[currentScene]
  const [selectedChoice, setSelectedChoice] = useState(null)

  const handleChoice = (choice, index) => {
    setSelectedChoice(index)
    applyChoice({
      ...choice.effects,
      note: choice.note,
      choiceLabel: choice.choiceLabel
    })
  }

  const formatEffect = (delta) => {
    if (delta === 0) return '0'
    return delta > 0 ? `+${delta}` : `${delta}`
  }

  return (
    <div className="scene-panel">
      <div className="scene-header">
        <h2 className="scene-title">Scene {currentScene + 1} of 5: {scene.title}</h2>
      </div>
      <p className="scene-description">{scene.description}</p>
      
      <div className="quote-box">
        <div className="quote-mark">"</div>
        <p className="quote-text">{scene.quote}</p>
      </div>

      <div className="choices-container">
        {scene.choices.map((choice, index) => (
          <button
            key={index}
            className={`choice-button ${selectedChoice === index ? 'selected' : ''}`}
            onClick={() => handleChoice(choice, index)}
            disabled={selectedChoice !== null}
          >
            <div className="choice-label">{choice.label}</div>
            <div className="choice-text">{choice.text}</div>
            <div className="choice-effect">
              Effect: Victor {formatEffect(choice.effects.victorDelta)}, Creature {formatEffect(choice.effects.creatureDelta)}
            </div>
          </button>
        ))}
      </div>

      {toast && (
        <div className="toast-notification">
          Guilt shifted: Victor {formatEffect(toast.victorDelta)}, Creature {formatEffect(toast.creatureDelta)}
        </div>
      )}

      {lastDecision && (
        <div className="last-decision">
          <strong>Last decision:</strong> {lastDecision}
        </div>
      )}

      {judgeNote && (
        <div className="judge-note">
          {judgeNote}
        </div>
      )}

      {selectedChoice !== null && currentScene < 4 && (
        <button className="next-scene-button" onClick={nextScene}>
          Next Scene →
        </button>
      )}

      {selectedChoice !== null && currentScene === 4 && (
        <button className="next-scene-button" onClick={nextScene}>
          View Verdict →
        </button>
      )}
    </div>
  )
}
