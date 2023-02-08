import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TableReducer } from "lib/table";

const store = configureStore({
  reducer: combineReducers({
    table: TableReducer,
  }),
})

const state = store.getState;

export type State = ReturnType<typeof state>;

export { store };
