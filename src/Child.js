import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) {
  function handClick(){
    const newColor = getRandomColor()
    onChangeColor(newColor)
  }
  return <div
  onClick={handClick}
  className="child" 
  style={{ backgroundColor: color }} >


</div>
}

export default Child;
