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

const rotateBoard = (board: Board, dir: number): Board => {
  if (dir === 0 || dir === 4) return board;

  if (dir === 1) {
    return board.map((boardRow, i) => {
      return boardRow.map((_cell, j) => {
        const t = board[3 - j];
        if (t === undefined) {
          return 0;
        }
        const tt = t[i];
        if (tt === undefined) {
          return 0;
        }
        return tt;
      });
    });
  } else if (dir === 2) {
    return board.map((boardRow, i) => {
      return boardRow.map((_cell, j) => {
        const t = board[3 - i];
        if (t === undefined) {
          return 0;
        }
        const tt = t[3 - j];
        if (tt === undefined) {
          return 0;
        }
        return tt;
      });
    });
  } else {
    return board.map((boardRow, i) => {
      return boardRow.map((_cell, j) => {
        const t = board[j];
        if (t === undefined) {
          return 0;
        }
        const tt = t[3 - i];
        if (tt === undefined) {
          return 0;
        }
        return tt;
      });
    });
  }
};

export const moveBlocks = (board: Board, dir: number) => {
  const rotatedBoard = rotateBoard(board, dir);
  const movedBoard: Board = [];
  let scorePlus = 0,
    i = 0;
  let canMove = true;

  rotatedBoard.forEach((row) => {
    const temp: number[] = [];

    row.forEach((element) => {
      if (element !== 0) temp.push(element);
    });
    const result: number[] = [];
    let count = 0;

    for (i = 0; i < temp.length; i++) {
      const t = temp[i];

      if (t === undefined) {
        throw new Error();
      }

      if (i + 1 < temp.length && temp[i] === temp[i + 1]) {
        result.push(t * 2);
        scorePlus += t * 2;
        i += 1;
        count += 1;
      } else {
        result.push(t);
        count += 1;
      }
    }

    for (i = count; i < 4; i++) {
      result.push(0);
    }

    movedBoard.push(result);
  });

  if (rotateBoard(movedBoard, 4 - dir).join() === board.join()) {
    canMove = false;
  }

  return {
    board: canMove ? newBlock(rotateBoard(movedBoard, 4 - dir)) : board,
    score: scorePlus,
  };
};
