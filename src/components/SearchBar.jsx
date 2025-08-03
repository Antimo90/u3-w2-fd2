import { Form, Button, FormControl } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_KEY = "d6cd2140ff36bef339d66429c4dc8e45";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const trimmedInput = searchInput.trim();
    if (!trimmedInput.includes(",")) {
      alert(
        "Per favore, inserisci la città e il prefisso nazionale (es. Roma,IT)"
      );
      return;
    }

    const parts = trimmedInput.split(",");
    if (parts.length === 2) {
      const cityPart = parts[0].trim();
      const countryPart = parts[1].trim();

      const formattedCity =
        cityPart.charAt(0).toUpperCase() + cityPart.slice(1).toLowerCase();
      const formattedCountry = countryPart.toUpperCase();
      const finalSearchTerm = `${formattedCity},${formattedCountry}`;

      const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${finalSearchTerm}&appid=${API_KEY}&units=metric`;

      fetch(endpoint)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(
              `Città non trovata: ${finalSearchTerm}. Controlla il nome.`
            );
          }
        })
        .then((data) => {
          navigate("/details", { state: { weatherData: data } });
        })
        .catch((err) => {
          console.error(
            `Errore durante la ricerca di ${finalSearchTerm}:`,
            err
          );
          alert(err.message);
        })
        .finally(() => {
          setSearchInput("");
        });
    } else {
      alert("Formato non valido. Usa 'Città,PrefissoNazione' (es. Roma,IT)");
      setSearchInput("");
    }
  };

  return (
    <>
      <Form onSubmit={handleSearchSubmit} className="d-flex">
        <FormControl
          type="text"
          value={searchInput}
          placeholder="Roma,IT"
          onChange={handleSearchInputChange}
          aria-label="Cerca"
          className="me-2"
        />
        <Button variant="outline-primary" type="submit">
          Cerca
        </Button>
      </Form>
    </>
  );
};

export default SearchBar;
