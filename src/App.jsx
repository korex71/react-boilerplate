import { useState } from "react";
import Home from "./components/Home";
import { AppContext } from "./contexts/AppContext";
import { GlobalStyle } from "./App.global";
import api from "./api/config";

function App() {
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = (url) => {
    setIsLoading(true);
    setErrorMessage("");
    api
      .post(`/api`, { url })
      .then((res) => res.data)
      .then((data) => {
        if (data.error) throw new Error(data.error);
        return data;
      })
      .then((json) => json.data)
      .then((data) => {
        setResults(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setErrorMessage(err.message);
      });
  };

  return (
    <AppContext.Provider
      value={{
        handleSearch,
        isLoading,
        results,
        errorMessage,
      }}
    >
      <GlobalStyle />
      <Home />
    </AppContext.Provider>
  );
}

export default App;
