import React from "react";
import { AppContext } from "../contextapi/context";
const SearchForm = () => {
  const { value, setValue, handleSubmit, error } = React.useContext(AppContext);

  return (
    <div className="form-center">
      <form className="form">
        <input
          type="text"
          className={`${error ? "form-input" : "form-input"}`}
          placeholder="Shorten a link here ..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button className="form-btn" type="submit" onClick={handleSubmit}>
          Shorten It!
        </button>
        {error && <p className="error">{error.msg}</p>}
      </form>
    </div>
  );
};

export default SearchForm;
