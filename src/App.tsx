import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "C'monnn",
  "This isn't you...",
  "Ur gay",
  "Bbg please",
  "You're breaking my heart;(",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="gif1"
            src="https://mp4togif.org/blog/wp-content/uploads/2023/02/ezgif.com-gif-maker-13.gif"
          />
          <div className="text">Yay!!!</div>
        </>
      ) : (
        <>
          <img
            alt="gif2"
            src="https://media4.giphy.com/media/VNFJZ6mpsvfHO/giphy.gif"
          />

          <div>Will you be my valentine?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
