import { Row, Col } from "react-bootstrap";

const EmployeeCard = ({ emp }) => {
  console.log(emp);
  return (
    <>
        <Row>
          <Col>
            <div className="emp-name">
              {emp.first_name} {emp.last_name}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="emp-phone">{emp.phone_number != null ? emp.phone_number : "Not Available"}</div>
          </Col>
        </Row>
     </>
  );
};

export default EmployeeCard;
