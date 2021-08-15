import { action } from "typesafe-actions";

import ActionTypes from "../actionTypes";
import { Todo } from "../types";

export const addTodo = (todo: Todo) => {
  return action(ActionTypes.ADD_TODO_LIST, {
    todo,
  });
};
