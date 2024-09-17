import type React from "react";
import type { SetStateAction } from "react";

import type { State } from "./Types";

function Cell({value}: CellProp) {
    const cellName = 'cell cell-' + String(value >= 128 ? 128 : value);
    return <div className={cellName}>{value ? value : ''}</div>;
}

function Board({state, setState}: BoardProps) {
    return (
        <div className='board'>
            {state.board.map((row, rowIdx) => 
                row.map((value, colIdx) => (
                    <Cell key={'${rowIdx}-${colIdx}'} value={value}/>
                )),
            )}
        </div>
    );
}

type CellProp = {
    value: number;
}

type BoardProps = {
    state: State;
    setState: React.Dispatch<React.SetStateAction<State>>;
}

export default Board;