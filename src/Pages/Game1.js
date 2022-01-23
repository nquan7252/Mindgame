import React, { Component } from 'react';
import Board from '../Components/Board';
import vid1 from '../Assets/vid1.mp4';
function Game1() {
    return <div>        
        <video className="background-vid" autoPlay muted playsInline loop src={vid1}></video>

        <Board /></div>;
}

export default Game1;