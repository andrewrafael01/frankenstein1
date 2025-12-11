/**
 * Verdict Section Component
 * 
 * Calculates and displays the final verdict based on guilt scores.
 * Generates a literary interpretation paragraph that connects the
 * verdict to key themes and quotes from the novel.
 */

export default function VerdictSection({ victorGuilt, creatureGuilt }) {
  const getVerdict = () => {
    const diff = victorGuilt - creatureGuilt

    if (Math.abs(diff) < 15) {
      return {
        title: "Verdict: Shared Guilt / Networked Tragedy",
        interpretation: `Your judgment recognizes that this tragedy cannot be reduced to a single guilty party. Victor Frankenstein's hubris—his dangerous pursuit of knowledge without wisdom, as he warns: "Learn from me, if not by my precepts, at least by my example, how dangerous is the acquirement of knowledge"—initiated the cycle, but the Creature's conscious choices to embrace violence, despite his initial benevolence, perpetuated it. The Creature's lament, "I was benevolent and good; misery made me a fiend," reveals how trauma shapes monstrosity, yet his capacity for learning and moral reasoning suggests he retained agency. Victor's abandonment and broken promises created the conditions for violence, but the Creature's transformation from "I ought to be thy Adam" to "I am rather the fallen angel" represents a choice. This verdict reads the novel as a critique of both Enlightenment overreach and the social structures that reject difference, arguing that monstrosity is constructed through neglect, fear, and the failure of empathy—not inherent in either creator or creation.`
      }
    } else if (diff > 20) {
      return {
        title: "Verdict: The Maker Bears the Greater Guilt",
        interpretation: `Your verdict places primary responsibility upon Victor Frankenstein, reading the novel as a cautionary tale about the dangers of unchecked ambition and creator abandonment. Victor's warning—"Learn from me, if not by my precepts, at least by my example, how dangerous is the acquirement of knowledge"—becomes an admission of guilt: he pursued knowledge without considering consequences, created life without accepting responsibility, and abandoned his creation at the moment of its awakening. The Creature's plea, "Remember that I am thy creature; I ought to be thy Adam, but I am rather the fallen angel," frames Victor's failure: he created an Adam but refused to be a parent, driving his creation into isolation and violence. The Creature's statement, "I was benevolent and good; misery made me a fiend," suggests that his monstrosity was not inherent but constructed through rejection and neglect. This verdict argues that Victor's hubris, his immediate horror and abandonment, and his broken promise of a companion are the root causes of the tragedy. The Creature's murders, while horrific, stem from a profound isolation that Victor's actions directly caused.`
      }
    } else {
      return {
        title: "Verdict: The Made Bears the Greater Guilt",
        interpretation: `Your judgment places primary responsibility upon the Creature, emphasizing individual agency and moral accountability despite suffering. While you acknowledge the Creature's initial benevolence—his statement, "I was benevolent and good; misery made me a fiend," reveals the trauma of rejection—you determine that his capacity for learning, his understanding of morality, and his conscious choices to commit murder demonstrate agency that cannot be excused. The Creature's transformation from identifying as "I ought to be thy Adam" to embracing his role as "the fallen angel" represents a choice: he could have pursued different paths despite his suffering. Victor's warning, "Learn from me, if not by my precepts, at least by my example, how dangerous is the acquirement of knowledge," speaks to the dangers of creation, but the Creature's response to that creation—his deliberate murders of innocent victims—cannot be fully attributed to Victor's abandonment. This verdict argues that while suffering shapes us, it does not absolve us of moral responsibility. The Creature's final act of self-destruction suggests he, too, recognized this truth: that his choices, however understandable, were ultimately his own.`
      }
    }
  }

  const verdict = getVerdict()

  return (
    <div id="verdict-section" className="verdict-section verdict-fade-in">
      <h2 className="verdict-title">{verdict.title}</h2>
      <div className="verdict-interpretation">
        <p>{verdict.interpretation}</p>
      </div>
    </div>
  )
}
