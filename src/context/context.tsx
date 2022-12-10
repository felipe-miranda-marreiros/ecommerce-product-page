import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducers";

export type ProductItemProps = {
  id: string;
  title: string;
  price: string;
  amount?: number;
  totalPrice?: number;
  thumbnail: string;
};

export type InitialStateProps = {
  amount: number;
  cart: ProductItemProps[];
};

type Actions = {
  changeAmount: (type: string) => void;
  addToCart: (item: ProductItemProps) => void;
  removeCartItems: () => void;
};

const initialState: InitialStateProps & Actions = {
  amount: 0,
  cart: [],
  changeAmount: (string: string) => {},
  addToCart: (item: ProductItemProps) => {},
  removeCartItems: () => {},
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
      ? dispatch({ type: "REMOVE_AMOUNT" })
      : dispatch({ type: "ADD_AMOUNT" });
  };

  const addToCart = (item: ProductItemProps) => {
    dispatch({ type: "ADD_CART", payload: item });
  };

  const removeCartItems = () => {
    dispatch({ type: "REMOVE_CART" });
  };

  return (
    <AppContext.Provider
      value={{ ...state, changeAmount, addToCart, removeCartItems }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppContext);
};
