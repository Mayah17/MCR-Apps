import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AuthorizationModal(props) {
    const {auth, display} = props
    const [show, setShow] = useState(false);
    const [authCode, setAuthCode] = useState("");

    const handleClose = () => submitForm;

    const handleModal = () => {
        setShow(display)
    }

    const handleChange = (e) => {
        e.preventDefault()
        setAuthCode(e.target.value)
    }

    const submitForm = () => {
        auth(authCode)
        setAuthCode("")
    }

    useEffect(() => {
        handleModal()
    })

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="mb-3">
                <label htmlFor="user" className="form-label">User authorization code : </label>
                <input type="text" className="form-control" id="user" placeholder="John" value={authCode} onChange={handleChange} />
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={submitForm}>Login</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AuthorizationModal
