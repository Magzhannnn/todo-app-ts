import { ITodos, TodosActionTypes } from "../../types/todos-type";

export const addTodo = (todo: ITodos) => ({
  type: TodosActionTypes.ADD_TODO,
  payload: todo,
});

export const removeTodo = (id: number) => ({
  type: TodosActionTypes.REMOVE_TODO,
  payload: id,
});

export const completedTodo = (id: number) => ({
  type: TodosActionTypes.COMLETED_TODO,
  payload: id,
});
