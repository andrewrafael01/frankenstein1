# Frankenstein: Guilt Simulator – Courtroom Edition

An interactive literary analysis experience that transforms Mary Shelley's *Frankenstein* into a courtroom-style guilt simulator.

## How to Run Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   - The terminal will display a URL (usually `http://localhost:5173`)
   - Open that URL in your browser

## Project Structure

```
frankenstein-guilt-simulator/
├── index.html          # Main HTML entry point
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── src/
│   ├── main.jsx        # React entry point
│   ├── App.jsx         # Main app component
│   ├── styles.css      # Global styles
│   └── components/
│       ├── HeroHeader.jsx
│       ├── CourtroomVisual.jsx
│       ├── GuiltMeter.jsx
│       ├── ScenePanel.jsx
│       ├── VerdictSection.jsx
│       ├── RapSection.jsx
│       └── ReflectionSection.jsx
└── public/             # Static assets (add rap_beat.mp3 here)
```

## Features

- **Interactive Guilt Simulator**: Adjust guilt scores for Victor and the Creature through 5 key scenes
- **Courtroom Aesthetic**: Dark academic/gothic design with stylized visual elements
- **Dynamic Verdict**: Final judgment based on your choices
- **Rap-Style Closing Statement**: Three verses integrating key quotes from the novel
- **Literary Analysis**: Reflection section explaining the project's purpose

## Adding Audio

To add background music for the rap section:
1. Place your audio file as `rap_beat.mp3` in the `public/` folder
2. The audio player will automatically detect and play it

## Build for Production

```bash
npm run build
```

The built files will be in the `dist/` folder.

## Technologies

- React 18
- Vite
- Vanilla CSS (no frameworks)
- Pure JavaScript (no TypeScript)
