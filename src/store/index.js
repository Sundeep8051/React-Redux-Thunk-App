import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice.js";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export * from "./thunks/fetchUsers.js";
export * from "./thunks/addUser.js";
export * from "./thunks/deleteUser.js";
