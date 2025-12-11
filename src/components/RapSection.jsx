import { useState } from 'react'

export default function RapSection() {
  const [isPlaying, setIsPlaying] = useState(false)

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

  return (
    <div className="rap-section">
      <h2 className="rap-title">Closing Statement (Rap Version)</h2>
      
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
  )
}
