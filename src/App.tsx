import './styles/global.css';

import { useEffect, useState } from 'react';

import Button from './components/Button';
import GameBoard from './components/GameBoard';
import Modal from './components/Modal';
import type { State } from './components/Types';
import styles from './styles/App.module.css';
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
      <div className={styles.gameTitle}>2048 GAME</div>
      <br />
      <div className={styles.container}>
        <div className={styles.score}>
          <span className={styles.text}>SCORE</span>
          <span className={styles.number}>{state.score}</span>
        </div>
        <div className={styles.score}>
          <span className={styles.text}>BEST</span>
          <span className={styles.number}>{state.bestScore}</span>
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
