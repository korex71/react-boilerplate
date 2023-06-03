import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { Container, Button, Col, Row } from "react-bootstrap";
import { ClickMeButton } from "./styles";

const darkPalette = [
  "#202020",
  "#151515",
  "#301B3F",
  "#161616",
  "#3C415C",
  "#231E23",
];

export default function Home() {
  const { count, setCount, changeColor, getCurrentColor } = useContext(AppContext);

  const getRandomInt = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min)) + min;

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Col className="d-flex flex-column align-items-center">
        <ClickMeButton
          onClick={() => {
            let randomColor = darkPalette[getRandomInt(0, darkPalette.length)];
            
            while(getCurrentColor() === randomColor) {
              randomColor = darkPalette[getRandomInt(0, darkPalette.length)];
            }

            changeColor(randomColor);
          }}
        >
          Click me!
        </ClickMeButton>
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
