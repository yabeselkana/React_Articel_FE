import React, { useState } from "react";
import Style from "./Auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userRegister } from "../../config/redux/actions/userActions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [loading, isLoading] = useState(false);

  const navigate = useNavigate();

  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };
  const dispatch = useDispatch();

  let onClick = (e) => {
    e.preventDefault();

    dispatch(userRegister(data, navigate, isLoading));
  };

  return (
    <>
      <div className={`container ${Style.cat}  cat `}>
        <img src={require("../../assets/Auth/iconBlog.png")} alt="logo" className="imgku" />
        <p className="text-center py-3">Please sign up with your account</p>
        <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist"></ul>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <div className="form-group">
              <input className="form-control " type="fullname" name="fullname" id="fullname" placeholder="Fullname" onChange={onChange} required />
            </div>
            <div className="form-group">
              <input className="form-control" type="email" name="email" id="email" placeholder="Email" onChange={onChange} />
            </div>
            <div className="form-group">
              <input className="form-control" type="phone" name="phone" id="phone" placeholder="Phone" onChange={onChange} />
            </div>
            <div className="form-group">
              <input className="form-control" type="password" name="password" id="password" placeholder="Password" onChange={onChange} />
            </div>
            <div className="sform-group">
              <button className={`${Style.btnlog} btnlog  btn btn-block rounded-pill buton text-white  `} onClick={onClick}>
                {loading ? <span className="spinner-border spinner-border-sm text-white" role="status" aria-hidden="true" /> : "Register"}
              </button>
            </div>
            <p className="mt-2 text-regis float-right">
              Don't have Blog account?
              <Link to="/login" className="text-danger">
                <spam> Login</spam>
              </Link>
            </p>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Register;
