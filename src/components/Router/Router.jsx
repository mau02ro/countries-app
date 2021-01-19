import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "../Layout";
import Landing from "../Landing";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
