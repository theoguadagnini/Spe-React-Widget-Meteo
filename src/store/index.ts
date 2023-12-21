import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../store/reducers/weatherReducer";

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
