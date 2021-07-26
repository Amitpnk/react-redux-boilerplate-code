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
    <div className="hero">
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

      {/* <script>
        var icon = document.getElementById("icon");

        if (localStorage.getItem("theme") == null) {
          localStorage.setItem("theme", "light");
        }

        let localData = localStorage.getItem("theme");

        if (localData == "light") {
          icon.src = "img/moon.png";
        document.body.classList.remove("dark-theme");
        }
        else if (localData == "dark") {
          icon.src = "img/sun.png";
        document.body.classList.add("dark-theme");
        }

        icon.onclick = function () {
          document.body.classList.toggle("dark-theme");
        if (document.body.classList.contains("dark-theme")) {
          icon.src = "img/sun.png";
        localStorage.setItem("theme", "dark");
            } else {
          icon.src = "img/moon.png";
        localStorage.setItem("theme", "light");
            }
        }
      </script> */}
    </div>
  );
}

export default App;
