import "./styles.scss";

interface CardProps {
  city: string;
  icon: string;
  weather: string;
  temperature: number;
}

function WidgetMeteo({ city, icon, weather, temperature }: CardProps) {
  return (
    <div className="card">
      <div className="card-informations">
        <div className="card-city">{city}</div>
        <div className="card-weather">{weather}</div>
        <div className="card-icon"> 
        <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="" /></div>
      </div>
      <div className="card-temperatures">
        <div className="card-temperature">{temperature} °</div>
      </div>
    </div>
  );
}

export default WidgetMeteo;
