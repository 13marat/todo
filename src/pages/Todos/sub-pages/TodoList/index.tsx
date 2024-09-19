import TodoForm from "components/TodoForm/Form";
import { useSelector } from "react-redux";
import { RootState } from "redux/configureStore";
import { Todo } from "components";

function TodoList() {
  const todos = useSelector((state: RootState) => state.todos);
  // eslint-disable-next-line no-console
  console.log(todos, "todos");

  return (
    <>
      <TodoForm />
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </>
  );
}

export default TodoList;
