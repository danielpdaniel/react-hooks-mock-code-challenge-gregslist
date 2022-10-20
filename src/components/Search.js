import React from "react";

function Search({searchTerm, onSearchChange, onSubmit}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    onSubmit()
  }

  function handleChange(e){
    onSearchChange(e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm ? searchTerm : ""}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
