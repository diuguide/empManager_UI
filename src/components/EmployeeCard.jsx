import { Container, Row, Col } from "react-bootstrap";

const EmployeeCard = ({ key, emp}) => {
    console.log(emp);
    return(
        <Container>
            <Row key={emp}>
                <Col><h1>Test EMP CARD</h1></Col>
            </Row>
        </Container>
    )

}

export default EmployeeCard;