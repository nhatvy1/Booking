import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter.slice";
import screenReducer from "./slices/screen.slice";

export const store = configureStore({
  reducer: {
    count: counterReducer,
    screen: screenReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch