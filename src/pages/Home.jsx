import React from "react";
import Navbar from "../componets/Navbar";
import Carousel from "../componets/Carosel";
import Posting from "../componets/Posting";
import NavLog from "../componets/NavLog";
import Foot from "../componets/Foot";

const Home = () => {
  const login = localStorage.getItem("token");
  return (
    <>
      {!login ? <Navbar /> : <NavLog />}
      <Carousel />
      <Posting />
      <Foot />
    </>
  );
};

export default Home;
