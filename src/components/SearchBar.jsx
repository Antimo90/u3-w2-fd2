import { Form, Button, FormControl } from "react-bootstrap";
const SearchBar = () => {
  return (
    <>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Cerca..."
          className="me-2"
          aria-label="Cerca"
        />
        <Button variant="outline-success">Cerca</Button>
      </Form>
    </>
  );
};

export default SearchBar;
