import React, { useState } from "react";

const Search = () => {
  const [state, setState] = useState("");

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search character"
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
