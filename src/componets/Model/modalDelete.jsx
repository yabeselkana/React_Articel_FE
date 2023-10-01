import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { deleteArticel } from "../../config/redux/actions/articelActions";

function ModelDelete({ id, title, children }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  let hendelDelete = (e) => {
    dispatch(deleteArticel(id, setShow));
  };

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        {children}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="ml-3">{children} Articel</Modal.Title>
        </Modal.Header>
        <form onSubmit={hendelDelete}>
          <Modal.Body>
            <h5 className="text-center">Are sure want to delete this {title}?</h5>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <button type="submit" className="btn btn-primary">
              {children}
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default ModelDelete;
