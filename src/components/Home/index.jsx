import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { Container, Button, Col, Row } from "react-bootstrap";

export default function Home() {
  const { count, setCount } = useContext(AppContext);

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Col>
        <h1 className="text-center">Hello world</h1>
        <p className="text-center">{count}</p>
        <Row className="py-3 justify-content-center">
          <Button
            onClick={() => setCount(count + 1)}
            className="col-1 px-5 mx-2 btn btn-success"
          >
            +
          </Button>
          <Button
            onClick={() => setCount(count - 1)}
            className="col-1 px-5 mx-2 btn btn-danger"
          >
            -
          </Button>
        </Row>
      </Col>
    </Container>
  );
}
