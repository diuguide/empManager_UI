import { Row, Col } from "react-bootstrap";

const EmployeeCard = ({ emp }) => {
  console.log(emp);
  return (
    <Row className="d-flex justify-content-between">
      <Col className="col-7">
        <Row>
          <Col>
            <div className="emp-name">
              {emp.first_name} {emp.last_name}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="emp-phone">
              {emp.phone_number != null ? emp.phone_number : "Not Available"}
            </div>
          </Col>
        </Row>
      </Col>
      <Col className="d-flex justify-content-end align-items-center">
        <img src="./employee-logo.png" height="50" alt="employee"></img>
      </Col>
    </Row>
  );
};

export default EmployeeCard;
