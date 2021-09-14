import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Row>
      <Col
        style={{ width: "100vw", height: "50px" }}
        className="bg-dark text-light"
      >
        <ul className="nav-main">
          <Link className="nav-link" to="/search">
            Search
          </Link>
          <Link className="nav-link" to="dashBoard">
            Dashboard
          </Link>
          <Link className="nav-link" to="/admin">
            Admin
          </Link>
        </ul>
      </Col>
    </Row>
  );
};

export default Navigation;
