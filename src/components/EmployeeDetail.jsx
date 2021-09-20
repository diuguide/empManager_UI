import { Row, Container, Col } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { dataState, dataLoaded } from "../state/slices/dataSlice";
import { useEffect, useRef, useState } from "react";
import EditModal from "./EditModal";

const EmployeeDetail = () => {
  let params = useParams();
  const state = useSelector(dataState);
  const emp = useRef();
  const dispatch = useDispatch();
  const history = useHistory();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    findEmployee(params.id);
  });
  const findEmployee = (id) => {
    let ar = state.searchData.filter((emp) => emp.employee_id === parseInt(id));
    emp.current = ar[0];
    dispatch(dataLoaded());
  };

  const dateConversion = (date) => {
      let ar = date.split("-");
      let end = ar[2].split("T");
      return ar[1] + "/" + end[0] + "/" + ar[0];
  }

  return (
    <Container fluid>
      <Row className="d-flex justify-content-center">
        <Col className="border rounded mt-4 pb-2" lg={5} md={5} xs={10}>
          {state.isLoaded && (
            <>
              <Row>
                <Col className="d-flex empDetail-header mx-3">
                  <div className="empDetail-name">
                    {emp.current.first_name} {emp.current.last_name}
                  </div>
                </Col>
              </Row>
              <Row>
                   <Col>
                  <div className="empDetail-id">#{emp.current.employee_id}</div>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex">
                  <ul style={{ width: "120px" }} className="empDetails-details">
                    <li className="details">EMAIL</li>
                    <li className="details">PHONE</li>
                    <li className="details">HIRE DATE</li>
                    <li className="details">JOB ID</li>
                    <li className="details">SALARY</li>
                    <li className="details">COMMISSION %</li>
                    <li className="details">MANAGER</li>
                    <li className="details">DEPARTMENT ID</li>
                  </ul>
                  <ul className="empDetails-data">
                    <li className="dataaa">{emp.current.email ? emp.current.email : "[Not Available]"}@company.com</li>
                    <li className="dataaa">{emp.current.phone_number ? emp.current.phone_number : "[Not Available]"}</li>
                    <li className="dataaa">{emp.current.hire_date ? dateConversion(emp.current.hire_date) : "[Not Available]"}</li>
                    <li className="dataaa">{emp.current.job_id ? emp.current.job_id : "[Not Available]"}</li>
                    <li className="dataaa">{emp.current.salary ? emp.current.salary : "[Not Available]"}</li>
                    <li className="dataaa">
                      {emp.current.commission_pct
                        ? emp.current.commission_pct
                        : "[Not available]"}
                    </li>
                    <li className="dataaa">{emp.current.manager_id ? emp.current.manager_id : "[Not Available]"}</li>
                    <li className="dataaa">
                      {emp.current.department_id
                        ? emp.current.department_id
                        : "Not Available"}
                    </li>
                  </ul>
                </Col>
                
              </Row>
              <Row>
                  <Col>
                  <div onClick={() => history.goBack()}className="back-btn">Back</div>
                  </Col>
                  <Col>
                  <div onClick={handleShow} className="edit-record">Edit Record</div>
                  </Col>
               </Row>   
            </>
          )}
        </Col>
      </Row>
      <EditModal handleClose={handleClose} show={show} emp={emp.current} />                 
    </Container>
  );
};

export default EmployeeDetail;
