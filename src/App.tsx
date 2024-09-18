import './App.css';

import { useEffect, useState } from 'react';

import Button from './components/Button';
import GameBoard from './components/GameBoard';
import type { Board, State } from './components/Types';
import { newBoard } from './utils/Functions';

function App() {
  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    const best = localStorage.getItem('best');
    const board: Board = newBoard();

    if (best === null) {
      localStorage.setItem('best', '0');
    }
    setState({
      score: 0,
      bestScore: best === null ? 0 : parseInt(best),
      board: board,
    });
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
        <Button text="New Game" onClick={resetGame} />
      </div>
      <br />
      <div></div>
      <GameBoard state={state} setState={setState} />
    </>
  );
}

export default App;
