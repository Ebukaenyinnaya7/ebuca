import { useState } from "react";
import "./PenaltyShootout.css";

const CORNERS = ["left", "center", "right"];

function PenaltyShootout() {
  const [attempts, setAttempts] = useState(0);
  const [goals, setGoals] = useState(0);
  const [lastShot, setLastShot] = useState(null);
  const gameOver = attempts >= 5;

  function takeShot(corner) {
    if (gameOver) return;

    const keeperCorner = CORNERS[Math.floor(Math.random() * CORNERS.length)];
    const scored = corner !== keeperCorner;

    setAttempts((current) => current + 1);
    if (scored) setGoals((current) => current + 1);
    setLastShot({ corner, keeperCorner, scored });
  }

  function restart() {
    setAttempts(0);
    setGoals(0);
    setLastShot(null);
  }

  const resultMessage = lastShot
    ? lastShot.scored
      ? "GOAL! Pick another corner."
      : `Saved! The keeper guessed ${lastShot.keeperCorner}. Try a different corner.`
    : "Pick a corner and take your first shot.";

  return (
    <section className="shootout" aria-labelledby="shootout-title">
      <div className="shootout-card">
        <div className="shootout-copy">
          <span className="shootout-eyebrow">A QUICK BREAK</span>
          <h2 id="shootout-title">Penalty shootout</h2>
          <p>
            Since I love PS football, here’s a tiny challenge for you. Can you
            score more than three goals in five shots?
          </p>

          <div className="shootout-score" aria-label={`${goals} goals from ${attempts} shots`}>
            <span><strong>{goals}</strong> goals</span>
            <span className="shootout-score-divider" aria-hidden="true">/</span>
            <span><strong>{attempts}</strong> of 5 shots</span>
          </div>
        </div>

        <div className={`shootout-game ${lastShot ? `shot-${lastShot.corner} ${lastShot.scored ? "is-goal" : "is-saved"}` : ""}`}>
          <div className="shootout-goal" aria-hidden="true">
            <div className="shootout-net" />
            {lastShot && <span className={`shootout-keeper keeper-${lastShot.keeperCorner}`}>🧤</span>}
            {lastShot && <span className="shootout-ball">⚽</span>}
          </div>
          <div className="shootout-grass" aria-hidden="true" />

          <div className="shootout-controls" aria-label="Choose where to shoot">
            {CORNERS.map((corner) => (
              <button
                className="shootout-choice"
                key={corner}
                type="button"
                onClick={() => takeShot(corner)}
                disabled={gameOver}
              >
                {corner === "center" ? "Middle" : `Shoot ${corner}`}
              </button>
            ))}
          </div>

          <p className="shootout-result" role="status" aria-live="polite">
            {gameOver ? `Full time! You scored ${goals} out of 5.` : resultMessage}
          </p>
          {gameOver && (
            <button className="shootout-restart" type="button" onClick={restart}>
              Play again <span aria-hidden="true">↻</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default PenaltyShootout;
