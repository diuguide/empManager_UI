import { Row, Container, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { dataState } from "../state/slices/dataSlice";
import { useEffect, useRef } from "react";

const EmployeeDetail = () => {
    let params = useParams();
    const state = useSelector(dataState);
    const emp = useRef();
    useEffect(() => {
        let ar = findEmployee(params.id);
        emp.current = ar[0];
    });
    const findEmployee = (id) => {
        return state.searchData.filter((emp) => emp.employee_id === parseInt(id))
    };
    
    return(
        <Container fluid>
      <Row
        style={{ height: "70vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <Col lg={8} md={9} xs={10}>
          
        </Col>
      </Row>
    </Container>
    )
}

export default EmployeeDetail;