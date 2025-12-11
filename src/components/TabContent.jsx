/**
 * TabContent Component
 * 
 * Displays the content for each diagnostic tab including:
 * - Clinical description
 * - Quote from Frankenstein
 * - Three interpretive response buttons
 */

import { useState, useEffect } from 'react'

const DIAGNOSTIC_DATA = {
  trauma: {
    title: 'Trauma History',
    clinicalDescription: 'This domain examines the psychological impact of traumatic experiences on both Victor and the Creature. Trauma shapes behavior, emotional regulation, and moral decision-making. We assess how initial traumatic events—creation, abandonment, rejection—establish patterns of response.',
    quote: '"Nothing is so painful to the human mind as a great and sudden change."',
    quoteSource: 'Victor Frankenstein',
    choices: [
      {
        label: 'Victor\'s trauma drives the cycle',
        text: 'Victor\'s immediate horror at creation and subsequent abandonment establishes the foundational trauma. His fear and rejection create the conditions for the Creature\'s suffering.',
        effects: { victorDelta: 12, creatureDelta: -5, systemDelta: -2 },
        interpretation: 'Trauma assessment: Victor\'s initial abandonment identified as primary traumatic event, establishing pattern of rejection.'
      },
      {
        label: 'Creature\'s trauma is more severe',
        text: 'The Creature experiences cumulative trauma: creation, immediate abandonment, violent rejection, and social isolation. His trauma responses are more directly linked to his actions.',
        effects: { victorDelta: -3, creatureDelta: 10, systemDelta: -2 },
        interpretation: 'Trauma assessment: Creature\'s cumulative trauma experiences identified as more severe, with direct links to behavioral responses.'
      },
      {
        label: 'Systemic trauma network',
        text: 'Trauma is networked: Victor\'s fear stems from societal expectations, the Creature\'s rejection reflects systemic prejudice, and both are trapped in a cycle of trauma transmission.',
        effects: { victorDelta: 3, creatureDelta: 3, systemDelta: 12 },
        interpretation: 'Trauma assessment: Trauma identified as systemic network, with societal structures contributing to trauma transmission.'
      }
    ]
  },
  abandonment: {
    title: 'Abandonment Profile',
    clinicalDescription: 'Abandonment trauma examines the psychological consequences of being left without support, care, or recognition. This domain evaluates how abandonment shapes attachment patterns, self-worth, and capacity for trust.',
    quote: '"Remember that I am thy creature; I ought to be thy Adam, but I am rather the fallen angel, whom thou drivest from joy for no misdeed."',
    quoteSource: 'The Creature',
    choices: [
      {
        label: 'Victor\'s abandonment is primary',
        text: 'Victor\'s immediate abandonment of the Creature at the moment of creation is the core failure. He creates life but refuses to provide care, guidance, or recognition.',
        effects: { victorDelta: 15, creatureDelta: -8, systemDelta: 0 },
        interpretation: 'Abandonment profile: Victor\'s immediate abandonment identified as primary failure, creating conditions for attachment disruption.'
      },
      {
        label: 'Creature\'s response to abandonment',
        text: 'While abandonment is traumatic, the Creature\'s response—choosing violence and revenge—represents his agency. Abandonment explains but does not excuse his actions.',
        effects: { victorDelta: 5, creatureDelta: 12, systemDelta: 0 },
        interpretation: 'Abandonment profile: Creature\'s response to abandonment shows agency; abandonment explains but does not excuse violence.'
      },
      {
        label: 'Societal abandonment pattern',
        text: 'Abandonment is systemic: Victor abandons the Creature, society rejects difference, and the pattern repeats. The real failure is in social structures that refuse to accommodate difference.',
        effects: { victorDelta: 3, creatureDelta: 3, systemDelta: 15 },
        interpretation: 'Abandonment profile: Abandonment identified as systemic pattern, with social structures refusing to accommodate difference.'
      }
    ]
  },
  attachment: {
    title: 'Attachment & Recognition Needs',
    clinicalDescription: 'This domain evaluates attachment patterns and the fundamental human need for recognition, belonging, and connection. We assess how unmet attachment needs drive behavior and shape relationships.',
    quote: '"I was benevolent and good; misery made me a fiend. Make me happy, and I shall again be virtuous."',
    quoteSource: 'The Creature',
    choices: [
      {
        label: 'Victor failed attachment responsibility',
        text: 'Victor created a being with attachment needs but refused to meet them. His failure to provide recognition, care, or belonging is the core attachment failure.',
        effects: { victorDelta: 14, creatureDelta: -7, systemDelta: 0 },
        interpretation: 'Attachment assessment: Victor\'s failure to meet Creature\'s attachment needs identified as primary attachment disruption.'
      },
      {
        label: 'Creature\'s attachment strategies',
        text: 'The Creature demonstrates capacity for attachment (De Lacey cottage) but chooses destructive strategies when attachment is denied. His agency in choosing violence matters.',
        effects: { victorDelta: 4, creatureDelta: 13, systemDelta: 0 },
        interpretation: 'Attachment assessment: Creature shows attachment capacity but chooses destructive strategies; agency in attachment responses noted.'
      },
      {
        label: 'Social attachment structures',
        text: 'Attachment requires social structures that recognize and accommodate difference. The failure is systemic: society refuses to provide attachment opportunities for those who differ.',
        effects: { victorDelta: 2, creatureDelta: 2, systemDelta: 14 },
        interpretation: 'Attachment assessment: Social structures identified as failing to provide attachment opportunities for difference.'
      }
    ]
  },
  violence: {
    title: 'Violence Motivation Assessment',
    clinicalDescription: 'This domain examines the motivations, triggers, and justifications for violent behavior. We assess whether violence is reactive, premeditated, defensive, or represents a choice made with agency.',
    quote: '"If I cannot inspire love, I will cause fear!"',
    quoteSource: 'The Creature',
    choices: [
      {
        label: 'Violence as reactive response',
        text: 'The Creature\'s violence is primarily reactive—a response to rejection, abandonment, and broken promises. It stems from unmet needs rather than inherent evil.',
        effects: { victorDelta: 12, creatureDelta: 5, systemDelta: 0 },
        interpretation: 'Violence assessment: Violence identified as reactive response to unmet needs, with primary responsibility in conditions that created those needs.'
      },
      {
        label: 'Violence as conscious choice',
        text: 'The Creature demonstrates capacity for moral reasoning and makes conscious choices to commit violence. His murders represent agency, not mere reaction.',
        effects: { victorDelta: 3, creatureDelta: 16, systemDelta: -2 },
        interpretation: 'Violence assessment: Violence identified as conscious choice with agency; Creature bears primary responsibility for violent actions.'
      },
      {
        label: 'Violence as systemic product',
        text: 'Violence emerges from systemic conditions: rejection, fear of difference, and social structures that punish deviation. The system creates the conditions for violence.',
        effects: { victorDelta: 4, creatureDelta: 4, systemDelta: 13 },
        interpretation: 'Violence assessment: Violence identified as systemic product, emerging from social structures that punish difference.'
      }
    ]
  },
  remorse: {
    title: 'Remorse & Moral Repair',
    clinicalDescription: 'This domain evaluates capacity for remorse, moral recognition, and attempts at repair. We assess whether parties acknowledge harm, demonstrate regret, and take responsibility for their actions.',
    quote: '"Life, although it may only be an accumulation of anguish, is dear to me, and I will defend it."',
    quoteSource: 'The Creature',
    choices: [
      {
        label: 'Victor\'s lack of remorse',
        text: 'Victor demonstrates limited remorse, focusing on his own suffering rather than acknowledging his role in creating the conditions for violence. His self-pity prevents moral repair.',
        effects: { victorDelta: 10, creatureDelta: -5, systemDelta: 0 },
        interpretation: 'Remorse assessment: Victor\'s limited remorse and self-focus identified as barrier to moral repair.'
      },
      {
        label: 'Creature\'s remorse and recognition',
        text: 'The Creature demonstrates remorse, recognizes the tragedy, and chooses self-destruction as acknowledgment of responsibility. His final act shows moral recognition.',
        effects: { victorDelta: -2, creatureDelta: -8, systemDelta: 0 },
        interpretation: 'Remorse assessment: Creature\'s remorse and final self-destruction identified as evidence of moral recognition and responsibility.'
      },
      {
        label: 'Systemic failure of repair',
        text: 'Neither individual remorse nor repair is possible within a system that refuses to acknowledge its role in creating conditions for harm. The system prevents moral repair.',
        effects: { victorDelta: 2, creatureDelta: 2, systemDelta: 12 },
        interpretation: 'Remorse assessment: Systemic failure to provide structures for moral repair identified as primary barrier.'
      }
    ]
  },
  societal: {
    title: 'External/Societal Conditioning Factors',
    clinicalDescription: 'This domain examines how external factors—social norms, cultural expectations, institutional structures—shape behavior and create conditions for harm. We assess systemic responsibility.',
    quote: '"Learn from me, if not by my precepts, at least by my example, how dangerous is the acquirement of knowledge."',
    quoteSource: 'Victor Frankenstein',
    choices: [
      {
        label: 'Individual responsibility primary',
        text: 'While social factors influence behavior, individuals retain agency. Victor and the Creature make choices within their contexts, and those choices matter.',
        effects: { victorDelta: 8, creatureDelta: 8, systemDelta: -8 },
        interpretation: 'Societal assessment: Individual agency emphasized; social factors acknowledged but individual responsibility primary.'
      },
      {
        label: 'Systemic structures create conditions',
        text: 'Social structures—fear of difference, rejection of deviation, pressure for conformity—create the conditions for this tragedy. The system bears significant responsibility.',
        effects: { victorDelta: -3, creatureDelta: -3, systemDelta: 18 },
        interpretation: 'Societal assessment: Systemic structures identified as creating conditions for tragedy; system bears significant responsibility.'
      },
      {
        label: 'Networked responsibility',
        text: 'Responsibility is networked: individuals act within systems, systems shape individuals, and both contribute to outcomes. No single party bears exclusive responsibility.',
        effects: { victorDelta: 4, creatureDelta: 4, systemDelta: 4 },
        interpretation: 'Societal assessment: Responsibility identified as networked; individuals and systems mutually shape outcomes.'
      }
    ]
  }
}

const TAB_KEYS = ['trauma', 'abandonment', 'attachment', 'violence', 'remorse', 'societal']

export default function TabContent({ activeTab, applyChoice, toast }) {
  const [selectedChoice, setSelectedChoice] = useState(null)
  const tabKey = TAB_KEYS[activeTab]
  const data = DIAGNOSTIC_DATA[tabKey]

  // Reset selection when tab changes
  useEffect(() => {
    setSelectedChoice(null)
  }, [activeTab])

  if (!data) return null

  const handleChoice = (choice, index) => {
    setSelectedChoice(index)
    applyChoice({
      ...choice.effects,
      interpretation: choice.interpretation
    })
  }

  const formatEffect = (delta) => {
    if (delta === 0) return '0'
    return delta > 0 ? `+${delta}` : `${delta}`
  }

  return (
    <div className="tab-content">
      <div className="tab-header">
        <h2 className="tab-title">{data.title}</h2>
      </div>

      <div className="clinical-description">
        <p>{data.clinicalDescription}</p>
      </div>

      <div className="quote-box">
        <div className="quote-mark">"</div>
        <p className="quote-text">{data.quote}</p>
        <p className="quote-source">— {data.quoteSource}</p>
      </div>

      <div className="choices-container">
        {data.choices.map((choice, index) => (
          <button
            key={index}
            className={`choice-button ${selectedChoice === index ? 'selected' : ''}`}
            onClick={() => handleChoice(choice, index)}
            disabled={selectedChoice !== null}
          >
            <div className="choice-label">{choice.label}</div>
            <div className="choice-text">{choice.text}</div>
            <div className="choice-effect">
              Effect: Victor {formatEffect(choice.effects.victorDelta)}, 
              Creature {formatEffect(choice.effects.creatureDelta)}, 
              System {formatEffect(choice.effects.systemDelta)}
            </div>
          </button>
        ))}
      </div>

      {toast && (
        <div className="toast-notification">
          Responsibility indices updated: Victor {formatEffect(toast.victorDelta)}, 
          Creature {formatEffect(toast.creatureDelta)}, 
          System {formatEffect(toast.systemDelta)}
        </div>
      )}
    </div>
  )
}
