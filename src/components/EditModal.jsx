import { useState, useRef, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditModal = ({ handleClose, show, emp }) => {

  const empRecord = useRef();
  useEffect(() => {
    empRecord.current = {
      fname: emp.first_name,
      lname: emp.last_name,
      email: emp.email,
      phone_number: emp.phone_number,
      job_id: emp.job_id,
      salary: emp.salary,
      manager_id: emp.manager_id,
      department_id: emp.department_id,
    }
  })
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
    console.log("form Creds: ", formCreds);
  }
  return (
    <Modal show={show} onHide={handleClose}>
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

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
