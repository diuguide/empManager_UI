import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { dataState } from "../state/slices/dataSlice";
import EmployeeCard from "./EmployeeCard";
const SearchResults = () => {
  const state = useSelector(dataState);

  return (
      <Row style={{ height: "100%" }} className="d-flex justify-content-center">
        <Col>
          {state.isLoaded && (
            <Row className="d-flex justify-content-around">
              {state.empData.map((emp, index) => {
                return (
                  <Col className="border shadow p-2 m-2 emp-card" lg={3} md={5} sm={11} key={index} >
                    <EmployeeCard emp={emp} />
                  </Col>
                );
              })}
            </Row>
          )}
        </Col>
      </Row>
  );
};

export default SearchResults;
