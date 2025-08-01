// import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import CityCard from "./components/CityCard";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <MyNavbar />
      <CityCard />
      <MyFooter />
    </>
  );
}

export default App;
