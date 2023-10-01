import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export const getArticel = (setData, isLoading) => async (dispatch) => {
  try {
    isLoading(true);
    axios.get(`${process.env.REACT_APP_API_KEY}/api/articles`).then(function (respose) {
      console.log(respose);
      setData(respose.data.data);
      isLoading(false);
    });

    dispatch({ type: "GET_ALL_ARTICEL", payload: "success" });
  } catch (error) {
    console.log(error);
  }
};

export const getDetailArticel = (setData, id, isLoading) => async (dispatch) => {
  try {
    isLoading(true);
    axios.get(`${process.env.REACT_APP_API_KEY}/api/articles/${id}`).then((res) => {
      setData(res.data.data[0]);

      console.log(res.data.data[0]);
      isLoading(false);
    });
    dispatch({ type: "GET_DETAIL_RECEPE", payload: "success" });
  } catch (err) {
    console.log(err);
  }
};

export const createArticel = (data, saveImage, isLoading, navigate, idUser) => async (dispatch) => {
  try {
    isLoading(true);
    const formData = new FormData();
    formData.append("writer", data.writer);
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("image", saveImage);

    axios
      .post(`${process.env.REACT_APP_API_KEY}/api/articles`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        toast.success("Add Articel successful", {
          position: toast.POSITION.TOP_CENTER,
        });

        navigate(`/MyArticel/${idUser}`);
        isLoading(false);
      })
      .catch((err) => {
        console.log(err.response.data.message);

        toast.error(err.response.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
        isLoading(false);
      });

    dispatch({ type: "CREATE_ARTICEL", payload: "success" });
  } catch (err) {
    toast.error("Add Articel Error", {
      position: toast.POSITION.TOP_CENTER,
    });
    isLoading(false);
  }
};

export const updateArticel = (data, saveImage, setShow, isLoading) => async (dispatch) => {
  try {
    isLoading(true);
    const formData = new FormData();
    formData.append("writer", data.writer);
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("image", saveImage);

    axios
      .put(`${process.env.REACT_APP_API_KEY}/api/articles/${data.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        toast.success("Update Articel successful", {
          position: toast.POSITION.TOP_CENTER,
        });

        window.location.reload();
        isLoading(false);
        setShow(false);
        window.location.reload();
        dispatch({ type: "UPDATE_ARTICEL", payload: res.data });
      })
      .catch((err) => {
        console.log(err);

        toast.error(err.response.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
        isLoading(false);
      });
  } catch (error) {
    console.log(error);
  }
};

export const deleteArticel = (id, setShow) => async (dispatch) => {
  try {
    axios
      .delete(`${process.env.REACT_APP_API_KEY}/api/articles/${id}`)
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Product Delete",
          text: `Delete Product Success`,
          icon: "success",
        });
        setShow(false);
        window.location.reload();
        dispatch({ type: "DELETE_ARTICEL", payload: "success" });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          text: "error",
          icon: "error",
        });
        setShow(false);
      });
  } catch (error) {
    console.log(error);
  }
};
