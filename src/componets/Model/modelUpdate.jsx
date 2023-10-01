import { Children, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormEdit from "../Form";
import { updateArticel } from "../../config/redux/actions/articelActions";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ModalUpdate({ id, writer, title, content, image, children }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let [data, setData] = useState({
    id,
    writer,
    title,
    content,
  });
  const [loading, isLoading] = useState(false);
  let hendelChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const [photo, setPhoto] = useState(null);

  const handleUpload = (e) => {
    setPhoto(e.target.files[0]);
  };

  const dispatch = useDispatch();

  let hendelSubmit = (e) => {
    e.preventDefault();

    dispatch(updateArticel(data, photo, setShow, isLoading));
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {children}
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{children}</Modal.Title>
        </Modal.Header>
        <form onSubmit={hendelSubmit}>
          <Modal.Body>
            <ToastContainer />
            <FormEdit type={"text"} title={"Write"} name={"writer"} placeholder={"Nama Penulis"} value={data?.writer} onchange={hendelChange} />
            <FormEdit type={"text"} title={"Title"} name={"title"} placeholder={"Judul"} value={data?.title} onchange={hendelChange} />
            <FormEdit type={"textarea"} title={"Content"} name={"content"} placeholder={"Isi"} value={data?.content} onchange={hendelChange} />
            <input className="form-control mt-3" type="file" placeholder="photo" name="image" value={data.image} onChange={handleUpload} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary">
              {loading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" /> : "Update"}
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default ModalUpdate;
