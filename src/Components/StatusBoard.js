import React, { Component } from 'react';
function StatusBoard(props) {
    return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around',marginTop:'20px' }}>
        <div style={{display:'flex'}}>
        <img className='icon' src={require('../Assets/heart.png')}></img>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>{props.status.lives}</div>
        </div>
        <div>Points: {props.status.point}</div>
    </div>;
}

export default StatusBoard;