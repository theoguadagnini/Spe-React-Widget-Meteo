import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const VITE_key = import.meta.env.VITE_OPENWEATHER_API_URL;

const fetchWeather = createAsyncThunk("FETCH_WEATHER", async (city: string) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${VITE_key}`
  );
  return response.data;
});

export default fetchWeather;
