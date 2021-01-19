import { useContext } from "react";

import Context from "../../hooks/context";

const Layout = ({ children }) => {
  const state = useContext(Context);

  return (
    <div className="layout">
      {console.log(state)}
      {children}
    </div>
  );
};

export default Layout;
