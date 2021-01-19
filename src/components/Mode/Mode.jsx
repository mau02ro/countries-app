import { useContext } from "react";

import Context from "../../hooks/context";

import "./Mode.css";

const Mode = () => {
  const { mode, updateMode } = useContext(Context);
  return (
    <div onClick={updateMode}>
      {mode === "dark" ? (
        <span className="section_mode">
          <ion-icon name="sunny-outline"></ion-icon> Light Mode
        </span>
      ) : (
        <span className="section_mode">
          <ion-icon name="moon-outline"></ion-icon> Dark Mode
        </span>
      )}
    </div>
  );
};

export default Mode;
