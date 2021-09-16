import { Row, Col } from "react-bootstrap";


const EmployeeCard = ({ emp, handleClick }) => {
  
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
      <Col  className="d-flex justify-content-end align-items-center">
        <div onClick={handleClick} id={emp.employee_id} className="emp-button">Details</div>
      </Col>
    </Row>
  );
};

export default EmployeeCard;
