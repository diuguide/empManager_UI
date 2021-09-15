import { Form, Button, FormControl, FloatingLabel } from "react-bootstrap";

const SearchBar = () => {
  return (
    <Form>
      <Form.Group className="d-flex mb-2">
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form.Group>
      <FloatingLabel label="Please choose one...">
        <Form.Select>
          <option value="employee">Employee</option>
          <option value="department">Department</option>
          <option value="job">Job</option>
        </Form.Select>
      </FloatingLabel>
    </Form>
  );
};

export default SearchBar;
