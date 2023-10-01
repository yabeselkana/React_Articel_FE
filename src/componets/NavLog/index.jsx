import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { animateScroll } from "react-scroll";

const NavLog = () => {
  const handleOnClick = () => {
    animateScroll.scrollToTop();
  };
  document.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  const [users, setUsers] = useState([]);

  const getid = localStorage.getItem("users_id_profile");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/api/users/profile`)
      .then((res) => {
        console.log(res);
        setUsers(res.data.data);
        localStorage.setItem("users_id", res.data.data[0].id);
        // console.log(res.data.data[0]);
      }, [])
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/home");
    window.location.reload();
  };

  return (
    <>
      <style>
        header {"{"}
        top: 0; position: sticky; background-color: transparent; transition: background-color 0.2s ease-in-out; z-index: 10;
        {"}"}
        header.scrolled {"{"}
        background-color: lightblue; opacity: 0.98;
        {"}"}
        .icon {"{"}
        height: 50px; width: 50px; position: relative; background-color: transparent;
        {"}"}
        .icon::after {"{"}
        content: ""; width: 15px; height: 15px; background-color: beige; position: absolute; border-radius: 100%; right: 0px; top: 0px;
        {"}"}
      </style>

      <header>
        <nav className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              height: "auto",
            }}
          >
            <section>
              <div
                className="linkTo"
                style={{
                  alignItems: "center",
                  height: "70px",
                  display: "flex",
                }}
              >
                <div>
                  <Link to="/home" onClick={handleOnClick}>
                    <p
                      style={{
                        margin: 0,
                        width: "80px",
                        borderRadius: "10px",
                        color: "#2E266F",
                      }}
                    >
                      Home
                    </p>
                  </Link>
                </div>

                <div>
                  <Link to={`/profile/${users.id}`} onClick={handleOnClick}>
                    <p
                      style={{
                        margin: 0,
                        width: "60px",
                        borderRadius: "10px",
                        color: "#2E266F",
                      }}
                    >
                      Profile
                    </p>
                  </Link>
                </div>
              </div>
            </section>
            <section style={{ justifyContent: "center" }}>
              <div className="btn-group mt-4">
                <button onClick={handleLogout} type="button" aria-haspopup="true" aria-expanded="false" style={{ backgroundColor: "transparent", border: 0 }}>
                  Log Out
                </button>
              </div>
            </section>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavLog;
