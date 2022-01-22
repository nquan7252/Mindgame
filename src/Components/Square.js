import React, { Component } from 'react';
import reactDom from 'react-dom';
function Square(props) {
    const getColor=()=>{
        return {
            backgroundColor: `rgb(${props.color.redVal},${props.color.greenVal},${props.color.blueVal})`,
            width:'50px',
            height:'50px'
        }
    }
    return <div style={getColor()} onClick={()=>props.handleClick(props.color)}></div>;
}

export default Square;