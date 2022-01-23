import React, { Component } from 'react';
import Board from '../Components/Board';
import vid1 from '../Assets/vid1.mp4';
import { Link } from 'react-router-dom';
function Game1() {
    return <div className='game-page'>        
        <Link to='/'>
        <img id='back-btn' src={require('../Assets/back.png')}></img>
        </Link>
        <video className="background-vid" autoPlay muted playsInline loop src={vid1}></video>

        <Board /></div>;
}

export default Game1;