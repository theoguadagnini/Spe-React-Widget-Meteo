import fetchWeather from "../asyncActions/fecthWeather";

import WeatherData from "../../@types/weather";
import { createReducer } from "@reduxjs/toolkit";

interface WeatherState {
  icon: string;
  name: string;
  weather: string;
  main: {
    temp: number;
  };
  data: WeatherData | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  data: null,
  isLoading: false,
  error: null,
  name: "",
  weather: "",
  main: {
    temp: 0,
  },
  icon: "",
};

const weatherReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchWeather.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(fetchWeather.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.name = action.payload.name;
      state.weather = action.payload.weather[0].icon;
      state.weather = action.payload.weather[0].description;
      state.main.temp = action.payload.main.temp;
    })
    .addCase(fetchWeather.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "Failed to fetch weather data";
    });
});

export default weatherReducer;
