import React, { useState, useEffect } from "react";

const AppContext = React.createContext();

const apiUrl = "https://api.shrtco.de/v2/shorten?url=";

const getLocalStorage = () => {
  let result = localStorage.getItem("result");
  if (result) {
    return (result = JSON.parse(localStorage.getItem("result")));
  } else {
    return [];
  }
};

const AppProvider = ({ children }) => {
  const [value, setValue] = useState("");
  const [show, SetShow] = useState(false);
  const [result, setResult] = useState(getLocalStorage());
  const [error, setError] = useState({ type: false, msg: "" });
  const toggle = () => {
    SetShow(!show);
  };

  const fetchResult = async () => {
    const response = await fetch(`${apiUrl}${value}`);
    const data = await response.json();
    const { ok } = data;

    if (ok === false) {
      setError({ type: true, msg: "Invalid url" });
    }
    if (ok === true) {
      setError({ type: false, msg: "" });
      const { short_link, original_link, code } = data.result;
      setResult([
        ...result,
        {
          id: code,
          link: short_link,
          original: original_link,
        },
      ]);
      setValue("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      setError({ type: true, msg: "Enter a Value" });
    } else {
      fetchResult();
    }
  };

  useEffect(() => {
    localStorage.setItem("result", JSON.stringify(result));
  }, [result]);

  return (
    <AppContext.Provider
      value={{ toggle, show, handleSubmit, setValue, error, result, value }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
