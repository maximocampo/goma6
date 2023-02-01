// import React from 'react'
// import "./styles.css"

// const Modal = ({img, }) => {
//   return (
//     <div className='modalMainDiv'>
//         <img src={img} className="modalImage"/>
//         <div className='marqueeDiv'></div>
//     </div>
//   )
// }

// export default Modal

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function Example({show, onHide}) {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show}>
        <Modal.Body>
             
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example