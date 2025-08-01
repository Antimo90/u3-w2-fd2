import { Container } from "react-bootstrap";

const MyFooter = () => {
  return (
    <footer className="bg-light text-center py-3 mt-5">
      {" "}
      {/* Aggiunto un po' di margine superiore per separarlo dal contenuto */}
      <Container>
        <p>
          Scopri di più <a href="#meteo">sui dati di meteo</a> e
          <a href="#meteo">sui dati di mappe</a>.
        </p>
      </Container>
    </footer>
  );
};

export default MyFooter;
