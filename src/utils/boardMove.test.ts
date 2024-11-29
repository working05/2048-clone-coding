import { describe, expect, it } from 'vitest';

import type { Board } from '../components/Types';
import { moveBoard } from './Functions';

describe('moveBoard()', () => {
  it('merge, left', () => {
    const input: Board = [
      [0, 4, 0, 4],
      [2, 0, 8, 8],
      [0, 2, 4, 0],
      [0, 0, 4, 0],
    ];

    const output: Board = [
      [8, 0, 0, 0],
      [2, 16, 0, 0],
      [2, 4, 0, 0],
      [4, 0, 0, 0],
    ];

    const { board, canMove, score } = moveBoard(input, 0);

    expect(board).toEqual(output);
    expect(canMove).toBe(true);
    expect(score).toBe(24);
  });

  it('merge, down', () => {
    const input: Board = [
      [0, 4, 0, 4],
      [2, 0, 8, 8],
      [0, 2, 4, 0],
      [0, 0, 4, 0],
    ];

    const output: Board = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 4, 8, 4],
      [2, 2, 8, 8],
    ];

    const { board, canMove, score } = moveBoard(input, 1);

    expect(board).toEqual(output);
    expect(canMove).toBe(true);
    expect(score).toBe(8);
  });

  it('merge, right', () => {
    const input: Board = [
      [0, 4, 0, 4],
      [2, 0, 8, 8],
      [0, 2, 4, 0],
      [0, 0, 4, 0],
    ];

    const output: Board = [
      [0, 0, 0, 8],
      [0, 0, 2, 16],
      [0, 0, 2, 4],
      [0, 0, 0, 4],
    ];

    const { board, canMove, score } = moveBoard(input, 2);

    expect(board).toEqual(output);
    expect(canMove).toBe(true);
    expect(score).toBe(24);
  });

  it('merge, up', () => {
    const input: Board = [
      [0, 4, 0, 4],
      [2, 0, 8, 8],
      [0, 2, 4, 0],
      [0, 0, 4, 0],
    ];

    const output: Board = [
      [2, 4, 8, 4],
      [0, 2, 8, 8],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];

    const { board, canMove, score } = moveBoard(input, 3);

    expect(board).toEqual(output);
    expect(canMove).toBe(true);
    expect(score).toBe(8);
  });

  it('no merge, left', () => {
    const input: Board = [
      [0, 4, 0, 2],
      [2, 0, 8, 16],
      [0, 2, 4, 0],
      [0, 0, 4, 0],
    ];

    const output: Board = [
      [4, 2, 0, 0],
      [2, 8, 16, 0],
      [2, 4, 0, 0],
      [4, 0, 0, 0],
    ];

    const { board, canMove, score } = moveBoard(input, 0);

    expect(board).toEqual(output);
    expect(canMove).toBe(true);
    expect(score).toBe(0);
  });

  it('no move, left', () => {
    const input: Board = [
      [8, 4, 2, 4],
      [2, 8, 0, 0],
      [4, 2, 4, 0],
      [32, 0, 0, 0],
    ];

    const output: Board = [
      [8, 4, 2, 4],
      [2, 8, 0, 0],
      [4, 2, 4, 0],
      [32, 0, 0, 0],
    ];

    const { board, canMove, score } = moveBoard(input, 0);

    expect(board).toEqual(output);
    expect(canMove).toBe(false);
    expect(score).toBe(0);
  });
});
