import { useContext, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { Wrapper } from "./styles";
import * as Feather from "react-feather";
import Item from "../ResponseItem";
import Loading from "../Loading";

export default function Home() {
  const { isLoading, results, handleSearch, errorMessage } =
    useContext(AppContext);
  const [search, setSearch] = useState("");

  const handle = () => {
    if (!search) return;
    handleSearch(search);
  };

  return (
    <Wrapper className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="mt-5">Universal downloader</h1>
      <div className="py-5" style={{ display: isLoading ? "none" : "flex" }}>
        <input
          type="text"
          placeholder="Insira uma url"
          className="py-2 px-2"
          onKeyPress={(e) => e.key === "Enter" && handle()}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-success py-1 rounded-0" onClick={handle}>
          <Feather.Send />
        </button>
      </div>
      {errorMessage && <h2 className="text-danger">{errorMessage}</h2>}

      {isLoading && <Loading />}

      {results && <Item item={results} />}
    </Wrapper>
  );
}
