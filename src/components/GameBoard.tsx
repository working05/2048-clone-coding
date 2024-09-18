import type React from 'react';
import { useEffect } from 'react';

import type { State } from './Types';

function Cell({ value }: CellProp) {
  const cellName = 'cell cell-' + String(value >= 128 ? 128 : value);
  return <div className={cellName}>{value === 0 ? '' : value}</div>;
}

function GameBoard({ state, setState }: BoardProps) {
  const test = () => {
    setState(state);
  };

  useEffect(() => test);

  return (
    <div className="board">
      {state.board.map((row, rowIdx) =>
        row.map((value, colIdx) => (
          <Cell key={10 * rowIdx + colIdx} value={value} />
        )),
      )}
    </div>
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
