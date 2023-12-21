import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store";

import fetchWeather from "../../store/asyncActions/fecthWeather";

import Card from "../Card/index";

import "./App.scss";

function App() {
  const weather = useSelector((state: RootState) => state.weather);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchWeather("London"));
  }, [dispatch]);

  return (
    <div className="app">
      {weather && (
        <Card
          location={weather.name}
          icon={weather.icon}
          weather={weather.weather}
          temperature={Math.round(weather.main.temp - 273.15)}
        />
      )}
    </div>
  );
}

export default App;
