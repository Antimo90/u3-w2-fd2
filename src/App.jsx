import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";

import CityWeatherList from "./components/CityWeatherList";
import Details from "./components/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const cities = [
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
  ];

  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<CityWeatherList initialCity={cities} />} />
        <Route path="/details" element={<Details />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
