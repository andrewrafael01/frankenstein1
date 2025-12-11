/**
 * RapVideoEmbed Component
 * 
 * Responsive YouTube video embed for the clinical closing statement
 */

export default function RapVideoEmbed({ videoId = "YOUR_VIDEO_ID_HERE" }) {
  return (
    <div className="rap-video-container">
      <div className="rap-video-wrapper">
        <iframe
          className="rap-video-embed"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Clinical Closing Statement (Rap Form)"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="rap-video-note">
        Recorded performance of the closing statement. (YouTube embed; audio recommended with headphones.)
      </p>
    </div>
  )
}
