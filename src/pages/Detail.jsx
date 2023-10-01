import React from "react";
import NavLog from "../componets/NavLog";
import Details from "../componets/Detail";
import { useParams } from "react-router-dom";
import Navbar from "../componets/Navbar";
import Posting from "../componets/Posting";
import Foot from "../componets/Foot";

const Detail = () => {
  let { id } = useParams();

  const login = localStorage.getItem("token");
  return (
    <>
      {!login ? <Navbar /> : <NavLog />}
      <Details id={id} />
      <Posting />
      <Foot />
    </>
  );
};

export default Detail;
