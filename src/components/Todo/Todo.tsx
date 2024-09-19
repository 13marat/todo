import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Input } from "antd";
import { TTodo } from "types/todos";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  editTodo,
  setCompleted,
} from "../../redux/todos/TodosSlice";
import "./styles.scss";

type TProps = {
  todo: TTodo;
  details?: boolean;
};

function Todo({ todo: { text, completed, id }, details = false }: TProps) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [todoText, setTodoText] = useState(text);
  const navigate = useNavigate();

  const handleEdit = () => {
    dispatch(editTodo({ id, text: todoText }));
    setIsEditing(false);
  };

  return (
    <div className={`todo-wrapper ${details ? "details" : ""}`}>
      {isEditing ? (
        <Input
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          onPressEnter={handleEdit}
        />
      ) : (
        <h2 className={completed ? "completed" : ""}>{text}</h2>
      )}
      {!details ? (
        <div className="buttons-wrapper">
          <Checkbox
            checked={completed}
            onClick={() => dispatch(setCompleted(id))}
          />
          <Button
            type="primary"
            onClick={() => dispatch(deleteTodo(id))}
            children="-"
          />
          <Button
            type="primary"
            onClick={() => navigate(`/${id}`)}
            children="OPEN"
          />
          <Button
            type="primary"
            onClick={() => {
              if (isEditing) {
                handleEdit();
              } else {
                setIsEditing(true);
                setTodoText(text);
              }
            }}
            children={isEditing ? "SAVE" : "EDIT"}
          />
        </div>
      ) : (
        <Button type="primary" onClick={() => navigate(-1)} children="Back" />
      )}
    </div>
  );
}

export default Todo;
