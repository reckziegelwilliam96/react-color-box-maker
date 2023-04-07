import React from "react";
import './Box.css'


const Box = ({id, color, width, height, removeBox}) => {
    const handleClick = () => {
        removeBox(id)
    }
    return (
        <div
        className="box"
        style={{
            backgroundColor: color,
            width: width,
            height: height,
      }}
    >
        <button className="remove-btn" onClick={handleClick}></button>
    </div>
    )
}

export default Box;