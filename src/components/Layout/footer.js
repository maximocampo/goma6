import React, {useState, useEffect} from "react"
import { createUseStyles } from "react-jss";
import {loadableP5 as Sketch} from "../../helpers/p5";
import {useWindowSize} from "../../hooks/useWindowSize";

const useStyles = createUseStyles({
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 20,
    width: '100%',
    backgroundColor: 'white',
    '& p': {
      cursor: 'pointer',
      margin: 12,
      fontSize: 12,
      '&:hover': {
        color: 'red'
      },
    }
  },
  sticky: {
    borderBottom: '1px solid black',
    position: 'fixed',
    top: 0,
  },
  footer: {
    zIndex: 1,
    color: 'black',
    position: 'fixed',
    bottom: 0,
    left: 0,
    height: 20,
    borderTop: '1px black solid',
    backgroundColor: 'white',
    '& p': {
      margin: 4,
      fontSize: 12
    }
  }
});

const Footer = () => {
  const {width} = useWindowSize()
  const [yOffset, setYoffset] = useState(0);
  const classes = useStyles();
  
  const handleWindowResized = p5 => p5.resizeCanvas(p5.windowWidth, 20);
  
  const setup = (p5, canvasParentRef) => p5.createCanvas(p5.windowWidth, 20).parent(canvasParentRef);
  
  let r = 0;
  let up = true;
  const draw = p5 => {
    p5.background(255);
    if (r === 100) { up = false }
    if (r === 0) {up = true }
    
    if (up) { r = r+ 0.05 } else { r = r- 0.05}
    
    let y;
    for (let i = 0; i < p5.windowWidth; i += 1){
      let qq = 1000 / r;
      
      y = Math.sin((i / qq)) * 4;
      
      p5.point(i, y + 10)
    }
  };
  
  
  useEffect(() => {
    const handleScroll = () => setYoffset(window.pageYOffset);
      window.addEventListener('scroll', handleScroll);
   
    return () => window.removeEventListener('scroll', handleScroll);
  });
  
  return (
    <footer className={classes.footer}>
      <Sketch setup={setup} draw={draw} windowResized={handleWindowResized}/>
    </footer>
  );
};

export default Footer;
