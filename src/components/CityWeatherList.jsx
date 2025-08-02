import { useEffect, useState } from "react";
import CityCard from "./CityCard";

const key = "d6cd2140ff36bef339d66429c4dc8e45";

const CityWeatherList = () => {
  const [city, setCity] = useState("Manila,PH");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  const getWeathers = () => {
    setLoading(true);
    const dynamicEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

    fetch(dynamicEndpoint)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          if (response.status === 404) {
            throw new Error(`Città non trovata: ${city}. Controlla il nome.`);
          }
          throw new Error(
            `Errore nella chiamata API: status ${response.status}`
          );
        }
      })
      .then((data) => {
        console.log(data);
        setWeatherData(data);
        setError(null);
        setLoading(false);
      })
      .catch((err) => {
        console.log("ERRORE", err);
        setError(err.message);
        setWeatherData(null);
      });
  };

  useEffect(() => {
    getWeathers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setCity(searchInput);
    setSearchInput("");
  };

  return (
    <>
      <div>
        <h1>Cerca il Meteo</h1>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={searchInput}
            onChange={handleSearchInputChange}
            placeholder="Es: Roma,IT o New York"
          />
          <button type="submit">Cerca</button>
        </form>

        {loading && <div>Caricamento dati meteo...</div>}

        {error && <div style={{ color: "red" }}>Errore: {error}</div>}

        {weatherData && (
          <div>
            <h2>
              Meteo per {weatherData.name}, {weatherData.sys.country}
            </h2>
            <p>Temperatura: {weatherData.main.temp}°C</p>
            <p>Condizioni: {weatherData.weather[0].description}</p>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt={weatherData.weather[0].description}
            />
            {/* Qui puoi passare weatherData al tuo CityCard */}
            {/* <CityCard data={weatherData} /> */}
          </div>
        )}
      </div>
    </>
  );
};

export default CityWeatherList;
