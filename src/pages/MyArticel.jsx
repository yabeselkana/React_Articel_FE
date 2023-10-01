import React from "react";
import SideBar from "../componets/SideBar";
import NavLog from "../componets/NavLog";
import Table from "../componets/TableArticel";
import Foot from "../componets/Foot";
// import FormAdd from "../componets/FormAdd";

const MyArticel = () => {
  const login = localStorage.getItem("token");
  return (
    <>
      <NavLog />
      <div className="container ">
        <div className="row">
          <SideBar />
          <Table />
        </div>
      </div>
      <Foot />
    </>
  );
};

export default MyArticel;
