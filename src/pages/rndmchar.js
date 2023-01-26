import React, {useEffect, useState} from 'react';
import {loadableP5 as Sketch} from "../helpers/p5";

const Rndmchar = () => {
  
  const handleWindowResized = p5 => p5.resizeCanvas(p5.windowWidth, 20);
  
  const setup = (p5, canvasParentRef) => {p5.createCanvas(0,0).parent(canvasParentRef)};
  
  const draw = p5 => {
    p5.background(255);
    for (let i = 0; i < p5.windowHeight; i += 20){
      p5.createP("hh");
      
      //p5.line(0, i, p5.windowWidth, i)
    }
    
  };
  
  useEffect(() => {

  });
  
  return (
    <div>
      <Sketch setup={setup} draw={draw} windowResized={handleWindowResized}/>
    </div>
  );
};

export default Rndmchar;