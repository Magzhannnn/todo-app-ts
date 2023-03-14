import styles from "./TodoList.module.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllTodos,
  selecTodosLength,
} from "../../store/todos/todos-selectors";
import { addTodo } from "../../store/todos/todos-action";
import { ITodos } from "../../types/todos-type";

const TodoForm = () => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();
  const todos = useSelector(selectAllTodos);
  const todosLength: number = useSelector(selecTodosLength);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (title === "") {
      alert("You didn't enter anything!!!");
    } else {
      const todo: ITodos = {
        id: todosLength + 1,
        completed: false,
        title,
      };

      dispatch(addTodo(todo));
      setTitle("");
    }
  };

  //   useEffect(() => {
  //     console.log(todos);
  //   }, [todos]);

  return (
    <div className={styles.todo_form}>
      <input
        className={styles.todo_input}
        type="text"
        placeholder="Input todo"
        value={title}
        onChange={changeHandler}
      />
      <button onClick={clickHandler} className={styles.todo_btn}>
        Add
      </button>
    </div>
  );
};

export default TodoForm;
