import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const idUser = localStorage.getItem("users_id");

  const [users, setUsers] = useState([]);

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

  return (
    <>
      <div className=" border  col-auto col-sm-2 bg-blue d-flex flex-column justify-content-between min-vh-100 ">
        <div>
          <a className="text-decoration-none ms-4 d-flex align-items-center text-dark d-none d-sm-inline">
            <span className="fs-4"> Articel </span>
          </a>
          <hr className="text-dark d-none d-sm-block"></hr>
          <ul class="nav nav-pills flex-column" id="myTab" role="tablist">
            <li class="nav-item text-dark my-1 ">
              <Link to={`/profile/${idUser}`} className="nav-link " aria-current="page" id="profile-tab" data-toggle="tab" role="tab" aria-controls="profile" aria-selected="false">
                <i className=" text-dark  bi-file-earmark-plus"></i>
                <span className="ms-2 text-dark d-none d-sm-inline">Add Articel</span>
              </Link>
            </li>
            <li class="nav-item text-dark my-1 ">
              <Link to={`/MyArticel/${idUser}`} className="nav-link " aria-current="page" id="profile-tab" data-toggle="tab" role="tab" aria-controls="profile" aria-selected="false">
                <i className=" text-dark  bi bi-grid"></i>
                <span className="ms-2 d-none text-dark d-sm-inline">My Articel</span>
              </Link>
            </li>
          </ul>
        </div>
        <div class="dropdown open">
          <a class="btn btn-secondary text-dark  dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className=" bi text-dark bi-person fs-4 "></i>
            <span className="fs-4 ms-3 d-none d-sm-inline text-dark">{users.fullname}</span>
          </a>
          <div class="dropdown-menu " aria-labelledby="triggerId">
            <a class="dropdown-item" href="#">
              Profile
            </a>
            <a class="dropdown-item " href="#">
              Setting
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
