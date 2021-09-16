import { Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { dataState, dataLoading } from "../state/slices/dataSlice";
import EmployeeCard from "./EmployeeCard";
import { useHistory } from "react-router";

const SearchResults = () => {
  const state = useSelector(dataState);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = (e) => {
    const { id } = e.target;
    dispatch(dataLoading());
    history.push(`/empdetail/${id}`);
  };
  return (
    <Row style={{ height: "100%" }} className="d-flex justify-content-center">
      <Col>
        {state.isLoaded && (
          <Row className="d-flex justify-content-start">
            {state.searchData.map((emp, index) => {
              return (
                <Col
                  className="border p-2 m-lg-1 m-md-1 m-sm-0 emp-card"
                  lg={3}
                  md={5}
                  sm={11}
                  key={index}
                >
                  <EmployeeCard handleClick={handleClick} emp={emp} />
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
