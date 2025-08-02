import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import CityCard from "./components/CityCard";
import CityWeatherList from "./components/CityWeatherList";
import Details from "./components/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [cities, setCities] = useState([
    "Manila,PH",
    "London,GB",
    "Paris,FR",
    "Rome,IT",
    "Berlin,DE",
    "Madrid,ES",
    "New York,US",
    "Tokyo,JP",
    "Sydney,AU",
    "Dubai,AE",
    "Cairo,EG",
    "Beijing,CN",
    "Moscow,RU",
    "Cape Town,ZA",
    "Mumbai,IN",
    "Toronto,CA",
    "Lisbon,PT",
    "Amsterdam,NL",
  ]);

  const handleCitySearch = (newCity) => {
    setCities([...cities, newCity]);
  };

  return (
    <BrowserRouter>
      <MyNavbar onSearch={handleCitySearch} />
      {/* <CityCard /> */}
      <Routes>
        <Route path="/" element={<CityWeatherList initialCity={cities} />} />
        <Route path="/detais" element={<Details />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
