import { Reducer } from "react";
import { InitialStateProps } from "./context";

enum ActionEnums {
  REMOVE_AMOUNT = "REMOVE_AMOUNT",
  ADD_AMOUNT = "ADD_AMOUNT",
}

type ActionsUnion = keyof typeof ActionEnums;

type Action = {
  type: ActionsUnion;
  payload?: string;
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
    default:
      return { ...state };
  }
};
