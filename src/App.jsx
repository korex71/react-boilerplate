import { useState, useEffect } from "react";
import Home from "./components/Home";
import { AppContext } from "./contexts/AppContext";
import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ color }) => color};
  color: white;
  height: 100vh;
`;

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("#202020");

  function getRandomInt(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }

  useEffect(() => {
    const darkPalette = [
      "#202020",
      "#151515",
      "#301B3F",
      "#161616",
      "#3C415C",
      "#231E23",
    ];
    setColor(darkPalette[getRandomInt(0, 5)]);
  }, [count]);

  return (
    <AppContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      <Wrapper color={color}>
        <Home />
      </Wrapper>
    </AppContext.Provider>
  );
}

export default App;
