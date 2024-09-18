import type { Board, CellPos } from '../components/Types';

const boardReset = (): Board => [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const newBlock = (board: Board): Board => {
  const emptyCells: CellPos[] = [];

  board.forEach((row, rowIdx) => {
    row.forEach((value, colIdx) => {
      if (value === 0) {
        emptyCells.push({ x: rowIdx, y: colIdx });
      }
    });
  });

  if (emptyCells.length == 0) {
    return board;
  }

  const idx = Math.floor(Math.random() * emptyCells.length);
  const { x: x, y: y } = emptyCells[idx] as CellPos;
  const p = Math.random();
  const num = p <= 0.1 ? 4 : 2;

  return board.map((row, rowIdx) =>
    row.map((value, colIdx) => (x === rowIdx && y === colIdx ? num : value)),
  );
};

export const newBoard = (): Board => {
  return newBlock(newBlock(boardReset()));
};
