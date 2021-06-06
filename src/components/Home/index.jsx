import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { Wrapper } from "./styles";

export default function Home() {
  const { count, setCount } = useContext(AppContext);
  return (
    <Wrapper className="d-flex flex-column justify-content-center align-items-center">
      <h1>Hello world</h1>
      Count: {count}
      <div className="row py-3">
        <button
          onClick={() => setCount(count + 1)}
          className="col px-5 mx-2 btn btn-success"
        >
          +
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="col px-5 mx-2 btn btn-danger"
        >
          -
        </button>
      </div>
    </Wrapper>
  );
}
