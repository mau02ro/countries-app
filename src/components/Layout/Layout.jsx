import { useContext } from "react";
import Context from "../../hooks/context";

const Layout = (props) => {
  const state = useContext(Context);

  return (
    <div className="">
      Layout
      {console.log(state)}
      {props.children}
    </div>
  );
};

export default Layout;
