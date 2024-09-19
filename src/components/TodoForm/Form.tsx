import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setTodos } from "../../redux/todos/TodosSlice";
import { Button, Input } from "antd";
import { TTodo } from "types/todos";
import "./styles.scss";

function TodoForm() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState<TTodo | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({
      id: Math.round(Math.random() * 100),
      text: e.target.value,
      completed: false,
    });
  };

  return (
    <div className="form-wrapper">
      <Input value={todo?.text} onChange={handleChange} />
      <Button
        children="+"
        type="primary"
        onClick={() => {
          if (todo !== null) {
            dispatch(setTodos(todo));
          }
          setTodo(null);
        }}
      />
    </div>
  );
}

export default TodoForm;
