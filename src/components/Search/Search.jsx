import React, { useState } from "react";
import { ReactComponent as MagnifyingGlass } from "../../assets/magnifyingGlass.svg";
import "./Search.css";
import handleDictLookup from "./handleDictLookup";
function Search({ dictResponse, setDictResponse }) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="searchWrapper">
      <form
        onSubmit={(e) => {
          handleDictLookup(e, searchTerm, setDictResponse);
        }}
      >
        <input
          type="text"
          className="searchBar"
          placeholder={dictResponse.word}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <button className="searchIconButton" type="submit">
          <MagnifyingGlass className="searchIcon"></MagnifyingGlass>
        </button>
      </form>
    </div>
  );
}

export default Search;
