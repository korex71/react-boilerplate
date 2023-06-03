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
  const [count, setCount] = useState(10);
  const [color, setColor] = useState("#202020");

  const [defaultColor, setDefaultColor] = useState("#202020");

  function addHexTransparency(hexColor: string, alpha: number) {
    hexColor = hexColor.replace("#", "");

    const red = parseInt(hexColor.substring(0, 2), 16);
    const green = parseInt(hexColor.substring(2, 4), 16);
    const blue = parseInt(hexColor.substring(4, 6), 16);
  
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  }

  useEffect(() => {
    if((count*10) / 100 > 1) {
      setColor(addHexTransparency(defaultColor, 1));
    }
    else if((count*10) / 100 < 0) {
      setColor(addHexTransparency(defaultColor, 0));
    }
    else {
      setColor(addHexTransparency(defaultColor, (count*10) / 100));
    }

    return () => {};
  }, [count, color, defaultColor]);

  return (
    <AppContext.Provider
      value={{
        count,
        setCount,
        getCurrentColor: () => color,
        changeColor: (color: string) => setDefaultColor(color),
      }}
    >
      <Wrapper color={color}>
        <Home />
      </Wrapper>
    </AppContext.Provider>
  );
}

export default App;
