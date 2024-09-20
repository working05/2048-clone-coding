import { resetGame } from '../utils/Functions';
import Button from './Button';
import type { State } from './Types';

function Modal({ state, setState }: ModalProp) {
  const reset = () => {
    resetGame(setState);
  };

  const continueGame = () => {
    setState({
      ...state,
      isContinue: true,
    });
  };

  if (!state.isFail && !state.isSuccess) return null;

  if (state.isFail) {
    return (
      <div className="modal-overlay">
        <div className="modal">
          <div className="message">Game Over!</div>
          <Button text="Try Again" onClick={reset} />
        </div>
      </div>
    );
  }

  if (state.isSuccess && !state.isContinue) {
    return (
      <div className="modal-overlay">
        <div className="modal">
          <div className="message">You Win!</div>
          <div className="button-container">
            <Button text="Keep Going" onClick={continueGame} />
            <Button text="Try Again" onClick={reset} />
          </div>
        </div>
      </div>
    );
  }

  return null;
}

type ModalProp = {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
};

export default Modal;
