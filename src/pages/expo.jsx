import React, {useState, useEffect} from "react"
import "../css/expo.css"
import Modal from "../components/modal"
import Imagen from "../images/obras/test.png"

const Expo = () => {
    const [show, setShow] = useState(false)

  return (
    <div className='mainDiv'>
        <img src={Imagen} alt="" onClick={() => setShow(true)} className="firstImg"/>
        <img src={Imagen} alt="" onClick={() => setShow(true)} className="secondImg"/>
        <img src={Imagen} alt="" onClick={() => setShow(true)} className="thirdImg"/>
        <div className="modalDiv">
            <Modal/>
        </div>
    </div>
  )
}

export default Expo