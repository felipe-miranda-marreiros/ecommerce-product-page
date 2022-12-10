import { Reducer } from "react";
import { InitialStateProps, ProductItemProps } from "./context";

enum ActionEnums {
  REMOVE_AMOUNT = "REMOVE_AMOUNT",
  ADD_AMOUNT = "ADD_AMOUNT",
  ADD_CART = "ADD_CART",
  REMOVE_CART = "REMOVE_CART",
}

type ActionsUnion = keyof typeof ActionEnums;

type Action = {
  type: ActionsUnion;
  payload?: any;
};

export const reducer: Reducer<InitialStateProps, Action> = (
  state,
  action
): InitialStateProps => {
  switch (action.type) {
    case "ADD_AMOUNT":
      if (state.amount >= 5) {
        return {
          ...state,
          amount: 5,
        };
      }
      return {
        ...state,
        amount: state.amount + 1,
      };

    case "REMOVE_AMOUNT":
      if (state.amount <= 0) {
        return {
          ...state,
          amount: 0,
        };
      }
      return {
        ...state,
        amount: state.amount - 1,
      };

    case "ADD_CART":
      let newItemCart: ProductItemProps | any = {};
      if (state.amount > 1 && typeof action.payload === "object") {
        const itemCart = { ...action.payload };
        itemCart.amount = state.amount;
        itemCart.totalPrice = state.amount * itemCart.price;
        newItemCart = { ...itemCart };
        return {
          ...state,
          cart: [newItemCart],
        };
      }
      return {
        ...state,
        cart: [action.payload],
      };

    case "REMOVE_CART":
      return {
        ...state,
        cart: [],
      };

    default:
      return { ...state };
  }
};
