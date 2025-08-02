import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CityCard = ({ weatherData }) => {
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
    navigate("/dettagli", { state: { weatherData: weatherData } });
  };

  return (
    <>
      <Card className="d-flex">
        <Card.Img
          variant="top"
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
        />
        <Card.Body className="text-center d-flex flex-column">
          <Card.Title>
            {name}, {country}
          </Card.Title>
          <Card.Text className="flex-grow-1">
            Temperatura: **{temperature}°C**
            <br />
            Condizioni: **{description}**
          </Card.Text>
          <Button
            variant="primary"
            onClick={handleDetailsClick}
            className="mt-auto"
          >
            Details
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};
export default CityCard;
