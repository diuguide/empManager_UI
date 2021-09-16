import { Form, Button, FormControl, FloatingLabel } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterData } from "../state/slices/dataSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState({
    field: "",
    filter: "employee",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setSearch({ ...search, [name]: value });
    console.log(search);
  };

  const handleClick = () => {
    dispatch(filterData({ field: search.field, filter: search.filter }));
  };
  return (
    <Form>
      <Form.Group className="d-flex mb-2">
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
          name="field"
          onChange={handleChange}
          value={search.field}
        />
        <Button onClick={handleClick} variant="outline-success">
          Search
        </Button>
      </Form.Group>
      <FloatingLabel label="Please choose one...">
        <Form.Select
          name="filter"
          onChange={handleChange}
          value={search.filter}
        >
          <option value="employee">Employee</option>
          <option value="department">Department</option>
          <option value="job">Job</option>
        </Form.Select>
      </FloatingLabel>
    </Form>
  );
};

export default SearchBar;
