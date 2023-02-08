import React, {useState, useEffect} from "react"
import "../css/expo.css"
import i1 from "../images/obras/IMG_4556.png"
import i2 from "../images/obras/IMG_4557.png"
import i3 from "../images/obras/IMG_4558.png"
import i4 from "../images/obras/IMG_4559.png"
import i5 from "../images/obras/IMG_4560.png"
import i6 from "../images/obras/IMG_4561.png"
import i7 from "../images/obras/IMG_4562.png"
import i8 from "../images/obras/IMG_4563.png"
import i9 from "../images/obras/IMG_4564.png"
import i10 from "../images/obras/IMG_4565.png"
import i11 from "../images/obras/IMG_4566.png"
import i12 from "../images/obras/IMG_4567.png"
import i13 from "../images/obras/IMG_4568.png"
import i14 from "../images/obras/IMG_4569.png"
import i15 from "../images/obras/IMG_4570.png"
import i16 from "../images/obras/IMG_4571.png"
import i17 from "../images/obras/IMG_4572.png"
import i18 from "../images/obras/IMG_4573.png"
import i19 from "../images/obras/IMG_4575.png"
import i20 from "../images/obras/IMG_4577.png"
import {Modal} from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const imgMap = [
    {src: i1, text: "Andres Ruvalcava @unitflor"},
    {src: i2, text: "Marian Roma @marianroma__"},
    {src: i3, text: "Luis Campos @33luis_campos"},
    {src: i4, text: "Luis Hidalgo @luis_hidalgoo"},
    {src: i5, text: "Luis Hidalgo @luis_hidalgoo"},
    {src: i6, text: "Emanuel Juárez @emanueljuarez"},
    {src: i7, text: "Rey Ángeles @hoynoestarey"},
    {src: i8, text: "Baby Bruise @babybruise"},
    {src: i9, text: "Ranchito @ranchi.to"},
    {src: i10, text: "Arrehola @arrehola"},
    {src: i11, text: "Alan Sosa @__alansosa__"},
    {src: i12, text: "Gibran Mendoza @gibran___mendoza"},
    {src: i13, text: "Ranchito @ranchi.to"},
    {src: i14, text: "Farlopa @farlopa_dc"},
    {src: i15, text: "Gloocosa @gloocosa"},
    {src: i16, text: "Lucky Machete @lucky.machete"},
    {src: i17, text: "Leonardo Ascencio @leonardo_ascencio"},
    {src: i18, text: "Pedro Assam @assaaaaaaammm"},
    {src: i19, text: "Pulso @pul.so"},
    {src: i20, text: "Diza Star @diza_._star"},
];


const Expo = () => {
    const [show, setShow] = useState(false);
    const handleShow = (val) => () => setShow(val);

  return (
    <>
        <div className='mainDiv' style={{overflowY:"hidden"}}>
            {imgMap.map((img, i) => (<img 
                    onClick={handleShow(i)}
                    src={img.src} 
                    style={{
                        width: 280, 
                        height: 'fit-content',
                        position: 'absolute', 
                        top: `${50 * Math.random()}%`, 
                        left: (i * 350) + 10
                    }} 
                />)
            )}
        </div>
        <Modal centered size="xs" show={show !== false} onHide={handleShow(false)}>
            <img src={imgMap[show]?.src} className="modalImage"/>
            <Marquee gradient={false} speed={50} style={{backgroundColor:"black", color:"white"}}>
                {imgMap[show]?.text}
            </Marquee>
        </Modal>
    </>

  )
}

export default Expo