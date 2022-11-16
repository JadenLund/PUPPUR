import React, { useState } from "react";
import './css_files/SearchBar.css'
function SearchBar({ onChangeSearch }) {
  const [term, setTerm] = useState("");
  function submitChange() {
    onChangeSearch(term);
  }

  function handleChange(event) {
    setTerm(event.target.value);
  }

  return (
    <div className="ui search">
      <input
        onChange={handleChange}
        className="search-bar"
        placeholder="Search Breeds..."
        //onSearchChange works bc of the ui nee
      ></input>
      <button type="submit" onClick={submitChange}>
        Search
      </button>
    </div>
  );
}
export default SearchBar;
