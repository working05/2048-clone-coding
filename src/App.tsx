import './App.css';

import { useState } from 'react';

import Board from './components/Board';
import type { State } from './components/Types';

function App() {
  const [state, setState] = useState<State>({
    score: 0,
    bestScore: 0,
    board: [
      [2, 4, 8, 16], 
      [32, 64, 128, 256],
      [512, 0, 0, 0],
      [0, 0, 0, 0]
    ]
  });

  return (
    <>
      <div className='game-title'>
        2048 GAME
      </div>
      <br/>
      <div>

      </div>
      <Board state={state} setState={setState}/>
    </>
  );
}

export default App;
