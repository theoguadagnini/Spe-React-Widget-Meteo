import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store";

import fetchWeather from "../../store/asyncActions/fecthWeather";

import WidgetMeteo from "../WidgetMeteo/index";

import "./App.scss";

function App() {
  const weather = useSelector((state: RootState) => state.weather);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchWeather("New York"));
  }, [dispatch]);

  return (
    <div className="app">
      {weather && (
        <WidgetMeteo
          city={weather.name}
          icon={weather.icon}
          weather={weather.weather}
          temperature={Math.round(weather.main.temp - 273.15)}
        />
      )}
    </div>
  );
}

export default App;
