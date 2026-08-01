import { useState } from 'react';
import monomestaImg from './assets/monomesta.jpg';
import './App.css';
import Aurora from './components/Aurora';
import confetti from 'canvas-confetti';

function App() {
  const [flipped, setFlipped] = useState(false);
  const woltLink = import.meta.env.VITE_WOLT_LINK;

  const handleClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    setFlipped((f) => !f);
  };

  return (
    <>
      <div className="background-aurora">
        <Aurora
          colorStops={['#7cff67', '#B497CF', '#5227FF']}
          amplitude={0.5}
          blend={0.45}
        />
      </div>
      <section id="center">
        <div className="hero">
          <div className={`flip-container ${flipped ? 'flipped' : ''}`}>
            <div className="flip-inner">
              <div className="flip-front">
                <img src={monomestaImg} className="banner" />
              </div>
              <div className="flip-back">
                <p>Wolt linkki:</p>
                <p>
                  {woltLink ? (
                    <a
                      href={woltLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>VilleJJ</strong>
                    </a>
                  ) : (
                    <strong>VilleJJ</strong>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 style={{ color: '#2DD4BF', textShadow: 'black 1px 1px 0' }}>
            Hyvää syntymäpäivää Ville 29v!
          </h1>
        </div>
        <button type="button" className="basicButton" onClick={handleClick}>
          Yllätys!
        </button>
      </section>
    </>
  );
}

export default App;
