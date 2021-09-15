import { Row, Col, Container } from "react-bootstrap";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

const Dashboard = () => {
  return (
    <Container fluid>
      <Row
        style={{ height: "70vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <Col lg={8} md={9} xs={10}>
          <SearchBar />
          <SearchResults />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
