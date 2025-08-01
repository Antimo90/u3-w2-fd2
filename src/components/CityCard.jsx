import { Card, Button, Container, Row, Col } from "react-bootstrap";

const CityCard = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={6} md={2}>
            <Card>
              <Card.Img
                variant="top"
                src="https://placecats.org/300/300"
                alt="Immagine placeholder"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Details</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CityCard;
