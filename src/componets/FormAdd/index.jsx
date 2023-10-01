import React, { useState } from "react";
import style from "./formAdd.module.css";
import FormEdit from "../Form";
import { useDispatch } from "react-redux";
import { createArticel } from "../../config/redux/actions/articelActions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const FormAdd = () => {
  const [loading, isLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    writer: "",
    title: "",
    content: "",
  });

  const navigate = useNavigate();

  const idUser = localStorage.getItem("users_id");

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState(null);
  const handleUpload = (e) => {
    const img = e.target.files[0];
    setPhoto(img);
    setPreview(URL.createObjectURL(img));
  };
  const dispatch = useDispatch();
  let hendelSubmit = (e) => {
    e.preventDefault();

    dispatch(createArticel(data, photo, isLoading, navigate, idUser));
  };

  return (
    <>
      <div class={`container  col-12 col-md-9 bg-light ${style.rightSide}`}>
        <div className="col-12">
          <div className={`row inputEdit justify-content-center mb-3 mb-md-5 ${style.themeRow} ${style.rowOneRight}`}>
            <div className="col-11">
              <h3 className="pt-4">Add Articel</h3>
              <hr className={style.hr} />
              <form onSubmit={hendelSubmit}>
                <FormEdit type={"text"} title={"Write"} name={"writer"} placeholder={"Nama Penulis"} value={data?.writer} onchange={onChange} />
                <FormEdit type={"text"} title={"Title"} name={"title"} placeholder={"Judul"} value={data?.title} onchange={onChange} />
                <FormEdit type={"textarea"} title={"Content"} name={"content"} placeholder={"Isi"} value={data?.content} onchange={onChange} />
                <input className="form-control mt-3" type="file" placeholder="photo" name="image" value={data.photo} onChange={handleUpload} />
                {preview ? (
                  <img
                    src={preview}
                    alt="avatar"
                    // height={1}
                    // width={1}
                    style={{ height: 1, borderRadius: 20 }}
                    className={`m-auto my-3 h-50 w-md-20 ${style.avatar} avatar `}
                  />
                ) : (
                  // <Image src={upload} alt="uploadImg" />
                  <img src={require("../../assets/addArticel/image.png")} alt="uploadImg" />
                )}
                <button className={`btn btn-lg btn-info pb-2 btn-block mt-4 ${style.btn}`} type="submit">
                  {loading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" /> : "Add Articel"}
                </button>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
        <p></p>
      </div>
    </>
  );
};

export default FormAdd;
