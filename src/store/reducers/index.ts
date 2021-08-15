import { ActionType } from "typesafe-actions";

import ActionTypes from "../actionTypes";
import * as actions from "../action";

import { Todo } from "../types";

const initialState: Todo[] = [
  {
    id: 1,
    text: "Init Todo",
    completed: false,
  },
];

export type Actions = ActionType<typeof actions>;

const reducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO_LIST: {
      const { todo } = action.payload;
      return [...state, todo];
    }
    default:
      return state;
  }
};

export default reducer;
