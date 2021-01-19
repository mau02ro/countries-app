import { useContext } from "react";
import Context from "../../hooks/context";

import FilterCountries from "../FilterCountries";
import Countries from "../Countries";

const Landing = () => {
  const { countries } = useContext(Context);
  return (
    <section className="landing">
      <FilterCountries />
      <Countries countries={countries} />
    </section>
  );
};

export default Landing;
