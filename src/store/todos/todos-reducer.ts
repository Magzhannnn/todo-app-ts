import { ITodos, TodosAction, TodosActionTypes } from "../../types/todos-type";

const initialState: ITodos[] = [];

export const todosReducer = (
  state = initialState,
  action: TodosAction
): ITodos[] => {
  switch (action.type) {
    case TodosActionTypes.ADD_TODO:
      return [...state, action.payload];
    case TodosActionTypes.REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case TodosActionTypes.COMLETED_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};
