import React from "react";
import Search from "./Search";

function Header({searchTerm, onSearchChange, onSubmit}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchTerm={searchTerm} onSearchChange={onSearchChange} onSubmit={onSubmit}/>
    </header>
  );
}

export default Header;
