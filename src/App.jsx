import React from "react";
import Router from "./config/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

import "../src/index.css";
import axios from "axios";

const App = () => {
  axios.interceptors.request.use(
    (config) => {
      if (localStorage.getItem("token")) {
        config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );
  return (
    <div>
      <Router />
    </div>
  );
};

export default App;
