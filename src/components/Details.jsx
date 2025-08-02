import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CityCard from "./CityCard";
import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const { weatherData } = location.state || {};

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h1 className="text-center mb-4">
            Dettagli Meteo per {weatherData.name}, {weatherData.sys.country}
          </h1>

          <CityCard weatherData={weatherData} />

          <Card className="mt-4 p-4">
            <h3>Informazioni Aggiuntive</h3>
            <p>Umidità: **{weatherData.main.humidity}%**</p>
            <p>Pressione: **{weatherData.main.pressure} hPa**</p>
            <p>Velocità del vento: **{weatherData.wind.speed} m/s**</p>
            <p>Percepita: **{weatherData.main.feels_like}°C**</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
