import { Row, Col, Container } from "react-bootstrap";
import SearchBar from "./SearchBar";

const Dashboard = () => {
    return(
        <Container fluid>
            <Row style={{ height: "70vh" }} className="d-flex justify-content-center align-items-center">
                <Col lg={8} md={9} xs={10}>
                    <SearchBar />
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard;