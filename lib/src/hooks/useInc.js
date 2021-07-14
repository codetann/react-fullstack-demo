import { useReducer } from "react";

const TYPES = {
  INC: "INC",
  DEC: "DEC",
  RESET: "RESET",
};

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.INC:
      return { count: state.count + 1 };

    case TYPES.DEC:
      return { count: state.count - 1 };

    case TYPES.RESET:
      return { count: 0 };

    default:
      return state;
  }
};

export default function useInc() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const inc = () => dispatch({ type: TYPES.INC });
  const dec = () => dispatch({ type: TYPES.DEC });
  const reset = () => dispatch({ type: TYPES.RESET });

  return [state, inc, dec, reset];
}
