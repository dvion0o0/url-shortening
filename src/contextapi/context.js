import React, { useState, useEffect } from "react";

const AppContext = React.createContext();

const apiUrl = "https://api.shrtco.de/v2/shorten?url=";

const AppProvider = ({ children }) => {
  const [value, setValue] = useState("m.com");
  const [show, SetShow] = useState(false);
  const [result, setResult] = useState([]);
  const [error, setError] = useState({ type: false, msg: "" });
  console.log(error);
  console.log(result);
  const toggle = () => {
    SetShow(!show);
  };

  const fetchResult = async () => {
    const response = await fetch(`${apiUrl}${value}`);
    const data = await response.json();
    console.log(data);
    const { ok } = data;
    const { short_link, original_link, code } = data.result;
    setResult({
      id: code,
      link: short_link,
      original: original_link,
      status: ok,
    });
  };

  useEffect(() => {
    fetchResult();
  }, []);

  const handleSubmit = () => {
    if (value === "") {
      setError({ type: true, msg: "Please enter url" });
    } else if (result.status === "false") {
      setError({ type: true, msg: "Enter a valid url" });
    } else {
    }
  };

  return (
    <AppContext.Provider value={{ toggle, show }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
