import { RootState } from "../rootReducer";

export const selectAllTodos = (state: RootState) => state.todos;

export const selectResolvedTodos = (state: RootState) =>
  state.todos.filter((todo) => todo.completed);

export const selectUnResolvedTodos = (state: RootState) =>
  state.todos.filter((todo) => !todo.completed);

export const selecTodosLength = (state: RootState) => state.todos.length;
