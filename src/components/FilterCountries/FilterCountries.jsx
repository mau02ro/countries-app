import "./FilterCountries.css";

const FilterCountries = ({ name, setName }) => {
  return (
    <div className="filterCountries">
      <input
        type="text"
        className="conatiner shadow_item filter_input"
        placeholder="Search for a country . . ."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select name="select" className="conatiner shadow_item filter_select">
        <option value="">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>

      {/* <ul>
        <li>...</li>
        <li>Africa</li>
      </ul> */}
    </div>
  );
};

export default FilterCountries;
