import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { changeActiveFilter, clearCompletedItems, selectTodos, selectActiveFilter } from "../redux/todos/todosSlice";

function ContentFooter() {
  const dispatch = useDispatch();

  const items = useSelector(selectTodos);
  const notCompletedItemsCount = items.filter((item) => !item.completed).length;

  const activeFilter = useSelector(selectActiveFilter);

  useEffect(() => {
    localStorage.setItem("activeFilter", activeFilter)
  }, [activeFilter])

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{notCompletedItemsCount} </strong>
        item{notCompletedItemsCount > 1 && "s"} left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            className={activeFilter === "all" ? "selected" : ""}
            onClick={() => dispatch(changeActiveFilter("all"))}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={activeFilter === "active" ? "selected" : ""}
            onClick={() => dispatch(changeActiveFilter("active"))}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={activeFilter === "completed" ? "selected" : ""}
            onClick={() => dispatch(changeActiveFilter("completed"))}
          >
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={() => dispatch(clearCompletedItems())}>Clear completed</button>
    </footer>
  );
}

export default ContentFooter;
