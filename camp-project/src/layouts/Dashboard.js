import React from "react";
import Categories from "./Categories";
import ProductList from "../pages/ProductList";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import { ToastContainer } from "react-toastify";
import ProductAdd from "../pages/ProductAdd";

function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right" />
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/products" component={ProductList} />
            <Route path="/products/:name" component={ProductDetail} />
            <Route path="/product/add" component={ProductAdd} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Dashboard;
