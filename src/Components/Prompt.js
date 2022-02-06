import React, { Component } from 'react';
function Prompt(props) {
    return <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}><div style={{backgroundColor:props.color.code,width:'150px',height:'150px',borderRadius:'20px'}}></div>
    </div>
}

export default Prompt;