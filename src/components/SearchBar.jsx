import { Form, Button, FormControl } from "react-bootstrap";
import { useState } from "react";
const SearchBar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");

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
      if (onSearch) {
        onSearch(finalSearchTerm);
      }
    } else {
      alert("Formato non valido. Usa 'Città,PrefissoNazione' (es. Roma,IT)");
    }
    setSearchInput("");
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
