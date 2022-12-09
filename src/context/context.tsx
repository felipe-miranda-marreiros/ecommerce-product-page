import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducers";

export type InitialStateProps = {
  amount: number;
};

type Actions = {
  changeAmount: (type: string) => void;
};

const initialState: InitialStateProps & Actions = {
  amount: 0,
  changeAmount: (string: string) => {},
};

const AppContext = createContext<InitialStateProps & Actions>(
  {} as InitialStateProps & Actions
);

interface Props {
  children: React.ReactNode;
}

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeAmount = (type: string) => {
    return type === "remove"
      ? dispatch({ type: "ADD_AMOUNT" })
      : dispatch({ type: "ADD_AMOUNT" });
  };

  return (
    <AppContext.Provider value={{ ...state, changeAmount }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppContext);
};
