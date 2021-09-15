import { Row, Col, Container } from "react-bootstrap";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { getAllEmployees } from "../utilities/remote-api";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import {
    dataLoading,
    dataLoaded,
    dataTransfer,
  } from "../state/slices/dataSlice";

const Dashboard = () => {
    useEffect(() => {
        fetchEmployees();
      });
    const dispatch = useDispatch();
    const fetchEmployees = () => {
        dispatch(dataLoading());
        getAllEmployees()
          .then((res) => {
            return dispatch(dataTransfer(res.data));
          })
          .then((res) => {
            dispatch(dataLoaded());
          })
          .catch((err) => console.error(err));
      };

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
