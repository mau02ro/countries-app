import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "../Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch></Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
