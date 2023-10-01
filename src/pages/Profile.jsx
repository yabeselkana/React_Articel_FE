import React from "react";
import SideBar from "../componets/SideBar";
import NavLog from "../componets/NavLog";
import FormAdd from "../componets/FormAdd";

const Profile = () => {
  return (
    <>
      <NavLog />
      <div className="container ">
        <div className="row">
          <SideBar />
          <FormAdd />
        </div>
      </div>
    </>
  );
};

export default Profile;
