import React, {useState, useEffect} from "react"
import "../css/expo.css"
import Imagen from "../images/obras/test.png"
import {Modal} from 'react-bootstrap';
import Marquee from "react-fast-marquee";


const Expo = () => {

    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);
    const [show8, setShow8] = useState(false);
    const [show9, setShow9] = useState(false);
    const [show10, setShow10] = useState(false);
    const [show11, setShow11] = useState(false);
    const [show12, setShow12] = useState(false);
    const [show13, setShow13] = useState(false);
    const [show14, setShow14] = useState(false);
    const [show15, setShow15] = useState(false);
    const [show16, setShow16] = useState(false);
    const [show17, setShow17] = useState(false);
    const [show18, setShow18] = useState(false);
    const [show19, setShow19] = useState(false);
    const [show20, setShow20] = useState(false);
    const [show21, setShow21] = useState(false);
    const [show22, setShow22] = useState(false);
    const [show23, setShow23] = useState(false);
    const [show24, setShow24] = useState(false);
    const [show25, setShow25] = useState(false);
    const [show26, setShow26] = useState(false);
    const [show27, setShow27] = useState(false);
    const [show28, setShow28] = useState(false);
    const [show29, setShow29] = useState(false);
    const [show30, setShow30] = useState(false);
    const [show31, setShow31] = useState(false);
    const [show32, setShow32] = useState(false);
    const [show33, setShow33] = useState(false);

  return (
    <>
    <div className='mainDiv' style={{overflowY:"hidden"}}>
        <img src={Imagen} alt="" onClick={setShow} className="firstImg"/>
        <img src={Imagen} alt="" onClick={setShow1} className="secondImg"/>
        <img src={Imagen} alt="" onClick={setShow2} className="thirdImg"/>
        <img src={Imagen} alt="" onClick={setShow3} className="fourthImg"/>
        <img src={Imagen} alt="" onClick={setShow4} className="fifthImg"/>
        <img src={Imagen} alt="" onClick={setShow5} className="sixthImg"/>
        <img src={Imagen} alt="" onClick={setShow6} className="seventhImg"/>
        <img src={Imagen} alt="" onClick={setShow7} className="eightImg"/>
        <img src={Imagen} alt="" onClick={setShow8} className="nineImg"/>
        {/* <img src={Imagen} alt="" onClick={setShow9} className="tenImg"/>
        <img src={Imagen} alt="" onClick={setShow10} className="elevenImg"/>
        <img src={Imagen} alt="" onClick={setShow11} className="doceImg"/>
        <img src={Imagen} alt="" onClick={setShow12} className="treceImg"/>
        <img src={Imagen} alt="" onClick={setShow13} className="catorceImg"/>
        <img src={Imagen} alt="" onClick={setShow14} className="quinceImg"/>
        <img src={Imagen} alt="" onClick={setShow15} className="dieciseisImg"/>
        <img src={Imagen} alt="" onClick={setShow16} className="diesisieteImg"/>
        <img src={Imagen} alt="" onClick={setShow17} className="diesiochoImg"/>
        <img src={Imagen} alt="" onClick={setShow18} className="diesinueveImg"/>
        <img src={Imagen} alt="" onClick={setShow19} className="veinteImg"/>
        <img src={Imagen} alt="" onClick={setShow20} className="vientiunoImg"/>
        <img src={Imagen} alt="" onClick={setShow21} className="veintidosImg"/>
        <img src={Imagen} alt="" onClick={setShow22} className="veintitres"/>
        <img src={Imagen} alt="" onClick={setShow23} className="veinticuatro"/>
        <img src={Imagen} alt="" onClick={setShow24} className="veinticinco"/>
        <img src={Imagen} alt="" onClick={setShow25} className="veintiseis"/>
        <img src={Imagen} alt="" onClick={setShow26} className="veintisiente"/>
        <img src={Imagen} alt="" onClick={setShow27} className="ventiocho"/>
        <img src={Imagen} alt="" onClick={setShow28} className="veintinueve"/>
        <img src={Imagen} alt="" onClick={setShow29} className="treinta"/>
        <img src={Imagen} alt="" onClick={setShow30} className="treintauno"/>
        <img src={Imagen} alt="" onClick={setShow31} className="treintados"/>
        <img src={Imagen} alt="" onClick={setShow32} className="treintatres"/>
        <img src={Imagen} alt="" onClick={setShow33} className="treintacuatro"/> */}
    </div>
    <Modal show={show} onHide={() => setShow(!show)} style={{overflowX:"hidden"}} >
            <div>
                <img src={Imagen} className="modalImage"/>
                <Marquee gradient={false} speed={50} style={{backgroundColor:"black", color:"white"}}>
                    Emanuel Juarez @emanueljuarez
                </Marquee>
            </div>
    </Modal>
    <Modal show={show1} onHide={() => setShow(!show1)} style={{overflowX:"hidden"}} >
            <div>
                <img src={Imagen} className="modalImage"/>
                <Marquee gradient={false} speed={50} style={{backgroundColor:"black", color:"white"}}>
                    Emanuel Juarez @emanueljuarez
                </Marquee>
            </div>
    </Modal>
    <Modal show={show2} onHide={() => setShow(!show2)} style={{overflowX:"hidden"}} >
            <div>
                <img src={Imagen} className="modalImage"/>
                <Marquee gradient={false} speed={50} style={{backgroundColor:"black", color:"white"}}>
                    Emanuel Juarez @emanueljuarez
                </Marquee>
            </div>
    </Modal>
    <Modal show={show3} onHide={() => setShow(!show3)} style={{overflowX:"hidden"}} >
            <div>
                <img src={Imagen} className="modalImage"/>
                <Marquee gradient={false} speed={50} style={{backgroundColor:"black", color:"white"}}>
                    Emanuel Juarez @emanueljuarez
                </Marquee>
            </div>
    </Modal>
    <Modal show={show4} onHide={() => setShow(!show4)} style={{overflowX:"hidden"}} >
            <div>
                <img src={Imagen} className="modalImage"/>
                <Marquee gradient={false} speed={50} style={{backgroundColor:"black", color:"white"}}>
                    Emanuel Juarez @emanueljuarez
                </Marquee>
            </div>
    </Modal>
    <Modal show={show5} onHide={() => setShow(!show5)} style={{overflowX:"hidden"}} >
            <div>
                <img src={Imagen} className="modalImage"/>
                <Marquee gradient={false} speed={50} style={{backgroundColor:"black", color:"white"}}>
                    Emanuel Juarez @emanueljuarez
                </Marquee>
            </div>
    </Modal>
    <Modal show={show5} onHide={() => setShow(!show5)} style={{overflowX:"hidden"}} >
            <div>
                <img src={Imagen} className="modalImage"/>
                <Marquee gradient={false} speed={50} style={{backgroundColor:"black", color:"white"}}>
                    Emanuel Juarez @emanueljuarez
                </Marquee>
            </div>
    </Modal>
    <Modal show={show6} onHide={() => setShow(!show6)} style={{overflowX:"hidden"}} >
            <div>
                <img src={Imagen} className="modalImage"/>
                <Marquee gradient={false} speed={50} style={{backgroundColor:"black", color:"white"}}>
                    Emanuel Juarez @emanueljuarez
                </Marquee>
            </div>
    </Modal>
    <Modal show={show7} onHide={() => setShow(!show7)} style={{overflowX:"hidden"}} >
            <div>
                <img src={Imagen} className="modalImage"/>
                <Marquee gradient={false} speed={50} style={{backgroundColor:"black", color:"white"}}>
                    Emanuel Juarez @emanueljuarez
                </Marquee>
            </div>
    </Modal>
    <Modal show={show8} onHide={() => setShow(!show8)} style={{overflowX:"hidden"}} >
            <div>
                <img src={Imagen} className="modalImage"/>
                <Marquee gradient={false} speed={50} style={{backgroundColor:"black", color:"white"}}>
                    Emanuel Juarez @emanueljuarez
                </Marquee>
            </div>
    </Modal>
    <Modal show={show9} onHide={() => setShow(!show9)} style={{overflowX:"hidden"}} >
            <div>
                <img src={Imagen} className="modalImage"/>
                <Marquee gradient={false} speed={50} style={{backgroundColor:"black", color:"white"}}>
                    Emanuel Juarez @emanueljuarez
                </Marquee>
            </div>
    </Modal>
    <Modal show={show10} onHide={() => setShow(!show10)} style={{overflowX:"hidden"}} >
            <div>
                <img src={Imagen} className="modalImage"/>
                <Marquee gradient={false} speed={50} style={{backgroundColor:"black", color:"white"}}>
                    Emanuel Juarez @emanueljuarez
                </Marquee>
            </div>
    </Modal>
    <Modal show={show11} onHide={() => setShow(!show11)} style={{overflowX:"hidden"}} >
            <div>
                <img src={Imagen} className="modalImage"/>
                <Marquee gradient={false} speed={50} style={{backgroundColor:"black", color:"white"}}>
                    Emanuel Juarez @emanueljuarez
                </Marquee>
            </div>
    </Modal>
    <Modal show={show12} onHide={() => setShow(!show12)} style={{overflowX:"hidden"}} >
            <div>
                <img src={Imagen} className="modalImage"/>
                <Marquee gradient={false} speed={50} style={{backgroundColor:"black", color:"white"}}>
                    Emanuel Juarez @emanueljuarez
                </Marquee>
            </div>
    </Modal>
    <Modal show={show13} onHide={() => setShow(!show13)} style={{overflowX:"hidden"}} >
            <div>
                <img src={Imagen} className="modalImage"/>
                <Marquee gradient={false} speed={50} style={{backgroundColor:"black", color:"white"}}>
                    Emanuel Juarez @emanueljuarez
                </Marquee>
            </div>
    </Modal>
    <Modal show={show14} onHide={() => setShow(!show14)} style={{overflowX:"hidden"}} >
            <div>
                <img src={Imagen} className="modalImage"/>
                <Marquee gradient={false} speed={50} style={{backgroundColor:"black", color:"white"}}>
                    Emanuel Juarez @emanueljuarez
                </Marquee>
            </div>
    </Modal>
    <Modal show={show15} onHide={() => setShow(!show15)} style={{overflowX:"hidden"}} >
            <div>
                <img src={Imagen} className="modalImage"/>
                <Marquee gradient={false} speed={50} style={{backgroundColor:"black", color:"white"}}>
                    Emanuel Juarez @emanueljuarez
                </Marquee>
            </div>
    </Modal>
    <Modal show={show16} onHide={() => setShow(!show16)} style={{overflowX:"hidden"}} >
            <div>
                <img src={Imagen} className="modalImage"/>
                <Marquee gradient={false} speed={50} style={{backgroundColor:"black", color:"white"}}>
                    Emanuel Juarez @emanueljuarez
                </Marquee>
            </div>
    </Modal>
    <Modal show={show17} onHide={() => setShow(!show17)} style={{overflowX:"hidden"}} >
            <div>
                <img src={Imagen} className="modalImage"/>
                <Marquee gradient={false} speed={50} style={{backgroundColor:"black", color:"white"}}>
                    Emanuel Juarez @emanueljuarez
                </Marquee>
            </div>
    </Modal>
    <Modal show={show18} onHide={() => setShow(!show18)} style={{overflowX:"hidden"}} >
            <div>
                <img src={Imagen} className="modalImage"/>
                <Marquee gradient={false} speed={50} style={{backgroundColor:"black", color:"white"}}>
                    Emanuel Juarez @emanueljuarez
                </Marquee>
            </div>
    </Modal>
    <Modal show={show19} onHide={() => setShow(!show19)} style={{overflowX:"hidden"}} >
            <div>
                <img src={Imagen} className="modalImage"/>
                <Marquee gradient={false} speed={50} style={{backgroundColor:"black", color:"white"}}>
                    Emanuel Juarez @emanueljuarez
                </Marquee>
            </div>
    </Modal>
    <Modal show={show20} onHide={() => setShow(!show20)} style={{overflowX:"hidden"}} >
            <div>
                <img src={Imagen} className="modalImage"/>
                <Marquee gradient={false} speed={50} style={{backgroundColor:"black", color:"white"}}>
                    Emanuel Juarez @emanueljuarez
                </Marquee>
            </div>
    </Modal>
    <Modal show={show21} onHide={() => setShow(!show21)} style={{overflowX:"hidden"}} >
            <div>
                <img src={Imagen} className="modalImage"/>
                <Marquee gradient={false} speed={50} style={{backgroundColor:"black", color:"white"}}>
                    Emanuel Juarez @emanueljuarez
                </Marquee>
            </div>
    </Modal>
    <Modal show={show22} onHide={() => setShow(!show22)} style={{overflowX:"hidden"}} >
            <div>
                <img src={Imagen} className="modalImage"/>
                <Marquee gradient={false} speed={50} style={{backgroundColor:"black", color:"white"}}>
                    Emanuel Juarez @emanueljuarez
                </Marquee>
            </div>
    </Modal>
    <Modal show={show23} onHide={() => setShow(!show23)} style={{overflowX:"hidden"}} >
            <div>
                <img src={Imagen} className="modalImage"/>
                <Marquee gradient={false} speed={50} style={{backgroundColor:"black", color:"white"}}>
                    Emanuel Juarez @emanueljuarez
                </Marquee>
            </div>
    </Modal>
    <Modal show={show24} onHide={() => setShow(!show24)} style={{overflowX:"hidden"}} >
            <div>
                <img src={Imagen} className="modalImage"/>
                <Marquee gradient={false} speed={50} style={{backgroundColor:"black", color:"white"}}>
                    Emanuel Juarez @emanueljuarez
                </Marquee>
            </div>
    </Modal>
    <Modal show={show25} onHide={() => setShow(!show25)} style={{overflowX:"hidden"}} >
            <div>
                <img src={Imagen} className="modalImage"/>
                <Marquee gradient={false} speed={50} style={{backgroundColor:"black", color:"white"}}>
                    Emanuel Juarez @emanueljuarez
                </Marquee>
            </div>
    </Modal>
    <Modal show={show26} onHide={() => setShow(!show26)} style={{overflowX:"hidden"}} >
            <div>
                <img src={Imagen} className="modalImage"/>
                <Marquee gradient={false} speed={50} style={{backgroundColor:"black", color:"white"}}>
                    Emanuel Juarez @emanueljuarez
                </Marquee>
            </div>
    </Modal>
    <Modal show={show27} onHide={() => setShow(!show27)} style={{overflowX:"hidden"}} >
            <div>
                <img src={Imagen} className="modalImage"/>
                <Marquee gradient={false} speed={50} style={{backgroundColor:"black", color:"white"}}>
                    Emanuel Juarez @emanueljuarez
                </Marquee>
            </div>
    </Modal>
    <Modal show={show28} onHide={() => setShow(!show28)} style={{overflowX:"hidden"}} >
            <div>
                <img src={Imagen} className="modalImage"/>
                <Marquee gradient={false} speed={50} style={{backgroundColor:"black", color:"white"}}>
                    Emanuel Juarez @emanueljuarez
                </Marquee>
            </div>
    </Modal>
    <Modal show={show29} onHide={() => setShow(!show29)} style={{overflowX:"hidden"}} >
            <div>
                <img src={Imagen} className="modalImage"/>
                <Marquee gradient={false} speed={50} style={{backgroundColor:"black", color:"white"}}>
                    Emanuel Juarez @emanueljuarez
                </Marquee>
            </div>
    </Modal>
    <Modal show={show30} onHide={() => setShow(!show30)} style={{overflowX:"hidden"}} >
            <div>
                <img src={Imagen} className="modalImage"/>
                <Marquee gradient={false} speed={50} style={{backgroundColor:"black", color:"white"}}>
                    Emanuel Juarez @emanueljuarez
                </Marquee>
            </div>
    </Modal>
    <Modal show={show31} onHide={() => setShow(!show31)} style={{overflowX:"hidden"}} >
            <div>
                <img src={Imagen} className="modalImage"/>
                <Marquee gradient={false} speed={50} style={{backgroundColor:"black", color:"white"}}>
                    Emanuel Juarez @emanueljuarez
                </Marquee>
            </div>
    </Modal>
    <Modal show={show32} onHide={() => setShow(!show32)} style={{overflowX:"hidden"}} >
            <div>
                <img src={Imagen} className="modalImage"/>
                <Marquee gradient={false} speed={50} style={{backgroundColor:"black", color:"white"}}>
                    Emanuel Juarez @emanueljuarez
                </Marquee>
            </div>
    </Modal>
    <Modal show={show33} onHide={() => setShow(!show33)} style={{overflowX:"hidden"}} >
            <div>
                <img src={Imagen} className="modalImage"/>
                <Marquee gradient={false} speed={50} style={{backgroundColor:"black", color:"white"}}>
                    Emanuel Juarez @emanueljuarez
                </Marquee>
            </div>
    </Modal>

    </>

  )
}

export default Expo