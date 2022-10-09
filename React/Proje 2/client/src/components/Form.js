import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addTodoAsync } from "../redux/todos/services";
import Loading from "./Loading";
import Error from "./Error";

function Form() {
  const [todo, setTodo] = useState("");
  const addNewTodoIsLoading = useSelector(
    (state) => state.todos.addNewTodo.isLoading
  );
  const addNewTodoError = useSelector((state) => state.todos.addNewTodo.error);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    if (!todo) return;

    e.preventDefault();

    await dispatch(addTodoAsync({ todo: todo }));

    setTodo("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", alignItems: "center" }}
    >
      <input
        className="new-todo"
        disabled={addNewTodoIsLoading}
        placeholder="What needs to be done?"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        autoFocus
      />
      {addNewTodoIsLoading && <Loading />}
      {addNewTodoError && <Error message={addNewTodoError}/>}
    </form>
  );
}

export default Form;
