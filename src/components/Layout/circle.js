import React, {useState,} from "react"
import { createUseStyles } from "react-jss";
import {loadableP5 as Sketch} from "../../helpers/p5";

const useStyles = createUseStyles({
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 20,
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
    borderBottom: '1px dashed black',
    position: 'fixed',
    top: 0,
    left: 0,
  },
});

const Circle = () => {
  const [direction, setDirection] = useState(2);
  const [x, setX] = useState(50);
  const classes = useStyles();
  
  const handleWindowResized = p5 =>{
    console.log(p5.windowWidth < 396 ? p5.windowWidth - 36 : 360)
    
    return p5.resizeCanvas(p5.windowWidth < 396 ? p5.windowWidth - 36 : 360, 20);
  }
  
  
  const setup = (p5, canvasParentRef) =>
    p5.createCanvas(p5.windowWidth < 360 ? p5.windowWidth - 36 : 360, 20).parent(canvasParentRef);
  
  const draw = p5 => {
    p5.background(255);
    p5.ellipse(x, 10, 15, 15);
    
    if (x === p5.width - 10) setDirection(-2);
    if (x === 10) setDirection(2);
    
    setX(x + direction)
    
  };
  
  return (
    <div className={[classes.nav].join(' ')}>
      <Sketch setup={setup} draw={draw} windowResized={handleWindowResized}/>
    </div>
  );
};

export default Circle;
