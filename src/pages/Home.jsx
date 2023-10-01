import React from "react";
import Navbar from "../componets/Navbar";
import Carousel from "../componets/Carosel";
import Posting from "../componets/Posting";
import NavLog from "../componets/NavLog";

const Home = () => {
  const login = localStorage.getItem("token");
  return (
    <>
      {!login ? <Navbar /> : <NavLog />}
      <Carousel />
      <Posting />
    </>
  );
};

export default Home;
