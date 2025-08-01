import { useEffect } from "react";
import CityCard from "./CityCard";
const endpoint =
  "https://api.openweathermap.org/data/2.5/weather?q=Firenze,IT&appid=" +
  { key };
const key = "d6cd2140ff36bef339d66429c4dc8e45";

const CityWeatherList = () => {
  const getWeathers = () => {
    fetch(endpoint + "&units=metric")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("ERRORE NELLA CHIAMATA");
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log("ERRORE", err);
      });
  };
  useEffect(() => {
    getWeathers();
  }, []);
  return <></>;
};

export default CityWeatherList;
