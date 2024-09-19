import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos/TodosSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
