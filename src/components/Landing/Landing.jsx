import { useContext } from "react";
import Context from "../../hooks/context";
import filterByName from "../../hooks/useFilter";

import FilterCountries from "../FilterCountries";
import Countries from "../Countries";

const Landing = () => {
  const { countries } = useContext(Context);
  const { query, setQuery, filterData } = filterByName(countries);

  return (
    <section className="landing">
      <FilterCountries query={query} setQuery={setQuery} />
      <Countries countries={filterData} />
    </section>
  );
};

export default Landing;
