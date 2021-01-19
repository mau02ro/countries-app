import { useState, useEffect, Fragment } from "react";
import Context from "../../hooks/context";

import Router from "../Router";

import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("dark");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .then(setLoading(false))
      .catch((err) => console.error(err));
  }, []);

  const state = {
    loading,
    updateLoading: () => {
      loading ? setLoading(false) : setLoading(true);
    },
    mode,
    updateMode: () => {
      mode === "dark" ? setMode("light") : setMode("dark");
    },
    countries,
    // updateCountries: setCountries,
  };

  return (
    <Fragment>
      <Context.Provider value={state}>
        <Router />
      </Context.Provider>
    </Fragment>
  );
};

export default App;
