/**
 * Diagnostic Data
 * 
 * Detective dossier structure with case evidence and verdict options
 */

export const DIAGNOSTIC_DATA = {
  trauma: {
    title: 'Trauma History',
    question: 'Question: When it comes to trauma, who sets the pattern of harm?',
    caseEvidence: [
      'Victor experienced immediate horror and fled upon seeing his creation.',
      'The Creature was abandoned at the moment of birth with no guidance or care.',
      'The Creature faced violent rejection from every human he encountered.',
      'Both parties experienced sudden, life-altering changes that shaped their responses.'
    ],
    options: [
      {
        label: 'Blame Victor',
        reasoning: 'Victor\'s fear and abandonment at the moment of creation establish the traumatic pattern that drives everything else.',
        effects: { victorDelta: 12, creatureDelta: -5, systemDelta: -2 },
        verdictType: 'victor',
        summaryLine: 'Verdict: Victor primarily blamed'
      },
      {
        label: 'Blame Creature',
        reasoning: 'The Creature experiences more trauma, but his violent responses show agency that cannot be excused by suffering alone.',
        effects: { victorDelta: -3, creatureDelta: 10, systemDelta: -2 },
        verdictType: 'creature',
        summaryLine: 'Verdict: Creature primarily blamed'
      },
      {
        label: 'Shared Responsibility',
        reasoning: 'Trauma circulates between creator and creation, with each response deepening the cycle of harm.',
        effects: { victorDelta: 3, creatureDelta: 3, systemDelta: 12 },
        verdictType: 'shared',
        summaryLine: 'Verdict: Shared responsibility'
      }
    ]
  },
  abandonment: {
    title: 'Abandonment Profile',
    question: 'Question: When it comes to abandonment, whose choices matter more?',
    caseEvidence: [
      'Victor fled the scene immediately after creating the Creature.',
      'The Creature was left without guidance, care, or recognition from his creator.',
      'The Creature sought connection but was rejected by every human he approached.',
      'Victor refused multiple opportunities to help or guide the Creature.'
    ],
    options: [
      {
        label: 'Blame Victor',
        reasoning: 'Victor creates life and runs away in horror, refusing to guide or care for the Creature, setting the whole tragedy in motion.',
        effects: { victorDelta: 15, creatureDelta: -8, systemDelta: 0 },
        verdictType: 'victor',
        summaryLine: 'Verdict: Victor primarily blamed'
      },
      {
        label: 'Blame Creature',
        reasoning: 'The Creature is abandoned, but he still chooses to murder innocent people, and suffering does not excuse violent revenge.',
        effects: { victorDelta: 5, creatureDelta: 12, systemDelta: 0 },
        verdictType: 'creature',
        summaryLine: 'Verdict: Creature primarily blamed'
      },
      {
        label: 'Shared Responsibility',
        reasoning: 'Victor\'s abandonment creates the wound, the Creature\'s revenge deepens it, and society\'s rejection keeps the cycle going.',
        effects: { victorDelta: 3, creatureDelta: 3, systemDelta: 15 },
        verdictType: 'shared',
        summaryLine: 'Verdict: Shared responsibility'
      }
    ]
  },
  attachment: {
    title: 'Attachment & Recognition Needs',
    question: 'Question: When it comes to attachment, who fails to meet the need?',
    caseEvidence: [
      'The Creature demonstrated capacity for connection at the De Lacey cottage.',
      'Victor created a being with attachment needs but refused to provide care.',
      'The Creature begged Victor for a companion and was promised one, then denied.',
      'Every attempt by the Creature to form bonds was met with violence or rejection.'
    ],
    options: [
      {
        label: 'Blame Victor',
        reasoning: 'Victor creates a being that needs connection, then refuses to provide it, driving the tragedy forward.',
        effects: { victorDelta: 14, creatureDelta: -7, systemDelta: 0 },
        verdictType: 'victor',
        summaryLine: 'Verdict: Victor primarily blamed'
      },
      {
        label: 'Blame Creature',
        reasoning: 'The Creature shows he can form attachments, but chooses violence when denied, making it a matter of agency.',
        effects: { victorDelta: 4, creatureDelta: 13, systemDelta: 0 },
        verdictType: 'creature',
        summaryLine: 'Verdict: Creature primarily blamed'
      },
      {
        label: 'Shared Responsibility',
        reasoning: 'Attachment requires social structures that welcome difference, and all parties fail to provide or accept it.',
        effects: { victorDelta: 2, creatureDelta: 2, systemDelta: 14 },
        verdictType: 'shared',
        summaryLine: 'Verdict: Shared responsibility'
      }
    ]
  },
  violence: {
    title: 'Violence Motivation Assessment',
    question: 'Question: When it comes to violence, who bears the responsibility?',
    caseEvidence: [
      'The Creature murdered William, Victor\'s younger brother.',
      'The Creature murdered Justine by framing her for William\'s death.',
      'The Creature murdered Elizabeth on her wedding night to Victor.',
      'The Creature stated his intent to cause fear when he could not inspire love.'
    ],
    options: [
      {
        label: 'Blame Victor',
        reasoning: 'The Creature\'s violence is a reaction to rejection and broken promises, with Victor creating the conditions that lead to harm.',
        effects: { victorDelta: 12, creatureDelta: 5, systemDelta: 0 },
        verdictType: 'victor',
        summaryLine: 'Verdict: Victor primarily blamed'
      },
      {
        label: 'Blame Creature',
        reasoning: 'The Creature shows he can think clearly and make moral choices, and his murders are deliberate decisions with full awareness.',
        effects: { victorDelta: 3, creatureDelta: 16, systemDelta: -2 },
        verdictType: 'creature',
        summaryLine: 'Verdict: Creature primarily blamed'
      },
      {
        label: 'Shared Responsibility',
        reasoning: 'Violence emerges from a cycle of Victor\'s rejection, the Creature\'s response, and society\'s fear of difference.',
        effects: { victorDelta: 4, creatureDelta: 4, systemDelta: 13 },
        verdictType: 'shared',
        summaryLine: 'Verdict: Shared responsibility'
      }
    ]
  },
  remorse: {
    title: 'Remorse & Moral Repair',
    question: 'Question: When it comes to remorse, who shows genuine responsibility?',
    caseEvidence: [
      'Victor focused on his own suffering rather than acknowledging his role in creating the tragedy.',
      'The Creature expressed remorse and chose self-destruction as acknowledgment of responsibility.',
      'Victor warned Walton about the dangers of knowledge but did not take responsibility for his own actions.',
      'The Creature recognized the full scope of the tragedy before his death.'
    ],
    options: [
      {
        label: 'Blame Victor',
        reasoning: 'Victor focuses on his own suffering instead of acknowledging his role, refusing to take real responsibility for the tragedy.',
        effects: { victorDelta: 10, creatureDelta: -5, systemDelta: 0 },
        verdictType: 'victor',
        summaryLine: 'Verdict: Victor primarily blamed'
      },
      {
        label: 'Blame Creature',
        reasoning: 'The Creature shows remorse and chooses self-destruction as acknowledgment, demonstrating genuine moral recognition.',
        effects: { victorDelta: -2, creatureDelta: -8, systemDelta: 0 },
        verdictType: 'creature',
        summaryLine: 'Verdict: Creature primarily blamed'
      },
      {
        label: 'Shared Responsibility',
        reasoning: 'Neither individual remorse nor repair is possible when the system refuses to acknowledge its role in creating harm.',
        effects: { victorDelta: 2, creatureDelta: 2, systemDelta: 12 },
        verdictType: 'shared',
        summaryLine: 'Verdict: Shared responsibility'
      }
    ]
  },
  societal: {
    title: 'External/Societal Conditioning Factors',
    question: 'Question: When it comes to society, how much does the system shape the tragedy?',
    caseEvidence: [
      'Society rejected the Creature based solely on his appearance, without knowing his nature.',
      'Victor pursued knowledge without considering consequences, following societal expectations of scientific progress.',
      'The Creature was denied entry to human communities despite demonstrating capacity for learning and connection.',
      'Social structures created conditions where difference was punished and conformity was enforced.'
    ],
    options: [
      {
        label: 'Blame Victor',
        reasoning: 'While social factors matter, individuals still make choices, and Victor\'s pursuit of knowledge without considering consequences matters most.',
        effects: { victorDelta: 8, creatureDelta: 8, systemDelta: -8 },
        verdictType: 'victor',
        summaryLine: 'Verdict: Victor primarily blamed'
      },
      {
        label: 'Blame Creature',
        reasoning: 'While social factors matter, individuals still make choices, and the Creature\'s decision to commit violence matters most.',
        effects: { victorDelta: -3, creatureDelta: -3, systemDelta: 18 },
        verdictType: 'creature',
        summaryLine: 'Verdict: Creature primarily blamed'
      },
      {
        label: 'Shared Responsibility',
        reasoning: 'Social structures create the conditions for tragedy through fear of difference, rejection of deviation, and pressure for conformity.',
        effects: { victorDelta: 4, creatureDelta: 4, systemDelta: 4 },
        verdictType: 'shared',
        summaryLine: 'Verdict: Shared responsibility'
      }
    ]
  }
}
