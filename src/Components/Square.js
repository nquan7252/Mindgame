import React, { Component } from 'react';
import reactDom from 'react-dom';
function Square(props) {
    const getColor=()=>{
        return {
            backgroundColor: `rgb(${props.color.redVal},${props.color.greenVal},${props.color.blueVal})`,
            width:'80px',
            height:'80px',
            borderRadius:'6px',
            cursor:'pointer'    
        }
    }
    return <div style={getColor()} onClick={()=>props.handleClick(props.color)}></div>;
}

export default Square;