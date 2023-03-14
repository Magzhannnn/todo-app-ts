import { ITodos } from "../../types/todos-type";
import styles from "./TodoList.module.css";
import { useDispatch } from "react-redux";
import { completedTodo, removeTodo } from "../../store/todos/todos-action";

interface TodoItemProps {
  todo: ITodos;
  index: number;
  resolved?: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, index, resolved }) => {
  const dispatch = useDispatch();

  return (
    <>
      {resolved === "resolved" && <hr className={styles.todo_item_resolved} />}
      <div className={styles.todo_item}>
        <div className={styles.todo_item_left}>
          <span>{index + 1}.</span>
          {todo.title}{" "}
        </div>
        <div className={styles.todo_item_right}>
          <input
            className={styles.todo_item_complete}
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(completedTodo(todo.id))}
          />
          <button
            className={styles.todo_item_del}
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
