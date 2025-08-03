import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import CityCard from "./CityCard";
import { useLocation, useNavigate } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { weatherData } = location.state || {};

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h1 className="text-center mb-4">
            Dettagli Meteo per {weatherData.name}, {weatherData.sys.country}
          </h1>

          <CityCard weatherData={weatherData} showDetailsButton={false} />

          <Card className="mt-4 p-4 bg-secondary">
            <h3>Informazioni Aggiuntive</h3>
            <p>Umidità: **{weatherData.main.humidity}%**</p>
            <p>Pressione: **{weatherData.main.pressure} hPa**</p>
            <p>Velocità del vento: **{weatherData.wind.speed} m/s**</p>
            <p>Percepita: **{weatherData.main.feels_like}°C**</p>
          </Card>
          <div className="text-center mt-4">
            <Button variant="secondary" onClick={handleGoBack}>
              Torna alla Home
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
