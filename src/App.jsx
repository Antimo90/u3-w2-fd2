// import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import CityCard from "./components/CityCard";
import CityWeatherList from "./components/CityWeatherList";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <MyNavbar />
      {/* <CityCard /> */}
      <CityWeatherList />
      <MyFooter />
    </>
  );
}

export default App;
