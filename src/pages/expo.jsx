import React, {useState} from "react"
import "../css/expo.css"
import {Modal} from "react-bootstrap"
import Imagen from "../images/obras/test.png"

const Expo = () => {
    const [show, setShow] = useState(false)

  return (
    <div className='mainDiv'>
        <img src={Imagen} alt="" onClick={() => setShow(true)} className="firstImg"/>
        <img src={Imagen} alt="" onClick={() => setShow(true)} className="secondImg"/>
        <img src={Imagen} alt="" onClick={() => setShow(true)} className="thirdImg"/>
        <Modal show={show} onHide={() => setShow(!show)} backdrop>
            <Modal.Body size="sm">
                holaaaaa
            </Modal.Body>
        </Modal>
    </div>
  )
}

export default Expo
