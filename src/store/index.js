import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice.js";
import { albumsApi } from "./apis/albumsApi.js";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(albumsApi.middleware);
  },
});

setupListeners(store.dispatch);

export * from "./thunks/fetchUsers.js";
export * from "./thunks/addUser.js";
export * from "./thunks/deleteUser.js";
export {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useDeleteAlbumMutation,
} from "./apis/albumsApi.js";
