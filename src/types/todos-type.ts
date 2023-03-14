export interface ITodos {
  userId?: number;
  id: number;
  title: string;
  completed: boolean;
}

export enum TodosActionTypes {
  ADD_TODO = "ADD_TODO",
  REMOVE_TODO = "REMOVE_TODO",
  COMLETED_TODO = "COMLETED_TODO",
}

interface addTodo {
  type: TodosActionTypes.ADD_TODO;
  payload: ITodos;
}

interface removeTodo {
  type: TodosActionTypes.REMOVE_TODO;
  payload: number;
}

interface completedTodo {
  type: TodosActionTypes.COMLETED_TODO;
  payload: number;
}

export type TodosAction = addTodo | removeTodo | completedTodo;
