import React from "react";
import { AppContext } from "../contextapi/context";
const Shorten = () => {
  const { result } = React.useContext(AppContext);
  const [alert, setAlert] = React.useState(false);
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [alert]);

  return (
    <section className="shorten">
      {result.map((item, index) => {
        const { id, link, original } = item;
        return (
          <article className="shorten-card" key={id}>
            <h3>{original}</h3>
            <div className="underline"></div>
            <div className="results">
              <h3>{link}</h3>
              <button
                key={index}
                onClick={(e) => {
                  console.log(e.currentTarget);
                  setAlert(true);
                  navigator.clipboard.writeText(link);
                }}
              >
                {alert ? "Copied!" : "Copy"}
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Shorten;
