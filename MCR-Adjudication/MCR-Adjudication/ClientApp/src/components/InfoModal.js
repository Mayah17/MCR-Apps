import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function InfoModal(props) {
    const {displayInfo, less, modalInfo} = props
    const [show, setShow] = useState(false);

    const handleClose = () =>{
      less()
    };

    const handleModal = () => {
        setShow(displayInfo)
        console.log(modalInfo)
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
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>More Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row justify-content-evenly">
              <div className="col-5 card">
                {/* <div className="card-body"> */}
                  <h5 className='card-title'>Main Record</h5>
                  <hr/>
                  <p><b>Full Name: </b>{modalInfo.record.firstname} {modalInfo.record.othernames} {modalInfo.record.surname}<br/>
                  <b>Sex: </b>{modalInfo.record.childSex}<br/>
                  <b>DOB: </b>{modalInfo.record.dateOfBirth}<br/>
                  <b>Birth  District: </b>{modalInfo.record.birthDistrict}<br/>
                  <b>Birth TA: </b>{modalInfo.record.birthTa}<br/>
                  <b>Birth Village: </b>{modalInfo.record.birthVillage}<br/>
                  <b>Parent Married: </b>{modalInfo.record.parentsAreMarried ? "Yes": "No"}<br/>
                  <b>Mother Name: </b>{modalInfo.record.motherFirstname} {modalInfo.record.motherOthernames} {modalInfo.record.motherSurname}<br/>
                  <b>Mother PIN: </b>{modalInfo.record.motherPin}<br/>
                  <b>Father Name: </b>{modalInfo.record.fatherFirstname} {modalInfo.record.fatherOthernames} {modalInfo.record.fatherSurname}<br/>
                  <b>Informant Name: </b>{modalInfo.record.informantFirstname} {modalInfo.record.informantOthernames} {modalInfo.record.informantSurname}<br/>
                  </p>
                {/* </div> */}
              </div>
              <div className="col-5 card">
                {/* <div className="card-body"> */}
                  <h5 className='card-title'>Possible Duplicate Record</h5>
                  <hr/>
                  <p><b>Full Name: </b>{modalInfo.duplicate.firstname} {modalInfo.duplicate.othernames} {modalInfo.duplicate.surname}<br/>
                  <b>Sex: </b>{modalInfo.duplicate.sex}<br/>
                  <b>DOB: </b>{modalInfo.duplicate.dateOfBirth}<br/>
                  <b>Birth  District: </b>{modalInfo.record.birthDistrict}<br/>
                  <b>Birth TA: </b>{modalInfo.record.birthTa}<br/>
                  <b>Birth Village: </b>{modalInfo.record.birthVillage}<br/>
                  <b>Parent Married: </b>{modalInfo.duplicate.parentsAreMarried ? "Yes": "No"}<br/>
                  <b>Mother Name: </b>{modalInfo.duplicate.motherFirstname} {modalInfo.duplicate.motherOthernames} {modalInfo.duplicate.motherSurname}<br/>
                  <b>Mother PIN: </b>{modalInfo.duplicate.motherPin}<br/>
                  <b>Father Name: </b>{modalInfo.duplicate.fatherFirstname} {modalInfo.duplicate.fatherOthernames} {modalInfo.duplicate.fatherSurname}<br/>
                  <b>Informant Name: </b>{modalInfo.duplicate.informantFirstname} {modalInfo.duplicate.informantOthernames} {modalInfo.duplicate.informantSurname}<br/>
                  </p>
                {/* </div> */}
              </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default InfoModal
