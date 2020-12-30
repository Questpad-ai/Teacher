import React from "react";

import Modal from "react-bootstrap/lib/Modal"
import Button from "react-bootstrap/lib/Button"
import { render } from "react-dom";


export default function Popup(props)
{
  //show is true or false and can be toggled with popup

const handleClose = () =>{render(<Popup show={false} />,document.getElementById("notify"))};


  return(<>

      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.text}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
)
}