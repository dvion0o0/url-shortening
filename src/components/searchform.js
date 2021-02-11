import React from "react";

const SearchForm = () => {
  return (
    <div className="form-center">
      <form className="form">
        <input
          type="text"
          className="form-input"
          placeholder="Shorten a link here ..."
        />
        <button className="form-btn">Shorten It!</button>
      </form>
    </div>
  );
};

export default SearchForm;
