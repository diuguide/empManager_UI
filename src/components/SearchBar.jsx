import { Form, Button, FormControl, FloatingLabel } from "react-bootstrap";
import { getAllEmployees } from "../utilities/remote-api";
import { useDispatch } from "react-redux";
import {
  dataState,
  dataLoading,
  dataLoaded,
  dataTransfer,
} from "../state/slices/dataSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
      fetchEmployees();
  };

  const fetchEmployees = () => {
    dispatch(dataLoading());
    getAllEmployees()
      .then((res) => {
        return dispatch(dataTransfer(res.data));
      })
      .then((res) => {
        dispatch(dataLoaded());
      })
      .catch((err) => console.error(err));
  };

  return (
    <Form>
      <Form.Group className="d-flex mb-2">
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
        />
        <Button onClick={handleClick} variant="outline-success">
          Search
        </Button>
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
