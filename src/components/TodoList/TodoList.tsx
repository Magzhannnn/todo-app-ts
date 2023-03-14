import TodoForm from "./TodoForm";
import styles from "./TodoList.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectResolvedTodos,
  selectUnResolvedTodos,
} from "../../store/todos/todos-selectors";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const dispatch = useDispatch();
  const resolvedTodos = useSelector(selectResolvedTodos);
  const unResolvedTodos = useSelector(selectUnResolvedTodos);

  return (
    <div className={styles.todo_list}>
      <TodoForm />
      <p className={styles.todo_list_title}>Unresolved todos:</p>
      {unResolvedTodos.length === 0 ? (
        <h2>There is no data in unresolved todo</h2>
      ) : (
        unResolvedTodos.map((todo, index) => (
          <TodoItem key={`todo_${todo.id}`} todo={todo} index={index} />
        ))
      )}
      <br />
      <p className={styles.todo_list_title}>Resolved todos:</p>
      {resolvedTodos.length === 0 ? (
        <h2>There is no data resolved todo</h2>
      ) : (
        resolvedTodos.map((todo, index) => (
          <TodoItem
            key={`todo_${todo.id}`}
            todo={todo}
            index={index}
            resolved="resolved"
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
