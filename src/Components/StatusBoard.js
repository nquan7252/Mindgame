import React, { Component } from 'react';
function StatusBoard(props) {
    return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <div><span><img className='icon' src={require('../Assets/heart.png')}></img></span><span>{props.status.lives}</span></div>
        <div>Points:{props.status.point}</div>
    </div>;
}

export default StatusBoard;