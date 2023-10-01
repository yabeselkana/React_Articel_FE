import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export const userRegister = (data, navigate, isLoading) => async (dispatch) => {
  try {
    isLoading(true);
    axios
      .post(`${process.env.REACT_APP_API_KEY}/api/users/register`, data)
      .then((res) => {
        console.log(res);

        if (res.status === 201) {
          toast.success("Registration successful", {
            position: toast.POSITION.TOP_CENTER,
          });
          navigate("/Login");
          isLoading(false);
        } else if (res.status === 400) {
          toast.error("Registration Error", {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          const datas = res.data;
          datas.forEach((res) => {
            console.log(res.message);
            toast.error("Registration Error", {
              position: toast.POSITION.TOP_CENTER,
            });
            isLoading(false);
          });

          // console.log(res.data[0].message);
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
        isLoading(false);

        console.log(err.response.data.message);
      });
    dispatch({ type: "CREATE_USER", payload: data });
  } catch (err) {
    if (err.status === 400) {
      toast.error("Error", {
        position: toast.POSITION.TOP_CENTER,
      });
      console.log(err.data.data);
    }
    isLoading(false);
  }
};

export const loginUser = (data, navigate, isLoading) => async (dispatch) => {
  try {
    isLoading(true);
    axios
      .post(`${process.env.REACT_APP_API_KEY}/api/users/login`, data)
      .then((res) => {
        if (res.data.status === "success") {
          Swal.fire("Login Success", "Your account Success Login", "success").then((result) => {
            navigate("/home");
            localStorage.setItem("users_id", res.data.data.id);
            localStorage.setItem("users_id_profile", res.data.data.id);
            localStorage.setItem("token", res.data.data.token);
          });
        } else {
          Swal.fire("Login Failed", res.data.message, "error");
        }
        isLoading(false);
        dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
        isLoading(false);
        console.log(err.response.data.message);
      });
  } catch (err) {
    console.log(err);
    toast.error(err.response.data.message, {
      position: toast.POSITION.TOP_CENTER,
    });
    isLoading(false);
    console.log(err.response.data.message);
  }
};
