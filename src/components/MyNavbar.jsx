import { Navbar, Container, Row, Col } from "react-bootstrap";
import SearchBar from "./SearchBar";
const MyNavbar = () => {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-secondary
      "
      >
        <Container className="">
          <Row className="mx-auto">
            <Col xs={12} lg={12}>
              <h1 className="text-center">MeteoAntimo</h1>
            </Col>
            <Col xs={12} lg={12}>
              <div className="mx-auto">
                <SearchBar />
              </div>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
