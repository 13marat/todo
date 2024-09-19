import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "redux/configureStore";
import { Todo } from "components";

function TodoDetails() {
  const { id } = useParams();
  const todo = useSelector((state: RootState) => state.todos).find(
    (todo) => todo.id.toString() === id
  );

  return todo ? <Todo todo={todo} details /> : null;
}

export default TodoDetails;
