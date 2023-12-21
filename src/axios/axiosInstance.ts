import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather?q=London",
});

export default axiosInstance;
