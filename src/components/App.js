import React from 'react';

import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CustomersPage from "./customers/CustomersPage";
import ManageCustomerPage from "./customers/ManageCustomerPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/customers" component={CustomersPage} />
        <Route exact path="/customer/:custId" component={ManageCustomerPage} />
        <Route exact path="/customer" component={ManageCustomerPage} />
        <Route exact component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
