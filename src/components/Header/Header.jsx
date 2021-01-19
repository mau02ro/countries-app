import Mode from "../Mode";

import "./Header.css";

const Header = () => {
  return (
    <header className="shadow">
      <div className="global_wrapper header_wrapper">
        <span id="logo">Where in the World?</span>
        <Mode />
      </div>
    </header>
  );
};

export default Header;
