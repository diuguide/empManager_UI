import { Row, Container, Col, Form, Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { dataState, dataLoaded } from "../state/slices/dataSlice";
import { useEffect, useRef, useState } from "react";
import Dashboard from "./Dashboard";

const EmployeeDetail = () => {
  let params = useParams();
  const state = useSelector(dataState);
  const emp = useRef();
  const dispatch = useDispatch();
  const history = useHistory();
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setFormCreds({
      fname: emp.current.first_name,
      lname: emp.current.last_name,
      email: emp.current.email,
      phone_number: emp.current.phone_number,
      job_id: emp.current.job_id,
      salary: emp.current.salary,
      manager_id: emp.current.manager_id,
      department_id: emp.current.department_id,
    });
    setShow(true);
  };

  useEffect(() => {
    findEmployee(params.id);
    console.log("empdetail: use effect called");
  });

  const [formCreds, setFormCreds] = useState({
    fname: "",
    lname: "",
    email: "",
    phone_number: "",
    job_id: "",
    salary: "",
    manager_id: "",
    department_id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormCreds({ ...formCreds, [name]: value });
  };

  const handleSubmit = () => {
    console.log("form Creds:", formCreds);
  };

  const findEmployee = (id) => {
    console.log("Fired findEmployee");
    localStorage.setItem("lastId", id);
    let ar = state.searchData.filter((emp) => emp.employee_id === parseInt(id));
    emp.current = ar[0];
    console.log("emp.current after reload: ", emp.current);
    dispatch(dataLoaded());
  };

  const dateConversion = (date) => {
    let ar = date.split("-");
    let end = ar[2].split("T");
    return ar[1] + "/" + end[0] + "/" + ar[0];
  };

  if (state.reloadToggle) {
    return (
      <Container fluid>
        {console.log("emp detail rendered:", emp.current)}
        <Row className="d-flex justify-content-center">
          <Col className="border rounded mt-4 pb-2" lg={5} md={5} xs={10}>
            {state.isLoaded && (
              <>
                <Row>
                  <Col className="d-flex empDetail-header mx-3">
                    <div className="empDetail-name">
                      {emp.current.first_name} {emp.current.last_name}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="empDetail-id">
                      #{emp.current.employee_id}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex">
                    <ul
                      style={{ width: "120px" }}
                      className="empDetails-details"
                    >
                      <li className="details">EMAIL</li>
                      <li className="details">PHONE</li>
                      <li className="details">HIRE DATE</li>
                      <li className="details">JOB ID</li>
                      <li className="details">SALARY</li>
                      <li className="details">COMMISSION %</li>
                      <li className="details">MANAGER</li>
                      <li className="details">DEPARTMENT ID</li>
                    </ul>
                    <ul className="empDetails-data">
                      <li className="dataaa">
                        {emp.current.email
                          ? emp.current.email
                          : "[Not Available]"}
                        @company.com
                      </li>
                      <li className="dataaa">
                        {emp.current.phone_number
                          ? emp.current.phone_number
                          : "[Not Available]"}
                      </li>
                      <li className="dataaa">
                        {emp.current.hire_date
                          ? dateConversion(emp.current.hire_date)
                          : "[Not Available]"}
                      </li>
                      <li className="dataaa">
                        {emp.current.job_id
                          ? emp.current.job_id
                          : "[Not Available]"}
                      </li>
                      <li className="dataaa">
                        {emp.current.salary
                          ? emp.current.salary
                          : "[Not Available]"}
                      </li>
                      <li className="dataaa">
                        {emp.current.commission_pct
                          ? emp.current.commission_pct
                          : "[Not available]"}
                      </li>
                      <li className="dataaa">
                        {emp.current.manager_id
                          ? emp.current.manager_id
                          : "[Not Available]"}
                      </li>
                      <li className="dataaa">
                        {emp.current.department_id
                          ? emp.current.department_id
                          : "Not Available"}
                      </li>
                    </ul>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div onClick={() => history.goBack()} className="back-btn">
                      Back
                    </div>
                  </Col>
                  <Col>
                    <div onClick={handleShow} className="edit-record">
                      Edit Record
                    </div>
                  </Col>
                </Row>
              </>
            )}
          </Col>
        </Row>
        {show && (
          <Row className="d-flex justify-content-center">
            <Col className="border rounded mt-4 pb-2" lg={5} md={5} xs={10}>
              <Form>
                <Form.Group className="m-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fname"
                    value={formCreds.fname}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="m-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lname"
                    value={formCreds.lname}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="m-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    value={formCreds.email}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="m-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone_number"
                    value={formCreds.phone_number}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="m-3">
                  <Form.Label>Job ID</Form.Label>
                  <Form.Control
                    type="text"
                    name="job_id"
                    value={formCreds.job_id}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="m-3">
                  <Form.Label>Salary</Form.Label>
                  <Form.Control
                    type="text"
                    name="salary"
                    value={formCreds.salary}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="m-3">
                  <Form.Label>Manager ID</Form.Label>
                  <Form.Control
                    type="text"
                    name="manager_id"
                    value={formCreds.manager_id}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="m-3">
                  <Form.Label>Department Id</Form.Label>
                  <Form.Control
                    type="text"
                    name="department_id"
                    value={formCreds.department_id}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Form>
              <Button variant="primary" onClick={handleSubmit}>
                Save Changes
              </Button>
            </Col>
          </Row>
        )}
      </Container>
    );
  } else {
    return <Dashboard />;
  }
};

export default EmployeeDetail;
