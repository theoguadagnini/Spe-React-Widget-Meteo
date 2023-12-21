import "./styles.scss";

interface CardProps {
  location: string;
  icon: string;
  weather: string;
  temperature: number;
}

function Card({ location, icon, weather, temperature }: CardProps) {
  return (
    <div className="card">
      <div className="card-informations">
        <h1 className="card-location">{location}</h1>
        <h3 className="card-weather">{weather}</h3>
        <h3 className="card-icon"> {icon}</h3>
      </div>
      <div className="card-temperatures">
        <h2 className="card-temperature">{temperature} °</h2>
      </div>
    </div>
  );
}

export default Card;
