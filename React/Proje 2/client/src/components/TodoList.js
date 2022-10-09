import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  getTodosAsync,
  toggleTodoAsync,
  destroyTodoAsync,
} from "../redux/todos/services";
import { selectFilteredTodos } from "../redux/todos/todosSlice";
import Loading from "./Loading";
import Error from "./Error";

function TodoList() {
  const dispatch = useDispatch();
  const filteredTodos = useSelector(selectFilteredTodos);
  const isLoading = useSelector((state) => state.todos.isLoading);
  const error = useSelector((state) => state.todos.error);

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  const handleDestroy = async (id) => {
    if (window.confirm("Are you sure ?")) {
      await dispatch(destroyTodoAsync(id));
    }
  };

  const handleToggle = async(id, completed) => {
    await dispatch(toggleTodoAsync({ id, data: { completed }}))
  }

  if (isLoading) <Loading />;

  if (error) <Error message={error} />;

  return (
    <ul className="todo-list">
      {filteredTodos.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              onChange={() => handleToggle( item.id, !item.completed )}
              checked={item.completed}
            />
            <label>{item.todo}</label>
            <button
              className="destroy"
              onClick={() => handleDestroy(item.id)}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
