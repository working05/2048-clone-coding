type Cell = number;
export type CellPos = {
  x: number;
  y: number;
};
export type Board = Cell[][];
export type State = {
  score: number;
  bestScore: number;
  board: Board;
};
