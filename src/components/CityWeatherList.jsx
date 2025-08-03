import { useEffect, useState } from "react";
import CityCard from "./CityCard";
import { Container, Row, Col } from "react-bootstrap";

const key = "d6cd2140ff36bef339d66429c4dc8e45";

const CityWeatherList = ({ initialCity }) => {
  const [citiesToDisplay, setCitiesToDisplay] = useState([]);
  const [weatherDataList, setWeatherDataList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchWeatherForCity = async (cityName) => {
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`;
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(
          `Errore nella chiamata API per ${cityName}: status ${response.status}`
        );
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.error(`Errore nel recupero dati per ${cityName}:`, err);

      return { error: err.message, name: cityName };
    }
  };

  const getWeathers = async () => {
    setLoading(true);
    setError(null);
    setWeatherDataList([]);

    if (!citiesToDisplay || citiesToDisplay.length === 0) {
      setLoading(false);
      return;
    }

    try {
      const results = await Promise.all(
        citiesToDisplay.map((city) => fetchWeatherForCity(city))
      );

      const validWeatherData = results.filter((data) => !data.error);
      const errorsFound = results.filter((data) => data.error);

      if (errorsFound.length > 0) {
        setError(
          `Alcune città non hanno potuto essere caricate: ${errorsFound
            .map((e) => e.name)
            .join(", ")}. Controlla i nomi.`
        );
      }

      setWeatherDataList(validWeatherData);
    } catch (err) {
      console.error("Errore generale nel recupero dei dati meteo:", err);
      setError(
        "Si è verificato un errore durante il caricamento dei dati meteo."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initialCity) {
      setCitiesToDisplay(initialCity);
    }
  }, [initialCity]);

  useEffect(() => {
    getWeathers();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [citiesToDisplay]);

  return (
    <Container className="my-4">
      {loading && (
        <div className="text-center my-3">Caricamento dati meteo...</div>
      )}

      {error && <div className="text-center my-3 text-danger">{error}</div>}

      <Row className="justify-content-center">
        {!loading && !error && weatherDataList.length === 0 && (
          <Col xs={12} className="text-center">
            Nessuna città da mostrare. Prova a cercarne una!
          </Col>
        )}

        {weatherDataList.map((weatherData) => (
          <Col
            xs={6}
            md={3}
            xl={2}
            key={weatherData.id}
            className="mb-4 d-flex"
          >
            <CityCard weatherData={weatherData} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CityWeatherList;
