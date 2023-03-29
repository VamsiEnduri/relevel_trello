import React, { useState } from "react";
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";

function TrelloBoard() {
  const [serach, setSearch] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const closeHanlder = () => {
    setSearch("");
  };
  return (
    <div>
      <Header
        input={serach}
        searchHandler={searchHandler}
        close={closeHanlder}
      />

      <Cards input={serach} />
    </div>
  );
}

export default TrelloBoard;
