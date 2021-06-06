import { useState } from "react";
import Home from "./components/Home";
import { AppContext } from "./contexts/AppContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <AppContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      <Home />
    </AppContext.Provider>
  );
}

export default App;
