import React, { useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [show, SetShow] = useState(false);

  const toggle = () => {
    SetShow(!show);
  };

  return (
    <AppContext.Provider value={{ toggle, show }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
