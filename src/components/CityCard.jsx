import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CityCard = ({ weatherData, showDetailsButton = true }) => {
  const navigate = useNavigate();
  if (!weatherData) {
    return null;
  }
  const { name, sys, main, weather } = weatherData;
  const country = sys.country;
  const temperature = main.temp;
  const description = weather[0].description;
  const icon = weather[0].icon;

  const handleDetailsClick = () => {
    navigate("/details", { state: { weatherData: weatherData } });
  };

  return (
    <>
      <Card className="d-flex bg-secondary">
        <Card.Img
          variant="top"
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
          style={{ filter: "saturate(1.5) brightness(1.1)" }}
        />

        <Card.Body className="text-center d-flex flex-column">
          <Card.Title>
            {name}, {country}
          </Card.Title>
          <Card.Text className="flex-grow-1">
            Temperatura: {temperature}°C
            <br />
            Condizioni: {description}
          </Card.Text>
          {showDetailsButton && (
            <Button
              variant="primary"
              onClick={handleDetailsClick}
              className="mt-auto"
            >
              Details
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
};
export default CityCard;
