import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { dataState } from "../state/slices/dataSlice";
import EmployeeCard from "./EmployeeCard";
const SearchResults = () => {
  const state = useSelector(dataState);

  return (
    <Container fluid>
      <Row style={{ height: "100%" }} className="d-flex justify-content-center">
        <Col className="d-flex flex-wrap border">
          {state.isLoaded && (
            <Row>
              {state.empData.map((emp, index) => {
                return (
                  <Col>
                    <EmployeeCard key={index} emp={emp} />
                  </Col>
                );
              })}
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SearchResults;
