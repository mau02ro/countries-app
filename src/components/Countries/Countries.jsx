import CardCountry from "../CardCountry";

import "./Countries.css";

const Countries = ({ countries }) => {
  return (
    <div className="grid_counties">
      {countries.map((country) => (
        <CardCountry key={country.alpha3Code} {...country} />
      ))}
    </div>
  );
};

export default Countries;
