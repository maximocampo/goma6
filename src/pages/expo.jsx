import React, {useState, useEffect} from "react"
import "../css/expo.css"
// import Modal from "../components/modal"
import Imagen from "../images/obras/test.png"
import {Modal} from 'react-bootstrap';
import Marquee from "react-fast-marquee";


const Expo = () => {
    // const [show1, setShow1] = useState(false)
    const [show1, setShow1] = useState(false);
    const handleShow = () => setShow1(true);
    const handleClose = () => setShow1(false);
    const [show, setShow] = useState(false)

  return (
    <>
    <div className='mainDiv' style={{overflowY:"hidden"}}>
        <img src={Imagen} alt="" onClick={setShow} className="firstImg"/>
        <img src={Imagen} alt="" onClick={() => setShow1(true)} className="secondImg"/>
        <img src={Imagen} alt="" onClick={() => setShow1(true)} className="thirdImg"/>
    </div>
    <Modal show={show} onHide={() => setShow(!show)} style={{overflowX:"hidden"}} >
            {/* <Modal.Body size="sm">
                holaaaaa
            </Modal.Body> */}
            <div>
                <img src={Imagen} className="modalImage"/>
                <Marquee gradient={false} speed={50} style={{backgroundColor:"black", color:"white"}}>
                    {/* <p className="marqueeP">Emanuel Juarez</p>
                    <p className="marqueeP">@emanueljuarez</p> */}

                    Emanuel Juarez @emanueljuarez
                </Marquee>
            </div>
    </Modal>
    </>

  )
}

export default Expo