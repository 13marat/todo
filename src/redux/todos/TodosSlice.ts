import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "redux/configureStore";
import { TTodo } from "types/todos";

const initialState: TTodo[] = [];

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, { payload }) => [...state, payload],
    setCompleted: (state, { payload }) => {
      return state.map((todo) =>
        todo.id === payload ? { ...todo, completed: !todo.completed } : todo
      );
    },
    deleteTodo: (state, { payload }) => {
      return state.filter((todo) => todo.id !== payload);
    },
    editTodo: (state, { payload: { id, text } }) => {
      return state.map((todo) => (todo.id === id ? { ...todo, text } : todo));
    },
  },
});

export const { setTodos, setCompleted, deleteTodo, editTodo } =
  todosSlice.actions;

export const selectTodos = (state: RootState) => state.todos;

export default todosSlice.reducer;
