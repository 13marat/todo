import React from "react";
import { Route, Routes } from "react-router-dom";
import TodoList from "./TodoList";
import TodoDetails from "./TodoDetails";

function Todos() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/:id" element={<TodoDetails />} />
      </Routes>
    </>
  );
}

export default Todos;
