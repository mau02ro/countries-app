import "./CardCountry.css";

const CardCountry = ({ name, flag, population, region, capital }) => {
  return (
    <div className="shadow card">
      <div
        className="card_flag"
        style={{ backgroundImage: `url(${flag})` }}
      ></div>
      <div className="card_main">
        <h2 className="card_county-name">{name}</h2>

        <ul className="card_data">
          <li>
            <span>Population:</span>
            {new Intl.NumberFormat("es-VE").format(population)}
          </li>
          <li>
            <span>Region:</span>
            {region}
          </li>
          <li>
            <span>Capital:</span>
            {capital}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardCountry;
