import { Navbar, Container, Row, Col } from "react-bootstrap";
import SearchBar from "./SearchBar";
const MyNavbar = ({ onSearch }) => {
  return (
    <>
      <Navbar expand="lg" className="bg-dark" data-bs-theme="dark">
        <Container className="">
          <Row className="mx-auto">
            <Col xs={12} lg={12}>
              <h1 className="text-center text-light">MeteoAntimo</h1>
            </Col>
            <Col xs={12} lg={12}>
              <div className="mx-auto">
                <SearchBar onSearch={onSearch} />
              </div>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
