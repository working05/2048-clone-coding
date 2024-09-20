import type React from 'react';
import { useEffect } from 'react';

import { checkFail, checkSuccess, moveBoard } from '../utils/Functions';
import type { State } from './Types';

function Cell({ value }: CellProp) {
  const cellName = 'cell cell-' + String(value >= 128 ? 128 : value);
  return <div className={cellName}>{value === 0 ? '' : value}</div>;
}

function GameBoard({ state, setState }: BoardProps) {
  const handleKeyDown = (e: KeyboardEvent) => {
    let obj = { board: state.board, score: state.score };

    if (state.isFail || (state.isSuccess && !state.isContinue)) return;

    switch (e.key) {
      case 'ArrowLeft':
        obj = moveBoard(state.board, 0);
        break;
      case 'ArrowDown':
        obj = moveBoard(state.board, 1);
        break;
      case 'ArrowRight':
        obj = moveBoard(state.board, 2);
        break;
      case 'ArrowUp':
        obj = moveBoard(state.board, 3);
        break;
      default:
        return;
    }

    let best = state.bestScore;

    if (best < obj.score + state.score) {
      best = obj.score + state.score;
      localStorage.setItem('best', String(best));
    }

    setState({
      ...state,
      board: obj.board,
      score: obj.score + state.score,
      bestScore: best,
    });
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const checkGameEnd = () => {
    if (!state.isSuccess && checkSuccess(state.board)) {
      setState({
        ...state,
        isSuccess: true,
      });
    }

    if (!state.isFail && checkFail(state.board)) {
      setState({
        ...state,
        isFail: true,
      });
    }
  };

  useEffect(() => {
    checkGameEnd();
  }),
    [state];

  return (
    <>
      <div className="board">
        {state.board.map((row, rowIdx) =>
          row.map((value, colIdx) => (
            <Cell key={10 * rowIdx + colIdx} value={value} />
          )),
        )}
      </div>
      {}
    </>
  );
}

type CellProp = {
  value: number;
};

type BoardProps = {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
};

export default GameBoard;
