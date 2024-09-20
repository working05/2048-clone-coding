import './App.css';

import { useEffect, useState } from 'react';

import Button from './components/Button';
import GameBoard from './components/GameBoard';
import Modal from './components/Modal';
import type { State } from './components/Types';
import { resetGame } from './utils/Functions';

function App() {
  useEffect(() => {
    reset();
  }, []);

  const reset = () => {
    resetGame(setState);
  };

  const [state, setState] = useState<State>({
    score: 0,
    bestScore: 0,
    board: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    isFail: false,
    isSuccess: false,
    isContinue: false,
  });

  return (
    <>
      <div className="game-title">2048 GAME</div>
      <br />
      <div className="container">
        <div className="score">
          <span className="style-text">SCORE</span>
          <span className="style-num">{state.score}</span>
        </div>
        <div className="score">
          <span className="style-text">BEST</span>
          <span className="style-num">{state.bestScore}</span>
        </div>
        <Button text="New Game" onClick={reset} />
      </div>
      <br />
      <div></div>
      <GameBoard state={state} setState={setState} />
      <Modal state={state} setState={setState} />
    </>
  );
}

export default App;
