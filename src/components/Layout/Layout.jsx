import { useContext } from "react";

import Context from "../../hooks/context";
import Header from "../Header";

import "./Layout.css";

const Layout = ({ children }) => {
  const { mode } = useContext(Context);

  return (
    <div className={`${mode}_mode layout`}>
      <Header />
      <div className="global_wrapper">{children}</div>
    </div>
  );
};

export default Layout;
