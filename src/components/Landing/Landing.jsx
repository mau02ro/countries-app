import { useContext } from "react";
import Context from "../../hooks/context";
import filterByName from "../../hooks/useFilter";

import FilterCountries from "../FilterCountries";
import Countries from "../Countries";

const Landing = () => {
  const { countries } = useContext(Context);
  const { name, setName, setRegion, region, filterData } = filterByName(
    countries
  );

  return (
    <section className="landing">
      <FilterCountries name={name} setName={setName} />
      <Countries countries={filterData} />
    </section>
  );
};

export default Landing;
